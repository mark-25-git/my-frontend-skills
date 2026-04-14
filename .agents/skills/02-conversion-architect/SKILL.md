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

## Step 0 — Aesthetic Direction (Mandatory Design Intelligence Lookup)

Before choosing any design tokens, read these files in order:

1. `.agents/skills/frontend-design/design-intelligence/industry-rules.md`
   → Match the client's industry to a row. Extract: recommended style, color mood, typography mood, key effects, anti-patterns.

2. `.agents/skills/frontend-design/design-intelligence/ui-styles.md`
   → Look up the recommended style for its exact CSS keywords and variables.

3. `.agents/skills/frontend-design/design-intelligence/typography-pairings.md`
   → Use the "Industry → Typography Quick Map" to select the correct font pairing.

4. `.agents/skills/frontend-design/design-intelligence/landing-patterns.md`
   → Use the "Industry → Landing Pattern Quick Map" to determine the correct page structure.

Then commit ONE bold aesthetic direction. State WHY this aesthetic will make the site stand out vs. competitors. Define **3 Visual Non-Negotiables** for the build.

---

## Step 1 — Define the Design System
Based on the audit and Step 0, define the Tailwind theme extension with exact hex values (which will be converted to named tokens in `tailwind.config.js`).

---

## Step 1.5 — Dependency Manifest
Define exact major/minor versions for all core libraries (e.g., `next@15.0.0`, `lucide-react@0.454.0`). These pinned versions MUST be used in Gate 3.

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
- **Recommended Style:** [from industry-rules.md]
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
- next@15.x.x
- lucide-react@x.x.x
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
