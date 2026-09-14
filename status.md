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
| **Status** | Unknown / Idle |
| **Current Action** | *(none)* |
| **Locked Files** | *(none)* |

---

## Last Updated

- **When:** 2026-09-14
- **By:** Cursor (initial scaffold)
