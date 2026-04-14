---
name: copywriting-specialist
description: >
  Generates creative, high-conversion copy using proven marketing frameworks.
  Use this skill in Gate 2. Requires SEO Strategy from Gate 1.5.
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 2 — Copywriting

**FIRST ACTION:** Read `PROJECT_STATE.md` from top to bottom. Your inputs are:
- Gate 0.5: Client brief (ICP, tone, differentiators)
- Gate 1A: Friction points and VOC quotes
- Gate 1B: Page list and brand voice direction
- Gate 1.5: Keywords to weave into copy

**PRE-CONDITION:** Gate 1.5 entry must exist in `PROJECT_STATE.md`.

---

## Step 1 — Framework + Solution Logic
Select a framework (StoryBrand, PAS, or AIDA) based on the brand tone.
- **MANDATORY: Pain-Solution Mapping**: Before drafting, map 3 specific customer pains to 3 specific solutions. Every word you write must provide the solution.
- Consult `marketing-pro-copywriting` for high-conversion headline formulas.
- Consult `marketing-pro-marketing-psychology` to identify the core psychological triggers.

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

## Append to PROJECT_STATE.md

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

## 🚫 Aesthetic & Quality Anti-Patterns (NEVER Use)

*   **FULL CAPS**: Never provide copy in all-caps (uppercase) for any element. This is a strict user preference. Use Title Case or Sentence Case.
*   **Clichéd Footers**: Never use "Made with [heart]" or "Made with ❤️" phrasing. It is a marker of generic AI. Use specific, brand-aligned professional language instead.
*   **Pretentious AI-Vocabulary**: NEVER use words like **"Pedigree"**, **"Engineering"** (as a metaphor for service), **"Legendary"**, **"Unrivaled"**, **"Physical Identity"**, or **"Show, don't just tell."** These words aim to impress rather than solve.
*   **Zero-Value Fluff**: Every word must provide a solution. If a word is "fancy" but doesn't solve a pain point, remove it. **Do not write to impress; write to solve the problem.**

---

## Pipeline Reporting
Update `PROJECT_STATE.md`:

Change the Gate 2 status to:
- [x] **Gate 2**: approved

And update the Gate Details section for Gate 2:
```markdown
**Gate 2 (Copywriting)**
- Copy Result: Winning copy appended to PROJECT_STATE.md.
```
Then notify the PM.
