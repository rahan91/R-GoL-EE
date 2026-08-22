# R-GoL-EE — Conway's Game of Life Simulator (Single-File JavaScript)

**Rahan's Game of Life, Extended Edition** is a free, open-source **Conway's Game of Life simulator** built as a **single HTML file**. Pure **vanilla JavaScript** cellular automata playground: zero dependencies, zero build tools, zero network requests at runtime. Just open `index.html` and simulate life.

> *"It is math, not gloomy shit."* — flat, crisp neon cells on a dark synthwave board. No glow pass, no fake bloom.

![JavaScript](https://img.shields.io/badge/javascript-vanilla%20ES2020%2B-f7df1e?logo=javascript&logoColor=black)

![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

![Build step](https://img.shields.io/badge/build-none-brightgreen)

![Files](https://img.shields.io/badge/codebase-single%20index.html-blue)

![Topic](https://img.shields.io/badge/topic-conway's%20game%20of%20life-38bdf8) 
![Topic](https://img.shields.io/badge/topic-cellular%20automata-a855f7)

## Why R-GoL-EE?

Most Game of Life web apps hide their cells' history and lock you into one rule set. R-GoL-EE does the opposite:

- **Visible cell aging** — every surviving cell travels through the color spectrum: blue → green → yellow → orange → red → purple → white over 180 generations. Population age is readable at a glance.
- **Any B/S rule** — type any outer-totalistic birth/survive rule (B3/S23, B36/S23 HighLife, B/S without numbers for Seeds-style worlds...) with 23 curated rule presets included.
- **A canvas, not a form** — paint, erase, pan and zoom the board directly like an image editor. Zoom anywhere from 20% to 800%, at cursor or board center.
- **26 pattern modules** — still lifes, oscillators, spaceships, guns and methuselahs with live previews; click to drop gliders, Gosper guns, R-pentominoes and more.
- **Self-aware simulation** — FNV-1a grid hashing detects extinction and stability automatically: the sim pauses itself and announces still lifes and period 2–128 oscillators.
- **Accessible & fast** — full keyboard control, ARIA-labelled controls, semantic HTML5 landmarks, typed-array grids (`Uint8Array` + `Uint16Array`), fixed-timestep `requestAnimationFrame` loop.

## Quick Start

1. Download or clone this repository:
   ```bash
   git clone https://github.com/rahan91/R-GoL-EE.git
   ```
2. Open `index.html` in any modern browser.
3. Done — no install, no npm, no bundler, no server required.

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
| Language | Vanilla JavaScript (ES2020+), single inline `<script>` |
| Rendering | HTML5 Canvas 2D with cached offscreen background layer and viewport culling |
| State | Typed arrays — `Uint8Array` grid + `Uint16Array` age buffer |
| Camera | Zoom (0.2×–8×) + pan viewport with center-on-shrink clamping |
| Rule engine | B/S digit sets parsed live from two input fields |
| Stability detection | FNV-1a hashing over a ring buffer of recent grid hashes |
| Persistence | `localStorage` for strobe-warning and first-visit flags |

## Project Layout

```
R-GoL-EE/
├── index.html   single file — structure, styles, logic
├── design.md    design reference: palette, lifecycle gradient math, camera model
└── README.md    this file
```

See [design.md](design.md) for the complete design reference: neon palette variables, the 180-generation lifecycle gradient math, camera model, rule engine internals, and golden rules for future edits.

## Keywords

game of life, conway's game of life, cellular automaton, cellular automata, b/s rules, emergent behavior, javascript game, html5 canvas, single file app, zero dependency, vanilla js, no build step, glider, oscillator, spaceship, still life, methuselah, gosper glider gun, simulation, sandbox toy
