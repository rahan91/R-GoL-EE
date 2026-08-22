# R-GoL-EE

**Rahan's Game of Life, Extended Edition** — a single-file Conway's Game of Life simulator. One self-contained `index.html` holds all HTML, CSS, and JavaScript. No build step, no dependencies, no network requests at runtime.

> *"It is math, not gloomy shit."* — flat, crisp neon cells. No glow pass, no fake bloom.

## Features

- **Cell aging through the color spectrum** — every surviving cell visibly travels from blue → green → yellow → orange → red → purple → white over 180 generations.
- **First-class rules** — type any outer-totalistic B/S rule directly, with 23 curated presets (Conway, HighLife, Day & Night, Seeds, etc.).
- **A canvas, not a form** — paint, erase, pan, and zoom the board like a tool. Zoom from 20% to 800% at cursor or board center.
- **26 pattern modules** — still lifes, oscillators, spaceships, guns, and methuselahs with live previews; click to drop them on the board.
- **Auto-pause detection** — the sim hashes its grid each step and pauses itself with a banner when it goes extinct or settles into a loop (period 1–128).
- **Strobe safety** — a one-time amber warning when speeding past 64 generations/sec.
- **Keyboard-first** — every mouse action has a keyboard path; labelled controls throughout.

## Run it

Open `index.html` in any modern browser. That's it — there's nothing to install or build.

## Controls

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

## Project layout

```
R-GoL-EE/
├── index.html   single file — structure, styles, logic
├── design.md    design reference for future edits
└── README.md
```

See [design.md](design.md) for the full design reference: palette, lifecycle gradient math, camera model, rule engine, and golden rules for future edits.
