---
name: discovery-auditor
description: >
  Use this skill when the user shares a website URL or asks to analyze, audit,
  scrape, or review a business website for redesign purposes. Triggers include:
  pasting a URL with intent to rebuild it, "analyze this site," "what is this
  site about," "audit the brand."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

**FIRST ACTION (any gate):** Read `PROJECT_STATE.md` from top to bottom before doing any work.

---

## Gate 0.5 — Strategic Context Scrape

This gate auto-populates the client brief. The pipeline cannot start Gate 1 without it.

### Step 1 — Scrape the Target URL
Visit the Homepage, About page, and any pricing or service page. Extract:
- Value proposition
- Ideal Customer Profile (ICP)
- Unique differentiators
- Brand tone and language

### Step 2 — Online Research (Required)
Search for the business online using whatever sources are most relevant for the industry and business type. The goal is to find real customer opinions, market positioning, and competitive context that the website alone won't reveal.

Synthesize what you find to build a more accurate customer profile than the website alone would give.

### Step 3 — Append to PROJECT_STATE.md
Add this entry at the bottom of `PROJECT_STATE.md`. 

**Creation Rule**: If this is a new project and `PROJECT_STATE.md` does not yet exist, use `write_to_file` to create the file.

```markdown
---
## [Gate 0.5] — Strategic Context Scrape
**Role:** Discovery Auditor | **Date:** [YYYY-MM-DD]

### Client Brief
- **Business Name:** ...
- **Industry:** ...
- **One-Sentence Pitch:** ...
- **Core Product / Service:** ...
- **Value Proposition:** ...
- **Differentiator:** ...

### Target Audience
- **ICP:** ...
- **Primary Problem:** ...
- **Desired Outcome:** ...
- **Common Objections:** ...

### Brand Voice
- **Tone:** ...
- **Language Style:** ...

### Online Research Findings
- **Customer Praise:** ...
- **Customer Complaints:** ...
- **Market Positioning vs. Competitors:** ...

### Handoff
Client brief complete. ⏸ Halting for user review before Gate 1A.
```

### Step 4 — HALT
Report: "Gate 0.5 complete. Please review the client brief above and confirm before I continue."

---

## Gate 1A — Discovery Audit

**PRE-CONDITION:** Gate 0.5 entry must be approved by the user.

**Efficiency Rule:** Only browse the **Homepage**, the **Money Page**, and the **About Page**. The Engineer will do a full page-by-page deep scrape in Gate 4.

Consult `marketing-pro-seo-audit` and `marketing-pro-customer-research` to populate the Marketing Intelligence section.

### Append to PROJECT_STATE.md

```markdown
---
## [Gate 1A] — Discovery Audit
**Role:** Discovery Auditor | **Date:** [YYYY-MM-DD]

### Brand DNA
- **Logo Style:** ...
- **Colors:** `#hex1` (primary), `#hex2` (secondary)
- **Fonts:** Heading — [font], Body — [font]
- **Brand Tone:** ...

### IA Overview
- **Nav:** ...
- **Conversion Goal:** ...
- **Primary CTA:** "..."

### Top 3 Friction Points
1. ...
2. ...
3. ...

### Marketing Intelligence
- **Search Profile:** [H1, meta, image alt status]
- **Market Positioning:** [How well the site communicates its differentiator]
- **VOC (Voice of Customer):** "[Representative quote from site or reviews]"

### Handoff
Audit complete. Passing to Conversion Architect for Gate 1B.
```

---

## Pipeline Reporting
Update `PROJECT_STATE.md`:

Change the Gate 1 status to:
`- [x] **Gate 1**: in_progress`

And update the Gate Details section for Gate 1:
```markdown
**Gate 1 (Discovery Audit)**
- Audit Result: Audit complete. Handing off to conversion-architect.
```
Then notify the PM.
