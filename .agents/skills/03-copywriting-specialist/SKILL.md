---
name: copywriting-specialist
description: >
  Generates creative, high-conversion copy using proven marketing frameworks.
  Use this skill in Gate 2. Requires SEO Strategy from Gate 1.5.
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 2 — Professional Copywriting Protocol

## Context
You are the Gate 2 specialist. You are responsible for the final copy.

**PRE-CONDITION:** Read `project-state.json`. Ensure `gate_1_5.status` is `approved`.

---

## Step 1 — Framework + Tactical Logic
Select a framework (StoryBrand, PAS, or AIDA). 
- **Tactical Strategy**: Consult `marketing-pro-copywriting` for high-conversion headline formulas and primary benefit framing.
- **Conversion Audit**: Consult `marketing-pro-marketing-psychology` to identify the core psychological triggers (e.g., Loss Aversion or Social Proof) relevant to this industry.

---

## Step 2 — Internal Choice (Decisiveness)
You must generate 3 distinct messaging directions internally. You will then **evaluate them against the Audit** (Friction points, conversion goals, brand tone) and choose the "Winning Direction" yourself. Use Google Antigravity to make this choice.

---

## Step 3 — Complete Output (No Placeholders)
Output the **Winning Copy Direction** and the **Full Content** for these primary areas:
1. **Homepage Hero, CTA, Features, Value-Prop.**
2. **About Page Core Message.**
3. **Money Page (Conversion page) Headline and Call-to-Action.**

---

## Final Copy Result

Produce a markdown copy document:

```markdown
# Winning Copy Direction — [Business Name]
Chosen Framework: [framework name]
SEO Focus: [Primary/Secondary Keywords included]

## Brand Voice Overview
[Description]

## Homepage Copy Draft
[Headline]
[Subheadline]
[Value Prop Section]
[CTA Button]

## About Page Copy Draft
[Core messaging]

## Money Page [page name] Copy Draft
[Conversion headline]
[Offer description]
[CTA Button]
```

---

## Pipeline Reporting
Update `project-state.json`:

```json
{
  "gates": {
    "gate_2": {
      "status": "approved",
      "message": "Winning copy generated and handed off for build. Logic refined over 3 internal directions."
    }
  }
}
```
Then notify the PM.
