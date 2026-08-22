# R-GoL-EE — Design Reference

**R-GoL-EE** ("Rahan's Game of Life, Extended Edition") is a single-file Conway's Game of Life simulator. One self-contained `index.html` holds all HTML, CSS, and JavaScript. No build step, no dependencies, no network requests at runtime.

This document captures the intended design so future edits stay consistent.

---

## 1. Product intent

A fast, tactile, neon-themed Game of Life with three signature ideas:

1. **Cells age through the color spectrum** — age is not hidden; every surviving cell visibly travels from blue to white.
2. **Rules are first-class** — any outer-totalistic B/S rule is typed in directly, with 23 curated presets.
3. **The board is a canvas, not a form** — you pan, zoom, and paint on it like a tool, and it auto-pauses when the math settles.

The design motto: **"It is math, not gloomy shit."** Cells are flat, crisp blocks. No glow pass, no fake bloom. Depth comes from the vignette and the color story, not from shadows.

---

## 2. Tech stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) + React 19, TypeScript for app code; game engine is plain JS in a client component |
| Package manager | Bun (`bun install`, `bun run dev`, `bun run build`) |
| Rendering | 2D `CanvasRenderingContext2D` on a single `<canvas>`, plus a cached offscreen background canvas (`bgCanvas`) that is re-painted only on resize |
| Styling | Single global stylesheet `app/globals.css`, CSS custom properties in `:root` |
| State | In-memory typed arrays — `Uint8Array` grid + `Uint16Array` ages (engine unchanged from the original single-file version) |
| Persistence | `localStorage` keys `rgolee_first_visit` and `rgolee_strobe_warned` |
| Deployment | Vercel-ready zero-config; set `NEXT_PUBLIC_SITE_URL` if the final domain differs from the default |

The sim loop is a `requestAnimationFrame` fixed-timestep accumulator (`acc` vs. `interval = 1/gps`) with a guard so it never spirals after a tab pause. The engine lives inside a `useEffect` in `components/game-app.jsx` and cleans up its listeners (AbortController) and animation frame on unmount.

---

## 3. Design language

### 3.1 Palette — accent colors

The app is a dark neon/synthwave theme anchored on a blues-to-cyan accent family. All accents are defined as CSS variables in `:root`:

| Variable | Value | Usage |
| --- | --- | --- |
| `--accent` | `#38bdf8` (skip blue-400) | primary interactive, stats, focus rings, icons |
| `--accent-2` | `#22d3ee` (cyan-400) | gradient partner, logo, secondary glows |
| `--accent-dim` | `rgba(56,189,248,.14)` | subtle fills behind buttons/chips |
| `--panel` | `rgba(13,21,38,.72)` | glass surfaces (header, cards, toolbar) |
| `--panel-border` | `rgba(56,189,248,.14)` | hairline borders on panels |
| `--text` | `#e2e8f0` (slate-200) | primary text |
| `--muted` | `#7c8aa5` | labels, hints, secondary text |
| `--bg` | `#04060d` | page background (near-black with a blue tint) |

Additional one-off accents:

- Body background: two radial washes — `rgba(14,116,200,.14)` top-left and `rgba(34,211,238,.10)` bottom-right, over `--bg`.
- Header logo wordmark: gradient text `#7dd3fc → #22d3ee`.
- Protocol-status green: auto-pause banner uses `#86efac` text on a green-tinted border (`rgba(74,222,128,.45)`).
- Strobe warning: amber `#fbbf24` / `rgba(251,191,36,*)`.
- Scrollbar thumb: `rgba(56,189,248,.2)`.

The **cell lifecycle palette** is intentionally distinct from the UI accents and is the visual centerpiece — see §5.

### 3.2 Typography

- UI text: `"Segoe UI", system-ui, -apple-system, sans-serif`.
- Numeric/technical text (stats, rule inputs, keyboard keys, zoom value): `"Cascadia Mono", Consolas, monospace` with `font-variant-numeric: tabular-nums` so digits don't jitter while counting.
- Letter-spacing does a lot of the theming: labels, the subtitle, card headings, and category headers all use 2–3px tracking with `text-transform: uppercase`.

### 3.3 Surfaces & elevation

- "Glass" panels: translucent slate fill + hairline accent border + backdrop blur + a soft drop shadow with a faint inner top highlight. Radius is generous (12–16px) and consistent.
- Buttons: flat translucent fills that brighten on hover; the primary play/pause button is a cyan gradient with a strong outer glow. No 3D bevel anywhere.
- The board itself sits in a `canvas-area` with 10px padding and a vignette overlay that darkens the corners (`rgba(0,0,0,.38)` at the rim). Maximum respect for flat, solid cells.

### 3.4 Motion

