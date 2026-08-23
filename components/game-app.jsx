"use client";

import { useEffect } from "react";

const MODULE_DATA = [
  /* ---------- Still Lifes ---------- */
  ["Still Lifes", "Block", ["OO", "OO"]],
  ["Still Lifes", "Beehive", [".OO.", "O..O", ".OO."]],
  ["Still Lifes", "Loaf", [".OO.", "O..O", ".O.O", "..O."]],
  ["Still Lifes", "Boat", ["OO.", "O.O", ".O."]],
  ["Still Lifes", "Ship", ["OO..", "O.O.", ".OO."]],
  ["Still Lifes", "Tub", [".O.", "O.O", ".O."]],
  ["Still Lifes", "Pond", [".OO.", "O..O", "O..O", ".OO."]],
  ["Still Lifes", "Eater 1", [".OO..", "O..O.", ".O.O.", "..O.."]],
  ["Still Lifes", "Barge", ["OO..", "O.O.", ".O.O", "..OO"]],
  ["Still Lifes", "Long Barge", ["OO...", "O.O..", ".O.O.", "..O.O", "...OO"]],
  /* ---------- Oscillators ---------- */
  ["Oscillators", "Blinker", ["OOO"]],
  ["Oscillators", "Toad", [".OOO", "OOO."]],
  ["Oscillators", "Beacon", ["OO..", "OO..", "..OO", "..OO"]],
  [
    "Oscillators",
    "Pulsar",
    [
      "..OOO...OOO..",
      ".............",
      "O....O.O....O",
      "O....O.O....O",
      "O....O.O....O",
      "..OOO...OOO..",
      ".............",
      "..OOO...OOO..",
      "O....O.O....O",
      "O....O.O....O",
      "O....O.O....O",
      ".............",
      "..OOO...OOO..",
    ],
  ],
  [
    "Oscillators",
    "Pentadecathlon",
    ["..O....O..", "OO.OOOO.OO", "..O....O.."],
  ],
  [
    "Oscillators",
    "Figure Eight",
    ["OO....", "OO.O..", "....O.", ".O....", "..O.OO", "....OO"],
  ],
  [
    "Oscillators",
    "Pinwheel",
    [
      "......OO....",
      "......OO....",
      "............",
      "....OOOO....",
      "OO.O....O...",
      "OO.O..O.O...",
      "...O...OO.OO",
      "...O.O..O.OO",
      "....OOOO....",
      "............",
      "....OO......",
      "....OO......",
    ],
  ],
  ["Oscillators", "Pulse p2 · 1", ["OO", ".O"]],
  ["Oscillators", "Pulse p2 · 2", ["O.O", ".O.", ".O."]],
  ["Oscillators", "Pulse p2 · 3", ["O..", "OO.", "O.."]],
  ["Oscillators", "Pulse p2 · 4", ["O..", ".OO", "O.."]],
  ["Oscillators", "Pulse p3 · 1", ["OOO.", "O..O", ".OO.", "O..."]],
  ["Oscillators", "Pulse p3 · 2", ["OOO.", "O..O", ".O..", ".OO."]],
  ["Oscillators", "Pulse p3 · 3", ["OO.O", "O.O.", "O.O.", ".O.."]],
  ["Oscillators", "Pulse p4 · 1", ["OOO", "O..", ".O."]],
  ["Oscillators", "Pulse p4 · 2", ["OO.", "O.O", "O.."]],
  ["Oscillators", "Pulse p4 · 3", ["OO.", ".OO", "O.."]],
  ["Oscillators", "Pulse p4 · 4", ["OO.", "..O", ".O."]],
  /* ---------- Spaceships ---------- */
  ["Spaceships", "Glider", [".O.", "..O", "OOO"]],
  ["Spaceships", "LWSS", [".O..O", "O....", "O...O", "OOOO."]],
  ["Spaceships", "MWSS", ["...O..", ".O...O", "O.....", "O....O", "OOOOO."]],
  ["Spaceships", "HWSS", ["...OO..", ".O....O", "O......", "O.....O", "OOOOOO."]],
  ["Spaceships", "Glider Fleet", [".O...........O...........O.", "..O...........O...........O", "OOO.........OOO.........OOO"]],
  ["Spaceships", "LWSS Pair", [".O..O", "O....", "O...O", "OOOO.", ".....", ".....", ".....", ".....", ".O..O", "O....", "O...O", "OOOO."]],
  ["Spaceships", "MWSS Pair", ["...O..", ".O...O", "O.....", "O....O", "OOOOO.", "......", "......", "......", "......", "...O..", ".O...O", "O.....", "O....O", "OOOOO."]],
  ["Spaceships", "HWSS Pair", ["...OO..", ".O....O", "O......", "O.....O", "OOOOOO.", ".......", ".......", ".......", ".......", ".......", "...OO..", ".O....O", "O......", "O.....O", "OOOOOO."]],
  /* ---------- Guns ---------- */
  [
    "Guns",
    "Gosper Glider Gun",
    [
      "........................O...........",
      "......................O.O...........",
      "............OO......OO............OO",
      "...........O...O....OO............OO",
      "OO........O.....O...OO..............",
      "OO........O...O.OO....O.O...........",
      "..........O.....O.......O...........",
      "...........O...O....................",
      "............OO......................",
    ],
  ],
  /* ---------- Methuselahs ---------- */
  ["Methuselahs", "R-pentomino", [".OO", "OO.", ".O."]],
  ["Methuselahs", "Diehard", ["......O.", "OO.......", ".O...OOO"]],
  ["Methuselahs", "Acorn", [".O.....", "...O...", "OO..OOO"]],
  ["Methuselahs", "B-heptomino", ["O.OO", "OOO.", ".O.."]],
  ["Methuselahs", "Herschel", ["OOO", "O.O", "O..", "O.."]],
  ["Methuselahs", "Thunderbird", ["OOO", ".O.", ".O."]],
  ["Methuselahs", "Pi-heptomino", ["OOO", ".O.", ".O."]],
];

