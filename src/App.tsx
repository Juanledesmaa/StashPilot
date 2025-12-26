import { useState, useRef, useCallback } from 'react';
import Tesseract from 'tesseract.js';
import { searchItems, findItemByName, type Item } from './data/items';
import './App.css';

type InputMode = 'list' | 'screenshot';

interface LootItem {
  item: Item;
  qty: number;
}

interface DetectedItem {
  text: string;
  item: Item | null;
  qty: number;
  selected: boolean;
}

export function App() {
  const [mode, setMode] = useState<InputMode>('screenshot');
  const [loot, setLoot] = useState<LootItem[]>([]);

  // List mode state
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Screenshot mode state
  const [image, setImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [detected, setDetected] = useState<DetectedItem[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const results = searchItems(search);

  // Add single item (list mode)
  const addItem = (item: Item) => {
    setLoot(prev => {
      const existing = prev.find(l => l.item.id === item.id);
      if (existing) {
        return prev.map(l => l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l);
      }
      return [...prev, { item, qty: 1 }];
    });
    setSearch('');
    setShowSearch(false);
  };

  // Add multiple items (screenshot mode)
  const addDetectedItems = () => {
    const toAdd = detected.filter(d => d.selected && d.item);
    toAdd.forEach(d => {
      if (d.item) {
        setLoot(prev => {
          const existing = prev.find(l => l.item.id === d.item!.id);
          if (existing) {
            return prev.map(l => l.item.id === d.item!.id ? { ...l, qty: l.qty + d.qty } : l);
          }
          return [...prev, { item: d.item!, qty: d.qty }];
        });
      }
    });
    // Clear screenshot state
    setImage(null);
    setDetected([]);
  };

  const removeItem = (id: string) => {
    setLoot(prev => prev.filter(l => l.item.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    if (qty < 1) return removeItem(id);
    setLoot(prev => prev.map(l => l.item.id === id ? { ...l, qty } : l));
  };

  const clearAll = () => {
    setLoot([]);
    setImage(null);
    setDetected([]);
  };

  // Screenshot handling
  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      setDetected([]);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const processScreenshot = async () => {
    if (!image) return;
    setProcessing(true);
    setProgress(0);

    try {
      const result = await Tesseract.recognize(image, 'eng', {
        logger: (m) => {
          if (m.status === 'recognizing text') {
            setProgress(Math.round(m.progress * 100));
          }
        },
      });

      // Parse OCR text and match to items
      const lines = result.data.text
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 2);

      const detectedItems: DetectedItem[] = [];

      for (const line of lines) {
        // Try to extract quantity (e.g., "x5", "5x", or just number at end)
        const qtyMatch = line.match(/[x×]?\s*(\d+)\s*[x×]?/i);
        const qty = qtyMatch ? parseInt(qtyMatch[1]) : 1;

        // Clean the line for item matching
        const cleanText = line
          .replace(/[x×]?\s*\d+\s*[x×]?/gi, '')
          .replace(/[^a-zA-Z\s'-]/g, '')
          .trim();

        if (cleanText.length < 2) continue;

        // Try to match to an item
        const item = findItemByName(cleanText);

        detectedItems.push({
          text: line,
          item,
          qty: Math.min(qty, 99),
          selected: item !== null,
        });
      }

      setDetected(detectedItems);
    } catch (error) {
      console.error('OCR failed:', error);
      alert('Failed to process screenshot. Try a clearer image.');
    } finally {
      setProcessing(false);
      setProgress(0);
    }
  };

  const toggleDetected = (index: number) => {
    setDetected(prev => prev.map((d, i) =>
      i === index ? { ...d, selected: !d.selected } : d
    ));
  };

  const updateDetectedQty = (index: number, qty: number) => {
    setDetected(prev => prev.map((d, i) =>
      i === index ? { ...d, qty: Math.max(1, qty) } : d
    ));
  };

  const updateDetectedItem = (index: number, item: Item) => {
    setDetected(prev => prev.map((d, i) =>
      i === index ? { ...d, item, selected: true } : d
    ));
  };

  // Grouping and totals
  const grouped = {
    keep: loot.filter(l => l.item.decision === 'keep'),
    sell: loot.filter(l => l.item.decision === 'sell'),
    recycle: loot.filter(l => l.item.decision === 'recycle'),
  };

  const totalSellValue = grouped.sell.reduce((sum, l) => sum + l.item.sellValue * l.qty, 0);
  const totalRecycleValue = grouped.recycle.reduce((sum, l) => sum + l.item.recycleValue * l.qty, 0);

  const copyChecklist = () => {
    let text = '=== STASHPILOT TRIAGE ===\n\n';
    if (grouped.keep.length) {
      text += '📦 STASH THESE:\n';
      grouped.keep.forEach(l => text += `  • ${l.item.name} x${l.qty}\n`);
      text += '\n';
    }
    if (grouped.sell.length) {
      text += `💰 SELL THESE (${totalSellValue.toLocaleString()}cr):\n`;
      grouped.sell.forEach(l => text += `  • ${l.item.name} x${l.qty} = ${(l.item.sellValue * l.qty).toLocaleString()}cr\n`);
      text += '\n';
    }
    if (grouped.recycle.length) {
      text += `♻️ RECYCLE THESE (~${totalRecycleValue.toLocaleString()}cr value):\n`;
      grouped.recycle.forEach(l => text += `  • ${l.item.name} x${l.qty}\n`);
    }
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const matchedCount = detected.filter(d => d.item && d.selected).length;

  return (
    <div className="app">
      <header className="header">
        <h1>StashPilot</h1>
        <p>Add loot → Get instant recommendations</p>
      </header>

      {/* Mode Tabs */}
      <div className="tabs">
        <button
          className={`tab ${mode === 'screenshot' ? 'active' : ''}`}
          onClick={() => setMode('screenshot')}
        >
          📸 Screenshot
        </button>
        <button
          className={`tab ${mode === 'list' ? 'active' : ''}`}
          onClick={() => setMode('list')}
        >
          📝 Manual List
        </button>
      </div>

      {/* Screenshot Mode */}
      {mode === 'screenshot' && (
        <section className="screenshot-section">
          {!image ? (
            <div
              className="drop-zone"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                hidden
              />
              <div className="drop-icon">📸</div>
              <p>Drop screenshot or tap to upload</p>
              <span className="drop-hint">Take a screenshot of your inventory</span>
            </div>
          ) : (
            <div className="preview">
              <img src={image} alt="Screenshot" className="preview-img" />
              <div className="preview-actions">
                {!processing && detected.length === 0 && (
                  <>
                    <button className="scan-btn" onClick={processScreenshot}>
                      🔍 Scan for Items
                    </button>
                    <button className="clear-img-btn" onClick={() => setImage(null)}>
                      ✕ Clear
                    </button>
                  </>
                )}
                {processing && (
                  <div className="progress">
                    <div className="progress-bar" style={{ width: `${progress}%` }} />
                    <span>Scanning... {progress}%</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Detected Items Review */}
          {detected.length > 0 && (
            <div className="detected">
              <h3>Detected Items ({matchedCount} matched)</h3>
              <div className="detected-list">
                {detected.map((d, i) => (
                  <div key={i} className={`detected-item ${d.item ? 'matched' : 'unmatched'}`}>
                    <input
                      type="checkbox"
                      checked={d.selected}
                      onChange={() => toggleDetected(i)}
                      disabled={!d.item}
                    />
                    <div className="detected-info">
                      <span className="detected-text">"{d.text}"</span>
                      {d.item ? (
                        <span className={`detected-match ${d.item.decision}`}>
                          → {d.item.name} ({d.item.decision.toUpperCase()})
                        </span>
                      ) : (
                        <ItemPicker onSelect={(item) => updateDetectedItem(i, item)} />
                      )}
                    </div>
                    {d.item && (
                      <div className="detected-qty">
                        <button onClick={() => updateDetectedQty(i, d.qty - 1)}>−</button>
                        <span>{d.qty}</span>
                        <button onClick={() => updateDetectedQty(i, d.qty + 1)}>+</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="detected-actions">
                <button
                  className="add-detected-btn"
                  onClick={addDetectedItems}
                  disabled={matchedCount === 0}
                >
                  Add {matchedCount} Items
                </button>
                <button className="clear-detected-btn" onClick={() => { setDetected([]); setImage(null); }}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* List Mode */}
      {mode === 'list' && (
        <section className="add-section">
          <button className="add-btn" onClick={() => setShowSearch(true)}>
            + Add Item
          </button>
          {loot.length > 0 && (
            <button className="clear-btn" onClick={clearAll}>Clear All</button>
          )}
        </section>
      )}

      {/* Search Modal */}
      {showSearch && (
        <div className="modal" onClick={() => setShowSearch(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              autoFocus
              className="search-input"
            />
            <div className="search-results">
              {results.slice(0, 30).map(item => (
                <button
                  key={item.id}
                  className={`search-item ${item.decision}`}
                  onClick={() => addItem(item)}
                >
                  <span className="item-name">{item.name}</span>
                  <span className="item-category">{item.category}</span>
                  <span className={`decision-badge ${item.decision}`}>
                    {item.decision.toUpperCase()}
                  </span>
                </button>
              ))}
              {search.length >= 2 && results.length === 0 && (
                <div className="search-empty">No items found</div>
              )}
            </div>
            <button className="close-btn" onClick={() => setShowSearch(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {loot.length === 0 && mode === 'list' && (
        <div className="empty">
          <p>No items yet</p>
          <p className="hint">Tap "+ Add Item" to start</p>
        </div>
      )}

      {/* Results */}
      {loot.length > 0 && (
        <div className="results">
          {grouped.keep.length > 0 && (
            <section className="group keep">
              <h2>📦 KEEP <span className="count">{grouped.keep.length}</span></h2>
              {grouped.keep.map(l => (
                <LootRow key={l.item.id} loot={l} onRemove={removeItem} onQtyChange={updateQty} />
              ))}
            </section>
          )}

          {grouped.sell.length > 0 && (
            <section className="group sell">
              <h2>💰 SELL <span className="count">{grouped.sell.length}</span> <span className="value">{totalSellValue.toLocaleString()}cr</span></h2>
              {grouped.sell.map(l => (
                <LootRow key={l.item.id} loot={l} onRemove={removeItem} onQtyChange={updateQty} />
              ))}
            </section>
          )}

          {grouped.recycle.length > 0 && (
            <section className="group recycle">
              <h2>♻️ RECYCLE <span className="count">{grouped.recycle.length}</span></h2>
              {grouped.recycle.map(l => (
                <LootRow key={l.item.id} loot={l} onRemove={removeItem} onQtyChange={updateQty} />
              ))}
            </section>
          )}

          <div className="actions">
            <button className="copy-btn" onClick={copyChecklist}>
              📋 Copy Checklist
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function LootRow({ loot, onRemove, onQtyChange }: {
  loot: LootItem;
  onRemove: (id: string) => void;
  onQtyChange: (id: string, qty: number) => void;
}) {
  const { item, qty } = loot;
  return (
    <div className="loot-row">
      <div className="loot-info">
        <span className="loot-name">{item.name}</span>
        <span className="loot-reason">{item.reason}</span>
      </div>
      <div className="loot-controls">
        <button className="qty-btn" onClick={() => onQtyChange(item.id, qty - 1)}>−</button>
        <span className="qty">{qty}</span>
        <button className="qty-btn" onClick={() => onQtyChange(item.id, qty + 1)}>+</button>
        <button className="remove-btn" onClick={() => onRemove(item.id)}>×</button>
      </div>
    </div>
  );
}

function ItemPicker({ onSelect }: { onSelect: (item: Item) => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  if (!open) {
    return (
      <button className="pick-btn" onClick={() => setOpen(true)}>
        Pick item...
      </button>
    );
  }

  const filtered = searchItems(query).slice(0, 10);

  return (
    <div className="item-picker">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />
      <div className="picker-results">
        {filtered.map(item => (
          <button
            key={item.id}
            onClick={() => { onSelect(item); setOpen(false); }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <button className="picker-cancel" onClick={() => setOpen(false)}>Cancel</button>
    </div>
  );
}
