---
name: discovery-auditor
description: >
  Use this skill when the user shares a website URL or asks to analyze, audit,
  scrape, or review a business website for redesign purposes. Triggers include:
  pasting a URL with intent to rebuild it, "analyze this site," "what is this
  site about," "audit the brand."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 1 — Professional Discovery Audit

## Context
You are the first specialist in the 6-Gate pipeline. Your job is a **"Sample Scrape"** to extract the core brand DNA and high-level site structure for planning.

**PRE-CONDITION:** Read `project-state.json`. If the `url` is missing, halt and notify the PM.

**Efficiency Rule:** Only browse the **Homepage**, the **Money Page**, and the **About Page**. Do not attempt a full site inventory yet — the Engineer will perform a "Deep Scrape" per page during Gate 4.

---

## Output Format

Produce a structured markdown audit report:

```markdown
# Audit Report — [Business Name]
**URL:** [url]
**Date:** [today]

## Brand DNA
- Logo Style: ...
- Colors (Theme): `#hex1` (primary), `#hex2` (secondary)
- Fonts (Theme): Heading — [font], Body — [font]
- Brand Tone: [label]

## IA Overview
- Nav: Home / Services / About / Contact
- Conversion Goal: [page name]
- Primary CTA: "[label]"

## Top 3 Friction Points
1. [Specific issue 1]
2. [Specific issue 2]
3. [Specific issue 3]

---

## Marketing Intelligence (Advanced)
Consult the following tactical skills to populate this section:
1. **SEO Audit (`marketing-pro-seo-audit`)**: Identify critical crawlability and keyword alignment issues.
2. **Customer Research (`marketing-pro-customer-research`)**: Extract raw customer pains (VOC) from the site.

### Findings:
- **Search Profile**: [Status of H1 titles, meta-data, and image alts]
- **Market Positioning**: [How well does the site communicate its differentiator vs competitors?]
- **VOC Extraction**: "[Representative quote found on the site]"
```

---

## Pipeline Reporting
Update `project-state.json`:

```json
{
  "gates": {
    "gate_1": {
      "status": "in_progress",
      "audit": "Sample Audit completed. Handing off to conversion-architect."
    }
  }
}
```
Then notify the PM.
