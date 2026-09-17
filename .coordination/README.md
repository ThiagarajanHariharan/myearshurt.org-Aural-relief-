# Dual-agent communication layer (Phase 1)

Protocol version: **1.0**  
Schema: [`schema/message-v1.json`](schema/message-v1.json)

This folder is the **machine protocol** between Cursor and Antigravity. Git is the transport. There is no backend.

Human-facing surfaces stay at the repo root:

| File | Role in Phase 1 |
|------|-----------------|
| `project.md` | Architecture truth |
| `goal.md` | Macro milestone |
| `tasks.md` | What to do (tags still required) |
| `status.md` | **Authoritative lock mutex** until Phase 3 |

`.coordination/state.json` and `events.jsonl` are **advisory** in Phase 1. Agents **may** emit events. If `status.md` and `state.json` disagree, **`status.md` wins**.

## Layout

```
.coordination/
├── README.md                 # This file
├── schema/message-v1.json
├── inbox/cursor/             # Unread messages TO Cursor
├── inbox/antigravity/        # Unread messages TO Antigravity
├── archive/YYYY-MM/          # Processed inbox messages
├── events.jsonl              # Append-only event log
└── state.json                # Snapshot (locks, heartbeats) — not authoritative yet
```

## Send a message

1. Write `.coordination/inbox/{recipient}/{id}.json` using the envelope in the schema.
2. Append the same JSON as **one line** to `events.jsonl`.
3. Update `state.json` (`state_version` + 1). If git conflicts, pull, merge, retry once.
4. After the recipient processes it, move the inbox file to `archive/{YYYY-MM}/{id}.json`.

Do not duplicate the same `(type, correlation_id, from)` within TTL.

## Paired always-on agents (recommended)

Neither Cursor nor Antigravity is an OS daemon. “Always on” means **one long-lived chat per side** that stays parked on this protocol:

On every wake / user ping / timer:

1. `git pull`
2. Read `goal.md` and `status.md`
3. Read `state.json` for peer heartbeat and locks
4. Drain `inbox/{self}/` by priority
5. Emit `HEARTBEAT` (idle or working)
6. If tagged work exists and files are free: lock in `status.md` **and** emit `LOCK_REQUEST`
7. If nothing to do: stay idle; do not touch the peer’s locked files
8. Push coordination commits separately from product commits when possible

Heartbeat freshness: during long work, emit at least every ~15 minutes (or every sub-turn). A lock with no heartbeat for > 30 minutes is **stale** — ask the user before stealing it.

## Turn SOP (both agents)

See `project.md` § Dual-Agent Orchestration. Cursor only runs `@Cursor`. Antigravity only runs `@Antigravity`.
