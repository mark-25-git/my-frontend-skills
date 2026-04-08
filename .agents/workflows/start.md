---
description: Start or resume an agency pipeline project with a single URL input
---

# /start — Pipeline Entry Point

This is the ONLY command the user ever needs to run. It works for both new projects and resuming existing ones.

## What to Ask the User

If the user has not provided a URL, ask:
> "What is the website URL you want to redesign?"

Nothing else is required from the user.

---

## Step 1 — Check Project State

- **1. Copy and Update State**: Read `.agents/project-state-template.md`, paste it into `PROJECT_STATE.md` via `write_to_file`, and update the `[url]` placeholder and `Last Updated` date to today.

- Report: "New project created. Starting from Gate 0.5."

**If it DOES exist (resuming):**
- Read `PROJECT_STATE.md` to reconstruct the full project status and history.
- Report a brief status table of all 8 gates.
- Report: "Resuming project. Picking up from [last incomplete gate]."

---

## Step 2 — Invoke the Manager-Orchestrator

After state and log are ready, activate the `manager-orchestrator` skill.

The Orchestrator will read `PROJECT_STATE.md`, then advance automatically through all pending gates without requiring further input from the user — unless a HALT point is reached.

---

## HALT Points (Where the User Must Review)

The pipeline pauses and asks for the user's OK only at these two moments:

1. **After Gate 0.5**: The AI shows the Gate 0.5 history entry from `PROJECT_STATE.md` and asks: "Does this client brief look correct? Any changes before I continue?"
2. **After Gate 5 (Visual Audit)**: The AI shows the Gate 5 history entry from `PROJECT_STATE.md` and asks if the user approves proceeding to Gate 6.

At every other gate, the pipeline runs without interruption.
