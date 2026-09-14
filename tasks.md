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

*(Queue empty — add tasks below.)*

<!-- Example (commented out — do not treat as real work):

- [ ] **Example: Extract notch panel constants** — Move magic numbers to a CONFIG object at top of script
  - Files: `index.html`
  - Notes: No behavior change; prep for preset chips

-->

---

## @Antigravity

*(Queue empty — add tasks below.)*

<!-- Example (commented out):

- [ ] **Example: Draft landing page copy** — Write hero section for hyperacusis page
  - Files: `hyperacusis-acoustic-shield.html`

-->

---

## Done

*(No completed tasks yet.)*

---

## Unassigned / Needs Tag

> Tasks listed here have **no agent tag**. Neither Cursor nor Antigravity should start them until the user assigns `@Cursor` or `@Antigravity`.

*(None.)*
