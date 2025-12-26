# StashPilot

Fast loot triage for Arc Raiders. Screenshot or add items → Get instant KEEP / SELL / RECYCLE recommendations.

## Features

- **Screenshot OCR** - Upload inventory screenshot, auto-detect items via Tesseract.js
- **Manual entry** - Search and tap to add items
- **Instant recommendations** - 70+ items with pre-computed decisions
- **Copy checklist** - Export your triage list for in-game use

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## How It Works

1. **Screenshot tab**: Drop image → Scan → Review detected items → Add
2. **Manual tab**: Search → Tap item → Done
3. Items auto-sorted into KEEP (green) / SELL (yellow) / RECYCLE (blue)
4. Copy checklist to clipboard

## Tech Stack

- React 18 + TypeScript + Vite
- Tesseract.js (OCR)
- Plain CSS (no frameworks)

## Data Sources

Item recommendations based on:
- [Arc Raiders Cheat Sheet](https://arcraiderscheatsheet.org/)
- [MetaForge API](https://metaforge.app/arc-raiders/api)
- [RaidTheory GitHub](https://github.com/RaidTheory/arcraiders-data)

## Status

🚧 **Work in Progress** - Testing OCR accuracy with Arc Raiders screenshots
