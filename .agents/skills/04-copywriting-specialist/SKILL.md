---
name: copywriting-specialist
description: >
  Generates creative, high-conversion copy using proven marketing frameworks.
  Use this skill in Gate 2. Requires SEO Strategy from Gate 1.5.
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 2 — Copywriting

**FIRST ACTION:** Read `PROJECT_LOG.md` from top to bottom. Your inputs are:
- Gate 0.5: Client brief (ICP, tone, differentiators)
- Gate 1A: Friction points and VOC quotes
- Gate 1B: Page list and brand voice direction
- Gate 1.5: Keywords to weave into copy

**PRE-CONDITION:** Gate 1.5 entry must exist in `PROJECT_LOG.md`.

---

## Step 1 — Framework + Tactical Logic
Select a framework (StoryBrand, PAS, or AIDA) based on the brand tone from the client brief.
- Consult `marketing-pro-copywriting` for high-conversion headline formulas.
- Consult `marketing-pro-marketing-psychology` to identify the core psychological triggers (Loss Aversion, Social Proof, etc.) relevant to this industry.

---

## Step 2 — Internal Choice (Decisiveness)
Generate 3 distinct messaging directions internally. Evaluate them against the audit's friction points, conversion goals, and brand tone. Choose the winning direction yourself — do not ask the user.

---

## Step 3 — Complete Output (No Placeholders)
Write complete copy for:
1. **Homepage** — Hero headline, subheadline, value prop section, primary CTA.
2. **About Page** — Core message.
3. **Money Page** — Conversion headline, offer description, CTA.

---

## Append to PROJECT_LOG.md

```markdown
---
## [Gate 2] — Winning Copy
**Role:** Copywriting Specialist | **Date:** [YYYY-MM-DD]

### Direction Chosen
- **Framework:** [StoryBrand / PAS / AIDA]
- **Winning Direction:** [Name + one-line rationale]
- **SEO Keywords Woven In:** [Primary + secondary]

### Homepage Copy
**Hero Headline:** ...
**Subheadline:** ...
**Value Prop Section:** ...
**Primary CTA:** "..."

### About Page Copy
[Core message]

### [Money Page Name] Copy
**Conversion Headline:** ...
**Offer Description:** ...
**CTA:** "..."

### Handoff
Copy complete. Engineer reads this entry to populate page content in Gate 4. No placeholders — all copy is final.
```

---

## Pipeline Reporting
Update `project-state.json`:

```json
{
  "gates": {
    "gate_2": {
      "status": "approved",
      "message": "Winning copy appended to PROJECT_LOG.md."
    }
  }
}
```
Then notify the PM.
