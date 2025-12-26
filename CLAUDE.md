# StashPilot

## Current Status: Working on Screenshot Recognition

The app now has Tesseract.js OCR integrated for screenshot-based item detection. Testing and tuning the accuracy for Arc Raiders inventory screenshots.

## What It Does

Fast loot triage tool for Arc Raiders. Player uploads a screenshot or manually adds items → App tells them what to KEEP, SELL, or RECYCLE with reasoning.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## File Structure

```
src/
├── App.tsx          # Main component with tabs, OCR, triage UI
├── App.css          # Styles (dark theme, mobile-friendly)
├── data/items.ts    # 70+ items with recommendations + fuzzy matching
└── main.tsx         # Entry point
```

## Features

### Two Input Modes
1. **Screenshot** (default tab) - Upload image → OCR scan → Review matches → Add items
2. **Manual List** - Search and tap to add items

### Screenshot OCR Flow
1. Drop/upload screenshot of inventory
2. Click "Scan for Items"
3. Tesseract.js processes image (shows progress)
4. Detected text fuzzy-matched to item database
5. Review matches, manually assign unrecognized text
6. Adjust quantities, click "Add X Items"

### Recommendations
Each item has a pre-computed decision:
- **KEEP**: Quest items, upgrade materials, keys, blueprints, good weapons
- **SELL**: High-value vendor trash, junk not needed for anything
- **RECYCLE**: When recycle value > sell value

## Tech Stack

- React 18 + TypeScript
- Vite
- Tesseract.js (OCR)
- Plain CSS

## Item Database

`src/data/items.ts` contains 70+ Arc Raiders items with:
- `name`, `category`, `rarity`
- `sellValue`, `recycleValue`
- `decision` (keep/sell/recycle)
- `reason` (explanation shown to user)

### Adding Items

```ts
{
  id: 'unique-id',
  name: 'Item Name',
  category: 'Category',
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary',
  sellValue: 1000,
  recycleValue: 500,
  decision: 'keep' | 'sell' | 'recycle',
  reason: 'Why this decision'
}
```

### Fuzzy Matching

`findItemByName()` handles OCR typos:
1. Exact match
2. Contains match
3. Word-based scoring (best match wins)

## API Data Sources

For expanding the item database:

- **MetaForge API**: `https://metaforge.app/api/arc-raiders/items` - 517 items with values
- **RaidTheory GitHub**: `https://github.com/RaidTheory/arcraiders-data` - JSON files
- **Needed Items**: `https://metaforge.app/arc-raiders/needed-items` - Quest requirements
- **Cheat Sheet**: `https://arcraiderscheatsheet.org/` - Community recommendations

## Known Issues / TODO

- [ ] OCR accuracy varies with screenshot quality - need to test with real Arc Raiders screenshots
- [ ] May need image preprocessing (contrast, crop to inventory area) for better results
- [ ] Consider adding common OCR error corrections (e.g., "0" → "O")
- [ ] Expand item database to cover all 517 items from MetaForge

## User Flow

```
Screenshot Mode:
Upload → Scan → Review Matches → Add Items → See KEEP/SELL/RECYCLE → Copy Checklist

Manual Mode:
Search → Tap Item → See KEEP/SELL/RECYCLE → Copy Checklist
```

## Dependencies

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.6.2",
  "tesseract.js": "^6.0.1",
  "zod": "^3.25.56",
  "idb": "^8.0.3"
}
```

Note: `react-router-dom`, `zod`, and `idb` were installed earlier but not currently used. Can be removed to reduce bundle size, or kept for future features (data persistence, validation).
