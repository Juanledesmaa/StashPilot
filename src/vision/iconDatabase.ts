// Icon Database - Maps cheat sheet positions to item names
// Coordinates are for the original 2858x4518 image

export interface IconEntry {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hash?: string; // Will be computed
}

// Cheat sheet grid configuration
// The "Sell vs Recycle For Profit" section
const GRID_CONFIG = {
  startX: 45,      // Left edge of first icon
  startY: 95,      // Top edge of first row
  cellWidth: 283,  // Width of each cell
  cellHeight: 145, // Height of each cell
  iconWidth: 90,   // Actual icon size within cell
  iconHeight: 70,
  iconOffsetX: 5,  // Offset from cell left to icon
  iconOffsetY: 15, // Offset from cell top to icon
  cols: 10,
  rows: 9,
};

// Item names from the cheat sheet (row by row, left to right)
// Based on the "Sell vs Recycle For Profit" section
const CHEAT_SHEET_ITEMS = [
  // Row 1
  'Damaged Rocketeer Driver', 'Processor', 'ARC Circuitry', 'ARC Motion Core',
  'Simple Gun Parts', 'Durable Cloth', 'Antiseptic', 'Magnetic Accelerator',
  'Rope', 'Voltage Converter',
  // Row 2
  'Processor', 'Mod Components', 'Speaker Component', 'Advanced Mechanical Components',
  'Power Rod', 'Sensors', 'Syringe', 'Exodus Modules',
  'Rusted Riot Shield', 'Moss',
  // Row 3
  'Moss', 'Damaged ARC Motion Core', 'Burned ARC Circuitry', 'Fireball Burner',
  'Snitch Scanner', 'Stitch Relay', 'Camera Lens', 'Frequency Modulation Box',
  'Spectrometer', 'Telemetry Transceiver',
  // Row 4
  'Telemetry Transceiver', 'Rotary Encoder', 'Signal Amplifier', 'Turbo Pump',
  'Sentinel Firing Core', 'Bastion Cell', 'Bombardier Cell', 'Tick Pod',
  'Fried Motherboard', 'Rusted Gear',
  // Row 5
  'Rusted Gear', 'Water Pump', 'Laboratory Reagents', 'Cooling Fan',
  'Ice Cream Scooper', 'Number Plate', 'ARC Synthetic Resin', 'Surveyor Vault',
  'Queen Reactor', 'Coolant',
  // Row 6
  'Coolant', 'Headphones', 'Industrial Battery', 'Portable TV',
  'Thermostat', 'Household Cleaner', 'Tattered Clothes', 'Crumpled Plastic Bottle',
  'Cracked Bioscanner', 'Deflated Football',
  // Row 7
  'Deflated Football', 'Garlic Press', 'Polluted Air Filter', 'Power Bank',
  'Projector', 'Rubber Pad', 'Ruined Accordion', 'Toaster',
  'Candle Holder', 'Metal Brackets',
  // Row 8
  'Metal Brackets', 'Torn Blanket', 'Motor', 'Ripped Safety Vest',
  'Spring Cushion', 'Broken Flashlight', 'Broken Handheld Radio', 'Bicycle Pump',
  'Power Cable', 'Humidifier',
  // Row 9
  'Humidifier', 'Water Filter', 'Radio', 'Rusted Shut Medical Kit',
  'Geiger Counter', 'Remote Control', 'Frying Pan', 'Advanced Electrical Components',
  'Advanced ARC Powercell', '',
];

// Generate icon entries from grid
export function generateIconEntries(): IconEntry[] {
  const entries: IconEntry[] = [];
  const { startX, startY, cellWidth, cellHeight, iconWidth, iconHeight, iconOffsetX, iconOffsetY, cols } = GRID_CONFIG;

  CHEAT_SHEET_ITEMS.forEach((name, index) => {
    if (!name) return; // Skip empty entries

    const col = index % cols;
    const row = Math.floor(index / cols);

    const cellX = startX + col * cellWidth;
    const cellY = startY + row * cellHeight;

    entries.push({
      id: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name,
      x: cellX + iconOffsetX,
      y: cellY + iconOffsetY,
      width: iconWidth,
      height: iconHeight,
    });
  });

  return entries;
}

// High-priority components from lower section
const HIGH_PRIORITY_COMPONENTS = [
  { name: 'Fabric', x: 280, y: 1580 },
  { name: 'Durable Cloth', x: 470, y: 1580 },
  { name: 'Magnet', x: 280, y: 1780 },
  { name: 'Electrical Components', x: 280, y: 1980 },
  { name: 'Steel Spring', x: 280, y: 2180 },
  { name: 'Advanced Electrical Components', x: 1650, y: 1520 },
  { name: 'Mechanical Components', x: 1650, y: 1720 },
  { name: 'Advanced Mechanical Components', x: 1650, y: 1920 },
  { name: 'Battery', x: 1650, y: 2120 },
];

// All icon entries (main grid + high priority)
export const ICON_DATABASE: IconEntry[] = generateIconEntries();

// Map for quick lookup by name
export const ICON_BY_NAME = new Map<string, IconEntry>(
  ICON_DATABASE.map(entry => [entry.name.toLowerCase(), entry])
);

// Map for quick lookup by ID
export const ICON_BY_ID = new Map<string, IconEntry>(
  ICON_DATABASE.map(entry => [entry.id, entry])
);
