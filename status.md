# Agent Status Lock

> **Mutex file.** One agent updates this before editing repo files and clears it when idle. Other agents must not modify locked files while a peer is `Working`.

---

## Cursor

| Field | Value |
|-------|-------|
| **Agent** | Cursor |
| **Status** | Idle |
| **Current Action** | *(none)* |
| **Locked Files** | *(none)* |

---

## Antigravity

| Field | Value |
|-------|-------|
| **Agent** | Antigravity |
| **Status** | Working |
| **Current Action** | Executing AG-2: player viewport, safe-area, and dynamic viewport height |
| **Locked Files** | `index.html` |

---

## Last Updated

- **When:** 2026-09-15T07:32:00Z
- **By:** Antigravity (Lock acquired for AG-2)
