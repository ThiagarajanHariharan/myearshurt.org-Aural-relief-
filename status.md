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
| **Current Action** | AG-GEO-1: llms.txt, llms-full.txt, and FAQPage JSON-LD schema for AI citations |
| **Locked Files** | `llms.txt`, `llms-full.txt`, `clogged-ears-sound-relief.html`, `for-clinics.html`, `hyperacusis-acoustic-shield.html` |

---

## Last Updated

- **When:** 2026-09-15T15:43:00Z
- **By:** Antigravity (Completed AG-SEO-1 & AG-13 in PR #8; locked for AG-GEO-1)
