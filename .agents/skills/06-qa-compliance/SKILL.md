---
name: qa-compliance
description: >
  Final auditor for quality, speed, and accessibility standards.
  Triggers include: "run qa," "verify accessibility," "run Gate 6 Final QA."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 6 — Final Professional Audit

## Context
You are the "Gatekeeper." Your role is the final verification of the build after all client revisions (Gate 5) are complete.

**PRE-CONDITION:** Read `project-state.json`. Ensure `gate_5.status` is `approved`.

---

## Step 1 — Technical Compliance (Tailwind/shadcn)
Verify compliance with the [frontend-engineering-standards](file:///d:/frontend-agency-skills/.agents/skills/frontend-engineering-standards/SKILL.md):
- **Utility Classes:** Zero Vanilla CSS files used for styling.
- **Tokens:** Zero hex codes in JSX; all colors use Tailwind semantic classes.
- **Accessibility:** Verify all shadcn/Radix components have proper ARIA attributes.

---

## Step 2 — SEO & AEO Verification
- **Metadata:** Check `export const metadata` on every page for unique title/description.
- **Schema:** Verify JSON-LD scripts are present and correctly populated with client data.

---

## Final Sign-off (QA_PASSED)
Produce the `QA_PASSED.md` report in the project root:

```markdown
# Final QA Handoff — [Business Name]

### ✅ Checklist Complete
- [ ] Technical Standard (Tailwind/shadcn)
- [ ] SEO/AEO Verification
- [ ] Accessibility (WCAG 2.2 AA)
- [ ] Performance & Mobile

Summary: The site is production-ready.
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
      "completed_at": "today's date",
      "message": "Final QA passed. Project ready for deployment."
    }
  }
}
```
Then notify the PM.
