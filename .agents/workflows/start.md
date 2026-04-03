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

Check if `project-state.json` exists in the project root.

**If it does NOT exist (new project):**
- Copy `.agents/project-state.json.example` to the project root and rename it `project-state.json`.
- Write the provided URL into the `url` field.
- Set `last_updated` to today's date.
- Create `PROJECT_LOG.md` in the project root with this exact header and nothing else:

```markdown
# Project Log — [Business Name or URL]
**Started:** [YYYY-MM-DD]
**URL:** [url]

> This file is append-only. Past entries must never be edited or deleted.
> Every role reads this file top-to-bottom at the start of their gate.

```

- Report: "New project created. Starting from Gate 0.5."

**If it DOES exist (resuming):**
- Read `project-state.json` to get gate statuses.
- Read `PROJECT_LOG.md` to reconstruct the full project context.
- Report a brief status table of all 8 gates.
- Report: "Resuming project. Picking up from [last incomplete gate]."

---

## Step 2 — Invoke the Manager-Orchestrator

After state and log are ready, activate the `manager-orchestrator` skill.

The Orchestrator will read `project-state.json` and `PROJECT_LOG.md`, then advance automatically through all pending gates without requiring further input from the user — unless a HALT point is reached.

---

## HALT Points (Where the User Must Review)

The pipeline pauses and asks for the user's OK only at these two moments:

1. **After Gate 0.5**: The AI shows the Gate 0.5 entry from `PROJECT_LOG.md` and asks: "Does this client brief look correct? Any changes before I continue?"
2. **After Gate 5 (Visual Audit)**: The AI shows the Gate 5 entry from `PROJECT_LOG.md` and asks if the user approves proceeding to Gate 6.

At every other gate, the pipeline runs without interruption.
