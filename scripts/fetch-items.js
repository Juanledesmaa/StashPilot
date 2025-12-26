// Fetch all items from MetaForge API and generate items data
const API_BASE = 'https://metaforge.app/api/arc-raiders/items';

async function fetchAllItems() {
  console.log('Fetching items from MetaForge API...');

  let allItems = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `${API_BASE}?page=${page}&limit=100`;
    console.log(`Fetching page ${page}...`);

    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const json = await response.json();
    const items = json.data || [];

    allItems = allItems.concat(items);
    hasMore = json.pagination?.hasNextPage || false;
    page++;
  }

  console.log(`Fetched ${allItems.length} items total`);
  return allItems;
}

function getDecision(item) {
  const type = (item.item_type || '').toLowerCase();
  const value = item.value || 0;

  // Always KEEP - essential items
  if (type.includes('key')) {
    return { decision: 'keep', reason: 'Key - opens locked areas' };
  }
  if (type.includes('blueprint')) {
    return { decision: 'keep', reason: 'Blueprint - unlocks crafting recipes' };
  }
  if (type.includes('modification') || type === 'mod') {
    return { decision: 'keep', reason: 'Weapon mod - improves your guns' };
  }
  if (type === 'weapon') {
    return { decision: 'keep', reason: `Weapon worth ${value.toLocaleString()}cr` };
  }
  if (type === 'gadget') {
    return { decision: 'keep', reason: 'Gadget - useful utility item' };
  }

  // KEEP - Crafting materials
  if (type.includes('topside material')) {
    return { decision: 'keep', reason: 'ARC material - needed for upgrades' };
  }
  if (type.includes('refined material') || type.includes('advanced material')) {
    return { decision: 'keep', reason: 'Crafting material - needed for upgrades' };
  }

  // KEEP - Consumables
  if (type === 'quick use' || type === 'consumable') {
    if (value >= 5000) {
      return { decision: 'sell', reason: `High value consumable - ${value.toLocaleString()}cr` };
    }
    return { decision: 'keep', reason: 'Consumable - use in raids' };
  }
  if (type === 'throwable') {
    return { decision: 'keep', reason: 'Throwable - useful in combat' };
  }

  // RECYCLE - Items that give materials
  if (type === 'recyclable') {
    return { decision: 'recycle', reason: 'Recyclable - breaks down into materials' };
  }

  // SELL - Trinkets (vendor trash)
  if (type === 'trinket') {
    return { decision: 'sell', reason: `Trinket - vendor for ${value.toLocaleString()}cr` };
  }

  // Nature items
  if (type === 'nature') {
    if (value >= 800) {
      return { decision: 'keep', reason: 'Valuable natural resource' };
    }
    return { decision: 'sell', reason: `Nature item - sell for ${value.toLocaleString()}cr` };
  }

  // Misc/cosmetic
  if (type === 'misc' || value === 0) {
    return { decision: 'keep', reason: 'Cosmetic or special item' };
  }

  // High value items
  if (value >= 3000) {
    return { decision: 'sell', reason: `High value - sell for ${value.toLocaleString()}cr` };
  }

  return { decision: 'keep', reason: item.description || 'Check in-game for best use' };
}

function normalizeRarity(rarity) {
  const r = (rarity || 'common').toLowerCase();
  if (r.includes('legendary')) return 'Legendary';
  if (r.includes('epic')) return 'Epic';
  if (r.includes('rare')) return 'Rare';
  if (r.includes('uncommon')) return 'Uncommon';
  return 'Common';
}

function transformItem(apiItem) {
  const { decision, reason } = getDecision(apiItem);

  return {
    id: apiItem.id,
    name: apiItem.name,
    category: apiItem.item_type || 'Unknown',
    rarity: normalizeRarity(apiItem.rarity),
    sellValue: apiItem.value || 0,
    recycleValue: Math.floor((apiItem.value || 0) * 0.4),
    decision,
    reason,
    description: apiItem.description || '',
    workbench: apiItem.workbench || '',
  };
}

async function main() {
  try {
    const apiItems = await fetchAllItems();

    // Filter out misc/cosmetic items with no value
    const items = apiItems
      .filter(item => item.name && item.item_type !== 'Misc')
      .map(transformItem);

    console.log(`Transformed ${items.length} items`);

    // Generate TypeScript file
    const output = `// Auto-generated from MetaForge API - DO NOT EDIT MANUALLY
// Run: node scripts/fetch-items.js to update

export type Decision = 'keep' | 'sell' | 'recycle';

export interface Item {
  id: string;
  name: string;
  category: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  sellValue: number;
  recycleValue: number;
  decision: Decision;
  reason: string;
  description: string;
  workbench: string;
}

export const ITEMS: Item[] = ${JSON.stringify(items, null, 2)};

// Quick lookup by name (case insensitive)
export function findItem(name: string): Item | undefined {
  const lower = name.toLowerCase();
  return ITEMS.find(i => i.name.toLowerCase().includes(lower) || lower.includes(i.name.toLowerCase()));
}

// Fuzzy match for OCR text
export function findItemByName(text: string): Item | null {
  const clean = text.toLowerCase().replace(/[^a-z\\s]/g, '').trim();
  if (clean.length < 3) return null;

  // Exact match first
  const exact = ITEMS.find(i => i.name.toLowerCase() === clean);
  if (exact) return exact;

  // Contains match
  const contains = ITEMS.find(i =>
    i.name.toLowerCase().includes(clean) ||
    clean.includes(i.name.toLowerCase())
  );
  if (contains) return contains;

  // Word-based fuzzy match
  const words = clean.split(/\\s+/).filter(w => w.length > 2);
  if (words.length === 0) return null;

  let bestMatch: Item | null = null;
  let bestScore = 0;

  for (const item of ITEMS) {
    const itemLower = item.name.toLowerCase();
    let score = 0;
    for (const word of words) {
      if (itemLower.includes(word)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  return bestScore > 0 ? bestMatch : null;
}

// Search items
export function searchItems(query: string): Item[] {
  if (!query.trim()) return ITEMS;
  const lower = query.toLowerCase();
  return ITEMS.filter(i =>
    i.name.toLowerCase().includes(lower) ||
    i.category.toLowerCase().includes(lower)
  );
}
`;

    const fs = await import('fs');
    fs.writeFileSync('src/data/items.ts', output);
    console.log('Written to src/data/items.ts');

    // Stats
    const keeps = items.filter(i => i.decision === 'keep').length;
    const sells = items.filter(i => i.decision === 'sell').length;
    const recycles = items.filter(i => i.decision === 'recycle').length;
    console.log(`Stats: ${keeps} keep, ${sells} sell, ${recycles} recycle`);

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
