---
name: aeo-visibility
description: >
  Ensures the site is perfectly readable by AI agents and search engines.
  This is a Gate 1.5 "Shift-Left" strategy skill. It defines the visibility
  roadmap for the Copywriter and Engineer.
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 1.5 — SEO & Visibility Strategy

**FIRST ACTION:** Read `PROJECT_STATE.md` from top to bottom. The Gate 1B entry is your primary input — use the chosen industry, ICP, and page list to inform keyword selection.

**PRE-CONDITION:** Gate 1B entry must exist in `PROJECT_STATE.md`.

---

## Step 1 — Keyword & Entity Research
Using the client brief (Gate 0.5) and the target industry (Gate 1B), identify:
- **Primary Keyword:** The main search term to win.
- **Secondary Keywords:** Supporting terms.
- **AI Entities:** Related concepts to help AI agents categorize the business correctly.

---

## Step 2 — Metadata Templates
For each page in the Gate 1B page list, define a unique title tag and meta description using the primary/secondary keywords.

---

## Append to PROJECT_STATE.md

```markdown
---
## [Gate 1.5] — SEO & Visibility Strategy
**Role:** AEO Visibility | **Date:** [YYYY-MM-DD]

### Target Keywords
- **Primary:** ...
- **Secondary:** ...
- **AI Entities:** ...

### Page Metadata Templates
| Page | Title Tag | Meta Description | Primary Keyword |
|---|---|---|---|
| Home | ... | ... | ... |
| [Money Page] | ... | ... | ... |

### Schema.org Requirements
- **Type:** [LocalBusiness / Product / SaaS / etc.]
- **Required Fields:** ...

### Handoff
SEO strategy complete. Copywriter uses keywords for copy. Engineer injects metadata templates into each page's `export const metadata`.
```

---

## Pipeline Reporting
Update `PROJECT_STATE.md`:

Change the Gate 1.5 status to:
- [x] **Gate 1.5**: approved

And update the Gate Details section for Gate 1.5:
```markdown
**Gate 1.5 (SEO & Visibility)**
- Strategy Result: Strategy appended to PROJECT_STATE.md.
```
Then notify the PM.