const PRESETS = [
  ["Conway", "3", "23"],
  ["HighLife", "36", "23"],
  ["Seeds", "2", ""],
  ["Life Without Death", "3", "012345678"],
  ["Day & Night", "3678", "34678"],
  ["Replicator", "1357", "1357"],
  ["Maze", "3", "12345"],
  ["Anneal", "4678", "35678"],
  ["Diamoeba", "35678", "5678"],
  ["2x2", "36", "125"],
  ["34 Life", "34", "34"],
  ["Move (Morley)", "368", "245"],
  ["Serviettes", "234", ""],
  ["Mazectric", "12345", "3"],
  ["Assimilation", "345", "4567"],
  ["Amoeba", "357", "1358"],
  ["Coral", "3", "45678"],
  ["Pseudo Life", "357", "238"],
  ["Pedestrian Life", "38", "238"],
  ["Stains", "3678", "235678"],
  ["Gnarl", "1", "1"],
  ["Live Free or Die", "2", "0"],
  ["Vote", "45678", "345678"],
];

function parsePattern(strRows) {
  const cells = [];
  strRows.forEach((row, r) => {
    for (let c = 0; c < row.length; c++)
      if (row[c] === "O" || row[c] === "o") cells.push([r, c]);
  });
  return cells;
}

const MODULES = MODULE_DATA.map(([cat, name, rows]) => ({
  cat,
  name,
  cells: parsePattern(rows),
}));

