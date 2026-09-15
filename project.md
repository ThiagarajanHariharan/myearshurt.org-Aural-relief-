# AuralRelief — Project Architecture & Rules

> **Immutable architecture truth.** Update this file only when major architectural decisions change (stack, deployment model, agent coordination protocol, or global engineering rules).

---

## Product

**AuralRelief** (`myearshurt.me`) is a clinical acoustic wellness platform and soundscape engine for tinnitus relief, hyperacusis habituation, parasympathetic regulation, and deep focus. It is **not** a medical device.

---

## Architecture

| Layer | Choice |
|-------|--------|
| **App type** | 100% static, client-side web application |
| **Backend** | None |
| **Database** | None |
| **Hosting** | Netlify (primary); also deployable to Vercel or GitHub Pages |
| **Build step** | None — publish directory is repo root (`.`) |
| **Audio engine** | Web Audio API (`AudioContext` / `webkitAudioContext`) |
| **Styling** | Pre-built Tailwind CSS (`tailwind-static.css`) + inline CSS in `index.html` |
| **Fonts** | Google Fonts (Inter, Lexend, Material Symbols Outlined) |
| **PWA** | `manifest.json` + service worker (`sw.js`) |
| **SEO / AI** | Structured data (JSON-LD), `llms.txt`, sitemap, content landing pages |

### Key application surfaces

- **`index.html`** — Main SPA: soundscape player, procedural 4-stem synthesizer, notch therapy DSP, 3D spatial HRTF panning, canvas visualizers, sleep/focus timer. All core logic lives in a single inline `<script>` block.
- **Content pages** — Static HTML landing pages (e.g. `my-ear-hurts.html`, `research.html`) with directory-style routes via `_redirects`.
- **`music/`** — High-fidelity MP3 soundscape assets (long-cache headers via `netlify.toml`).
- **`sw.js`** — Offline/cache strategy for static assets and key routes.

### Web Audio capabilities (from README / codebase)

- 48 high-fidelity soundscapes across 5 clinical channels (brainwave, drones, rain/nature, colored/noise notch, harmonic bowls)
- 4-stem real-time procedural mixer (brownian drone, filtered rain, theta carrier, solfeggio resonators)
- BiquadFilter notch therapy (125 Hz – 16,000 Hz) with live response curve
- 3D spatial HRTF orbital panning
- Ambient sleep/focus timer with fade-out and completion chimes
- 5 procedural 2D canvas visualizers (category-matched)

---

## Tech Stack Summary

| Category | Technologies |
|----------|--------------|
| Markup / UI | HTML5, inline CSS, Tailwind (static build) |
| Logic | Vanilla JavaScript (no framework) |
| Audio | Web Audio API |
| Graphics | HTML5 Canvas (2D procedural visualizers) |
| Deployment | Netlify (`netlify.toml`, `_redirects`) |
| PWA | Web App Manifest, Service Worker |
| License | MIT |

---

## Repository Layout (high level)

```
/
├── index.html              # Main app (player + DSP + visualizers)
├── *.html                  # SEO / content landing pages
├── tailwind-static.css     # Pre-built Tailwind
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── netlify.toml            # Security headers + asset caching
├── _redirects              # Netlify clean URL routing
├── music/                  # Soundscape MP3 assets
├── project.md              # This file — architecture truth
├── goal.md                 # Current macro-milestone
├── tasks.md                # Active task queue (@Cursor / @Antigravity)
├── status.md               # Agent state lock (mutex; Phase 1 authoritative)
└── .coordination/          # Git message bus (JSON inboxes + events.jsonl)
```

---

## Global Engineering Rules

1. **Static-only** — No server-side code, APIs, databases, or build-time secrets in the repo unless architecture is explicitly changed here first.
2. **Preserve UX intent** — Distraction-free interface; automatic station progression; no intrusive track titles during playback.
3. **Audio quality** — Prefer Web Audio graph correctness; avoid blocking the main thread during playback.
4. **Deployment** — Netlify publish dir = `.`; build command blank. Security headers defined in `netlify.toml`.
5. **No medical claims** — Copy and features must remain acoustic-comfort / wellness framing, not diagnosis or treatment.

---

## Dual-Agent Orchestration Protocol (SOP)

Two agents — **Cursor** and **Antigravity** — coordinate via four shared files in the **repository root**, plus a git message bus in `.coordination/` (see [`.coordination/README.md`](.coordination/README.md)).

| File | Purpose |
|------|---------|
| `project.md` | Immutable architecture truth (this file) |
| `goal.md` | Current macro-milestone / north star |
| `tasks.md` | Active task queue, tagged `@Cursor` or `@Antigravity` |
| `status.md` | State lock / mutex — who is working and on what (**Phase 1 authoritative**) |
| `.coordination/` | Typed messages, `events.jsonl` audit log, `state.json` snapshot (**advisory until Phase 3**) |

**Phase 1 conflict rule:** If `status.md` and `.coordination/state.json` disagree, **`status.md` wins**.

### Four pillars

1. **Single source of truth** — Architecture lives in `project.md`; goals in `goal.md`; work items in `tasks.md`; live state in `status.md`.
2. **Lock before edit** — Before modifying repo files, an agent sets `status.md` to `Working`, records `Current Action` and `Locked Files`, then proceeds. Also emit `LOCK_REQUEST` to the bus when possible.
3. **Release when idle** — When finished (or blocked), set `Status: Idle`, clear `Current Action` and `Locked Files`. Emit `LOCK_RELEASE` + `HEARTBEAT`.
4. **Respect task tags** — Each agent only executes tasks tagged for them (`@Cursor` or `@Antigravity`). Untagged tasks require explicit user assignment.

### Paired always-on agents

Keep **one long-lived thread per side** parked on this protocol. This is not an OS daemon: each wake (`git pull` → drain inbox → heartbeat → work or idle). Agents “chat” through inbox JSON, not by overwriting each other’s locks.

### Agent-specific rules

- **Cursor** — Only pick up `@Cursor` tasks. Do not start `@Antigravity` work.
- **Antigravity** — Only pick up `@Antigravity` tasks. Do not start `@Cursor` work.
- **Conflicts** — If `status.md` shows another agent `Working` on overlapping files, wait or coordinate via the user / `QUESTION` on the bus.
- **User overrides** — The user may reassign tags, goals, or locks at any time; agents follow the latest file contents.

---

## When to Update This File

Update `project.md` when:

- Adding/removing a backend, build pipeline, or database
- Changing primary hosting or deployment model
- Adopting a JS framework or splitting the monolithic `index.html`
- Revising the dual-agent coordination protocol itself

Do **not** update this file for routine feature work — use `tasks.md` and `goal.md` instead.
