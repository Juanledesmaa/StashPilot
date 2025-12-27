// Perceptual Hashing for Icon Recognition
// Implements dHash (difference hash) - fast and accurate for icon matching

/**
 * Resize image using canvas
 */
export function resizeImage(
  img: HTMLImageElement | ImageData,
  width: number,
  height: number
): ImageData {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  if (img instanceof HTMLImageElement) {
    ctx.drawImage(img, 0, 0, width, height);
  } else {
    // ImageData - need to draw via temp canvas
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = img.width;
    tempCanvas.height = img.height;
    const tempCtx = tempCanvas.getContext('2d')!;
    tempCtx.putImageData(img, 0, 0);
    ctx.drawImage(tempCanvas, 0, 0, width, height);
  }

  return ctx.getImageData(0, 0, width, height);
}

/**
 * Convert image to grayscale
 */
export function toGrayscale(imageData: ImageData): number[] {
  const gray: number[] = [];
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    // Luminance formula
    const g = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    gray.push(g);
  }

  return gray;
}

/**
 * Compute difference hash (dHash)
 * Creates a 64-bit hash by comparing adjacent pixels
 */
export function dHash(img: HTMLImageElement | ImageData, hashSize = 8): string {
  // Resize to hashSize+1 x hashSize (9x8 for 8x8 hash)
  const resized = resizeImage(img, hashSize + 1, hashSize);
  const gray = toGrayscale(resized);

  let hash = '';
  const width = hashSize + 1;

  for (let y = 0; y < hashSize; y++) {
    for (let x = 0; x < hashSize; x++) {
      const left = gray[y * width + x];
      const right = gray[y * width + x + 1];
      hash += left < right ? '1' : '0';
    }
  }

  return hash;
}

/**
 * Compute average hash (aHash)
 * Simpler but less accurate
 */
export function aHash(img: HTMLImageElement | ImageData, hashSize = 8): string {
  const resized = resizeImage(img, hashSize, hashSize);
  const gray = toGrayscale(resized);

  // Calculate average
  const avg = gray.reduce((a, b) => a + b, 0) / gray.length;

  // Create hash based on average
  return gray.map(g => (g >= avg ? '1' : '0')).join('');
}

/**
 * Compute perceptual hash (pHash) using DCT
 * Most accurate but slower
 */
export function pHash(img: HTMLImageElement | ImageData, hashSize = 8): string {
  // Resize to 32x32 for DCT
  const size = 32;
  const resized = resizeImage(img, size, size);
  const gray = toGrayscale(resized);

  // Apply DCT (simplified - using just top-left 8x8)
  const dct: number[] = [];

  for (let u = 0; u < hashSize; u++) {
    for (let v = 0; v < hashSize; v++) {
      let sum = 0;
      for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
          sum +=
            gray[y * size + x] *
            Math.cos(((2 * x + 1) * u * Math.PI) / (2 * size)) *
            Math.cos(((2 * y + 1) * v * Math.PI) / (2 * size));
        }
      }
      dct.push(sum);
    }
  }

  // Skip first value (DC component) and compute average of rest
  const dctLow = dct.slice(1);
  const avg = dctLow.reduce((a, b) => a + b, 0) / dctLow.length;

  // Generate hash
  return dctLow.map(v => (v >= avg ? '1' : '0')).join('');
}

/**
 * Calculate Hamming distance between two hashes
 */
export function hammingDistance(hash1: string, hash2: string): number {
  if (hash1.length !== hash2.length) {
    throw new Error('Hashes must be same length');
  }

  let distance = 0;
  for (let i = 0; i < hash1.length; i++) {
    if (hash1[i] !== hash2[i]) distance++;
  }

  return distance;
}

/**
 * Calculate similarity percentage (0-100)
 */
export function similarity(hash1: string, hash2: string): number {
  const distance = hammingDistance(hash1, hash2);
  return ((hash1.length - distance) / hash1.length) * 100;
}

/**
 * Load image from URL and return HTMLImageElement
 */
export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Extract a region from an image
 */
export function extractRegion(
  img: HTMLImageElement | HTMLCanvasElement,
  x: number,
  y: number,
  width: number,
  height: number
): ImageData {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, x, y, width, height, 0, 0, width, height);
  return ctx.getImageData(0, 0, width, height);
}

/**
 * Convert ImageData to data URL for debugging
 */
export function imageDataToURL(imageData: ImageData): string {
  const canvas = document.createElement('canvas');
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const ctx = canvas.getContext('2d')!;
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}
