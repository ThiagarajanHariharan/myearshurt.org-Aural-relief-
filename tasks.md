# Active Task Queue

> **Work backlog for dual-agent coordination.** Tasks must be tagged `@Cursor` or `@Antigravity`. Untagged items require explicit user assignment before an agent may start them.

> **Milestone plan:** `/cursor/stores/bc-010aff67-9608-48ff-84d1-805258b75a4e/docs/mobile-friendly-conversion-plan.md`

---

## How to Use

1. User or coordinator adds tasks under the correct agent section.
2. Agent reads `status.md` — if idle, sets lock → executes only their tagged tasks → releases lock.
3. Move completed tasks to **Done** (with date) or delete them; do not invent fake history.

### Task format

```markdown
- [ ] **ID Title** — brief description
  - Files: `path/to/file.html`
  - Depends on: (optional)
  - Acceptance: (optional)
```

---

## @Cursor

- [x] **CUR-3 Publish mobile conversion plan** — Full site plan in Project store (not product HTML).
  - Files: store `docs/mobile-friendly-conversion-plan.md`; `goal.md` pointer
  - Depends on: none
  - Acceptance: Player + landings, viewport/touch/drawer/type/audio, phases, risks, CUR vs AG tasks numbered

- [x] **CUR-4 Inventory + tagged queues** — Canonical vs `{slug}/index.html` duplicates; AG file lists in plan/`tasks.md`.
  - Files: `tasks.md`, `goal.md`
  - Depends on: CUR-3
  - Acceptance: 16 root landings + `index.html` listed; `_redirects` aligned

- [x] **CUR-7 Assign first coding task on the bus** — `TASK_ASSIGNED` for AG-2 only (do not flood inbox).
  - Files: `.coordination/inbox/antigravity/`, `events.jsonl`, `state.json`
  - Depends on: CUR-3
  - Acceptance: AG-2 message present; `status.md` Idle; no product file locks

- [ ] **CUR-5 Review Antigravity player PRs** — Phases 1–3 and AG-10. Reject DSP/HRTF math changes.
  - Files: review `index.html` diffs only
  - Depends on: AG-2…AG-7, AG-10 PRs
  - Acceptance: §7 player checklist; comment on product PR

- [ ] **CUR-6 Review Antigravity landing PRs** — All 16 canonical pages + duplicates.
  - Files: review root `*.html` and `{slug}/index.html`
  - Depends on: AG-8, AG-9
  - Acceptance: overflow/wrap/`for-clinics` CSS; copies match roots

- [ ] **CUR-8 Copy/IA only if needed** — Gate string “Tap anywhere…” if AG-7 needs exact copy. No marketing rewrite.
  - Files: none (specify strings for Antigravity)
  - Depends on: AG-7
  - Acceptance: No new medical claims

