// Icon Matcher - Scans screenshots and matches against known icons
import { dHash, aHash, hammingDistance, loadImage, extractRegion, resizeImage, toGrayscale } from './imageHash';
import { ICON_DATABASE, type IconEntry } from './iconDatabase';

export interface MatchResult {
  item: IconEntry;
  confidence: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface HashedIcon {
  entry: IconEntry;
  dHash: string;
  aHash: string;
}

class IconMatcher {
  private iconHashes: HashedIcon[] = [];
  private cheatSheetLoaded = false;
  private cheatSheetUrl = '/cheatsheet.png';

  /**
   * Initialize the matcher by loading and hashing the cheat sheet icons
   */
  async initialize(cheatSheetUrl?: string): Promise<void> {
    if (this.cheatSheetLoaded) return;

    if (cheatSheetUrl) {
      this.cheatSheetUrl = cheatSheetUrl;
    }

    console.log('Loading cheat sheet...');
    const img = await loadImage(this.cheatSheetUrl);
    console.log(`Cheat sheet loaded: ${img.width}x${img.height}`);

    // Extract and hash each icon
    for (const entry of ICON_DATABASE) {
      try {
        const region = extractRegion(img, entry.x, entry.y, entry.width, entry.height);
        const dHashValue = dHash(region);
        const aHashValue = aHash(region);

        this.iconHashes.push({
          entry,
          dHash: dHashValue,
          aHash: aHashValue,
        });
      } catch (error) {
        console.warn(`Failed to hash icon: ${entry.name}`, error);
      }
    }

    this.cheatSheetLoaded = true;
    console.log(`Hashed ${this.iconHashes.length} icons`);
  }

  /**
   * Check if matcher is ready
   */
  isReady(): boolean {
    return this.cheatSheetLoaded && this.iconHashes.length > 0;
  }

  /**
   * Find best match for a single image region
   */
  findBestMatch(imageData: ImageData, threshold = 75): MatchResult | null {
    if (!this.isReady()) {
      throw new Error('IconMatcher not initialized');
    }

    const regionDHash = dHash(imageData);
    const regionAHash = aHash(imageData);

    let bestMatch: HashedIcon | null = null;
    let bestScore = 0;

    for (const icon of this.iconHashes) {
      // Combined score from both hash types
      const dDist = hammingDistance(regionDHash, icon.dHash);
      const aDist = hammingDistance(regionAHash, icon.aHash);

      // Convert to similarity (0-100)
      const dSim = ((64 - dDist) / 64) * 100;
      const aSim = ((64 - aDist) / 64) * 100;

      // Weighted average (dHash is more reliable)
      const score = dSim * 0.7 + aSim * 0.3;

      if (score > bestScore && score >= threshold) {
        bestScore = score;
        bestMatch = icon;
      }
    }

    if (bestMatch) {
      return {
        item: bestMatch.entry,
        confidence: bestScore,
        x: 0,
        y: 0,
        width: imageData.width,
        height: imageData.height,
      };
    }

    return null;
  }

  /**
   * Scan a screenshot using sliding window approach
   */
  async scanScreenshot(
    screenshot: HTMLImageElement | string,
    options: {
      windowSizes?: number[];
      stepSize?: number;
      threshold?: number;
      maxResults?: number;
    } = {}
  ): Promise<MatchResult[]> {
    const {
      windowSizes = [64, 80, 96, 112], // Different icon sizes to check
      stepSize = 32,
      threshold = 70,
      maxResults = 50,
    } = options;

    const img = typeof screenshot === 'string' ? await loadImage(screenshot) : screenshot;

    // Create canvas for extraction
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(img, 0, 0);

    const results: MatchResult[] = [];
    const foundPositions = new Set<string>(); // Prevent duplicates

    console.log(`Scanning ${img.width}x${img.height} screenshot...`);

    for (const windowSize of windowSizes) {
      for (let y = 0; y < img.height - windowSize; y += stepSize) {
        for (let x = 0; x < img.width - windowSize; x += stepSize) {
          const region = ctx.getImageData(x, y, windowSize, windowSize);
          const match = this.findBestMatch(region, threshold);

          if (match) {
            // Check if we already found this item nearby
            const posKey = `${match.item.id}-${Math.floor(x / 50)}-${Math.floor(y / 50)}`;
            if (!foundPositions.has(posKey)) {
              foundPositions.add(posKey);
              results.push({
                ...match,
                x,
                y,
                width: windowSize,
                height: windowSize,
              });

              if (results.length >= maxResults) {
                return this.deduplicateResults(results);
              }
            }
          }
        }
      }
    }

    return this.deduplicateResults(results);
  }