export default function GameApp() {
  useEffect(() => {
    const $ = (id) => document.getElementById(id);
    const board = $("board");
    const ctx = board.getContext("2d");
    const AREA_PAD = 10;

    const STAGES = [
      { f: [59, 130, 246], t: [34, 197, 94], dur: 6 },
      { f: [34, 197, 94], t: [250, 204, 21], dur: 24 },
      { f: [250, 204, 21], t: [249, 115, 22], dur: 14 },
      { f: [249, 115, 22], t: [239, 68, 68], dur: 34 },
      { f: [239, 68, 68], t: [168, 85, 247], dur: 40 },
      { f: [168, 85, 247], t: [255, 255, 255], dur: 62 },
    ];

    let cols = 0,
      rows = 0,
      cell = 10,
      dpr = 1;
    let grid = null,
      ages = null;
    let g2 = null,
      a2 = null;
    let gen = 0,
      pop = 0;
    let running = true,
      wrap = true;
    let autoStopDisabled = false;
    let autoFit = true;
    let density = 0.22;
    let gps = 12,
      acc = 0,
      lastT = 0;
    let tool = "toggle";
    let selectedModule = null;
    let hoverCell = null,
      painting = false,
      paintTool = "toggle",
      lastPaint = null;
    let bgCanvas = null;
    let zoom = 1,
      viewX = 0,
      viewY = 0,
      canvasW = 0,
      canvasH = 0;
    let customGrid = false;
    let panning = false,
      panStart = null;
    const WARN_KEY = "rgolee_strobe_warned";

    const birthSet = new Set([3]);
    const survSet = new Set([2, 3]);

    /* ================= board / viewport ================= */

    function recalcCanvas() {
      const area = $("canvasArea");
      canvasW = Math.max(200, area.clientWidth - AREA_PAD * 2);
      canvasH = Math.max(200, area.clientHeight - AREA_PAD * 2);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      board.width = Math.round(canvasW * dpr);
      board.height = Math.round(canvasH * dpr);
      board.style.width = canvasW + "px";
      board.style.height = canvasH + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function sizeBoard() {
      customGrid = false;
      recalcCanvas();
      const oldGrid = grid,
        oldAges = ages,
        oldCols = cols;
      cols = Math.max(24, Math.ceil(canvasW / 9) + 1);
      rows = Math.max(16, Math.ceil(canvasH / 9) + 1);
      grid = new Uint8Array(cols * rows);
      ages = new Uint16Array(cols * rows);
      g2 = new Uint8Array(cols * rows);
      a2 = new Uint16Array(cols * rows);
      if (oldGrid && oldCols) {
        const rr = Math.min(Math.floor(oldGrid.length / oldCols), rows);
        for (let r = 0; r < rr; r++) {
          const cc = Math.min(oldCols, cols);
          for (let c = 0; c < cc; c++) {
            grid[r * cols + c] = oldGrid[r * oldCols + c];
            ages[r * cols + c] = oldAges[r * oldCols + c];
          }
        }
      }
      cell = 9;
      zoom = 1;
      viewX = 0;
      viewY = 0;
      buildVignette();
      clampView();
      updateZoomLabel();
      updateStats();
      refreshGridInput();
    }

    function fitBoard() {
      cell = Math.min(
        24,
        Math.max(2, Math.ceil(canvasW / cols), Math.ceil(canvasH / rows))
      );
      zoom = 1;
      viewX = 0;
      viewY = 0;
      clampView();
      updateZoomLabel();
    }

    function resizeView() {
      recalcCanvas();
      if (autoFit) fitBoard();
      buildVignette();
      clampView();
      updateZoomLabel();
    }

    function setGridSize(x, y) {
      customGrid = true;
      cols = x;
      rows = y;
      grid = new Uint8Array(cols * rows);
      ages = new Uint16Array(cols * rows);
      g2 = new Uint8Array(cols * rows);
      a2 = new Uint16Array(cols * rows);
      recalcCanvas();
      if (autoFit) fitBoard();
      buildVignette();
      clampView();
      updateZoomLabel();
      gen = 0;
      gridEdited();
      updateStats();
      refreshGridInput();
    }

    function clampView() {
      const gridW = cols * cell,
        gridH = rows * cell;
      const vw = canvasW / zoom,
        vh = canvasH / zoom;
      viewX =
        vw >= gridW ? (gridW - vw) / 2 : Math.min(Math.max(0, viewX), gridW - vw);
      viewY =
        vh >= gridH ? (gridH - vh) / 2 : Math.min(Math.max(0, viewY), gridH - vh);
    }

    function buildVignette() {
      bgCanvas = document.createElement("canvas");
      bgCanvas.width = Math.round(canvasW * dpr);
      bgCanvas.height = Math.round(canvasH * dpr);
      const g = bgCanvas.getContext("2d");
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.fillStyle = "#05080f";
      g.fillRect(0, 0, canvasW, canvasH);
      const vg = g.createRadialGradient(
        canvasW / 2,
        canvasH / 2,
        Math.min(canvasW, canvasH) * 0.3,
        canvasW / 2,
        canvasH / 2,
        Math.max(canvasW, canvasH) * 0.75
      );
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,0.38)");
      g.fillStyle = vg;
      g.fillRect(0, 0, canvasW, canvasH);
    }

    /* ================= simulation ================= */

    function countNeighbors(r, c) {
      let n = 0;
      for (let dr = -1; dr <= 1; dr++) {
        let rr = r + dr;
        if (wrap) rr = (rr + rows) % rows;
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          let cc = c + dc;
          if (wrap) cc = (cc + cols) % cols;
          else if (rr < 0 || rr >= rows || cc < 0 || cc >= cols) continue;
          if (grid[rr * cols + cc]) n++;
        }
      }
      return n;
    }

    const MAX_PERIOD = 1024;
    // Ring buffer of recent world states. Each entry stores two independent
    // FNV-1a hashes (different seeds) plus population and the summed cell
    // coordinates (used to detect travelling loops / spaceships).
    const RING = MAX_PERIOD * 3 + 8;
    const ringH1 = new Uint32Array(RING);
    const ringH2 = new Uint32Array(RING);
    const ringPop = new Uint32Array(RING);
    const ringSx = new Float64Array(RING);
    const ringSy = new Float64Array(RING);
    let ringHead = 0;
    let ringLen = 0;

    function hashGrid() {
      let h1 = 2166136261 >>> 0; // FNV-1a
      let h2 = 40503 >>> 0; // second independent hash (different seed/prime)
      let pop = 0;
      let sx = 0,
        sy = 0;
      for (let i = 0; i < grid.length; i++) {
        if (grid[i]) {
          h1 ^= i + 1;
          h1 = Math.imul(h1, 16777619) >>> 0;
          h2 ^= i + 1;
          h2 = Math.imul(h2, 2097169) >>> 0;
          pop++;
          const r = (i / cols) | 0;
          const c = i - r * cols;
          sx += r + c;
          sy += r - c;
        }
      }
      return { h1: h1 >>> 0, h2: h2 >>> 0, pop, sx, sy };
    }

    function pushState(s) {
      ringH1[ringHead] = s.h1;
      ringH2[ringHead] = s.h2;
      ringPop[ringHead] = s.pop;
      ringSx[ringHead] = s.sx;
      ringSy[ringHead] = s.sy;
      ringHead = (ringHead + 1) % RING;
      if (ringLen < RING) ringLen++;
      else ringLen = RING; // full -> stop growing, slot reuse wraps
    }

    function at(back) {
      // back = 0 is most recent, back = 1 is previous, etc.
      const idx = (ringHead - 1 - back + RING) % RING;
      return {
        h1: ringH1[idx],
        h2: ringH2[idx],
        pop: ringPop[idx],
        sx: ringSx[idx],
        sy: ringSy[idx],
      };
    }

    function detectCycle() {
      const s = hashGrid();
      pushState(s);
      if (ringLen < 3) return 0;
      const n = ringLen;
      // Walk the ring for the smallest period whose world state is confirmed
      // THREE generations apart (current, p back, 2p back) on BOTH independent
      // hashes AND population. Triple-collision + dual-hash makes accidental
      // matches from hash collisions effectively impossible, so even very long
      // or drifting loops (spaceships cycling on a toroidal board) are caught.
      for (let p = 1; p <= MAX_PERIOD && p < n; p++) {
        if (2 * p >= n) break;
        const a = at(0);
        const b = at(p);
        const c = at(2 * p);
        if (
          a.h1 === b.h1 &&
          a.h2 === b.h2 &&
          b.h1 === c.h1 &&
          b.h2 === c.h2 &&
          a.pop === b.pop &&
          b.pop === c.pop
        ) {
          return p;
        }
      }
      return 0;
    }

    // Per-period centroid drift; distinguishes oscillators (no drift) from
    // travelling loops such as spaceships cycling on a wrapped/toroidal board.
    function driftForPeriod(p) {
      const a = at(0);
      const b = at(p);
      const dx = a.sx - b.sx;
      const dy = a.sy - b.sy;
      const drow = (dx + dy) / 2;
      const dcol = (dx - dy) / 2;
      return { drow: Math.round(drow / p), dcol: Math.round(dcol / p) };
    }

    function gridEdited() {
      ringLen = 0;
      ringHead = 0;
      $("stopBanner").classList.remove("show");
      autoStopDisabled = false;
    }

    function checkStop() {
      if (autoStopDisabled) return;
      if (pop === 0) {
        stopForReason("fully extinct — no cells remain");
        return;
      }
      const p = detectCycle();
      if (p) {
        let msg;
        if (p === 1) {
          msg = "stable still life reached";
        } else {
          const d = driftForPeriod(p);
          if (d.drow === 0 && d.dcol === 0) {
            msg = "period " + p + " oscillator loop detected";
          } else {
            msg =
              "period " +
              p +
              " travelling loop detected (spaceship stream, drift " +
              d.drow +
              "," +
              d.dcol +
              ")";
          }
        }
        stopForReason(msg);
      }
    }

    function stopForReason(msg) {
      autoStopDisabled = true;
      if (running) setRunning(false);
      $("stopBanner").textContent =
        "Auto-paused at generation " + gen.toLocaleString() + " — " + msg;
      $("stopBanner").classList.add("show");
    }

    function step() {
      const next = g2;
      const nextAges = a2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const n = countNeighbors(r, c);
          if (grid[i]) {
            if (survSet.has(n)) {
              next[i] = 1;
              nextAges[i] = ages[i] + 1;
            } else {
              next[i] = 0;
            }
          } else {
            if (birthSet.has(n)) {
              next[i] = 1;
              nextAges[i] = 0;
            } else {
              next[i] = 0;
            }
          }
        }
      }
      // ping-pong: the buffer we just wrote becomes the live grid, and the
      // old live grid becomes next step's scratch (no per-step allocation).
      const oldG = grid,
        oldA = ages;
      grid = next;
      ages = nextAges;
      g2 = oldG;
      a2 = oldA;
      gen++;
      updateStats();
      checkStop();
    }

    function countPop() {
      let n = 0;
      for (let i = 0; i < grid.length; i++) if (grid[i]) n++;
      return n;
    }

    function randomize(d) {
      for (let i = 0; i < grid.length; i++) {
        grid[i] = Math.random() < d ? 1 : 0;
        ages[i] = 0;
        g2[i] = 0;
        a2[i] = 0;
      }
      gen = 0;
      gridEdited();
      updateStats();
    }

    function clearAll() {
      grid.fill(0);
      ages.fill(0);
      g2.fill(0);
      a2.fill(0);
      gen = 0;
      gridEdited();
      updateStats();
    }

    function updateStats() {
      $("statGen").textContent = gen.toLocaleString();
      pop = countPop();
      $("statPop").textContent = pop.toLocaleString();
      const b = [...birthSet].sort().join("");
      const s = [...survSet].sort().join("");
      $("statRule").textContent = "B" + (b || "0") + "/S" + (s || "0");
    }

    /* ================= rendering ================= */

    function colorForAge(age) {
      let a = age;
      for (const s of STAGES) {
        if (a < s.dur) {
          const p = a / s.dur;
          return [
            Math.round(s.f[0] + (s.t[0] - s.f[0]) * p),
            Math.round(s.f[1] + (s.t[1] - s.f[1]) * p),
            Math.round(s.f[2] + (s.t[2] - s.f[2]) * p),
          ];
        }
        a -= s.dur;
      }
      return [255, 255, 255];
    }

    function sx(wx) {
      return (wx - viewX) * zoom;
    }
    function sy(wy) {
      return (wy - viewY) * zoom;
    }

    function draw() {
      ctx.drawImage(bgCanvas, 0, 0, canvasW, canvasH);

      const gridW = cols * cell,
        gridH = rows * cell;
      const vw = canvasW / zoom,
        vh = canvasH / zoom;
      const c0 = Math.max(0, Math.floor(viewX / cell));
      const c1 = Math.min(cols, Math.ceil((viewX + vw) / cell));
      const r0 = Math.max(0, Math.floor(viewY / cell));
      const r1 = Math.min(rows, Math.ceil((viewY + vh) / cell));
      const stp = cell * zoom;

      ctx.lineWidth = 1;
      if (stp >= 4) {
        ctx.strokeStyle = "rgba(148,163,184,0.05)";
        const gx1 = Math.min(canvasW, sx(gridW));
        const gy1 = Math.min(canvasH, sy(gridH));
        for (let c = c0; c <= c1; c++) {
          const x = sx(c * cell);
          if (x < 0 || x > canvasW) continue;
          ctx.beginPath();
          ctx.moveTo(x + 0.5, 0);
          ctx.lineTo(x + 0.5, gy1);
          ctx.stroke();
        }
        for (let r = r0; r <= r1; r++) {
          const y = sy(r * cell);
          if (y < 0 || y > canvasH) continue;
          ctx.beginPath();
          ctx.moveTo(0, y + 0.5);
          ctx.lineTo(gx1, y + 0.5);
          ctx.stroke();
        }
      }
      if (stp >= 10) {
        ctx.strokeStyle = "rgba(56,189,248,0.10)";
        for (let c = c0; c <= c1; c++)
          if (c % 5 === 0) {
            const x = sx(c * cell);
            if (x < 0 || x > canvasW) continue;
            ctx.beginPath();
            ctx.moveTo(x + 0.5, 0);
            ctx.lineTo(x + 0.5, Math.min(canvasH, sy(gridH)));
            ctx.stroke();
          }
        for (let r = r0; r <= r1; r++)
          if (r % 5 === 0) {
            const y = sy(r * cell);
            if (y < 0 || y > canvasH) continue;
            ctx.beginPath();
            ctx.moveTo(0, y + 0.5);
            ctx.lineTo(Math.min(canvasW, sx(gridW)), y + 0.5);
            ctx.stroke();
          }
      }

      const pad = Math.max(0.75, stp * 0.1);
      for (let r = r0; r < r1; r++) {
        const y = sy(r * cell);
        for (let c = c0; c < c1; c++) {
          if (!grid[r * cols + c]) continue;
          const col = colorForAge(ages[r * cols + c]);
          ctx.fillStyle =
            "rgb(" + col[0] + "," + col[1] + "," + col[2] + ")";
          ctx.fillRect(sx(c * cell) + pad, y + pad, stp - pad * 2, stp - pad * 2);
        }
      }

      if (selectedModule) drawGhost();
      if (hoverCell && !painting && !panning) drawHover();
    }

    function drawGhost() {
      const cells = selectedModule.cells;
      const { or, oc } = moduleOrigin(cells);
      const s = cell * zoom;
      ctx.fillStyle = "rgba(226,232,240,0.28)";
      for (const [r, c] of cells) {
        const R = r + or,
          C = c + oc;
        if (R < 0 || R >= rows || C < 0 || C >= cols) continue;
        ctx.fillRect(sx(C * cell) + 1, sy(R * cell) + 1, s - 2, s - 2);
      }
      ctx.strokeStyle = "rgba(56,189,248,0.8)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(
        sx(oc * cell) - 1.5,
        sy(or * cell) - 1.5,
        selectedModule.width * s + 3,
        selectedModule.height * s + 3
      );
    }

    function drawHover() {
      const s = cell * zoom;
      ctx.strokeStyle = "rgba(56,189,248,0.55)";
      ctx.lineWidth = 1;
      ctx.strokeRect(
        sx(hoverCell.c * cell) + 0.5,
        sy(hoverCell.r * cell) + 0.5,
        s - 1,
        s - 1
      );
    }

    function moduleOrigin(cells) {
      let minR = 1e9,
        minC = 1e9,
        maxR = -1,
        maxC = -1;
      for (const [r, c] of cells) {
        if (r < minR) minR = r;
        if (c < minC) minC = c;
        if (r > maxR) maxR = r;
        if (c > maxC) maxC = c;
      }
      selectedModule.width = maxC - minC + 1;
      selectedModule.height = maxR - minR + 1;
      return { or: -minR, oc: -minC };
    }

    function placeModule(cr, cc) {
      const cells = selectedModule.cells;
      const { or, oc } = moduleOrigin(cells);
      const topR = cr - Math.floor((selectedModule.height - 1) / 2);
      const topC = cc - Math.floor((selectedModule.width - 1) / 2);
      for (const [r, c] of cells) {
        const R = r + or + topR,
          C = c + oc + topC;
        if (R < 0 || R >= rows || C < 0 || C >= cols) continue;
        grid[R * cols + C] = 1;
        ages[R * cols + C] = 0;
      }
      gridEdited();
      updateStats();
    }

    /* ================= main loop ================= */

    let rafId = 0;
    let disposed = false;

    function frame(t) {
      if (disposed) return;
      rafId = requestAnimationFrame(frame);
      if (running) {
        acc += (t - lastT) / 1000;
        lastT = t;
        const interval = 1 / gps;
        let guard = 0;
        while (acc >= interval && guard++ < 8) {
          step();
          acc -= interval;
        }
        if (guard >= 8) acc = 0;
      } else {
        lastT = t;
      }
      draw();
    }

    /* ================= input ================= */

    const controller = new AbortController();
    const { signal } = controller;

    function cellFromEvent(e) {
      const rect = board.getBoundingClientRect();
      const mx = e.clientX - rect.left,
        my = e.clientY - rect.top;
      const wx = viewX + mx / zoom,
        wy = viewY + my / zoom;
      return {
        r: Math.floor(wy / cell),
        c: Math.floor(wx / cell),
        inside:
          mx >= 0 && my >= 0 && mx <= rect.width && my <= rect.height,
      };
    }

    function paintAt(r, c) {
      if (r < 0 || r >= rows || c < 0 || c >= cols) return;
      const i = r * cols + c;
      if (paintTool === "draw") {
        if (!grid[i]) {
          grid[i] = 1;
          ages[i] = 0;
        }
      } else if (paintTool === "erase") {
        grid[i] = 0;
      } else {
        if (grid[i]) grid[i] = 0;
        else {
          grid[i] = 1;
          ages[i] = 0;
        }
      }
    }

    function paintLine(r, c) {
      if (lastPaint) {
        const dr = Math.abs(r - lastPaint.r),
          dc = Math.abs(c - lastPaint.c);
        const steps = Math.max(dr, dc);
        for (let s = 1; s <= steps; s++) {
          paintAt(
            Math.round(lastPaint.r + ((r - lastPaint.r) * s) / steps),
            Math.round(lastPaint.c + ((c - lastPaint.c) * s) / steps)
          );
        }
      }
      paintAt(r, c);
      lastPaint = { r, c };
      gridEdited();
      updateStats();
    }

    function zoomAt(factor, mx, my) {
      const wx = viewX + mx / zoom,
        wy = viewY + my / zoom;
      zoom = Math.min(8, Math.max(0.2, zoom * factor));
      viewX = wx - mx / zoom;
      viewY = wy - my / zoom;
      clampView();
      updateZoomLabel();
    }

    function zoomCenter(factor) {
      const bx = (cols * cell) / 2,
        by = (rows * cell) / 2;
      zoom = Math.min(8, Math.max(0.2, zoom * factor));
      viewX = bx - canvasW / (2 * zoom);
      viewY = by - canvasH / (2 * zoom);
      clampView();
      updateZoomLabel();
    }

    function setZoomPercent(p) {
      const v = Math.min(800, Math.max(20, p));
      zoom = v / 100;
      const bx = (cols * cell) / 2,
        by = (rows * cell) / 2;
      viewX = bx - canvasW / (2 * zoom);
      viewY = by - canvasH / (2 * zoom);
      clampView();
      updateZoomLabel();
    }

    function resetZoom() {
      zoom = 1;
      viewX = 0;
      viewY = 0;
      clampView();
      updateZoomLabel();
    }

    function updateZoomLabel() {
      const el = $("zoomVal");
      if (document.activeElement !== el) el.value = Math.round(zoom * 100);
    }

    board.addEventListener("contextmenu", (e) => e.preventDefault(), { signal });

    board.addEventListener(
      "pointerdown",
      (e) => {
        e.preventDefault();
        board.setPointerCapture(e.pointerId);
        if (e.button === 1 || e.shiftKey) {
          panning = true;
          panStart = { x: e.clientX, y: e.clientY, vx: viewX, vy: viewY };
          $("canvasArea").classList.add("panning");
          return;
        }
        const ce = cellFromEvent(e);
        if (selectedModule) {
          if (ce.inside) placeModule(ce.r, ce.c);
          return;
        }
        painting = true;
        paintTool = e.button === 2 ? "erase" : tool;
        lastPaint = null;
        paintLine(ce.r, ce.c);
      },
      { signal }
    );

    board.addEventListener(
      "pointermove",
      (e) => {
        if (panning) {
          viewX = panStart.vx - (e.clientX - panStart.x) / zoom;
          viewY = panStart.vy - (e.clientY - panStart.y) / zoom;
          clampView();
          return;
        }
        const ce = cellFromEvent(e);
        if (painting && !selectedModule) paintLine(ce.r, ce.c);
        if (ce.inside) hoverCell = { r: ce.r, c: ce.c };
        else hoverCell = null;
      },
      { signal }
    );

    function endPointer() {
      painting = false;
      panning = false;
      lastPaint = null;
      $("canvasArea").classList.remove("panning");
    }

    board.addEventListener("pointerup", endPointer, { signal });
    board.addEventListener("pointercancel", endPointer, { signal });
    board.addEventListener("pointerleave", () => (hoverCell = null), { signal });

    board.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const rect = board.getBoundingClientRect();
        const mx = e.clientX - rect.left,
          my = e.clientY - rect.top;
        if (e.ctrlKey) {
          zoomAt(Math.pow(1.0025, -e.deltaY), mx, my);
        } else if (e.shiftKey) {
          viewX += e.deltaY / zoom;
          clampView();
        } else {
          viewY += e.deltaY / zoom;
          clampView();
        }
      },
      { passive: false, signal }
    );

    /* ================= UI wiring ================= */

    function setRunning(run) {
      if (run) clearModule();
      running = run;
      $("iconPlay").style.display = run ? "none" : "block";
      $("iconPause").style.display = run ? "block" : "none";
      $("btnPlayLabel").textContent = run ? "Pause" : "Play";
      if (run) {
        // Drop any accumulated frame time so resuming never fires a burst of
        // catch-up generations that would make the counter jump.
        acc = 0;
        ringLen = 0;
        ringHead = 0;
        $("stopBanner").classList.remove("show");
      }
    }

    $("btnPlay").addEventListener("click", () => setRunning(!running), { signal });

    $("btnStep").addEventListener(
      "click",
      () => {
        if (running) setRunning(false);
        step();
      },
      { signal }
    );

    $("btnZoomIn").addEventListener("click", () => zoomCenter(1.25), { signal });
    $("btnZoomOut").addEventListener("click", () => zoomCenter(0.8), { signal });
    $("btnZoomReset").addEventListener("click", resetZoom, { signal });

    $("zoomVal").addEventListener(
      "input",
      (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 3);
      },
      { signal }
    );
    $("zoomVal").addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Enter") e.target.blur();
      },
      { signal }
    );
    $("zoomVal").addEventListener(
      "change",
      (e) => {
        const p = parseInt(e.target.value, 10);
        if (Number.isNaN(p)) {
          updateZoomLabel();
          return;
        }
        setZoomPercent(p);
      },
      { signal }
    );

    $("speed").addEventListener(
      "input",
      (e) => {
        gps = +e.target.value;
        $("speedVal").textContent = gps + " gen/s";
        if (gps > 64 && !localStorage.getItem(WARN_KEY)) {
          localStorage.setItem(WARN_KEY, "1");
          $("warnSpeed").textContent = gps + " generations/sec";
          $("warnOverlay").hidden = false;
        }
      },
      { signal }
    );

    function refreshGridInput() {
      $("gridX").value = cols;
      $("gridY").value = rows;
    }

    function applyGridFromInputs() {
      const x = parseInt($("gridX").value, 10);
      const y = parseInt($("gridY").value, 10);
      if (x >= 3 && x <= 320 && y >= 3 && y <= 320) setGridSize(x, y);
      else refreshGridInput();
    }

    function setupDimInput(el) {
      el.addEventListener(
        "input",
        () => {
          el.value = el.value.replace(/[^0-9]/g, "").slice(0, 3);
        },
        { signal }
      );
      el.addEventListener(
        "keydown",
        (e) => {
          if (e.key === "Enter") el.blur();
        },
        { signal }
      );
      el.addEventListener("blur", applyGridFromInputs, { signal });
    }
    setupDimInput($("gridX"));
    setupDimInput($("gridY"));

    $("paintSeg").addEventListener(
      "click",
      (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        tool = btn.dataset.tool;
        document
          .querySelectorAll("#paintSeg button")
          .forEach((b) => b.classList.toggle("active", b === btn));
      },
      { signal }
    );

    $("wrap").addEventListener("change", (e) => (wrap = e.target.checked), {
      signal,
    });

    $("autoFit").addEventListener(
      "change",
      (e) => {
        autoFit = e.target.checked;
        if (autoFit) fitBoard();
      },
      { signal }
    );

    $("fill").addEventListener(
      "input",
      (e) => {
        density = +e.target.value / 100;
        $("fillVal").textContent = e.target.value + "%";
      },
      { signal }
    );

    $("btnRandom").addEventListener("click", () => randomize(density), {
      signal,
    });
    $("btnClear").addEventListener("click", clearAll, { signal });

    function setModule(i) {
      if (selectedModule && selectedModule.index === i) {
        selectedModule = null;
      } else {
        selectedModule = { ...MODULES[i], index: i };
      }
      document
        .querySelectorAll(".chip")
        .forEach((c) =>
          c.classList.toggle(
            "selected",
            +c.dataset.i === i && !!selectedModule
          )
        );
      updateHint();
    }

    function clearModule() {
      selectedModule = null;
      document
        .querySelectorAll(".chip")
        .forEach((c) => c.classList.remove("selected"));
      updateHint();
    }

    function updateHint() {
      const hint = $("hint");
      if (selectedModule) {
        hint.textContent =
          "Placing: " +
          selectedModule.name +
          " — click the board to drop · Esc to cancel";
        hint.classList.add("show");
      } else {
        hint.classList.remove("show");
      }
    }

    function buildModules() {
      const gridEl = $("moduleGrid");
      let lastCat = "";
      MODULES.forEach((m, i) => {
        if (m.cat !== lastCat) {
          const cat = document.createElement("div");
          cat.className = "chip-cat";
          cat.textContent = m.cat;
          gridEl.appendChild(cat);
          lastCat = m.cat;
        }
        const btn = document.createElement("button");
        btn.className = "chip";
        btn.dataset.i = i;
        btn.title = m.name + " — click board to place";
        const cv = document.createElement("canvas");
        const span = document.createElement("span");
        span.textContent = m.name;
        btn.appendChild(cv);
        btn.appendChild(span);
        btn.addEventListener("click", () => setModule(i), { signal });
        gridEl.appendChild(btn);
        drawModulePreview(cv, m.cells);
      });
    }

    function drawModulePreview(cv, cells) {
      cv.width = 88;
      cv.height = 88;
      const g = cv.getContext("2d");
      let minR = 1e9,
        minC = 1e9,
        maxR = -1,
        maxC = -1;
      for (const [r, c] of cells) {
        if (r < minR) minR = r;
        if (c < minC) minC = c;
        if (r > maxR) maxR = r;
        if (c > maxC) maxC = c;
      }
      const pw = maxC - minC + 1,
        ph = maxR - minR + 1;
      const scale = Math.min(70 / pw, 70 / ph);
      const ox = (88 - pw * scale) / 2,
        oy = (88 - ph * scale) / 2;
      g.fillStyle = "#38bdf8";
      for (const [r, c] of cells) {
        g.fillRect(
          ox + (c - minC) * scale,
          oy + (r - minR) * scale,
          scale - 1,
          scale - 1
        );
      }
    }

    function parseRules() {
      birthSet.clear();
      survSet.clear();
      for (const ch of $("ruleB").value)
        if (/[0-9]/.test(ch)) birthSet.add(+ch);
      for (const ch of $("ruleS").value)
        if (/[0-9]/.test(ch)) survSet.add(+ch);
      syncPreset();
      gridEdited();
      updateStats();
    }

    function syncPreset() {
      const b = [...birthSet].sort().join("");
      const s = [...survSet].sort().join("");
      $("preset").value = b + "/" + s;
    }

    function applyRules(bStr, sStr) {
      $("ruleB").value = bStr;
      $("ruleS").value = sStr;
      parseRules();
    }

    $("ruleB").addEventListener(
      "input",
      (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        parseRules();
      },
      { signal }
    );
    $("ruleS").addEventListener(
      "input",
      (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        parseRules();
      },
      { signal }
    );

    const presetSel = $("preset");
    PRESETS.forEach(([name, b, s]) => {
      const opt = document.createElement("option");
      opt.value = b + "/" + s;
      opt.textContent = name + " (B" + (b || "0") + "/S" + (s || "0") + ")";
      presetSel.appendChild(opt);
    });
    presetSel.addEventListener(
      "change",
      () => {
        if (!presetSel.value) return;
        const [b, s] = presetSel.value.split("/");
        applyRules(b, s);
      },
      { signal }
    );

    $("warnReduce").addEventListener(
      "click",
      () => {
        $("speed").value = 64;
        gps = 64;
        $("speedVal").textContent = "64 gen/s";
        $("warnOverlay").hidden = true;
      },
      { signal }
    );

    $("warnOkay").addEventListener(
      "click",
      () => {
        $("warnOverlay").hidden = true;
      },
      { signal }
    );

    document.addEventListener(
      "keydown",
      (e) => {
        const tag = (e.target.tagName || "").toLowerCase();
        if (tag === "input" || tag === "select" || tag === "textarea") return;
        if (e.code === "Space") {
          e.preventDefault();
          setRunning(!running);
        } else if (e.key === "s" || e.key === "S") {
          if (running) setRunning(false);
          step();
        } else if (e.key === "c" || e.key === "C") clearAll();
        else if (e.key === "r" || e.key === "R") randomize(density);
        else if (e.key === "Escape") clearModule();
        else if (e.key === "ArrowUp") {
          viewY -= 40 / zoom;
          clampView();
          e.preventDefault();
        } else if (e.key === "ArrowDown") {
          viewY += 40 / zoom;
          clampView();
          e.preventDefault();
        } else if (e.key === "ArrowLeft") {
          viewX -= 40 / zoom;
          clampView();
          e.preventDefault();
        } else if (e.key === "ArrowRight") {
          viewX += 40 / zoom;
          clampView();
          e.preventDefault();
        } else if (e.key === "+" || e.key === "=") zoomCenter(1.25);
        else if (e.key === "-" || e.key === "_") zoomCenter(0.8);
        else if (e.key === "0") resetZoom();
      },
      { signal }
    );

    let resizeTimer = null;
    window.addEventListener(
      "resize",
      () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (customGrid) resizeView();
          else sizeBoard();
        }, 120);
      },
      { signal }
    );

    /* ================= boot ================= */

    const FIRST_VISIT_KEY = "rgolee_first_visit";
    const firstVisit = !localStorage.getItem(FIRST_VISIT_KEY);
    if (firstVisit) localStorage.setItem(FIRST_VISIT_KEY, "1");

    sizeBoard();
    refreshGridInput();
    buildModules();
    randomize(density);
    setRunning(firstVisit);
    rafId = requestAnimationFrame((t) => {
      lastT = t;
      frame(t);
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      controller.abort();
    };
  }, []);

  return (
    <div className="game-shell">
      <header>
        <div className="logo">
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
            <rect
              x="1"
              y="1"
              width="28"
              height="28"
              rx="7"
              fill="#04060d"
              stroke="rgba(56,189,248,.4)"
              strokeWidth="1.5"
            />
            <rect x="5" y="5" width="5" height="5" rx="1.5" fill="#0ea5e9" opacity=".5" />
            <rect x="13" y="5" width="5" height="5" rx="1.5" fill="#22d3ee" />
            <rect x="5" y="13" width="5" height="5" rx="1.5" fill="#22d3ee" />
            <rect x="13" y="13" width="5" height="5" rx="1.5" fill="#7dd3fc" />
            <rect x="21" y="13" width="5" height="5" rx="1.5" fill="#22d3ee" opacity=".6" />
            <rect x="13" y="21" width="5" height="5" rx="1.5" fill="#22d3ee" opacity=".7" />
          </svg>
          <div>
            <h1>R-GoL-EE</h1>
            <p>Rahan&apos;s Game of Life &middot; Extended Edition</p>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <span className="k">Generation</span>
            <span className="v" id="statGen">0</span>
          </div>
          <div className="stat">
            <span className="k">Population</span>
            <span className="v" id="statPop">0</span>
          </div>
          <div className="stat">
            <span className="k">Rule</span>
            <span className="v" id="statRule">B3/S23</span>
          </div>
        </div>
      </header>

      <main className="app-main">
        <section className="board-wrap">
          <div className="toolbar glass">
            <div className="group">
              <button className="btn primary" id="btnPlay" title="Play / Pause (Space)">
                <svg id="iconPlay" width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M3 1.5v11l9-5.5z" /></svg>
                <svg id="iconPause" width="14" height="14" viewBox="0 0 14 14" fill="currentColor" style={{ display: "none" }}><rect x="2.5" y="1.5" width="3.2" height="11" rx="1" /><rect x="8.3" y="1.5" width="3.2" height="11" rx="1" /></svg>
                <span id="btnPlayLabel">Pause</span>
              </button>
              <button className="btn" id="btnStep" title="Step one generation (S)">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1.5" y="1.5" width="4" height="4" rx="1" /><rect x="1.5" y="8.5" width="4" height="4" rx="1" /><path d="M8.5 4h1.5a1.5 1.5 0 0 1 1.5 1.5V8.5" /><path d="M9.5 4a4 4 0 0 1 3 5" /></svg>
                Step
              </button>
            </div>
            <div className="sep" />
            <div className="group">
              <span className="glabel">Speed</span>
              <input type="range" id="speed" min="1" max="72" defaultValue="12" aria-label="Simulation speed" />
              <span className="speed-val" id="speedVal">12 gen/s</span>
            </div>
            <div className="sep" />
            <div className="group">
              <span className="glabel">Zoom</span>
              <button className="btn icon-btn" id="btnZoomOut" title="Zoom out (−)">&#8722;</button>
              <button className="btn icon-btn" id="btnZoomReset" title="Reset zoom (0)">1:1</button>
              <button className="btn icon-btn" id="btnZoomIn" title="Zoom in (+)">+</button>
              <input type="text" id="zoomVal" className="zoom-in" defaultValue="100" inputMode="numeric" title="Zoom percentage — type a number" aria-label="Zoom percentage" />
              <span className="zoom-pct">%</span>
            </div>
            <div className="sep" />
            <div className="group">
              <span className="glabel">Paint</span>
              <div className="seg" id="paintSeg">
                <button data-tool="toggle" className="active" title="Toggle cells">Toggle</button>
                <button data-tool="draw" title="Draw live cells">Draw</button>
                <button data-tool="erase" title="Erase cells">Erase</button>
              </div>
            </div>
            <div className="sep" />
            <div className="group">
              <label className="switch">
                <input type="checkbox" id="wrap" defaultChecked />
                <span className="track" />
                <span>Wrap edges</span>
              </label>
            </div>
            <div className="sep" />
            <div className="group">
              <span className="glabel">Fill</span>
              <input type="range" id="fill" min="1" max="100" defaultValue="22" style={{ width: 90 }} aria-label="Random fill percentage" />
              <span className="speed-val" id="fillVal">22%</span>
            </div>
            <div className="sep" />
            <div className="group">
              <button className="btn" id="btnRandom" title="Randomize (R)">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1.5" y="1.5" width="4.5" height="4.5" rx="1" /><rect x="8" y="1.5" width="4.5" height="4.5" rx="1" /><rect x="1.5" y="8.5" width="4.5" height="4.5" rx="1" /><rect x="8" y="8.5" width="4.5" height="4.5" rx="1" /></svg>
                Random
              </button>
              <button className="btn ghost" id="btnClear" title="Clear board (C)">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2.5 3.5h9M5.5 3.5V2h3v1.5M4 3.5l.6 8h4.8l.6-8" /></svg>
                Clear
              </button>
            </div>
          </div>

          <div className="canvas-area glass" id="canvasArea">
            <canvas
              id="board"
              aria-label="Game of Life board. Drag to paint, middle-drag or Shift+drag to pan, wheel to scroll, Ctrl+wheel to zoom."
            />
            <div id="hint" />
            <div id="stopBanner" className="stop-banner" />
            <div id="shortcuts">
              <div><b>Drag</b> paint &nbsp;<b>Right-drag</b> erase</div>
              <div><b>Middle/Shift+drag</b> pan &nbsp;<b>Wheel</b> scroll</div>
              <div><b>Ctrl+wheel / + -</b> zoom &nbsp;<b>Arrows</b> pan</div>
              <div><b>Space</b> play &nbsp;<b>S</b> step &nbsp;<b>C</b> clear &nbsp;<b>R</b> random</div>
            </div>
          </div>
        </section>

        <aside>
          <div className="card glass">
            <h3>Simulation Rules</h3>
            <div className="rule-row">
              <div className="rule-input"><label htmlFor="ruleB">B</label><input id="ruleB" defaultValue="3" maxLength={10} spellCheck={false} /></div>
              <div className="rule-input"><label htmlFor="ruleS">S</label><input id="ruleS" defaultValue="23" maxLength={10} spellCheck={false} /></div>
            </div>
            <select id="preset" title="Rule presets" aria-label="Rule presets">
              <option value="">Custom rule</option>
            </select>
            <p className="rule-note">B = neighbours needed to <strong style={{ color: "var(--accent)" }}>birth</strong> a cell &middot; S = neighbours needed to <strong style={{ color: "var(--accent)" }}>survive</strong>. Type digits 0–9 into either field.</p>
          </div>

          <div className="card glass">
            <h3>Board Grid</h3>
            <div className="rule-row">
              <div className="rule-input"><label htmlFor="gridX">X</label><input id="gridX" inputMode="numeric" maxLength={3} spellCheck={false} /></div>
              <div className="rule-input"><label htmlFor="gridY">Y</label><input id="gridY" inputMode="numeric" maxLength={3} spellCheck={false} /></div>
            </div>
            <label className="switch" style={{ marginTop: 10 }}>
              <input type="checkbox" id="autoFit" defaultChecked />
              <span className="track" />
              <span>Auto-fit board to window</span>
            </label>
            <p className="rule-note">Set the board size with <strong style={{ color: "var(--accent)" }}>X</strong> and <strong style={{ color: "var(--accent)" }}>Y</strong>, then leave the box. With auto-fit on the board resizes to fill the window; turn it off to keep the cell size and pan/zoom around a larger board instead.</p>
          </div>

          <div className="card glass">
            <h3>Cell Lifecycle</h3>
            <div
              className="legend-bar"
              id="legendBar"
              style={{
                background:
                  "linear-gradient(to right, #3b82f6 0%, #22c55e 3.33%, #facc15 16.67%, #f97316 24.44%, #ef4444 43.33%, #a855f7 65.56%, #ffffff 100%)",
              }}
            >
              <span style={{ flex: 6 }} title="Blue → Green · fast" />
              <span style={{ flex: 24 }} title="Green → Yellow · moderate" />
              <span style={{ flex: 14 }} title="Yellow → Orange · slow" />
              <span style={{ flex: 34 }} title="Orange → Red · very slow" />
              <span style={{ flex: 40 }} title="Red → Purple · very slow" />
              <span style={{ flex: 62 }} title="Purple → White · steady" />
            </div>
            <p className="legend-note">Cells age through the spectrum every generation they survive — <b style={{ color: "#60a5fa" }}>Blue</b>&#8594;<b style={{ color: "#4ade80" }}>Green</b> flashes by in 6 generations, then the board dwells on <b style={{ color: "#fb923c" }}>Orange</b> (34 gens) and <b style={{ color: "#f87171" }}>Red</b> (40 gens) before the final <b style={{ color: "#c084fc" }}>Purple</b>&#8594;<b style={{ color: "#fff" }}>White</b> crawl. Pure white = 180 generations old.</p>
          </div>

          <div className="card glass">
            <h3>Addable Modules</h3>
            <div className="module-grid" id="moduleGrid" />
            <p className="legend-note" style={{ marginTop: 10 }}>Pick a module, then click the board to drop it. Click it again (or press <strong style={{ color: "var(--accent)" }}>Esc</strong>) to exit placement. Pan/zoom to find a good spot first.</p>
          </div>

          <div className="card glass">
            <h3>Shortcuts</h3>
            <div className="kbd-row"><b>Space</b><span>Play / Pause</span></div>
            <div className="kbd-row"><b>S</b><span>Step one generation</span></div>
            <div className="kbd-row"><b>C</b><span>Clear board</span></div>
            <div className="kbd-row"><b>R</b><span>Randomize (20%)</span></div>
            <div className="kbd-row"><b>Arrows</b><span>Pan the board</span></div>
            <div className="kbd-row"><b>+ / -</b><span>Zoom in / out</span></div>
            <div className="kbd-row"><b>Wheel</b><span>Scroll / Ctrl = zoom</span></div>
            <div className="kbd-row"><b>Esc</b><span>Cancel module placement</span></div>
          </div>
        </aside>
      </main>

      <div className="overlay" id="warnOverlay" hidden>
        <div className="warn-card glass">
          <div className="warn-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-7h-2v5h2V9z" /></svg>
            STROBE WARNING
          </div>
          <p>You&apos;re running the simulation at <strong id="warnSpeed" style={{ color: "#fbbf24" }}>—</strong>.</p>
          <p>Above <strong style={{ color: "#fbbf24" }}>64 generations/sec</strong> the cells flicker very rapidly. This <strong>rapid flashing may trigger seizures</strong> in people with photosensitive epilepsy.</p>
          <p>Consider lowering the speed or closing your eyes (rarely the best approach).</p>
          <div className="warn-actions">
            <button className="btn" id="warnReduce">Drop to 64 gen/s</button>
            <button className="btn primary" id="warnOkay">I understand, keep it fast</button>
          </div>
        </div>
      </div>
    </div>
  );
}
