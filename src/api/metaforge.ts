// MetaForge API integration for Arc Raiders items
import type { Item, Decision } from '../data/items';

// Use Vite proxy to avoid CORS issues
const API_BASE = '/api/metaforge/items';

interface MetaForgeItem {
  id: string;
  name: string;
  description: string;
  item_type: string;
  rarity: string;
  value: number;
  icon?: string;
}

// Cache for API results
const cache = new Map<string, { items: Item[]; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Determine decision based on item_type
function getDecision(item: MetaForgeItem): { decision: Decision; reason: string } {
  const type = item.item_type.toLowerCase();
  const value = item.value;

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
    return { decision: 'keep', reason: `Weapon worth ${value.toLocaleString()}cr - use or sell later` };
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

  // Nature items - depends on value
  if (type === 'nature') {
    if (value >= 800) {
      return { decision: 'keep', reason: 'Valuable natural resource' };
    }
    return { decision: 'sell', reason: `Nature item - sell for ${value.toLocaleString()}cr` };
  }

  // Misc/cosmetic - usually no value
  if (type === 'misc' || value === 0) {
    return { decision: 'keep', reason: 'Cosmetic or special item' };
  }

  // Default: compare value to decide
  if (value >= 3000) {
    return { decision: 'sell', reason: `High value - sell for ${value.toLocaleString()}cr` };
  }

  return { decision: 'keep', reason: item.description || 'Check in-game for best use' };
}

// Normalize rarity from API
function normalizeRarity(rarity: string): Item['rarity'] {
  const r = rarity?.toLowerCase() || 'common';
  if (r.includes('legendary')) return 'Legendary';
  if (r.includes('epic')) return 'Epic';
  if (r.includes('rare')) return 'Rare';
  if (r.includes('uncommon')) return 'Uncommon';
  return 'Common';
}

// Transform API item to our format
function transformItem(apiItem: MetaForgeItem): Item {
  const { decision, reason } = getDecision(apiItem);

  return {
    id: apiItem.id,
    name: apiItem.name,
    category: apiItem.item_type,
    rarity: normalizeRarity(apiItem.rarity),
    sellValue: apiItem.value,
    recycleValue: Math.floor(apiItem.value * 0.4), // Estimate: 40% of sell value
    decision,
    reason,
  };
}

// Search items from API
export async function searchItemsAPI(query: string): Promise<Item[]> {
  if (!query || query.length < 2) return [];

  const cacheKey = query.toLowerCase();
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.items;
  }

  try {
    const response = await fetch(`${API_BASE}?search=${encodeURIComponent(query)}&limit=20`);
    if (!response.ok) throw new Error('API request failed');

    const json = await response.json();
    const items: MetaForgeItem[] = Array.isArray(json) ? json : json.data || json.items || [];

    const transformed = items
      .filter(item => item.name && item.item_type !== 'Misc') // Filter out cosmetics
      .map(transformItem);

    cache.set(cacheKey, { items: transformed, timestamp: Date.now() });
    return transformed;
  } catch (error) {
    console.error('MetaForge API error:', error);
    return [];
  }
}

// Fetch single item by ID
export async function fetchItem(id: string): Promise<Item | null> {
  try {
    const response = await fetch(`${API_BASE}/${id}`);
    if (!response.ok) return null;

    const apiItem: MetaForgeItem = await response.json();
    return transformItem(apiItem);
  } catch {
    return null;
  }
}