  /**
   * Remove duplicate detections of the same item
   */
  private deduplicateResults(results: MatchResult[]): MatchResult[] {
    const itemMap = new Map<string, MatchResult>();

    for (const result of results) {
      const existing = itemMap.get(result.item.id);
      if (!existing || result.confidence > existing.confidence) {
        itemMap.set(result.item.id, result);
      }
    }

    return Array.from(itemMap.values()).sort((a, b) => b.confidence - a.confidence);
  }

  /**
   * Quick scan - focuses on likely item locations
   * Uses edge detection to find potential item regions first
   */
  async quickScan(
    screenshot: HTMLImageElement | string,
    threshold = 65
  ): Promise<MatchResult[]> {
    const img = typeof screenshot === 'string' ? await loadImage(screenshot) : screenshot;

    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(img, 0, 0);

    // Find regions with high contrast (likely item icons)
    const regions = this.findInterestingRegions(ctx, img.width, img.height);
    console.log(`Found ${regions.length} interesting regions`);

    const results: MatchResult[] = [];
    const foundItems = new Set<string>();

    for (const region of regions) {
      const imageData = ctx.getImageData(region.x, region.y, region.width, region.height);
      const match = this.findBestMatch(imageData, threshold);

      if (match && !foundItems.has(match.item.id)) {
        foundItems.add(match.item.id);
        results.push({
          ...match,
          x: region.x,
          y: region.y,
          width: region.width,
          height: region.height,
        });
      }
    }

    return results.sort((a, b) => b.confidence - a.confidence);
  }

  /**
   * Find regions that might contain item icons
   */
  private findInterestingRegions(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ): { x: number; y: number; width: number; height: number }[] {
    const regions: { x: number; y: number; width: number; height: number }[] = [];
    const gridSize = 48; // Check every 48 pixels
    const regionSize = 80; // Size of region to extract

    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let y = 0; y < height - regionSize; y += gridSize) {
      for (let x = 0; x < width - regionSize; x += gridSize) {
        // Calculate variance in this region (high variance = interesting)
        const variance = this.calculateRegionVariance(data, width, x, y, regionSize);

        if (variance > 1000) {
          // Threshold for "interesting"
          regions.push({
            x,
            y,
            width: regionSize,
            height: regionSize,
          });
        }
      }
    }

    return regions;
  }

  /**
   * Calculate color variance in a region
   */
  private calculateRegionVariance(
    data: Uint8ClampedArray,
    imageWidth: number,
    startX: number,
    startY: number,
    size: number
  ): number {
    const pixels: number[] = [];

    for (let y = startY; y < startY + size; y += 4) {
      for (let x = startX; x < startX + size; x += 4) {
        const i = (y * imageWidth + x) * 4;
        const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
        pixels.push(gray);
      }
    }

    const mean = pixels.reduce((a, b) => a + b, 0) / pixels.length;
    const variance = pixels.reduce((sum, p) => sum + Math.pow(p - mean, 2), 0) / pixels.length;

    return variance;
  }

  /**
   * Get all loaded icons (for debugging)
   */
  getLoadedIcons(): string[] {
    return this.iconHashes.map(h => h.entry.name);
  }
}

// Singleton instance
export const iconMatcher = new IconMatcher();
