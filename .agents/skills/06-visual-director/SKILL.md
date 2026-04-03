---
name: visual-director
description: >
  Visual audit of the built website. Browses the live site, checks against the
  Architect's "Visual Non-Negotiables", and appends a Visual Audit entry to PROJECT_LOG.md.
  Trigger this during Gate 5 to review the built frontend before QA.
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 5 — Visual Quality Audit

**FIRST ACTION:** Read `PROJECT_LOG.md` from top to bottom. Your input is the Gate 1B entry — specifically the Aesthetic Direction and Visual Non-Negotiables. Those are the benchmark you audit against.

**PRE-CONDITION:** `gate_4.status` must be `complete` in `project-state.json`.

---

## Step 0 — Verify Dev Server is Running

Check `project-state.json` for the `dev_server` field.

- **If empty or missing**: HALT. Notify the PM: "Dev server not started. Instruct the Engineer to run `cmd /c npm run dev` and update `dev_server` in `project-state.json`."
- **If populated**: Proceed.

---

## Step 1 — Visual Inspection (Browser Required)
Use `read_browser_page` on the `dev_server` URL (e.g., `http://localhost:3000`).

- **Responsiveness**: Inspect at Desktop (1920px), Tablet (768px), Mobile (375px).
- **Pages**: Homepage, the primary Money Page, and at least one secondary page.

---

## Step 2 — Audit Against These Criteria
1. **Visual Hierarchy**: Does the primary CTA stand out immediately? Is there a clear above-the-fold value proposition?
2. **Consistency**: Same design language for all buttons? Consistent font pairings across sections?
3. **Responsive Flow**: Correct stacking on mobile? No horizontal overflow?
4. **Interactive States**: Hover effects, focus states, transitions — do they feel premium?
5. **Aesthetic WOW Factor**: Does the build match the Visual Non-Negotiables from Gate 1B?

---

## Append to PROJECT_LOG.md

```markdown
---
## [Gate 5] — Visual Audit
**Role:** Visual Director | **Date:** [YYYY-MM-DD]

### Compliance Score
- **Aesthetic Alignment:** [1–10] — [Justification]
- **Responsiveness:** [Pass / Fail] — [Breakpoints that failed, if any]
- **Visual Non-Negotiables:**
  - [Rule 1]: ✅ / ❌
  - [Rule 2]: ✅ / ❌
  - [Rule 3]: ✅ / ❌

### Revision List (Engineer Must Implement All Items)
- [ ] [Issue]: [Conceptual fix description — no code]
- [ ] [Issue]: [Conceptual fix description — no code]

### Visual Director's Suggestion
[One high-impact premium detail to add]

### Handoff
[If revisions needed]: Revision list ready. Returning to Gate 4 Engineer. Pending re-audit.
[If score 9+/10 and all non-negotiables pass]: Visual audit passed. ⏸ Waiting for user approval to proceed to Gate 6.
```

---

## CRITICAL RESTRAINTS
1. **DO NOT WRITE CODE**: You are an auditor. Do not modify `.tsx` or `.css` files.
2. **ONLY VISUAL**: Ignore functional bugs unless they impact visual layout.

---

## Pipeline Reporting
Update `project-state.json`:

```json
{
  "gates": {
    "gate_5": {
      "status": "in_progress",
      "visual_audit": "Audit appended to PROJECT_LOG.md."
    }
  }
}
```
Notify the PM. If revisions are needed, the Engineer returns to Gate 4. If passed, the PM will ask the user for approval before Gate 6.
