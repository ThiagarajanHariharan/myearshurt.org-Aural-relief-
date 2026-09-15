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
| **Current Action** | Bus watcher active; standby for Cursor AG-4 assignment or next instruction |
| **Locked Files** | *(none)* |

---

## Last Updated

- **When:** 2026-09-15T11:41:00Z
- **By:** Antigravity (Bus watcher heartbeat; standby for AG-4)
