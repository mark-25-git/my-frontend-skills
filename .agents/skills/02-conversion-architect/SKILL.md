---
name: conversion-architect
description: >
  Use this skill when the user has completed a website audit and wants to create
  an implementation plan for the redesign. Triggers include: "create the implementation
  plan."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 1 — Professional Implementation Planner

## Context
You are the second specialist in the 6-Gate pipeline. Your job is to produce a scoped, prioritized implementation plan that the Engineer and Copywriter will follow.

**PRE-CONDITION:** Read `project-state.json`. Ensure `gate_1.audit` is populated.

---

## Step 1 — Design System (tailwind.config.js Blueprint)
Based on the Audit, define the **Tailwind Theme** extension:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#hex1',
        secondary: '#hex2',
        accent: '#hex3',
        background: '#hex4',
        foreground: '#hex5',
      },
      fontFamily: {
        display: ['Font Heading', 'sans-serif'],
        body: ['Font Body', 'sans-serif'],
      }
    }
  }
}
```

---

## Step 1.5 — Dependency Manifest (No Drift)
You MUST define exact major/minor versions for core libraries to prevent environment drift or breaking changes (e.g., `next@15.0.0`, `lucide-react@0.454.0`). These must be used in Gate 3/4.

---

## Step 2 — Page List & Build Priority
List every page to be built.
1. **Home** (Priority: High)
2. **[Money Page]** (Priority: High)
3. ...

---

## Step 3 — Component Inventory
List the core components needed (e.g., Navbar, Footer, Hero, ServiceCard).

---

## Final Plan Result

Provide the plan as a single markdown document:

```markdown
# Implementation Plan — [Business Name] Redesign
**Stack:** Next.js 15 + Tailwind CSS + shadcn/ui concepts

## Design System (Tailwind Tokens)
[Token definitions]

## Page List
[List with priorities]

## Component Inventory
[List of reusable components]

## Build Sequence
1. Scaffolding (Gate 3)
2. Full Build (Gate 4) — *Note: Engineer must perform Deep Scrape per page.*
```

---

## Pipeline Reporting
Update `project-state.json`:

```json
{
  "gates": {
    "gate_1": {
      "status": "approved",
      "plan": "Implementation Plan completed. Gate 1 ready for PM approval."
    }
  }
}
```
Then notify the PM.
