---
name: conversion-architect
description: >
  Use this skill when the user has completed a website audit and wants to create
  an implementation plan for the redesign. Triggers include: "create the implementation
  plan."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 1B — Implementation Planner

**FIRST ACTION:** Read `PROJECT_STATE.md` from top to bottom. The Gate 1A audit entry is your primary input.

**PRE-CONDITION:** Gate 1A entry must exist in `PROJECT_STATE.md`.

---

## Step 1 — Aesthetic Research & Direction (Blueprint Selection)
Browse 1-2 websites that embody a high-end aesthetic. **MANDATORY**: Select a base "Design Blueprint" from `.agents/references/v2-premium-design/blueprints/` (e.g., Stripe, Linear, Apple) that aligns with the brand goals. Identify key visual patterns, layout structures, and unique details from this blueprint.

Commit to a BOLD aesthetic direction based on your research and the selected blueprint. State WHY this aesthetic will make the site stand out vs. competitors. Define **3 Visual Non-Negotiables** for the build.

Define the Tailwind theme extension with exact hex values (which will be converted to named tokens in `tailwind.config.js`).

---

## Step 1.5 — Dependency Manifest
Define exact major/minor versions for all core libraries (e.g., `next@15.x.x`, `tailwindcss@3.x.x`). These pinned versions MUST be used in Gate 3.

---

## Step 2 — Page List & Build Priority
List every page, ordered by conversion priority (highest first).

---

## Step 3 — Component Inventory
List the core components needed (e.g., Navbar, Footer, Hero, ServiceCard).

---

## Append to PROJECT_STATE.md

```markdown
---
## [Gate 1B] — Implementation Plan
**Role:** Conversion Architect | **Date:** [YYYY-MM-DD]

### Design Brief
- **Industry:** ...
- **Recommended Style:** ...
- **Chosen Aesthetic:** ...
- **Justification:** ...
- **Visual Non-Negotiables:** Rule 1 / Rule 2 / Rule 3
- **Anti-Patterns (BANNED):** ...

### Design System (Tailwind Tokens)
```javascript
colors: {
  primary: '#hex1',
  secondary: '#hex2',
  accent: '#hex3',
  background: '#hex4',
  foreground: '#hex5',
},
fontFamily: {
  display: ['Heading Font', 'sans-serif'],
  body: ['Body Font', 'sans-serif'],
}
```

### Dependency Manifest
- html/css/js (for 1-page) or nextjs@15.x.x (for >1-page)
- tailwindcss@3.x.x
- [other pinned deps]

### Page List (Priority Order)
1. Home (High)
2. [Money Page] (High)
3. ...

### Component Inventory
- Navbar, Footer, Hero, ...

### Handoff
Plan complete. Engineer uses this entry for Gate 3 scaffold and Gate 4 build. Copywriter uses Design Brief for tone alignment.
```

---

## Pipeline Reporting
Update `PROJECT_STATE.md`:

Change the Gate 1 status to:
`- [x] **Gate 1**: approved`

And update the Gate Details section for Gate 1:
```markdown
**Gate 1 (Implementation Plan)**
- Plan Result: Implementation Plan appended to PROJECT_STATE.md.
```
Then notify the PM.
