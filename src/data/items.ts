// Auto-generated from MetaForge API - DO NOT EDIT MANUALLY
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
}

export const ITEMS: Item[] = [
  {
    "id": "acoustic-guitar",
    "name": "Acoustic Guitar",
    "category": "Quick Use",
    "rarity": "Legendary",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "sell",
    "reason": "High value consumable - 7,000cr"
  },
  {
    "id": "adrenaline-shot",
    "name": "Adrenaline Shot",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 300,
    "recycleValue": 120,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "advanced-arc-powercell",
    "name": "Advanced ARC Powercell",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "advanced-electrical-components",
    "name": "Advanced Electrical Components",
    "category": "Refined Material",
    "rarity": "Rare",
    "sellValue": 1750,
    "recycleValue": 700,
    "decision": "keep",
    "reason": "Crafting material - needed for upgrades"
  },
  {
    "id": "advanced-mechanical-components",
    "name": "Advanced Mechanical Components",
    "category": "Advanced Material",
    "rarity": "Rare",
    "sellValue": 1750,
    "recycleValue": 700,
    "decision": "keep",
    "reason": "Crafting material - needed for upgrades"
  },
  {
    "id": "agave",
    "name": "Agave",
    "category": "Nature",
    "rarity": "Common",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Valuable natural resource"
  },
  {
    "id": "agave-juice",
    "name": "Agave Juice",
    "category": "Consumable",
    "rarity": "Common",
    "sellValue": 123,
    "recycleValue": 49,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "air-freshener",
    "name": "Air Freshener",
    "category": "Trinket",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "sell",
    "reason": "Trinket - vendor for 2,000cr"
  },
  {
    "id": "alarm-clock",
    "name": "Alarm Clock",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "angled-grip-i",
    "name": "Angled Grip I",
    "category": "Modification",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "angled-grip-ii",
    "name": "Angled Grip II",
    "category": "Modification",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "angled-grip-ii-recipe",
    "name": "Angled Grip II Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "angled-grip-iii",
    "name": "Angled Grip III",
    "category": "Modification",
    "rarity": "Rare",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "angled-grip-iii-recipe",
    "name": "Angled Grip III Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "antiseptic",
    "name": "Antiseptic",
    "category": "Refined Material",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Crafting material - needed for upgrades"
  },
  {
    "id": "anvil-recipe",
    "name": "Anvil Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "anvil-i",
    "name": "Anvil I",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon worth 5,000cr"
  },
  {
    "id": "anvil-ii",
    "name": "Anvil II",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon worth 7,000cr"
  },
  {
    "id": "anvil-iii",
    "name": "Anvil III",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 10000,
    "recycleValue": 4000,
    "decision": "keep",
    "reason": "Weapon worth 10,000cr"
  },
  {
    "id": "anvil-iv",
    "name": "Anvil IV",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 13000,
    "recycleValue": 5200,
    "decision": "keep",
    "reason": "Weapon worth 13,000cr"
  },
  {
    "id": "anvil-splitter",
    "name": "Anvil Splitter",
    "category": "Modification",
    "rarity": "Legendary",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "anvil-splitter-recipe",
    "name": "Anvil Splitter Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "aphelion-rifle",
    "name": "Aphelion Rifle",
    "category": "Weapon",
    "rarity": "Legendary",
    "sellValue": 27500,
    "recycleValue": 11000,
    "decision": "keep",
    "reason": "Weapon worth 27,500cr"
  },
  {
    "id": "aphelion-rifle-blueprint",
    "name": "Aphelion Rifle Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "apricot",
    "name": "Apricot",
    "category": "Nature",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "sell",
    "reason": "Nature item - sell for 640cr"
  },
  {
    "id": "arc-alloy",
    "name": "ARC Alloy",
    "category": "Topside Material",
    "rarity": "Uncommon",
    "sellValue": 200,
    "recycleValue": 80,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "arc-circuitry",
    "name": "ARC Circuitry",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "arc-coolant",
    "name": "ARC Coolant",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "arc-flex-rubber",
    "name": "ARC Flex Rubber",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "arc-motion-core",
    "name": "ARC Motion Core",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "arc-performance-steel",
    "name": "ARC Performance Steel",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "arc-powercell",
    "name": "ARC Powercell",
    "category": "Topside Material",
    "rarity": "Common",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "arc-synthetic-resin",
    "name": "ARC Synthetic Resin",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "arc-thermo-lining",
    "name": "ARC Thermo Lining",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "arpeggio-i",
    "name": "Arpeggio I",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 5500,
    "recycleValue": 2200,
    "decision": "keep",
    "reason": "Weapon worth 5,500cr"
  },
  {
    "id": "arpeggio-ii",
    "name": "Arpeggio II",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 8000,
    "recycleValue": 3200,
    "decision": "keep",
    "reason": "Weapon worth 8,000cr"
  },
  {
    "id": "arpeggio-iii",
    "name": "Arpeggio III",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 11500,
    "recycleValue": 4600,
    "decision": "keep",
    "reason": "Weapon worth 11,500cr"
  },
  {
    "id": "arpeggio-iv",
    "name": "Arpeggio IV",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 15000,
    "recycleValue": 6000,
    "decision": "keep",
    "reason": "Weapon worth 15,000cr"
  },
  {
    "id": "assorted-seeds",
    "name": "Assorted Seeds",
    "category": "Nature",
    "rarity": "Common",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "sell",
    "reason": "Nature item - sell for 100cr"
  },
  {
    "id": "bandage",
    "name": "Bandage",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 250,
    "recycleValue": 100,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "barricade-kit",
    "name": "Barricade Kit",
    "category": "Quick Use",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "barricade-kit-recipe",
    "name": "Barricade Kit Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "bastion-part",
    "name": "Bastion Cell",
    "category": "Recyclable",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "battery",
    "name": "Battery",
    "category": "Topside Material",
    "rarity": "Uncommon",
    "sellValue": 250,
    "recycleValue": 100,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "bettina-blueprint",
    "name": "Bettina Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "bettina-i",
    "name": "Bettina I",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 8000,
    "recycleValue": 3200,
    "decision": "keep",
    "reason": "Weapon worth 8,000cr"
  },
  {
    "id": "bettina-ii",
    "name": "Bettina II",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 11000,
    "recycleValue": 4400,
    "decision": "keep",
    "reason": "Weapon worth 11,000cr"
  },
  {
    "id": "bettina-iii",
    "name": "Bettina III",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 14000,
    "recycleValue": 5600,
    "decision": "keep",
    "reason": "Weapon worth 14,000cr"
  },
  {
    "id": "bettina-iv",
    "name": "Bettina IV",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 18000,
    "recycleValue": 7200,
    "decision": "keep",
    "reason": "Weapon worth 18,000cr"
  },
  {
    "id": "bicycle-pump",
    "name": "Bicycle Pump",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "binoculars",
    "name": "Binoculars",
    "category": "Gadget",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Gadget - useful utility item"
  },
  {
    "id": "bison-driver",
    "name": "Bison Driver",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2500,
    "recycleValue": 1000,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "blaze-grenade",
    "name": "Blaze Grenade",
    "category": "Throwable",
    "rarity": "Rare",
    "sellValue": 1600,
    "recycleValue": 640,
    "decision": "keep",
    "reason": "Throwable - useful in combat"
  },
  {
    "id": "blaze-grenade-blueprint",
    "name": "Blaze Grenade Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "blaze-grenade-trap",
    "name": "Blaze Grenade Trap",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "bloated-tuna-can",
    "name": "Bloated Tuna Can",
    "category": "Trinket",
    "rarity": "Common",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "sell",
    "reason": "Trinket - vendor for 1,000cr"
  },
  {
    "id": "blue-gate-cellar-key",
    "name": "Blue Gate Cellar Key",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "blue-gate-communication-tower-key",
    "name": "Blue Gate Communication Tower Key",
    "category": "Key",
    "rarity": "Rare",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "blue-gate-confiscation-room-key",
    "name": "Blue Gate Confiscation Room Key",
    "category": "Key",
    "rarity": "Epic",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "blue-gate-village-key",
    "name": "Blue Gate Village Key",
    "category": "Key",
    "rarity": "Rare",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "blue-light-stick",
    "name": "Blue Light Stick",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 150,
    "recycleValue": 60,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "blue-light-stick-blueprint",
    "name": "Blue Light Stick Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "bobcat-i-recipe",
    "name": "Bobcat Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "bobcat-i",
    "name": "Bobcat I",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 13000,
    "recycleValue": 5200,
    "decision": "keep",
    "reason": "Weapon worth 13,000cr"
  },
  {
    "id": "bobcat-ii",
    "name": "Bobcat II",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 17000,
    "recycleValue": 6800,
    "decision": "keep",
    "reason": "Weapon worth 17,000cr"
  },
  {
    "id": "bobcat-iii",
    "name": "Bobcat III",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 22000,
    "recycleValue": 8800,
    "decision": "keep",
    "reason": "Weapon worth 22,000cr"
  },
  {
    "id": "bobcat-iv",
    "name": "Bobcat IV",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 27000,
    "recycleValue": 10800,
    "decision": "keep",
    "reason": "Weapon worth 27,000cr"
  },
  {
    "id": "bombardier-cell",
    "name": "Bombardier Cell",
    "category": "Recyclable",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "breathtaking-snow-globe",
    "name": "Breathtaking Snow Globe",
    "category": "Trinket",
    "rarity": "Epic",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "sell",
    "reason": "Trinket - vendor for 7,000cr"
  },
  {
    "id": "broken-flashlight",
    "name": "Broken Flashlight",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "broken-guidance-system",
    "name": "Broken Guidance System",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "broken-handcuffs",
    "name": "Broken Handcuffs",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "broken-handheld-radio",
    "name": "Broken Handheld Radio",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "broken-riot-shield",
    "name": "Broken Riot Shield",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "broken-taser",
    "name": "Broken Taser",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "buried-city-hospital-key",
    "name": "Buried City Hospital Key",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "buried-city-jkv-employee-access-card",
    "name": "Buried City JKV Employee Access Card",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "buried-city-residential-master-key",
    "name": "Buried City Residential Master Key",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "buried-city-town-hall-key",
    "name": "Buried City Town Hall Key",
    "category": "Key",
    "rarity": "Epic",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "burltetta-recipe",
    "name": "Burletta Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "burletta-i",
    "name": "Burletta I",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 2900,
    "recycleValue": 1160,
    "decision": "keep",
    "reason": "Weapon worth 2,900cr"
  },
  {
    "id": "burletta-ii",
    "name": "Burletta II",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon worth 5,000cr"
  },
  {
    "id": "burletta-iiii",
    "name": "Burletta III",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon worth 7,000cr"
  },
  {
    "id": "burletta-iv",
    "name": "Burletta IV",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 10000,
    "recycleValue": 4000,
    "decision": "keep",
    "reason": "Weapon worth 10,000cr"
  },
  {
    "id": "burned-arc-circuitry",
    "name": "Burned ARC Circuitry",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "burnt-out-candles",
    "name": "Burnt-Out Candles",
    "category": "Trinket",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "sell",
    "reason": "Trinket - vendor for 640cr"
  },
  {
    "id": "camera-lens",
    "name": "Camera Lens",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "candleberries",
    "name": "Candleberries",
    "category": "Nature",
    "rarity": "Rare",
    "sellValue": 460,
    "recycleValue": 184,
    "decision": "sell",
    "reason": "Nature item - sell for 460cr"
  },
  {
    "id": "candle-holder",
    "name": "Candle Holder",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "canister",
    "name": "Canister",
    "category": "Topside Material",
    "rarity": "Uncommon",
    "sellValue": 300,
    "recycleValue": 120,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "cans-backpack-attachment",
    "name": "Cans (Backpack Attachment)",
    "category": "Cosmetic",
    "rarity": "Common",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Cosmetic or special item"
  },
  {
    "id": "cat-bed",
    "name": "Cat Bed",
    "category": "Trinket",
    "rarity": "Uncommon",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "sell",
    "reason": "Trinket - vendor for 1,000cr"
  },
  {
    "id": "chemicals",
    "name": "Chemicals",
    "category": "Basic Material",
    "rarity": "Common",
    "sellValue": 50,
    "recycleValue": 20,
    "decision": "keep",
    "reason": "Used to craft medical supplies, explosives, and utility items."
  },
  {
    "id": "coffee-pot",
    "name": "Coffee Pot",
    "category": "Trinket",
    "rarity": "Common",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "sell",
    "reason": "Trinket - vendor for 1,000cr"
  },
  {
    "id": "combat-mk-1",
    "name": "Combat Mk. 1",
    "category": "Augment",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Basic combat augment. Supports stronger shields, but with limited backpack capacity and Quick Use slots."
  },
  {
    "id": "combat-mk-2",
    "name": "Combat Mk. 2",
    "category": "Augment",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "A Combat augment is more focused on maneuverability than absorbing damage."
  },
  {
    "id": "combat-mk-3-aggressive",
    "name": "Combat Mk. 3 (Aggressive)",
    "category": "Augment",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "High value - sell for 5,000cr"
  },
  {
    "id": "combat-mk3-aggressive-blueprint",
    "name": "Combat Mk.3 (Aggressive) Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "combat-mk3-flanking",
    "name": "Combat Mk.3 (Flanking) ",
    "category": "Augment",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "High value - sell for 5,000cr"
  },
  {
    "id": "combat-mk-3-flanking",
    "name": "Combat Mk. 3 (Flanking) Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "compensator-i",
    "name": "Compensator I",
    "category": "Modification",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "compensator-ii",
    "name": "Compensator II",
    "category": "Modification",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "compensator-ii-recipe",
    "name": "Compensator II Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "compensator-iii",
    "name": "Compensator III",
    "category": "Modification",
    "rarity": "Rare",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "compensator-iii-recipe",
    "name": "Compensator III Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "complex-gun-parts",
    "name": "Complex Gun Parts",
    "category": "Topside Material",
    "rarity": "Epic",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "complex-gun-parts-blueprint",
    "name": "Complex Gun Parts Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "coolant",
    "name": "Coolant",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "cooling-coil",
    "name": "Cooling Coil",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "cooling-fan",
    "name": "Cooling Fan",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "cracked-bioscanner",
    "name": "Cracked Bioscanner",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "crude-explosives",
    "name": "Crude Explosives",
    "category": "Refined Material",
    "rarity": "Uncommon",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "keep",
    "reason": "Crafting material - needed for upgrades"
  },
  {
    "id": "crumpled-plastic-bottle",
    "name": "Crumpled Plastic Bottle",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "damaged-arc-motion-core",
    "name": "Damaged ARC Motion Core",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "damaged-arc-powercell",
    "name": "Damaged ARC Powercell",
    "category": "Recyclable",
    "rarity": "Common",
    "sellValue": 293,
    "recycleValue": 117,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "damaged-fireball-burner",
    "name": "Damaged Fireball Burner",
    "category": "Recyclable",
    "rarity": "Common",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "damaged-heat-sink",
    "name": "Damaged Heat Sink",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "danaged-hornet-driver",
    "name": "Damaged Hornet Driver",
    "category": "Recyclable",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "damaged-rocketeer-part",
    "name": "Damaged Rocketeer Driver",
    "category": "Recyclable",
    "rarity": "Common",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "damaged-tick-pod",
    "name": "Damaged Tick Pod",
    "category": "Recyclable",
    "rarity": "Common",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "damaged-wasp-driver",
    "name": "Damaged Wasp Driver",
    "category": "Recyclable",
    "rarity": "Common",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "dam-control-center-tower-key",
    "name": "Dam Control Center Tower Key",
    "category": "Key",
    "rarity": "Epic",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "dam-staff-room-key",
    "name": "Dam Staff Room Key",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "dam-surveillance-key",
    "name": "Dam Surveillance Key",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "dam-testing-annex-key",
    "name": "Dam Testing Annex Key",
    "category": "Key",
    "rarity": "Rare",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "dam-utility-key",
    "name": "Dam Utility Key",
    "category": "Quest Item",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Location is currently unknown except that it is on Dam Battlegrounds."
  },
  {
    "id": "dart-board",
    "name": "Dart Board",
    "category": "Trinket",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "sell",
    "reason": "Trinket - vendor for 2,000cr"
  },
  {
    "id": "deadline",
    "name": "Deadline",
    "category": "Quick Use",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "High value consumable - 5,000cr"
  },
  {
    "id": "deadline-blueprint",
    "name": "Deadline Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "defibrillator",
    "name": "Defibrillator",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "defibrillator-recipe",
    "name": "Defibrillator Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "deflated-football",
    "name": "Deflated Football",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "degraded-arc-rubber",
    "name": "Degraded ARC Rubber",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "diving-googles",
    "name": "Diving Goggles",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "dog-collar",
    "name": "Dog Collar",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "door-blocker",
    "name": "Door Blocker",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "dried-out-arc-resin",
    "name": "Dried-Out ARC Resin",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "duct-tape-recipe",
    "name": "Duct Tape",
    "category": "Topside Material",
    "rarity": "Uncommon",
    "sellValue": 300,
    "recycleValue": 120,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "durable-cloth",
    "name": "Durable Cloth",
    "category": "Refined Material",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Crafting material - needed for upgrades"
  },
  {
    "id": "electrical-components",
    "name": "Electrical Components",
    "category": "Refined Material",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Crafting material - needed for upgrades"
  },
  {
    "id": "empty-wine-bottle",
    "name": "Empty Wine Bottle",
    "category": "Trinket",
    "rarity": "Common",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "sell",
    "reason": "Trinket - vendor for 1,000cr"
  },
  {
    "id": "energy-ammo",
    "name": "Energy Clip",
    "category": "Ammunition",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Ammo used for energy weapons. One clip will fully charge a single weapon."
  },
  {
    "id": "equalizer-i",
    "name": "Equalizer",
    "category": "Weapon",
    "rarity": "Legendary",
    "sellValue": 34000,
    "recycleValue": 13600,
    "decision": "keep",
    "reason": "Weapon worth 34,000cr"
  },
  {
    "id": "equalizer-recipe",
    "name": "Equalizer Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "esr-analyzer",
    "name": "ESR Analyzer",
    "category": "Quest Item",
    "rarity": "Common",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Cosmetic or special item"
  },
  {
    "id": "exodus-modules",
    "name": "Exodus Modules",
    "category": "Topside Material",
    "rarity": "Epic",
    "sellValue": 2750,
    "recycleValue": 1100,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "expired-pasta",
    "name": "Expired Pasta",
    "category": "Trinket",
    "rarity": "Common",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "sell",
    "reason": "Trinket - vendor for 1,000cr"
  },
  {
    "id": "expired-respirator",
    "name": "Expired Respirator",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "explosive-compound",
    "name": "Explosive Compound",
    "category": "Refined Material",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Crafting material - needed for upgrades"
  },
  {
    "id": "explosive-mine",
    "name": "Explosive Mine",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 1500,
    "recycleValue": 600,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "explosive-mine-blueprint",
    "name": "Explosive Mine Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "extended-barrel",
    "name": "Extended Barrel",
    "category": "Modification",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "extended-barrel-recipe",
    "name": "Extended Barrel Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "extended-light-mag-i",
    "name": "Extended Light Mag I",
    "category": "Modification",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "extended-light-mag-ii",
    "name": "Extended Light Mag II",
    "category": "Modification",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "extended-light-mag-ii-recipe",
    "name": "Extended Light Mag II Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "extended-light-mag-iii",
    "name": "Extended Light Mag III",
    "category": "Modification",
    "rarity": "Rare",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "extended-light-mag-iii-recipe",
    "name": "Extended Light Mag III Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "extended-medium-mag-i",
    "name": "Extended Medium Mag I",
    "category": "Modification",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "extended-medium-mag-ii",
    "name": "Extended Medium Mag II",
    "category": "Modification",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "extended-medium-mag-ii-recipe",
    "name": "Extended Medium Mag II Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "extended-medium-mag-iii",
    "name": "Extended Medium Mag III",
    "category": "Modification",
    "rarity": "Rare",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "extended-medium-mag-iii-blueprint",
    "name": "Extended Medium Mag III Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "extended-shotgun-mag-i",
    "name": "Extended Shotgun Mag I",
    "category": "Modification",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "extended-shotgun-mag-ii",
    "name": "Extended Shotgun Mag II",
    "category": "Modification",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "extended-shotgun-mag-ii-recipe",
    "name": "Extended Shotgun Mag II Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "extended-shotgun-mag-iii",
    "name": "Extended Shotgun Mag III",
    "category": "Modification",
    "rarity": "Rare",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "extended-shotgun-mag-iii-recipe",
    "name": "Extended Shotgun Mag III Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "fabric",
    "name": "Fabric",
    "category": "Basic Material",
    "rarity": "Common",
    "sellValue": 50,
    "recycleValue": 20,
    "decision": "keep",
    "reason": "Used to craft medical supplies and shields."
  },
  {
    "id": "faded-photograph",
    "name": "Faded Photograph",
    "category": "Trinket",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "sell",
    "reason": "Trinket - vendor for 640cr"
  },
  {
    "id": "ferro-i",
    "name": "Ferro I",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 475,
    "recycleValue": 190,
    "decision": "keep",
    "reason": "Weapon worth 475cr"
  },
  {
    "id": "ferro-ii",
    "name": "Ferro II",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Weapon worth 1,000cr"
  },
  {
    "id": "ferro-iii",
    "name": "Ferro III",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon worth 2,000cr"
  },
  {
    "id": "ferro-iv",
    "name": "Ferro IV",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 2900,
    "recycleValue": 1160,
    "decision": "keep",
    "reason": "Weapon worth 2,900cr"
  },
  {
    "id": "fertilizer",
    "name": "Fertilizer",
    "category": "Nature",
    "rarity": "Common",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Valuable natural resource"
  },
  {
    "id": "film-reel",
    "name": "Film Reel",
    "category": "Trinket",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "sell",
    "reason": "Trinket - vendor for 2,000cr"
  },
  {
    "id": "fine-wristwatch",
    "name": "Fine Wristwatch",
    "category": "Trinket",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "sell",
    "reason": "Trinket - vendor for 3,000cr"
  },
  {
    "id": "fireball-burner",
    "name": "Fireball Burner",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "firecracker",
    "name": "Firecracker",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "fireworks-box",
    "name": "Fireworks Box",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "fireworks-box-blueprint",
    "name": "Fireworks Box Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "flame-spray",
    "name": "Flame Spray",
    "category": "Quick use",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "flow-controller",
    "name": "Flow Controller",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "flushing-terminal-key",
    "name": "Flushing Terminal Key",
    "category": "Trinket",
    "rarity": "Common",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "sell",
    "reason": "Trinket - vendor for 0cr"
  },
  {
    "id": "fossilized-lightning",
    "name": "Fossilized Lightning",
    "category": "Nature",
    "rarity": "Epic",
    "sellValue": 4000,
    "recycleValue": 1600,
    "decision": "keep",
    "reason": "Valuable natural resource"
  },
  {
    "id": "free-loadout-augment",
    "name": "Free Loadout Augment",
    "category": "Augment",
    "rarity": "Common",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Basic augment for rookie Raiders, offering slightly more backpack space and carry capacity."
  },
  {
    "id": "frequency-modulation-box",
    "name": "Frequency Modulation Box",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "fried-motherboard",
    "name": "Fried Motherboard",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "fruit-mix",
    "name": "Fruit Mix",
    "category": "Medical",
    "rarity": "Common",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Cosmetic or special item"
  },
  {
    "id": "frying-pan",
    "name": "Frying Pan",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "garlic-press",
    "name": "Garlic Press",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "gas-grenade",
    "name": "Gas Grenade",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "gas-grenade-trap",
    "name": "Gas Grenade Trap",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 300,
    "recycleValue": 120,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "gas-mine",
    "name": "Gas Mine",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "gas-mine-blueprint",
    "name": "Gas Mine Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "geiger-counter",
    "name": "Geiger Counter",
    "category": "Recyclable",
    "rarity": "Epic",
    "sellValue": 3500,
    "recycleValue": 1400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "great-muullein",
    "name": "Great Mullein",
    "category": "Nature",
    "rarity": "Uncommon",
    "sellValue": 300,
    "recycleValue": 120,
    "decision": "sell",
    "reason": "Nature item - sell for 300cr"
  },
  {
    "id": "green-light-stick",
    "name": "Green Light Stick",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 150,
    "recycleValue": 60,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "green-light-stick-blueprint",
    "name": "Green Light Stick Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "hairpin-i",
    "name": "Hairpin I",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 450,
    "recycleValue": 180,
    "decision": "keep",
    "reason": "Weapon worth 450cr"
  },
  {
    "id": "hairpin-ii",
    "name": "Hairpin II",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Weapon worth 1,000cr"
  },
  {
    "id": "hairpin-iii",
    "name": "Hairpin III",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon worth 2,000cr"
  },
  {
    "id": "hairpin-iv",
    "name": "Hairpin IV",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 2900,
    "recycleValue": 1160,
    "decision": "keep",
    "reason": "Weapon worth 2,900cr"
  },
  {
    "id": "headphones",
    "name": "Headphones",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "heavy-ammo",
    "name": "Heavy Ammo",
    "category": "Ammunition",
    "rarity": "Common",
    "sellValue": 12,
    "recycleValue": 4,
    "decision": "keep",
    "reason": "Heavy bullets used mainly with large-caliber weapons."
  },
  {
    "id": "heavy-fuze-grenade",
    "name": "Heavy Fuze Grenade",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 1600,
    "recycleValue": 640,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "heavy-gun-parts",
    "name": "Heavy Gun Parts",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 700,
    "recycleValue": 280,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "heavy-gun-parts-recipe",
    "name": "Heavy Gun Parts Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "heavy-shield",
    "name": "Heavy Shield",
    "category": "Shield",
    "rarity": "Epic",
    "sellValue": 5500,
    "recycleValue": 2200,
    "decision": "sell",
    "reason": "High value - sell for 5,500cr"
  },
  {
    "id": "herbal-bandage",
    "name": "Herbal Bandage",
    "category": "Quick Use",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "horizontal-grip",
    "name": "Horizontal Grip",
    "category": "Modification",
    "rarity": "Epic",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "horizontal-grip-blueprint",
    "name": "Horizontal Grip Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "hornet-driver",
    "name": "Hornet Driver",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "household-cleaner",
    "name": "Household Cleaner",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "hullcracker-blueprint",
    "name": "Hullcracker Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "hullcracker-i",
    "name": "Hullcracker I",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 10000,
    "recycleValue": 4000,
    "decision": "keep",
    "reason": "Weapon worth 10,000cr"
  },
  {
    "id": "hullcracker-ii",
    "name": "Hullcracker II",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 13000,
    "recycleValue": 5200,
    "decision": "keep",
    "reason": "Weapon worth 13,000cr"
  },
  {
    "id": "hullcracker-iii",
    "name": "Hullcracker III",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 17000,
    "recycleValue": 6800,
    "decision": "keep",
    "reason": "Weapon worth 17,000cr"
  },
  {
    "id": "hullcracker-iv",
    "name": "Hullcracker IV ",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 22000,
    "recycleValue": 8800,
    "decision": "keep",
    "reason": "Weapon worth 22,000cr"
  },
  {
    "id": "humidifier",
    "name": "Humidifier",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "ice-cream-scooper",
    "name": "Ice Cream Scooper",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "il-toro-recipe",
    "name": "Il Toro Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "il-toro-i",
    "name": "Il Toro I",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon worth 5,000cr"
  },
  {
    "id": "il-toro-ii",
    "name": "Il Toro II",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon worth 7,000cr"
  },
  {
    "id": "il-toro-iiii",
    "name": "Il Toro III",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 10000,
    "recycleValue": 4000,
    "decision": "keep",
    "reason": "Weapon worth 10,000cr"
  },
  {
    "id": "il-toro-iv",
    "name": "Il Toro IV",
    "category": "Weapon",
    "rarity": "Uncommon",
    "sellValue": 13000,
    "recycleValue": 5200,
    "decision": "keep",
    "reason": "Weapon worth 13,000cr"
  },
  {
    "id": "impure-arc-coolant",
    "name": "Impure ARC Coolant",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "industrial-battery",
    "name": "Industrial Battery",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "industrial-charger",
    "name": "Industrial Charger",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "industrial-magnet",
    "name": "Industrial Magnet",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "ion-sputter",
    "name": "Ion Sputter",
    "category": "Recyclable",
    "rarity": "Epic",
    "sellValue": 6000,
    "recycleValue": 2400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "jolt-mine",
    "name": "Jolt Mine",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 850,
    "recycleValue": 340,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "jolt-mine-recipe",
    "name": "Jolt Mine Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "junior-outfit",
    "name": "Junior (Outfit)",
    "category": "Cosmetic",
    "rarity": "Common",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Cosmetic or special item"
  },
  {
    "id": "jupiter-i",
    "name": "Jupiter",
    "category": "Weapon",
    "rarity": "Legendary",
    "sellValue": 34000,
    "recycleValue": 13600,
    "decision": "keep",
    "reason": "Weapon worth 34,000cr"
  },
  {
    "id": "jupiter-i-recipe",
    "name": "Jupiter Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "kettle-i",
    "name": "Kettle I",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 840,
    "recycleValue": 336,
    "decision": "keep",
    "reason": "Weapon worth 840cr"
  },
  {
    "id": "kettle-ii",
    "name": "Kettle II",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon worth 2,000cr"
  },
  {
    "id": "kettle-iii",
    "name": "Kettle III",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "keep",
    "reason": "Weapon worth 3,000cr"
  },
  {
    "id": "kettle-iv",
    "name": "Kettle IV",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon worth 5,000cr"
  },
  {
    "id": "kinetic-converter",
    "name": "Kinetic Converter",
    "category": "Modification",
    "rarity": "Legendary",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "kinetic-converter-recipe",
    "name": "Kinetic Converter Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "laboratory-reagents",
    "name": "Laboratory Reagents",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "lances-mixtape-5th-edition",
    "name": "Lance's Mixtape (5th Edition)",
    "category": "Trinket",
    "rarity": "Epic",
    "sellValue": 10000,
    "recycleValue": 4000,
    "decision": "sell",
    "reason": "Trinket - vendor for 10,000cr"
  },
  {
    "id": "laser-trap-lure-recipe",
    "name": "Laser Trap: Lure",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "launcher-ammo",
    "name": "Launcher Ammo",
    "category": "Ammunition",
    "rarity": "Rare",
    "sellValue": 250,
    "recycleValue": 100,
    "decision": "keep",
    "reason": "Anti-ARC payloads used mainly by the Hullcracker"
  },
  {
    "id": "leaper-pulse-unit",
    "name": "Leaper Pulse Unit",
    "category": "Throwable",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Throwable - useful in combat"
  },
  {
    "id": "lemon",
    "name": "Lemon",
    "category": "Nature",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "sell",
    "reason": "Nature item - sell for 640cr"
  },
  {
    "id": "lidar-scanner",
    "name": "Lidar Scanner",
    "category": "Trinket",
    "rarity": "Common",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "sell",
    "reason": "Trinket - vendor for 0cr"
  },
  {
    "id": "light-ammo",
    "name": "Light Ammo",
    "category": "Ammunition",
    "rarity": "Common",
    "sellValue": 4,
    "recycleValue": 1,
    "decision": "keep",
    "reason": "Light bullets used mainly with SMGs and light handguns. Such as Kettle, Stitcher, Burletta, Hairpin and Bobcat."
  },
  {
    "id": "light-bulb",
    "name": "Light Bulb",
    "category": "Trinket",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "sell",
    "reason": "Trinket - vendor for 2,000cr"
  },
  {
    "id": "light-gun-parts",
    "name": "Light Gun Parts",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 700,
    "recycleValue": 280,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "light-gun-parts-recipe",
    "name": "Light Gun Parts Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "light-impact-grenade",
    "name": "Light Impact Grenade",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "light-shield",
    "name": "Light Shield",
    "category": "Shield",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "A lightweight shield that offers limited protection without severely impacting mobility."
  },
  {
    "id": "lightweight-stock",
    "name": "Lightweight Stock",
    "category": "Modification",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "lightweight-stock-recipe",
    "name": "Lightweight Stock Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "lil-smoke-grenade",
    "name": "Li'l Smoke Grenade",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 300,
    "recycleValue": 120,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "looting-mk-1",
    "name": "Looting Mk. 1",
    "category": "Augment",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Basic looting augment. More backpack slots and weight capacity, but low defensive and tactical capability."
  },
  {
    "id": "looting-mk-2",
    "name": "Looting Mk. 2",
    "category": "Augment",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Significantly increases looting potential; adds slots for trinkets."
  },
  {
    "id": "looting-mk-3-cautious",
    "name": "Looting MK. 3 (Cautious)",
    "category": "Augment",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "High value - sell for 5,000cr"
  },
  {
    "id": "looting-mk-3-survivor",
    "name": "Looting MK. 3 (Survivor)",
    "category": "Augment",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "High value - sell for 5,000cr"
  },
  {
    "id": "looting-mk-3-survivor-blueprint",
    "name": "Looting MK. 3 (Survivor) Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "lure-grenade",
    "name": "Lure Grenade",
    "category": "Quick Use",
    "rarity": "Uncommon",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "lure-grenade-recipe",
    "name": "Lure Grenade Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "lure-grenade-trap",
    "name": "Lure Grenade Trap",
    "category": "Quick Use",
    "rarity": "Uncommon",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "magnet",
    "name": "Magnet",
    "category": "Topside Material",
    "rarity": "Uncommon",
    "sellValue": 300,
    "recycleValue": 120,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "magnetic-accelerator",
    "name": "Magnetic Accelerator",
    "category": "Refined Material",
    "rarity": "Epic",
    "sellValue": 5500,
    "recycleValue": 2200,
    "decision": "keep",
    "reason": "Crafting material - needed for upgrades"
  },
  {
    "id": "magnetron",
    "name": "Magnetron",
    "category": "Recyclable",
    "rarity": "Epic",
    "sellValue": 6000,
    "recycleValue": 2400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "matriarch-reactor",
    "name": "Matriarch Reactor",
    "category": "Recyclable",
    "rarity": "Legendary",
    "sellValue": 13000,
    "recycleValue": 5200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "mechanical-components",
    "name": "Mechanical Components",
    "category": "Refined Material",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Crafting material - needed for upgrades"
  },
  {
    "id": "medium-ammo",
    "name": "Medium Ammo",
    "category": "Ammunition",
    "rarity": "Common",
    "sellValue": 6,
    "recycleValue": 2,
    "decision": "keep",
    "reason": "Medium bullets used mainly with medium-caliber weapons. Such as Rattler, Tempest, Arpeggio, Renegade and Torrente."
  },
  {
    "id": "medium-gun-parts",
    "name": "Medium Gun Parts",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 700,
    "recycleValue": 280,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "medium-gun-parts-recipe",
    "name": "Medium Gun Parts Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "medium-shield",
    "name": "Medium Shield",
    "category": "Shield",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "A standard shield that blocks a medium portion of incoming damage at a moderate cost to mobility."
  },
  {
    "id": "metal-brackets",
    "name": "Metal Brackets",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "metal-parts",
    "name": "Metal Parts",
    "category": "Basic Material",
    "rarity": "Common",
    "sellValue": 75,
    "recycleValue": 30,
    "decision": "keep",
    "reason": "Used to craft a wide range of items."
  },
  {
    "id": "microscope",
    "name": "Microscope",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "mini-centrifuge",
    "name": "Mini Centrifuge",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "mod-components",
    "name": "Mod Components",
    "category": "Refined Material",
    "rarity": "Rare",
    "sellValue": 1750,
    "recycleValue": 700,
    "decision": "keep",
    "reason": "Crafting material - needed for upgrades"
  },
  {
    "id": "moss",
    "name": "Moss",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 500,
    "recycleValue": 200,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "motor",
    "name": "Motor",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "mushroom",
    "name": "Mushroom",
    "category": "Nature",
    "rarity": "Uncommon",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Valuable natural resource"
  },
  {
    "id": "music-album",
    "name": "Music Album",
    "category": "Trinket",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "sell",
    "reason": "Trinket - vendor for 3,000cr"
  },
  {
    "id": "music-box",
    "name": "Music Box",
    "category": "Trinket",
    "rarity": "Rare",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "Trinket - vendor for 5,000cr"
  },
  {
    "id": "muzzle-brake-i",
    "name": "Muzzle Brake I",
    "category": "Modification",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "muzzle-brake-ii",
    "name": "Muzzle Brake II",
    "category": "Modification",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "muzzle-brake-ii-recipe",
    "name": "Muzzle Brake II Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "muzzle-brake-iii",
    "name": "Muzzle Brake III",
    "category": "Modification",
    "rarity": "Rare",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "muzzle-brake-iii-recipe",
    "name": "Muzzle Brake III Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "noisemaker",
    "name": "Noisemaker",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "number-plate",
    "name": "Number Plate",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "oil",
    "name": "Oil",
    "category": "Topside Material",
    "rarity": "Uncommon",
    "sellValue": 300,
    "recycleValue": 120,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "olives",
    "name": "Olives",
    "category": "Nature",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "sell",
    "reason": "Nature item - sell for 640cr"
  },
  {
    "id": "osprey-recipe",
    "name": "Osprey Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "osprey-i",
    "name": "Osprey I",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon worth 7,000cr"
  },
  {
    "id": "osprey-ii",
    "name": "Osprey II",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 10000,
    "recycleValue": 4000,
    "decision": "keep",
    "reason": "Weapon worth 10,000cr"
  },
  {
    "id": "osprey-iii",
    "name": "Osprey III",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 13000,
    "recycleValue": 5200,
    "decision": "keep",
    "reason": "Weapon worth 13,000cr"
  },
  {
    "id": "osprey-iv",
    "name": "Osprey IV",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 17000,
    "recycleValue": 6800,
    "decision": "keep",
    "reason": "Weapon worth 17,000cr"
  },
  {
    "id": "padded-stock",
    "name": "Padded Stock",
    "category": "Modification",
    "rarity": "Epic",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "padded-stock-recipe",
    "name": "Padded Stock Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "painted-box",
    "name": "Painted Box",
    "category": "Trinket",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "sell",
    "reason": "Trinket - vendor for 2,000cr"
  },
  {
    "id": "patrol-car-key",
    "name": "Patrol Car Key",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "photoelectric-cloak",
    "name": "Photoelectric Cloak",
    "category": "Quick Use",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "High value consumable - 5,000cr"
  },
  {
    "id": "plastic-parts",
    "name": "Plastic Parts",
    "category": "Basic Material",
    "rarity": "Common",
    "sellValue": 60,
    "recycleValue": 24,
    "decision": "keep",
    "reason": "Used to craft a wide range of items."
  },
  {
    "id": "playing-cards",
    "name": "Playing Cards",
    "category": "Trinket",
    "rarity": "Rare",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "Trinket - vendor for 5,000cr"
  },
  {
    "id": "polluted-air-filter",
    "name": "Polluted Air Filter",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "pop-trigger",
    "name": "Pop Trigger",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "portable-television",
    "name": "Portable TV",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "poster-natural-wonder",
    "name": "Poster of Natural Wonder",
    "category": "Trinket",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "sell",
    "reason": "Trinket - vendor for 2,000cr"
  },
  {
    "id": "pottery",
    "name": "Pottery",
    "category": "Trinket",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "sell",
    "reason": "Trinket - vendor for 2,000cr"
  },
  {
    "id": "power-bank",
    "name": "Power Bank",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "power-cable",
    "name": "Power Cable",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "power-rod",
    "name": "Power Rod",
    "category": "Advanced Material",
    "rarity": "Epic",
    "sellValue": 5500,
    "recycleValue": 2200,
    "decision": "keep",
    "reason": "Crafting material - needed for upgrades"
  },
  {
    "id": "prickly-pear",
    "name": "Prickly Pear",
    "category": "Nature",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "sell",
    "reason": "Nature item - sell for 640cr"
  },
  {
    "id": "processor",
    "name": "Processor",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 500,
    "recycleValue": 200,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "projector",
    "name": "Projector",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "pulse-mine",
    "name": "Pulse Mine",
    "category": "Quick Use",
    "rarity": "Uncommon",
    "sellValue": 470,
    "recycleValue": 188,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "pulse-mine-blueprint",
    "name": "Pulse Mine Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "queen-reactor",
    "name": "Queen Reactor",
    "category": "Recyclable",
    "rarity": "Legendary",
    "sellValue": 13000,
    "recycleValue": 5200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "radio",
    "name": "Radio",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "radio-relay",
    "name": "Radio Relay",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "raider-hatch-key",
    "name": "Raider Hatch Key",
    "category": "Key",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "rattler-i",
    "name": "Rattler I",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 1750,
    "recycleValue": 700,
    "decision": "keep",
    "reason": "Weapon worth 1,750cr"
  },
  {
    "id": "rattler-ii",
    "name": "Rattler II",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "keep",
    "reason": "Weapon worth 3,000cr"
  },
  {
    "id": "rattler-iii",
    "name": "Rattler III",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon worth 5,000cr"
  },
  {
    "id": "rattler-iv",
    "name": "Rattler IV",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon worth 7,000cr"
  },
  {
    "id": "recorder",
    "name": "Recorder",
    "category": "Quick Use",
    "rarity": "Uncommon",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "red-coral-jewelry",
    "name": "Red Coral Jewelry",
    "category": "Trinket",
    "rarity": "Rare",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "Trinket - vendor for 5,000cr"
  },
  {
    "id": "red-light-stick",
    "name": "Red Light Stick",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 150,
    "recycleValue": 60,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "red-light-stick-blueprint",
    "name": "Red Light Stick Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "refinement-1",
    "name": "Refinement 1",
    "category": "Refinement",
    "rarity": "Common",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Cosmetic or special item"
  },
  {
    "id": "remote-control",
    "name": "Remote Control",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "remote-raider-flare",
    "name": "Remote Raider Flare",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "remote-raider-flare-blueprint",
    "name": "Remote Raider Flare Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "renegade-i",
    "name": "Renegade I",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon worth 7,000cr"
  },
  {
    "id": "renegade-ii",
    "name": "Renegade II",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 10000,
    "recycleValue": 4000,
    "decision": "keep",
    "reason": "Weapon worth 10,000cr"
  },
  {
    "id": "renegade-iii",
    "name": "Renegade III",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 13000,
    "recycleValue": 5200,
    "decision": "keep",
    "reason": "Weapon worth 13,000cr"
  },
  {
    "id": "renegade-iv",
    "name": "Renegade IV",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 17000,
    "recycleValue": 6800,
    "decision": "keep",
    "reason": "Weapon worth 17,000cr"
  },
  {
    "id": "resin",
    "name": "Resin",
    "category": "Nature",
    "rarity": "Common",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Valuable natural resource"
  },
  {
    "id": "ripped-safety-vest",
    "name": "Ripped Safety Vest",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "rocketeer-part",
    "name": "Rocketeer Driver",
    "category": "Recyclable",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "rocket-thruster",
    "name": "Rocket Thruster",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "roots",
    "name": "Roots",
    "category": "Nature",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "sell",
    "reason": "Nature item - sell for 640cr"
  },
  {
    "id": "rope",
    "name": "Rope",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 500,
    "recycleValue": 200,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "rosary",
    "name": "Rosary",
    "category": "Trinket",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "sell",
    "reason": "Trinket - vendor for 2,000cr"
  },
  {
    "id": "rotary-encoder",
    "name": "Rotary Encoder",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "rubber-duck",
    "name": "Rubber Duck",
    "category": "Trinket",
    "rarity": "Common",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "sell",
    "reason": "Trinket - vendor for 1,000cr"
  },
  {
    "id": "rubber-pad",
    "name": "Rubber Pad",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "rubber-parts-recipe",
    "name": "Rubber Parts",
    "category": "Basic Material",
    "rarity": "Common",
    "sellValue": 50,
    "recycleValue": 20,
    "decision": "keep",
    "reason": "Used to craft a wide range of items."
  },
  {
    "id": "ruined-accordion",
    "name": "Ruined Accordion",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "ruined-augment",
    "name": "Ruined Augment",
    "category": "Recyclable",
    "rarity": "Common",
    "sellValue": 270,
    "recycleValue": 108,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "ruined-baton",
    "name": "Ruined Baton",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "ruined-handcuffs",
    "name": "Ruined Handcuffs",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "ruined-parachute",
    "name": "Ruined Parachute",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "ruined-riot-shield",
    "name": "Ruined Riot Shield",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "ruined-tactical-vest",
    "name": "Ruined Tactical Vest",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "rusted-bolts",
    "name": "Rusted Bolts",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "rusted-gear",
    "name": "Rusted Gear",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "rusted-shut-medical-kit",
    "name": "Rusted Shut Medical Kit",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "rusted-tools",
    "name": "Rusted Tools",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "rusty-arc-steel",
    "name": "Rusty ARC Steel",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "sample-cleaner",
    "name": "Sample Cleaner",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "seeker-grenade",
    "name": "Seeker Grenade",
    "category": "Quick Use",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "seeker-grenade-blueprint",
    "name": "Seeker Grenade Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "sensors-recipe",
    "name": "Sensors",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 500,
    "recycleValue": 200,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "sentinel-part",
    "name": "Sentinel Firing Core",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "shaker",
    "name": "Shaker",
    "category": "Quick Use",
    "rarity": "Uncommon",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "shield-recharger",
    "name": "Shield Recharger",
    "category": "Quick Use",
    "rarity": "Uncommon",
    "sellValue": 520,
    "recycleValue": 208,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "shotgun-ammo",
    "name": "Shotgun ammo",
    "category": "Ammunition",
    "rarity": "Common",
    "sellValue": 20,
    "recycleValue": 8,
    "decision": "keep",
    "reason": "Shotgun shells used for shotguns."
  },
  {
    "id": "shotgun-choke-i",
    "name": "Shotgun Choke I",
    "category": "Modification",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "shotgun-choke-ii",
    "name": "Shotgun Choke II",
    "category": "Modification",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "shotgun-choke-ii-recipe",
    "name": "Shotgun Choke II Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "shotgun-choke-iii",
    "name": "Shotgun Choke III",
    "category": "Modification",
    "rarity": "Rare",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "shotgun-choke-iii-recipe",
    "name": "Shotgun Choke III Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "shotgun-gun-parts",
    "name": "Shotgun Parts",
    "category": "Material",
    "rarity": "Rare",
    "sellValue": 700,
    "recycleValue": 280,
    "decision": "keep",
    "reason": "Specialized components from shotgun-type weapons, used in crafting."
  },
  {
    "id": "shotgun-silencer",
    "name": "Shotgun Silencer",
    "category": "Mods",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "High value - sell for 5,000cr"
  },
  {
    "id": "shotgun-silencer-blueprint",
    "name": "Shotgun Silencer Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "showstopper",
    "name": "Showstopper",
    "category": "Throwable",
    "rarity": "Rare",
    "sellValue": 2200,
    "recycleValue": 880,
    "decision": "keep",
    "reason": "Throwable - useful in combat"
  },
  {
    "id": "showstopper-blueprint",
    "name": "Showstopper Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "shrapnel-grenade",
    "name": "Shrapnel Grenade",
    "category": "Throwable",
    "rarity": "Uncommon",
    "sellValue": 800,
    "recycleValue": 320,
    "decision": "keep",
    "reason": "Throwable - useful in combat"
  },
  {
    "id": "shredder-gyro",
    "name": "Shredder Gyro",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "signal-amplifier",
    "name": "Signal Amplifier",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "silencer-i",
    "name": "Silencer I",
    "category": "Modification",
    "rarity": "Uncommon",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "silencer-i-recipe",
    "name": "Silencer I Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "silencer-ii",
    "name": "Silencer II",
    "category": "Modification",
    "rarity": "Rare",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "silencer-ii-recipe",
    "name": "Silencer II Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "silencer-iii",
    "name": "Silencer III",
    "category": "Modification",
    "rarity": "Epic",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "silencer-iii-recipe",
    "name": "Silencer III Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "silver-teaspoon-set",
    "name": "Silver Teaspoon Set",
    "category": "Trinket",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "sell",
    "reason": "Trinket - vendor for 3,000cr"
  },
  {
    "id": "simple-gun-parts",
    "name": "Simple Gun Parts",
    "category": "Topside Material",
    "rarity": "Uncommon",
    "sellValue": 330,
    "recycleValue": 132,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "smoke-grenade",
    "name": "Smoke Grenade",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "smoke-grenade-blueprint",
    "name": "Smoke Grenade Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "laser-trap-smoke-recipe",
    "name": "Smoke Grenade Trap",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "snap-blast-grenade",
    "name": "Snap Blast Grenade",
    "category": "Quick Use",
    "rarity": "Uncommon",
    "sellValue": 800,
    "recycleValue": 320,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "snap-hook",
    "name": "Snap Hook",
    "category": "Quick Use",
    "rarity": "Legendary",
    "sellValue": 14000,
    "recycleValue": 5600,
    "decision": "sell",
    "reason": "High value consumable - 14,000cr"
  },
  {
    "id": "snap-hook-recipe",
    "name": "Snap Hook Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "snitch-scanner",
    "name": "Snitch Scanner",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "snowball",
    "name": "Snowball",
    "category": "Nature",
    "rarity": "Common",
    "sellValue": 10,
    "recycleValue": 4,
    "decision": "sell",
    "reason": "Nature item - sell for 10cr"
  },
  {
    "id": "spaceport-container-storage-key",
    "name": "Spaceport Container Storage Key",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "spaceport-ground-control-key",
    "name": "Spaceport Control Tower Key",
    "category": "Key",
    "rarity": "Rare",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "spaceport-outskirts-bunker-key",
    "name": "Spaceport Outskirts Bunker Key",
    "category": "Key",
    "rarity": "Rare",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "spaceport-trench-tower-key",
    "name": "Spaceport Trench Tower Key",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "spaceport-warehouse-key",
    "name": "Spaceport Warehouse Key",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "speaker-component",
    "name": "Speaker Component",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 500,
    "recycleValue": 200,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "spectrometer",
    "name": "Spectrometer",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "spectrum-analyzer",
    "name": "Spectrum Analyzer",
    "category": "Recyclable",
    "rarity": "Epic",
    "sellValue": 3500,
    "recycleValue": 1400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "spotter-relay",
    "name": "Spotter Relay",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "spring-cushion",
    "name": "Spring Cushion",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "stable-stock-i",
    "name": "Stable Stock I",
    "category": "Modification",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "stable-stock-ii",
    "name": "Stable Stock II",
    "category": "Modification",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "stable-stock-ii-recipe",
    "name": "Stable Stock II Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "stable-stock-iii",
    "name": "Stable Stock III",
    "category": "Modification",
    "rarity": "Rare",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "stable-stock-iii-recipe",
    "name": "Stable Stock III Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "statuette",
    "name": "Statuette",
    "category": "Trinket",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "sell",
    "reason": "Trinket - vendor for 3,000cr"
  },
  {
    "id": "spring",
    "name": "Steel Spring",
    "category": "Topside Material",
    "rarity": "Uncommon",
    "sellValue": 300,
    "recycleValue": 120,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "stella-montis-archives-key",
    "name": "Stella Montis Archives Key",
    "category": "Key",
    "rarity": "Epic",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "stella-montis-assembly-admin-key",
    "name": "Stella Montis Assembly Admin Key",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "stella-montis-medical-storage-key",
    "name": "Stella Montis Medical Storage Key",
    "category": "Key",
    "rarity": "Uncommon",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "stella-montis-security-checkpoint-key",
    "name": "Stella Montis Security Checkpoint Key",
    "category": "Key",
    "rarity": "Rare",
    "sellValue": 100,
    "recycleValue": 40,
    "decision": "keep",
    "reason": "Key - opens locked areas"
  },
  {
    "id": "sterilized-bandage",
    "name": "Sterilized Bandage",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "stitcher-i",
    "name": "Stitcher I",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 800,
    "recycleValue": 320,
    "decision": "keep",
    "reason": "Weapon worth 800cr"
  },
  {
    "id": "stitcher-ii",
    "name": "Stitcher II",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon worth 2,000cr"
  },
  {
    "id": "stitcher-iii",
    "name": "Stitcher III",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "keep",
    "reason": "Weapon worth 3,000cr"
  },
  {
    "id": "stitcher-iv",
    "name": "Stitcher IV",
    "category": "Weapon",
    "rarity": "Common",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Weapon worth 5,000cr"
  },
  {
    "id": "surge-shield-recharger",
    "name": "Surge Shield Recharger",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 1200,
    "recycleValue": 480,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "surveyor-vault",
    "name": "Surveyor Vault",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "synthesized-fuel",
    "name": "Synthesized Fuel",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 700,
    "recycleValue": 280,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "syringe",
    "name": "Syringe",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 500,
    "recycleValue": 200,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "tactical-mk-1",
    "name": "Tactical Mk. 1",
    "category": "Augment",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Basic tactical augment. More Quick Use slots for more tactical choice, but limited survivability and slightly lower looting potential."
  },
  {
    "id": "tactical-mk-2",
    "name": "Tactical Mk. 2",
    "category": "Augment",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Adds more backpack space and an extra utility item slot."
  },
  {
    "id": "tactical-mk3-defensive",
    "name": "Tactical Mk.3 (Defensive)",
    "category": "Augment",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "High value - sell for 5,000cr"
  },
  {
    "id": "tactical-mk3-defensive-blueprint",
    "name": "Tactical MK.3 (Defensive) Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "tactical-mk-3-healing",
    "name": "Tactical Mk. 3 (Healing)",
    "category": "Augment",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "High value - sell for 5,000cr"
  },
  {
    "id": "tacical-mk3-healing-blueprint",
    "name": "Tactical MK.3 (Healing) Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "tagging-grenade",
    "name": "Tagging Grenade",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "tagging-grenade-recipe",
    "name": "Tagging Grenade Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "tattered-arc-lining",
    "name": "Tattered ARC Lining",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "tattered-clothes",
    "name": "Tattered Clothes",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "telemetry-transceiver",
    "name": "Telemetry Transceiver",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "tempest-i",
    "name": "Tempest I",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 13000,
    "recycleValue": 5200,
    "decision": "keep",
    "reason": "Weapon worth 13,000cr"
  },
  {
    "id": "tempest-i-recipe",
    "name": "Tempest I Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "tempest-ii",
    "name": "Tempest II",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 17000,
    "recycleValue": 6800,
    "decision": "keep",
    "reason": "Weapon worth 17,000cr"
  },
  {
    "id": "tempest-iii",
    "name": "Tempest III",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 22000,
    "recycleValue": 8800,
    "decision": "keep",
    "reason": "Weapon worth 22,000cr"
  },
  {
    "id": "tempest-iv",
    "name": "Tempest IV",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Weapon worth 0cr"
  },
  {
    "id": "thermostat",
    "name": "Thermostat",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "tick-pod",
    "name": "Tick Pod",
    "category": "Recyclable",
    "rarity": "Uncommon",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "toaster",
    "name": "Toaster",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "torch-ginger",
    "name": "Torch Ginger",
    "category": "Material",
    "rarity": "Uncommon",
    "sellValue": 300,
    "recycleValue": 120,
    "decision": "keep",
    "reason": "A plant used to craft medical supplies."
  },
  {
    "id": "torn-blanket",
    "name": "Torn Blanket",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "torn-book",
    "name": "Torn Book",
    "category": "Trinket",
    "rarity": "Common",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "sell",
    "reason": "Trinket - vendor for 1,000cr"
  },
  {
    "id": "torrent-i-recipe",
    "name": "Torrente Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "torrente-i",
    "name": "Torrente I",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon worth 7,000cr"
  },
  {
    "id": "torrente-ii",
    "name": "Torrente II",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 10000,
    "recycleValue": 4000,
    "decision": "keep",
    "reason": "Weapon worth 10,000cr"
  },
  {
    "id": "torrente-iii",
    "name": "Torrente III",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 13000,
    "recycleValue": 5200,
    "decision": "keep",
    "reason": "Weapon worth 13,000cr"
  },
  {
    "id": "torrente-iv",
    "name": "Torrente IV",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 15000,
    "recycleValue": 6000,
    "decision": "keep",
    "reason": "Weapon worth 15,000cr"
  },
  {
    "id": "trailblazer-grenade",
    "name": "Trailblazer Grenade",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 1600,
    "recycleValue": 640,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "trailblazer-grenade-blueprint",
    "name": "Trailblazer Grenade Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "trigger-nade",
    "name": "Trigger Nade",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "trigger-nade-recipe",
    "name": "Trigger Nade Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "turbo-pump",
    "name": "Turbo Pump",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "unusable-weapon",
    "name": "Unusable Weapon",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "vase",
    "name": "Vase",
    "category": "Trinket",
    "rarity": "Rare",
    "sellValue": 3000,
    "recycleValue": 1200,
    "decision": "sell",
    "reason": "Trinket - vendor for 3,000cr"
  },
  {
    "id": "venator-recipe",
    "name": "Venator Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "venator-i",
    "name": "Venator I",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 7000,
    "recycleValue": 2800,
    "decision": "keep",
    "reason": "Weapon worth 7,000cr"
  },
  {
    "id": "venator-ii",
    "name": "Venator II",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Weapon worth 0cr"
  },
  {
    "id": "venator-iii",
    "name": "Venator III",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Weapon worth 0cr"
  },
  {
    "id": "venator-iv",
    "name": "Venator IV",
    "category": "Weapon",
    "rarity": "Rare",
    "sellValue": 10540,
    "recycleValue": 4216,
    "decision": "keep",
    "reason": "Weapon worth 10,540cr"
  },
  {
    "id": "vertical-grip-i",
    "name": "Vertical Grip I",
    "category": "Modification",
    "rarity": "Common",
    "sellValue": 640,
    "recycleValue": 256,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "vertical-grip-ii",
    "name": "Vertical Grip II",
    "category": "Modification",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "vertical-grip-ii-recipe",
    "name": "Vertical Grip II Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "vertical-grip-iii",
    "name": "Vertical Grip III",
    "category": "Modification",
    "rarity": "Rare",
    "sellValue": 0,
    "recycleValue": 0,
    "decision": "keep",
    "reason": "Weapon mod - improves your guns"
  },
  {
    "id": "vertical-grip-iii-recipe",
    "name": "Vertical Grip III Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "very-comfortable-pillow",
    "name": "Very Comfortable Pillow",
    "category": "Trinket",
    "rarity": "Uncommon",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "sell",
    "reason": "Trinket - vendor for 2,000cr"
  },
  {
    "id": "vita-shot",
    "name": "Vita Shot",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 2000,
    "recycleValue": 800,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "vita-shot-recipe",
    "name": "Vita Shot Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "vita-spray",
    "name": "Vita Spray",
    "category": "Quick Use",
    "rarity": "Epic",
    "sellValue": 2880,
    "recycleValue": 1152,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "vita-spray-recipe",
    "name": "Vita Spray Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "voltage-converter",
    "name": "Voltage Converter",
    "category": "Topside Material",
    "rarity": "Rare",
    "sellValue": 500,
    "recycleValue": 200,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "vulcano-blueprint",
    "name": "Vulcano Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "vulcano-i",
    "name": "Vulcano I",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 10000,
    "recycleValue": 4000,
    "decision": "keep",
    "reason": "Weapon worth 10,000cr"
  },
  {
    "id": "vulcano-ii",
    "name": "Vulcano II",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 13000,
    "recycleValue": 5200,
    "decision": "keep",
    "reason": "Weapon worth 13,000cr"
  },
  {
    "id": "vulcano-iii",
    "name": "Vulcano III",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 17000,
    "recycleValue": 6800,
    "decision": "keep",
    "reason": "Weapon worth 17,000cr"
  },
  {
    "id": "vulcano-iv",
    "name": "Vulcano IV",
    "category": "Weapon",
    "rarity": "Epic",
    "sellValue": 22000,
    "recycleValue": 8800,
    "decision": "keep",
    "reason": "Weapon worth 22,000cr"
  },
  {
    "id": "wasp-driver",
    "name": "Wasp Driver",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "water-filter",
    "name": "Water Filter",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "water-pump",
    "name": "Water Pump",
    "category": "Recyclable",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "recycle",
    "reason": "Recyclable - breaks down into materials"
  },
  {
    "id": "wires-recipe",
    "name": "Wires",
    "category": "Topside Material",
    "rarity": "Uncommon",
    "sellValue": 200,
    "recycleValue": 80,
    "decision": "keep",
    "reason": "ARC material - needed for upgrades"
  },
  {
    "id": "wolfpack",
    "name": "WolfPack",
    "category": "Quick Use",
    "rarity": "Epic",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "sell",
    "reason": "High value consumable - 5,000cr"
  },
  {
    "id": "wolfpack-recipe",
    "name": "Wolfpack Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "yellow-light-stick",
    "name": "Yellow Light Stick",
    "category": "Quick Use",
    "rarity": "Common",
    "sellValue": 150,
    "recycleValue": 60,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  },
  {
    "id": "yellow-light-stick-blueprint",
    "name": "Yellow Light Stick Blueprint",
    "category": "Blueprint",
    "rarity": "Legendary",
    "sellValue": 5000,
    "recycleValue": 2000,
    "decision": "keep",
    "reason": "Blueprint - unlocks crafting recipes"
  },
  {
    "id": "zipline",
    "name": "Zipline",
    "category": "Quick Use",
    "rarity": "Rare",
    "sellValue": 1000,
    "recycleValue": 400,
    "decision": "keep",
    "reason": "Consumable - use in raids"
  }
];

// Quick lookup by name (case insensitive)
export function findItem(name: string): Item | undefined {
  const lower = name.toLowerCase();
  return ITEMS.find(i => i.name.toLowerCase().includes(lower) || lower.includes(i.name.toLowerCase()));
}

// Fuzzy match for OCR text
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
