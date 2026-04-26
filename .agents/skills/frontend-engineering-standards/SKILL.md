---
name: frontend-engineering-standards
description: >
  Apply this skill whenever writing frontend code that will be part of a multi-page
  site, component library, or any project larger than a single self-contained page.
  Triggers include: "build this page," "code the component," "implement the design."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Frontend Engineering Standards (Professional)

You are the standards officer. Every file produced must follow these 2026 industry-standard rules for **HTML** (for 1-page sites) or **Next.js 15** (for multi-page sites).

---

## Rule 1 — The Utility-First Stack

We build using **HTML/Tailwind** for single-page sites and **Next.js 15** for all multi-page sites.
- **Standard: Zero Arbitrary Values.** The Engineer is forbidden from using hex codes in JSX (e.g., `text-[#123]`). Every style must be a named theme class (e.g., `text-primary`). If a specific brand color is needed, it MUST be added to `tailwind.config.js` first.
- **Tokens:** Centralized in **`tailwind.config.js`**.

---

## Rule 2 — Component Discovery (shadcn/ui style)

Focus on **Accessible, High-Performance Components**.
- Use **Native HTML5** or **Next.js Components** for clean, lightweight logic.
- For complex logic (modals, tabs), use **Alpine.js** (for HTML) or **Radix UI** / **Headless UI** (for Next.js).
- Every component must be **WCAG 2.2 AA compliant**.
- Prefer **Static** or **Client-side** rendering for maximum performance.

---

## Rule 3 — Atomic Component Structure (The Brick)

Organize the project for **Scability and Resumption**.
- `/components/` — Generic, reusable logic-heavy elements.
- `/sections/` or `/parts/` — Page-specific blocks.
- `/pages/` or root — Application routes.

---

## Rule 4 — Standards Verification Check

Self-check every file:
1. [ ] **Correct Stack (HTML for 1-page, Next.js for multi)?**
2. [ ] **Tailwind utility classes used?**
3. [ ] **Zero arbitrary values?**
4. [ ] **Responsive design?** (sm:, md:, lg:)
5. [ ] **Accessibility checked?**
6. [ ] **"Why-Only" comments only?** (Standard in agency-foundation.md)
7. [ ] **Recorded in PROJECT_STATE.md?**

---

---

## Rule 6 — Aesthetic Professionalism (Zero "AI Slop")

Every component MUST be generated with an artisanal, non-generic finish.
1. **No Ping/Bounce Slop**: Never use `animate-ping` for badges or `animate-bounce` for background circles. These signal "templated AI."
2. **No FULL CAPS**: All copy, badges, and titles must use Title Case or Sentence Case. NO all-caps permitted per user preference.
3. **Professional Footers**: Never generate "Made with [heart]" footers. Use brand-appropriate professional attribution.
4. **Purposeful Badges**: Only use badges when they represent real meta-data or status. Avoid using "upper-case, bold, high-contrast" badges just to fill space.