- Micro-interactions ≤ 200 ms ease; panels fade in, chips lift 1px on hover, buttons press down 1px on click.
- The warning overlay animates in with a small rise + scale (`warnIn` keyframes).
- The animation budget is per-frame (`requestAnimationFrame`), not state-driven — the sim itself is the animation.

---

## 4. Layout

```
+------------------------------------------------------------+
| header   logo ....................  Gen | Pop | Rule       |
+------------------------------------------------------------+
| + toolbar: Play Step | Speed | Zoom | Fill | Paint | Wrap | Rand Clear |
| + board canvas area (pan/zoom viewport, hints, banners)     |
+----------------------------+-------------------------------+
|        board-wrap (flex:1) |  aside (320px fixed)          |
|                            |   Rules + presets             |
|                            |   Board size + auto-fit       |
|                            |   Cell lifecycle gradient     |
|                            |   Addable modules             |
|                            |   Shortcuts                   |
+------------------------------------------------------------+
```

- `main` is a flex row: the board section takes all remaining width; the sidebar is a fixed 320px scrollable column.
- The header is a slim 62px bar with the wordmark on the left and three stat pills on the right.
- The toolbar wraps (`flex-wrap`) so small windows degrade gracefully.

---

## 5. Cell lifecycle — the age gradient

Newborn cells are born blue and spend one generation at age 0. Every generation a cell survives, its age increments by 1 and its color is interpolated through six stages. The stage list (in `STAGES`) is the single source of truth:

| Stage | From → To | Duration (gens) | Share of 180 | Feel |
| --- | --- | --- | --- | --- |
| 1 | `#3b82f6` blue → `#22c55e` green | 4 | 2.2% | fast |
| 2 | `#22c55e` green → `#facc15` yellow | 30 | 16.7% | slow |
| 3 | `#facc15` yellow → `#f97316` orange | 8 | 4.4% | slightly fast |
| 4 | `#f97316` orange → `#ef4444` red | 18 | 10.0% | slightly slow |
| 5 | `#ef4444` red → `#a855f7` purple | 40 | 22.2% | slow |
| 6 | `#a855f7` purple → `#ffffff` white | 80 | 44.4% | very slow |

- A cell that lives exactly 180 generations ends at pure white; any older cell is clamped to white.
- `colorForAge(age)` walks the stages, subtracts completed durations from the running total, and linearly interpolates RGB to the stage's `to` color at fraction `remaining/duration`. The result is three rounded channels, returned as an `[r, g, b]` array for direct canvas fill styling.

### The Lifecycle Legend

The legend bar in the sidebar is a single `linear-gradient` whose stops are the exact cumulative bounds of the stages (each ÷ 180):

```
#3b82f6 0%, #22c55e 2.22%, #facc15 18.89%, #f97316 23.33%,
#ef4444 33.33%, #a855f7 55.56%, #ffffff 100%
```

So the bar is a pixel-accurate mirror of cell aging: each color dominates exactly its generation share and fades into the next across its own span, ending in white. Transparent flex-weight spans sit on top purely to give each zone a hover tooltip ("Blue → Green · fast", etc.).

---

## 6. Board model — grid, viewport, zoom, pan

### 6.1 Grid

- The grid lives in typed arrays: `grid` (alive/dead) and `ages` (0–180+), both indexed `r * cols + c`.
- **Default ("sizeBoard") mode**: the board is sized to the window with 9px cells — `cols = ceil(canvasW/9)+1`, `rows = ceil(canvasH/9)+1`.
- **Custom mode** (`setGridSize(x, y)`): an exact X×Y cell board (3–320). With **Auto-fit on**, the cell size is derived so the whole board fits the window. With **Auto-fit off**, the current cell size is kept and the board becomes a pannable space larger than the window.
- Edits are history-less by design (a single undead `history` array exists for future use; it is cleared on every grid change).

### 6.2 Viewport math

Rendering uses a camera: `zoom` (0.2–8) plus `viewX/viewY` (world coordinates of the top-left of the visible area).

- Screen mapping: `sx(w) = (w - viewX) * zoom`, `sy(h) = (h - viewY) * zoom`.
- `clampView()` constrains the camera to the board bounds, and — critically — **centers the board when it is smaller than the viewport** instead of pinning it to the top-left:
  - viewport wider than board → `viewX = (gridW - vw) / 2`.
  - otherwise → clamp to `[0, gridW - vw]`.
- `zoomAt(factor, mx, my)` zooms toward a canvas-local point (used by Ctrl+wheel). `zoomCenter(factor)` pins the **board center** to the canvas center (used by the toolbar buttons and `+`/`-`). `setZoomPercent(p)` is the typed-in variant (20–800%).
- The visible cell range is culled before drawing (`c0..c1`, `r0..r1`) and the grid lines are only drawn when the cell step is ≥ 4px, so a full-board draw stays cheap.

