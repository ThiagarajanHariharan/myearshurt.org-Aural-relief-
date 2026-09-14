# Active Task Queue

> **Work backlog for dual-agent coordination.** Tasks must be tagged `@Cursor` or `@Antigravity`. Untagged items require explicit user assignment before an agent may start them.

---

## How to Use

1. User or coordinator adds tasks under the correct agent section.
2. Agent reads `status.md` — if idle, sets lock → executes only their tagged tasks → releases lock.
3. Move completed tasks to **Done** (with date) or delete them; do not invent fake history.

### Task format

```markdown
- [ ] **Task title** — brief description
  - Files: `path/to/file.html` (optional)
  - Depends on: (optional task or PR link)
  - Notes: (optional)
```

---

## @Cursor

*(Queue empty.)*

---

## @Antigravity

*(Queue empty — add tasks below.)*

---

## Done

- [x] **CUR-1: Polish Explore Drawer (`#explore-drawer`) for Mobile** — Horizontal tab scroll, touch-friendly mixer/notch sliders, responsive spatial radar canvas
  - Files: `index.html`
  - Completed: 2026-09-14 by Cursor

- [x] **CUR-2: Polish Content Subpages on Mobile** — Responsive content-container padding, heading wrap, table/callout overflow fixes
  - Files: `tmj-ear-pain.html`, `waiting-for-ent-appointment.html`, `what-is-sound-masking.html`
  - Completed: 2026-09-14 by Cursor

---

## Unassigned / Needs Tag

> Tasks listed here have **no agent tag**. Neither Cursor nor Antigravity should start them until the user assigns `@Cursor` or `@Antigravity`.

*(None.)*
