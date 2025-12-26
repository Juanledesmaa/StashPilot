// Item database with recommendations built-in
// Decision logic: KEEP if needed for quests/upgrades, SELL if vendor trash, RECYCLE if recycle > sell

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
}

// Arc Raiders items with pre-computed recommendations
export const ITEMS: Item[] = [
  // === ALWAYS KEEP - Quest/Upgrade Materials ===
  { id: 'arc-alloy', name: 'ARC Alloy', category: 'ARC Part', rarity: 'Rare', sellValue: 800, recycleValue: 400, decision: 'keep', reason: 'Needed for Utility Station upgrades' },
  { id: 'arc-powercell', name: 'ARC Powercell', category: 'ARC Part', rarity: 'Rare', sellValue: 600, recycleValue: 300, decision: 'keep', reason: 'Needed for Refiner + Shield crafting' },
  { id: 'arc-circuitry', name: 'ARC Circuitry', category: 'ARC Part', rarity: 'Rare', sellValue: 700, recycleValue: 350, decision: 'keep', reason: 'Needed for upgrades' },
  { id: 'arc-motion-core', name: 'ARC Motion Core', category: 'ARC Part', rarity: 'Epic', sellValue: 1200, recycleValue: 600, decision: 'keep', reason: 'Needed for Refiner Lv2' },
  { id: 'leaper-pulse', name: 'Leaper Pulse Unit', category: 'ARC Part', rarity: 'Rare', sellValue: 900, recycleValue: 450, decision: 'keep', reason: 'Workshop upgrade material' },
  { id: 'wasp-driver', name: 'Wasp Driver', category: 'ARC Part', rarity: 'Uncommon', sellValue: 400, recycleValue: 200, decision: 'keep', reason: 'Gunsmith Lv2 requires 8' },
  { id: 'hornet-driver', name: 'Hornet Driver', category: 'ARC Part', rarity: 'Rare', sellValue: 600, recycleValue: 300, decision: 'keep', reason: 'Workshop upgrade material' },
  { id: 'sentinel-core', name: 'Sentinel Firing Core', category: 'ARC Part', rarity: 'Epic', sellValue: 1500, recycleValue: 750, decision: 'keep', reason: 'Gunsmith Lv3 requires 4' },
  { id: 'fireball-burner', name: 'Fireball Burner', category: 'ARC Part', rarity: 'Uncommon', sellValue: 350, recycleValue: 175, decision: 'keep', reason: 'Refiner Lv2 requires 8' },
  { id: 'snitch-scanner', name: 'Snitch Scanner', category: 'ARC Part', rarity: 'Uncommon', sellValue: 300, recycleValue: 150, decision: 'keep', reason: 'Utility Lv2 requires 6' },
  { id: 'bison-driver', name: 'Bison Driver', category: 'ARC Part', rarity: 'Rare', sellValue: 800, recycleValue: 400, decision: 'keep', reason: 'Utility Lv3 requires 3' },
  { id: 'queen-part', name: 'Queen Part', category: 'ARC Part', rarity: 'Legendary', sellValue: 5000, recycleValue: 2500, decision: 'keep', reason: 'Refiner Lv3 requires 1' },

  // === KEEP - Crafting Materials ===
  { id: 'mechanical-comp', name: 'Mechanical Components', category: 'Component', rarity: 'Uncommon', sellValue: 200, recycleValue: 100, decision: 'keep', reason: 'Gunsmith Lv2 requires 5' },
  { id: 'electrical-comp', name: 'Electrical Components', category: 'Component', rarity: 'Uncommon', sellValue: 200, recycleValue: 100, decision: 'keep', reason: 'Utility Lv2 requires 5' },
  { id: 'adv-mechanical', name: 'Advanced Mechanical Components', category: 'Component', rarity: 'Rare', sellValue: 500, recycleValue: 250, decision: 'keep', reason: 'Gunsmith Lv3 requires 5' },
  { id: 'adv-electrical', name: 'Advanced Electrical Components', category: 'Component', rarity: 'Rare', sellValue: 500, recycleValue: 250, decision: 'keep', reason: 'Utility Lv3 requires 3' },
  { id: 'rusted-tools', name: 'Rusted Tools', category: 'Junk', rarity: 'Common', sellValue: 150, recycleValue: 75, decision: 'keep', reason: 'Gunsmith Lv2 requires 3' },
  { id: 'rusted-gears', name: 'Rusted Gears', category: 'Junk', rarity: 'Common', sellValue: 150, recycleValue: 75, decision: 'keep', reason: 'Gunsmith Lv3 requires 3' },
  { id: 'toaster', name: 'Toaster', category: 'Junk', rarity: 'Common', sellValue: 200, recycleValue: 100, decision: 'keep', reason: 'Refiner Lv2 requires 3' },
  { id: 'motor', name: 'Motor', category: 'Component', rarity: 'Uncommon', sellValue: 300, recycleValue: 150, decision: 'keep', reason: 'Refiner Lv3 requires 5' },
  { id: 'damaged-heatsink', name: 'Damaged Heat Sink', category: 'Junk', rarity: 'Uncommon', sellValue: 250, recycleValue: 125, decision: 'keep', reason: 'Utility Lv2 requires 2' },
  { id: 'friend-motherboard', name: 'Friend Motherboard', category: 'Component', rarity: 'Rare', sellValue: 600, recycleValue: 300, decision: 'keep', reason: 'Utility Lv3 requires 5' },
  { id: 'antiseptic', name: 'Antiseptic', category: 'Medical', rarity: 'Uncommon', sellValue: 300, recycleValue: 150, decision: 'keep', reason: 'Quest item + Med crafting' },
  { id: 'syringe', name: 'Syringe', category: 'Medical', rarity: 'Rare', sellValue: 5000, recycleValue: 200, decision: 'keep', reason: 'Quest item - do not sell!' },

  // === KEEP - Keys ===
  { id: 'blue-key', name: 'Blue Gate Key', category: 'Key', rarity: 'Rare', sellValue: 1000, recycleValue: 0, decision: 'keep', reason: 'Opens rare loot rooms' },
  { id: 'bunker-key', name: 'Bunker Access Key', category: 'Key', rarity: 'Epic', sellValue: 2000, recycleValue: 0, decision: 'keep', reason: 'Opens bunker with top loot' },
  { id: 'research-key', name: 'Research Facility Key', category: 'Key', rarity: 'Rare', sellValue: 1500, recycleValue: 0, decision: 'keep', reason: 'Opens research rooms' },

  // === KEEP - Blueprints ===
  { id: 'bp-anvil', name: 'Anvil Blueprint', category: 'Blueprint', rarity: 'Rare', sellValue: 2000, recycleValue: 0, decision: 'keep', reason: 'Unlocks Anvil crafting' },
  { id: 'bp-bettina', name: 'Bettina Blueprint', category: 'Blueprint', rarity: 'Epic', sellValue: 4000, recycleValue: 0, decision: 'keep', reason: 'Unlocks Bettina crafting' },
  { id: 'bp-compensator', name: 'Compensator Blueprint', category: 'Blueprint', rarity: 'Uncommon', sellValue: 800, recycleValue: 0, decision: 'keep', reason: 'Unlocks mod crafting' },

  // === KEEP - Consumables (useful) ===
  { id: 'medkit', name: 'Medkit', category: 'Medical', rarity: 'Uncommon', sellValue: 400, recycleValue: 100, decision: 'keep', reason: 'Use in raids - heals 75HP' },
  { id: 'adrenaline', name: 'Adrenaline Shot', category: 'Medical', rarity: 'Rare', sellValue: 600, recycleValue: 150, decision: 'keep', reason: 'Use in raids - stamina boost' },
  { id: 'bandage', name: 'Bandage', category: 'Medical', rarity: 'Common', sellValue: 100, recycleValue: 25, decision: 'keep', reason: 'Basic healing - always useful' },

  // === RECYCLE - Better material value ===
  { id: 'power-bank', name: 'Power Bank', category: 'Electronics', rarity: 'Common', sellValue: 640, recycleValue: 1400, decision: 'recycle', reason: 'Recycle: 1400cr in materials vs 640cr sell' },
  { id: 'voltage-converter', name: 'Voltage Converter', category: 'Electronics', rarity: 'Rare', sellValue: 800, recycleValue: 1800, decision: 'recycle', reason: 'Recycle value much higher than sell' },
  { id: 'ion-splitter', name: 'Ion Splitter', category: 'Electronics', rarity: 'Epic', sellValue: 1200, recycleValue: 2500, decision: 'recycle', reason: 'Recycle for rare materials' },
  { id: 'wires', name: 'Wires', category: 'Material', rarity: 'Common', sellValue: 50, recycleValue: 120, decision: 'recycle', reason: 'More value recycled' },
  { id: 'plastic-parts', name: 'Plastic Parts', category: 'Material', rarity: 'Common', sellValue: 30, recycleValue: 80, decision: 'recycle', reason: 'Basic crafting material' },
  { id: 'metal-parts', name: 'Metal Parts', category: 'Material', rarity: 'Common', sellValue: 40, recycleValue: 100, decision: 'recycle', reason: 'Basic crafting material' },
  { id: 'rubber-parts', name: 'Rubber Parts', category: 'Material', rarity: 'Common', sellValue: 35, recycleValue: 90, decision: 'recycle', reason: 'Gunsmith Lv1 material' },
  { id: 'fabric', name: 'Fabric', category: 'Material', rarity: 'Common', sellValue: 25, recycleValue: 60, decision: 'recycle', reason: 'Crafting material' },
  { id: 'chemicals', name: 'Chemicals', category: 'Material', rarity: 'Common', sellValue: 45, recycleValue: 110, decision: 'recycle', reason: 'Med crafting material' },

  // === SELL - High value vendor trash ===
  { id: 'mixtape', name: "Lance's Mixtape", category: 'Collectible', rarity: 'Legendary', sellValue: 10000, recycleValue: 100, decision: 'sell', reason: '10,000cr - pure vendor trash' },
  { id: 'snow-globe', name: 'Breathtaking Snow Globe', category: 'Collectible', rarity: 'Epic', sellValue: 7000, recycleValue: 50, decision: 'sell', reason: '7,000cr - no other use' },
  { id: 'snap-hook', name: 'Snap Hook', category: 'Collectible', rarity: 'Legendary', sellValue: 14000, recycleValue: 100, decision: 'sell', reason: '14,000cr - highest sell value!' },
  { id: 'acoustic-guitar', name: 'Acoustic Guitar', category: 'Collectible', rarity: 'Legendary', sellValue: 7000, recycleValue: 100, decision: 'sell', reason: '7,000cr vendor item' },
  { id: 'diamond-ring', name: 'Diamond Ring', category: 'Collectible', rarity: 'Epic', sellValue: 5000, recycleValue: 50, decision: 'sell', reason: '5,000cr - just sell it' },
  { id: 'gold-watch', name: 'Gold Watch', category: 'Collectible', rarity: 'Rare', sellValue: 3000, recycleValue: 30, decision: 'sell', reason: '3,000cr vendor item' },
  { id: 'silver-chain', name: 'Silver Chain', category: 'Collectible', rarity: 'Uncommon', sellValue: 1500, recycleValue: 20, decision: 'sell', reason: '1,500cr - sell immediately' },

  // === SELL - Low value junk ===
  { id: 'battery', name: 'Battery', category: 'Junk', rarity: 'Common', sellValue: 80, recycleValue: 40, decision: 'sell', reason: 'Low value, not needed' },
  { id: 'sensor', name: 'Sensor', category: 'Junk', rarity: 'Common', sellValue: 120, recycleValue: 60, decision: 'sell', reason: 'Vendor trash' },
  { id: 'lightbulb', name: 'Lightbulb', category: 'Junk', rarity: 'Common', sellValue: 60, recycleValue: 30, decision: 'sell', reason: 'Only for Expedition (endgame)' },
  { id: 'broken-phone', name: 'Broken Phone', category: 'Junk', rarity: 'Common', sellValue: 150, recycleValue: 75, decision: 'sell', reason: 'No crafting use' },
  { id: 'old-magazine', name: 'Old Magazine', category: 'Junk', rarity: 'Common', sellValue: 40, recycleValue: 20, decision: 'sell', reason: 'Vendor trash' },

  // === SELL - Common weapons (not worth keeping) ===
  { id: 'bobcat-i', name: 'Bobcat I', category: 'Weapon', rarity: 'Common', sellValue: 800, recycleValue: 200, decision: 'sell', reason: 'Common weapon - sell or use for parts' },
  { id: 'anvil-i', name: 'Anvil I', category: 'Weapon', rarity: 'Common', sellValue: 900, recycleValue: 250, decision: 'sell', reason: 'Common weapon - better ones available' },

  // === KEEP - Good weapons ===
  { id: 'bobcat-ii', name: 'Bobcat II', category: 'Weapon', rarity: 'Uncommon', sellValue: 1500, recycleValue: 400, decision: 'keep', reason: 'Solid SMG - keep if needed' },
  { id: 'bobcat-iii', name: 'Bobcat III', category: 'Weapon', rarity: 'Rare', sellValue: 3000, recycleValue: 800, decision: 'keep', reason: 'Great SMG - definitely keep' },
  { id: 'anvil-ii', name: 'Anvil II', category: 'Weapon', rarity: 'Uncommon', sellValue: 1800, recycleValue: 500, decision: 'keep', reason: 'Good rifle - keep' },
  { id: 'bettina', name: 'Bettina', category: 'Weapon', rarity: 'Epic', sellValue: 8000, recycleValue: 2000, decision: 'keep', reason: 'Excellent weapon - always keep' },
  { id: 'thunderstrike', name: 'Thunderstrike', category: 'Weapon', rarity: 'Legendary', sellValue: 15000, recycleValue: 4000, decision: 'keep', reason: 'Legendary weapon - never sell!' },

  // === KEEP - Weapon mods ===
  { id: 'compensator', name: 'Compensator', category: 'Mod', rarity: 'Uncommon', sellValue: 400, recycleValue: 100, decision: 'keep', reason: 'Reduces recoil - useful' },
  { id: 'extended-mag', name: 'Extended Magazine', category: 'Mod', rarity: 'Rare', sellValue: 800, recycleValue: 200, decision: 'keep', reason: 'More ammo = better' },
  { id: 'reflex-sight', name: 'Reflex Sight', category: 'Mod', rarity: 'Uncommon', sellValue: 500, recycleValue: 125, decision: 'keep', reason: 'Better aim - keep' },
  { id: 'silencer', name: 'Silencer', category: 'Mod', rarity: 'Rare', sellValue: 1200, recycleValue: 300, decision: 'keep', reason: 'Stealth kills - valuable' },
  { id: 'angled-grip', name: 'Angled Grip', category: 'Mod', rarity: 'Common', sellValue: 200, recycleValue: 50, decision: 'keep', reason: 'Stability boost' },
];

// Quick lookup by name (case insensitive)
export function findItem(name: string): Item | undefined {
  const lower = name.toLowerCase();
  return ITEMS.find(i => i.name.toLowerCase().includes(lower) || lower.includes(i.name.toLowerCase()));
}

// Fuzzy match for OCR text - more forgiving
export function findItemByName(text: string): Item | null {
  const clean = text.toLowerCase().replace(/[^a-z\s]/g, '').trim();
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
  const words = clean.split(/\s+/).filter(w => w.length > 2);
  if (words.length === 0) return null;

  // Score each item by how many words match
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

  // Only return if at least one word matched
  return bestScore > 0 ? bestMatch : null;
}

// Get all items matching a search
export function searchItems(query: string): Item[] {
  if (!query.trim()) return ITEMS;
  const lower = query.toLowerCase();
  return ITEMS.filter(i =>
    i.name.toLowerCase().includes(lower) ||
    i.category.toLowerCase().includes(lower)
  );
}