### 6.3 Interaction contract

| Gesture | Action |
| --- | --- |
| Left drag | paint (Toggle / Draw / Erase tool) |
| Right drag | erase in one stroke |
| Middle drag or Shift+drag | pan (camera moves with the finger) |
| Wheel | scroll vertically; Shift+wheel scrolls horizontally; Ctrl+wheel zooms at cursor |
| `+` / `-` | zoom in/out centered on the board center |
| Typed % field | instant exact zoom (20–800%) |
| `0` / 1:1 button | reset zoom to 100% and return to origin |
| Arrows | pan the camera by a zoom-scaled step |

The cursor stays neutral (`default`) — panning is indicated by the movement on screen, not a "grab" hand.

---

## 7. Interaction model & special behaviors

### 7.1 Modules

44 patterns in five categories (Still Lifes, Oscillators, Spaceships, Guns, Methuselahs) are stored as coordinate lists and rendered into tiny canvas previews ("chips"). Selecting a chip arms placement; clicking the board drops the pattern centered on the cursor; pressing **Esc** or clicking the chip again disarms it. **Starting the sim always exits placement mode.**

### 7.2 Auto-pause ("stop detection")

The sim watches itself: on every step it hashes the full grid with **two independent FNV-1a hashes** (different seeds/primes) plus population and summed cell coordinates, and keeps a ring buffer of recent states (up to period 1024).

- Population hits 0 → **Extinct** banner.
- A state matches itself three generations apart (current, p back, 2p back) on **both** hashes and population → **stable still life** (period 1), a **period-N oscillator**, or a **travelling loop** (spaceship stream on a wrapped board, classified by its per-period centroid drift).
- The generation counter freezes with the banner.

**Resume rule:** once the sim has auto-paused, pressing play resumes it and it will **not** re-pause on the same loop — auto-stop stays disabled until the board is actually changed (paint, clear, randomize, module drop, rule edit, or resize). Intentional: continuing after a "settled" state means "let it keep running."

### 7.3 Strobe safety

Speeding past 64 generations/sec shows a one-time amber warning (persisted in `localStorage`), with an inline "reduce to 64" shortcut. Reopening later never re-warns.

### 7.4 First visit

The sim seeds a random 22% soup and auto-starts only on the very first visit; repeat visits open paused so the user isn't ambushed by motion.

---

## 8. Interaction with rules

- The rule engine is a pair of `Set`s (`birthSet`, `survSet`) built by parsing the B and S fields (digits 0–9, any order).
- Presets write both fields and re-parse; the dropdown **reflects the currently active preset** by matching the live B/S strings (empty sets match their `parent/` form too), so the menu never lies about what is selected.
- Changing B or S live re-parses and clears the board's loop history so detection starts fresh under the new rule.

---

## 9. Accessibility & SEO

- Semantic landmarks (`header`, `main`, `aside`, `h1`), labelled controls (`aria-label` on the slider and canvas), and a keyboard path for every mouse action.
- Next.js Metadata API: keyword-rich title/description, canonical URL, Open Graph, Twitter card, robots directives, `theme-color`.
- JSON-LD `WebApplication` schema (author, free offer, genre) in `app/layout.tsx`.
- A crawlable "About / FAQ" content section (`components/about-section.tsx`) renders below the app fold — question-form headings with direct answers, since the board itself is canvas-only.
- Generated assets: `app/opengraph-image.tsx` (1200×630 PNG), `app/robots.ts`, `app/sitemap.ts`. Set `NEXT_PUBLIC_SITE_URL` to the production domain.

---

## 10. File map

```
R-GoL-EE/
├── app/
│   ├── layout.tsx            metadata, JSON-LD, root shell
│   ├── page.tsx              GameApp + AboutSection
│   ├── globals.css           all styles (theme + game + about section)
│   ├── opengraph-image.tsx   generated 1200×630 OG image
│   ├── robots.ts             robots.txt
│   └── sitemap.ts            sitemap.xml
├── components/
│   ├── game-app.jsx          client component — markup + full sim engine
│   └── about-section.tsx     crawlable Q&A content + footer
├── design.md                 this document
└── README.md
```

**Golden rules for future edits:**
1. Cells stay flat and solid — never add glow/bloom to the board itself.
2. Keep the lifecycle palette and duration constants the single source of truth for color logic and the legend.
3. Preserve the camera model — center-on-zoom and center-on-shrink are deliberate.
4. The engine in `components/game-app.jsx` is a direct port of the original single-file version — keep it imperative and framework-free inside its `useEffect`.