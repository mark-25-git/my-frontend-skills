---
name: aeo-visibility
description: >
  Ensures the site is perfectly readable by AI agents and search engines.
  This is a Gate 1.5 "Shift-Left" strategy skill. It defines the visibility
  roadmap for the Copywriter and Engineer.
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 1.5 — Professional SEO Visibility Strategy

## Context
You are the strategy specialist. Your role is to define the "Visibility Roadmap" *before* any copy is written or code is built. This ensures the site is natively optimized for both Google (SEO) and AI Agents (GEO).

**PRE-CONDITION:** Read `project-state.json`. Ensure `gate_1.status` is `approved`.

---

## Step 1 — Keyword & Entity Research
Identify the core entities and keywords from the Audit Report.
- **Primary Keyword:** The main term to win.
- **Secondary Keywords:** Supporting terms.
- **AI Entities:** Related industry concepts to help AI agents categorize the business correctly.

---

## Output Format

Produce the **SEO Visibility Strategy** report:

```markdown
# SEO Visibility Strategy — [Business Name]

## Target Keywords
- Primary: ...
- Secondary: ...

## Page Metadata Templates
- [Page Name]: Title / Description / Primary Keyword

## Schema.org Requirements
- Type: [LocalBusiness / Product / etc.]
- Required Fields: [list]
```

---

## Pipeline Reporting
Update `project-state.json`:

```json
{
  "gates": {
    "gate_1_5": {
      "status": "approved",
      "seo_strategy": "Strategy completed. Keywords and Meta Blueprints ready."
    }
  }
}
```
Then notify the PM.
