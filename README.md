# R-GoL-EE — Conway's Game of Life Simulator (Next.js)

**Rahan's Game of Life, Extended Edition** is a free, open-source **Conway's Game of Life simulator** built with **Next.js 15, React 19, and Bun**. A neon cellular automata playground with color-aging cells, editable B/S rules, and a fully pannable, zoomable canvas — deployed serverless-ready on Vercel.

> *"Flat cells, deep universe."* — flat, crisp neon cells on a dark synthwave board. No glow pass, no fake bloom.

![Next.js](https://img.shields.io/badge/next.js-15-black?logo=next.js) 
![React](https://img.shields.io/badge/react-19-61dafb?logo=react&logoColor=white)

![Bun](https://img.shields.io/badge/bun-package%20manager-fbf0df?logo=bun)

![Vercel](https://img.shields.io/badge/deploy-vercel--ready-black?logo=vercel)

![Topic](https://img.shields.io/badge/topic-conway's%20game%20of%20life-38bdf8) 
![Topic](https://img.shields.io/badge/topic-cellular%20automata-a855f7)

## Why R-GoL-EE?

Most Game of Life web apps hide their cells' history and lock you into one rule set. R-GoL-EE does the opposite:

- **Visible cell aging** — every surviving cell travels through the color spectrum: blue → green → yellow → orange → red → purple → white over 180 generations. Population age is readable at a glance.
- **Any B/S rule** — type any outer-totalistic birth/survive rule (B3/S23, B36/S23 HighLife, B/S without numbers for Seeds-style worlds...) with 23 curated rule presets included.
- **A canvas, not a form** — paint, erase, pan and zoom the board directly like an image editor. Zoom anywhere from 20% to 800%, at cursor or board center.
- **44 pattern modules** — still lifes, oscillators, spaceships, guns and methuselahs with live previews; click to drop gliders, Gosper guns, R-pentominoes and more.
- **Self-aware simulation** — dual FNV-1a grid hashing detects extinction and stability automatically: the sim pauses itself and announces still lifes, period oscillators, and travelling loops (spaceship streams on a wrapped board) up to period 1024.
- **Accessible & fast** — full keyboard control, ARIA-labelled controls, semantic HTML5 landmarks, typed-array grids (`Uint8Array` + `Uint16Array`), fixed-timestep `requestAnimationFrame` loop.
- **SEO/AEO-ready** — Metadata API with canonical URLs, Open Graph + Twitter cards, generated OG image, JSON-LD `WebApplication` schema, `robots.txt`, `sitemap.xml`, and a crawlable FAQ section under the app.

## Quick Start

Requires [Bun](https://bun.sh).

```bash
git clone https://github.com/rahan91/R-GoL-EE.git
cd R-GoL-EE
bun install
bun run dev
```

Open **http://localhost:3232** (the port is pinned to avoid clashing with other local projects).

Production:

```bash
bun run build
bun run start
```

Deploying to [Vercel](https://vercel.com): import the repository — zero config. Set `NEXT_PUBLIC_SITE_URL` to your final domain so canonical/OG/sitemap URLs match (see `.env.example`). See also [design.md](design.md) for architecture notes.

On first visit the sim seeds a random soup and auto-starts; later visits open paused.

## Keyboard & Mouse Controls

| Input | Action |
| --- | --- |
| Left drag | Paint / draw / erase (active tool) |
| Right drag | Erase |
| Middle drag or Shift+drag | Pan |
| `Ctrl`+wheel | Zoom at cursor |
| `+` / `-` | Zoom in/out around board center |
| `0` | Reset zoom to 100% |
| Arrow keys | Pan |
| Space | Play / pause |
| `Esc` | Disarm pattern placement |

## Technical Highlights

| Concern | Implementation |
| --- | --- |
| Stack | Next.js 15 App Router + React 19, TypeScript app shell, Bun scripts |
| Engine | Vanilla JS canvas engine ported 1:1 into a client component (`components/game-app.jsx`) |
| Rendering | HTML5 Canvas 2D with cached offscreen background layer and viewport culling |
| State | Typed arrays — `Uint8Array` grid + `Uint16Array` age buffer |
| Camera | Zoom (0.2×–8×) + pan viewport with center-on-shrink clamping |
| Rule engine | B/S digit sets parsed live from two input fields |
| Stability detection | FNV-1a hashing over a ring buffer of recent grid hashes |
| Persistence | `localStorage` for strobe-warning and first-visit flags |

## Project Layout

```
R-GoL-EE/
├── app/
│   ├── layout.tsx            metadata, JSON-LD schema, root shell
│   ├── page.tsx              game + about section
│   ├── globals.css           theme, game UI, content styles
│   ├── icon.svg              favicon
│   ├── opengraph-image.tsx   generated 1200×630 OG image
│   ├── robots.ts             robots.txt
│   └── sitemap.ts            sitemap.xml
├── components/
│   ├── game-app.jsx          the simulator (markup + engine)
│   └── about-section.tsx     crawlable Q&A content + footer
├── design.md                 design reference: palette, lifecycle gradient math, camera model
└── README.md                 this file
```

See [design.md](design.md) for the complete design reference: neon palette variables, the 180-generation lifecycle gradient math, camera model, rule engine internals, and golden rules for future edits.

## Keywords

game of life, conway's game of life, cellular automaton, cellular automata, b/s rules, emergent behavior, javascript game, html5 canvas, next.js, react, bun, vercel, zero dependency, glider, oscillator, spaceship, still life, methuselah, gosper glider gun, simulation, sandbox toy
