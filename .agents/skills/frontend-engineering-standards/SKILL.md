---
name: frontend-engineering-standards
description: >
  Apply this skill whenever writing frontend code that will be part of a multi-page
  site, component library, or any project larger than a single self-contained page.
  Triggers include: "build this page," "code the component," "implement the design."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Frontend Engineering Standards (Professional)

You are the standards officer. Every file produced must follow these 2026 industry-standard rules for Next.js 15 and Tailwind CSS.

---

## Rule 1 — The Utility-First Stack

We build using **Next.js 15 (App Router)** and **Tailwind CSS**. 
- **Standard: Zero Arbitrary Values.** The Engineer is forbidden from using hex codes in JSX (e.g., `text-[#123]`). Every style must be a named theme class (e.g., `text-primary`). If a specific brand color is needed, it MUST be added to `tailwind.config.js` first.
- **Tokens:** Centralized in **`tailwind.config.js`**.

---

## Rule 2 — Component Discovery (shadcn/ui style)

Focus on **Accessible, High-Performance Components**.
- Use **Radix UI** or **shadcn/ui** patterns for complex logic (modals, tabs, accordions, inputs).
- Every component must be **WCAG 2.2 AA compliant**.
- Use **React Server Components (RSC)** by default.

---

## Rule 3 — Atomic Component Structure (The Brick)

Organize the project for **Scability and Resumption**.
- `/components/ui/` — Generic, reusable elements (Buttons, Inputs, Cards).
- `/components/sections/` — Page-specific blocks (Hero, Features, Testimonials).
- `/app/` — Pages and layout definitions.

---

## Rule 4 — Standards Verification Check

Self-check every file:
1. [ ] **Next.js 15 App Router?**
2. [ ] **Tailwind utility classes used?**
3. [ ] **Zero arbitrary values?**
4. [ ] **Responsive design?** (sm:, md:, lg:)
5. [ ] **Accessibility checked?**
6. [ ] **"Why-Only" comments only?** (Standard in agency-foundation.md)
7. [ ] **Recorded in project-state.json?**

---

---

## Rule 6 — Aesthetic Professionalism (Zero "AI Slop")

Every component MUST be generated with an artisanal, non-generic finish.
1. **No Ping/Bounce Slop**: Never use `animate-ping` for badges or `animate-bounce` for background circles. These signal "templated AI."
2. **No FULL CAPS**: All copy, badges, and titles must use Title Case or Sentence Case. NO all-caps permitted per user preference.
3. **Professional Footers**: Never generate "Made with [heart]" footers. Use brand-appropriate professional attribution.
4. **Purposeful Badges**: Only use badges when they represent real meta-data or status. Avoid using "upper-case, bold, high-contrast" badges just to fill space.
