---
name: qa-compliance
description: >
  Final auditor for quality, speed, and accessibility standards.
  Triggers include: "run qa," "verify accessibility," "run Gate 6 Final QA."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 6 — Final QA Audit

**FIRST ACTION:** Read `PROJECT_STATE.md` from top to bottom. Your inputs are:
- Gate 1.5: Expected metadata and schema requirements
- Gate 5: Confirm all revision items are resolved before signing off

**PRE-CONDITION:** Gate 5 status must be `complete` in `PROJECT_STATE.md`.

---

## Step 0 — Read the Stack
Check `PROJECT_STATE.md` for the `Stack` field before running compliance checks.

- **If `stack` is `next`**: Run the Next.js/Tailwind checklist.
- **If `stack` is `html` or `vue`**: Prioritize semantic HTML, CSS-only animations (where possible), and Composition API usage.

---

## Step 1 — Technical Compliance

For HTML or Vue + Tailwind CSS:
- **Utility Classes:** Zero Vanilla CSS files (exceptions for mandatory global resets).
- **Tokens:** Zero hex codes in markup/JSX. All colors use named theme classes.
- **Accessibility:** All UI components have correct ARIA attributes and semantic nesting.
- **Component Structure:** Files organized logically (e.g., `/components/` for Vue, separate `.html` and `.js` for static).

---

## Step 2 — SEO & AEO Verification
Cross-check against the Gate 1.5 entry in `PROJECT_STATE.md`:
- **Metadata:** Every page has a unique title and meta description matching the Gate 1.5 templates.
- **Schema:** JSON-LD scripts are present and populated with real client data (no placeholder text).

---

## Step 3 — Performance & Mobile
- No console errors on the running dev server.
- No horizontal overflow at 375px.
- Images have explicit `width`, `height`, and `alt` attributes. (Use `next/image` only if on Next.js stack).

---

## Step 4 — Visual Revision Confirmation
Check the Gate 5 revision list in `PROJECT_STATE.md`. Confirm every `- [ ]` item has been addressed in a subsequent Gate 4 (Revision) log entry.

---

## Step 5 — Functional Integrity (The Final Click)
Perform a exhaustive "Click-Through Audit" of the entire site:
- **Links:** Zero 404s. All navigation and footer links must resolve.
- **Buttons:** Every CTA (Call to Action) must either anchor to the correct section or navigate to the intended page.
- **Forms:** Contact/Access forms must have functional UI states (loading, success, error) and correctly formatted fields.

---

## Append to PROJECT_STATE.md

```markdown
---
## [Gate 6] — Final QA Sign-Off
**Role:** QA Compliance | **Date:** [YYYY-MM-DD]

### Checklist
- [x] Technical Standard (Tailwind-based — stack: [html/vue/next])
- [x] SEO/AEO Verification (unique metadata + JSON-LD matching Gate 1.5)
- [x] Accessibility (WCAG 2.2 AA)
- [x] Performance & Mobile (no overflow, lightweight build)
- [x] Functional Integrity (Zero broken paths or dead buttons)
- [x] All Gate 5 revision items resolved

### Result
✅ Project is production-ready.

### Handoff
QA passed. Pipeline complete.
```

---

## Pipeline Reporting
Update `PROJECT_STATE.md`:

Change the Gate 6 status to:
`- [x] **Gate 6**: complete`

And update the Gate Details section for Gate 6:
```markdown
**Gate 6 (Final QA)**
- QA Result: Final QA passed. Sign-off appended to PROJECT_STATE.md.
```
Then notify the PM.
