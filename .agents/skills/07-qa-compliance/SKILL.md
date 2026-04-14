---
name: qa-compliance
description: >
  Final auditor for quality, speed, and accessibility standards.
  Triggers include: "run qa," "verify accessibility," "run Gate 6 Final QA."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 6 — Final QA Audit

**FIRST ACTION:** Read `PROJECT_LOG.md` from top to bottom. Your inputs are:
- Gate 1.5: Expected metadata and schema requirements
- Gate 5: Confirm all revision items are resolved before signing off

**PRE-CONDITION:** `gate_5.status` must be `approved` in `project-state.json`.

---

## Step 0 — Read the Stack
Check `project-state.json` for the `stack` field before running compliance checks.

- **If `stack` is `next@15`**: Run the full Tailwind/shadcn checklist below.
- **If different**: Adapt checks to match the declared stack. Do not report false failures.

---

## Step 1 — Technical Compliance

For Next.js 15 + Tailwind CSS:
- **Utility Classes:** Zero Vanilla CSS files. All styles are Tailwind utility classes.
- **Tokens:** Zero hex codes in JSX. All colors use named theme classes (e.g., `text-primary`).
- **Accessibility:** All shadcn/Radix components have correct ARIA attributes.
- **Component Structure:** Files organized per `frontend-engineering-standards` (`/components/ui/`, `/components/sections/`, `/app/`).

---

## Step 2 — SEO & AEO Verification
Cross-check against the Gate 1.5 log entry:
- **Metadata:** Every page has a unique title and meta description matching the Gate 1.5 templates.
- **Schema:** JSON-LD scripts are present and populated with real client data (no placeholder text).

---

## Step 3 — Performance & Mobile
- No console errors on the running dev server.
- No horizontal overflow at 375px.
- All images use `next/image` with explicit `width`, `height`, and `alt` attributes.

---

## Step 4 — Visual Revision Confirmation
Check the Gate 5 revision list in `PROJECT_LOG.md`. Confirm every `- [ ]` item has been addressed in a subsequent Gate 4 (Revision) log entry.

---

## Step 5 — Functional Integrity (The Final Click)
Perform a exhaustive "Click-Through Audit" of the entire site:
- **Links:** Zero 404s. All navigation and footer links must resolve.
- **Buttons:** Every CTA (Call to Action) must either anchor to the correct section or navigate to the intended page.
- **Forms:** Contact/Access forms must have functional UI states (loading, success, error) and correctly formatted fields.

---

## Append to PROJECT_LOG.md

```markdown
---
## [Gate 6] — Final QA Sign-Off
**Role:** QA Compliance | **Date:** [YYYY-MM-DD]

### Checklist
- [x] Technical Standard (Tailwind/shadcn — stack: next@15)
- [x] SEO/AEO Verification (unique metadata + JSON-LD matching Gate 1.5)
- [x] Accessibility (WCAG 2.2 AA)
- [x] Performance & Mobile (no overflow, next/image used)
- [x] Functional Integrity (Zero broken paths or dead buttons)
- [x] All Gate 5 revision items resolved

### Result
✅ Project is production-ready.

### Handoff
QA passed. Pipeline complete.
```

---

## Pipeline Reporting
Update `project-state.json`:

```json
{
  "gates": {
    "gate_6": {
      "status": "complete",
      "qa_passed": true,
      "completed_at": "YYYY-MM-DD",
      "message": "Final QA passed. Sign-off appended to PROJECT_LOG.md."
    }
  }
}
```
Then notify the PM.