- [ ] **CUR-9 Merge order for player PRs** — Decide: merge [PR #6](https://github.com/ThiagarajanHariharan/myearshurt.org-Aural-relief-/pull/6) (includes AG-2 work) and close or rebase [PR #5](https://github.com/ThiagarajanHariharan/myearshurt.org-Aural-relief-/pull/5). Tell Hariharan; do not merge without him.
  - Files: none
  - Depends on: AG-3
  - Acceptance: One linear player history on `main`; no double-merge conflict

- [ ] **CUR-10 Watcher hygiene** — Instruct Antigravity schedule: no HEARTBEAT commit if inbox empty; exit if `status.md` Working; cron `*/15 * * * *`. Pause extra watcher chats (screenshot pile-up).
  - Files: store `docs/talk-to-antigravity-when-idle.md` (prompt text)
  - Depends on: none
  - Acceptance: Empty ticks do not spam [PR #4](https://github.com/ThiagarajanHariharan/myearshurt.org-Aural-relief-/pull/4)

- [ ] **CUR-11 Review landing PRs** — Same as CUR-6 when AG-8/AG-9 open.
  - Files: review only
  - Depends on: AG-8
  - Acceptance: `for-clinics` has CSS; tables scroll; no overflow at 375px

- [ ] **CUR-12 Review a11y / motion PRs** — AG-12, AG-15.
  - Files: review only
  - Depends on: AG-12, AG-15
  - Acceptance: No DSP changes; reduced-motion does not break audio unlock

- [ ] **CUR-V Review zero-lag animation PRs** — Reject canvas re-enable, DSP diffs, missing orb `prefers-reduced-motion`.
  - Files: review `index.html` only
  - Depends on: AG-V1…AG-V3
  - Acceptance: Plan `/cursor/stores/bc-010aff67-9608-48ff-84d1-805258b75a4e/docs/zero-lag-background-animations-plan.md`

---

## @Antigravity

- [x] **AG-2 Player viewport, safe-area, dvh** — First coding task. Branch from latest `main`; **do not** put HTML in PR #4.
  - Files: `index.html` (optional `manifest.json` if meta must match)
  - Depends on: CUR-3
  - Acceptance: `viewport-fit=cover`; `safe-area-inset-*` on HUD/drawer; `dvh`/`svh` with `vh` fallback; no 375px horizontal scroll; dock not under home indicator
  - Notes: Inbox `TASK_ASSIGNED` correlation `AG-2`. Port nothing from PR #3 yet (that is AG-4).

- [x] **AG-3 Dock, carousel, volume touch** — Prevent 360px overflow of four 48px buttons + slider.
  - Files: `index.html`
  - Depends on: AG-2
  - Acceptance: Desktop pill unchanged ≥768px; volume thumb ~24px+; mute hit area 44px; carousel momentum scroll
  - Notes: Inbox `TASK_ASSIGNED` `msg_20260915T083200Z_ag3asg`. Implemented in PR #6 on branch `antigravity/ag3-dock-carousel-volume`.

- [ ] **AG-4 Explore drawer tabs + padding** — Port [PR #3](https://github.com/ThiagarajanHariharan/myearshurt.org-Aural-relief-/pull/3) CUR-1 patterns.
  - Files: `index.html`
  - Depends on: AG-2
  - Acceptance: Horizontal nowrap tab scroll; safe-area bottom padding; close ≥44px; LinkedIn/coffee don’t break the tab row

- [ ] **AG-5 Drawer + timer range hit targets** — ~26px thumbs; notch ±10 Hz ≥44px; keep log frequency mapping.
  - Files: `index.html`
  - Depends on: AG-4
  - Acceptance: Mixer/notch/spatial/timer sliders thumb-draggable; octave chips padded

- [ ] **AG-6 Notch curve + spatial radar canvases** — Responsive wrappers; redraw on tab/orientation; keep `#visual-canvas` off.
  - Files: `index.html`
  - Depends on: AG-4
  - Acceptance: No overflow at 320px; panner math unchanged

- [ ] **AG-7 Gate, timer modal, engagement modal** — Touch copy; 44px close; scroll if short viewport.
  - Files: `index.html`
  - Depends on: AG-3
  - Acceptance: Full-overlay tap still unlocks audio; presets usable

- [ ] **AG-8 Canonical landing mobile CSS (16 roots)** — Wrap, table scroll, heading overflow; fix `for-clinics.html` missing stylesheet (prefer `/tailwind-static.css`).
  - Files: `my-ear-hurts.html`, `waiting-for-ent-appointment.html`, `what-is-sound-masking.html`, `sounds-for-ear-discomfort.html`, `research.html`, `tmj-ear-pain.html`, `post-concert-ear-ringing.html`, `noise-induced-ear-fatigue.html`, `ear-pain-at-night.html`, `best-sound-therapy-tools.html`, `hyperacusis-acoustic-shield.html`, `ear-pressure-on-flights.html`, `eustachian-tube-dysfunction-exercises.html`, `misophonia-sound-sensitivity.html`, `clogged-ears-sound-relief.html`, `for-clinics.html`
  - Depends on: CUR-3 (disjoint from `index.html` — lock landings only)
  - Acceptance: No page-level horizontal overflow; PR #3 three pages included
  - Notes: **Can start now** while player PRs are open. Do not lock `index.html`.

- [ ] **AG-9 Directory index.html parity** — Same CSS as matching root files.
  - Files: `*/index.html` duplicates of the AG-8 list
  - Depends on: AG-8
  - Acceptance: Copies match canonical roots

- [ ] **AG-10 Web Audio resume + visualizer discipline** — Resume both contexts on gesture and on tab return; no-op hidden canvas resize. **No DSP redesign.**
  - Files: `index.html` (script)
  - Depends on: AG-2, AG-7
  - Acceptance: CUR-5 review; notch Q/frequency and HRTF orbit unchanged

- [ ] **AG-11 Mobile QA evidence** — 375/390 portrait (HUD, drawer mixer/notch/spatial, one table landing, for-clinics) + landscape smoke.
  - Files: none (screenshots on product PR)
  - Depends on: AG-3, AG-6, AG-8, AG-10
  - Acceptance: Residual issues listed honestly

- [ ] **AG-12 prefers-reduced-motion** — Tone down HUD/orb animation when the OS asks; audio still starts on tap.
  - Files: `index.html` (CSS; JS only if needed to pause CSS orbs)
  - Depends on: AG-3
  - Acceptance: `prefers-reduced-motion: reduce` visibly calmer; play still works; no DSP change

- [ ] **AG-13 Landing viewport-fit + theme-color** — Match player PWA chrome on canonical landings (`viewport-fit=cover`, theme-color, apple-mobile-web-app where player has it).
  - Files: 16 root landing HTML files (not `index.html` unless already done)
  - Depends on: AG-8
  - Acceptance: iPhone notch does not cover headings; no new medical copy

- [ ] **AG-14 Landscape HUD smoke** — Dock/title still usable at ~844×390; no double-scroll on body.
  - Files: `index.html`
  - Depends on: AG-3, AG-4
  - Acceptance: Screenshot on product PR; no HRTF change

- [ ] **AG-15 Focus rings + mute button keyboard** — Visible focus on dock controls; mute `<button>` already in PR #6 stays keyboard-operable.
  - Files: `index.html`
  - Depends on: AG-3
  - Acceptance: Tab order reaches mute, volume, explore; `:focus-visible` not removed

- [ ] **AG-16 Watcher: empty inbox is a no-op** — If the scheduled prompt still commits HEARTBEAT with empty inbox, stop that in the **schedule prompt** (Hariharan edits the task). Code change only if a tiny `.coordination` README note helps.
  - Files: `.coordination/README.md`
  - Depends on: CUR-10
  - Acceptance: Empty ticks = no git commit

- [ ] **AG-V1 Kill competing JS in CSS visual mode** — Stop `mainVisualLoop` drawing/resizing hidden canvas; don’t drive HRTF off a 60fps visual rAF.
  - Files: `index.html`
  - Depends on: lock `index.html` (not while AG-4–7/10 in flight)
  - Acceptance: CSS mode = no canvas 2D work; `#visual-canvas` stays hidden; no DSP change
  - Notes: Plan `docs/zero-lag-background-animations-plan.md`

- [ ] **AG-V2 Compositor orbs + reduced motion + hidden tab** — `transform`/`opacity` only; pause orbs on `prefers-reduced-motion` and `document.hidden`. Fold AG-12 intent here if one PR.
  - Files: `index.html`
  - Depends on: AG-V1
  - Acceptance: No `filter`/`blur` on orbs; background tab pauses motion

- [ ] **AG-V3 Hitless palette switch** — Category colors via CSS variables; do not reset `className` in a way that restarts keyframes.
  - Files: `index.html`
  - Depends on: AG-V2
  - Acceptance: Station change does not flash/restart orb animation

- [ ] **AG-V4 Optional static landing wash** — Cheap static glow only; no orbs on SEO pages.
  - Files: 16 root landings
  - Depends on: AG-8
  - Acceptance: No scroll jank; no extra JS loop


---

## Done

- [x] **AG-1 Join the coordination bus** (2026-09-15) — Antigravity drained inbox, emitted HEARTBEAT on bus, archived `msg_20260915T064001Z_hello1.json`, state.json bumped to v2.
- [x] **CUR-3 Publish mobile conversion plan** (2026-09-15) — Store plan path in `goal.md`.
- [x] **CUR-4 Inventory + tagged queues** (2026-09-15)
- [x] **CUR-7 Assign AG-2 on bus** (2026-09-15)
- [x] **AG-2 Player viewport, safe-area, dvh** (2026-09-15) — Implemented on branch `antigravity/ag2-player-viewport-safe-area`, opened PR #5, safe-area and dvh added, lock released.
- [x] **AG-3 Dock, carousel, volume touch** (2026-09-15) — Implemented on branch `antigravity/ag3-dock-carousel-volume`, opened PR #6, 360px dock fit, 44px mute target, 24px volume thumb, carousel momentum scroll, lock released.

---

## Unassigned / Needs Tag

> Tasks listed here have **no agent tag**. Neither Cursor nor Antigravity should start them until the user assigns `@Cursor` or `@Antigravity`.

*(None.)*
