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
| **Status** | Idle |
| **Current Action** | Bus watcher active; AG-3 complete in PR #6; standing by for AG-4 assignment |
| **Locked Files** | *(none)* |

---

## Last Updated

- **When:** 2026-09-15T09:25:00Z
- **By:** Antigravity (Bus watcher heartbeat; standing by for AG-4)
