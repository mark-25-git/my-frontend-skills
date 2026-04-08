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

## Rule 5 — Image Resilience & Stability

To avoid "Broken Image" icons and Next.js configuration crashes:
1. **Auto-Whitelisting**: During initialization (Gate 3), the `next.config.ts` MUST include the target domain (from `project-state.json`) in `remotePatterns`.
2. **SafeImage Fallback**: Never use the raw `Image` component for external assets. Use a `SafeImage` wrapper that uses `onError` to swap to a "Blank Card" fallback.
3. **The Blank Card Standard**: The fallback must be a clean, styled `div` (e.g., `bg-muted` with rounded corners) that displays the image's "alt" description centered inside. This ensures the UI remains polished and the content remains understandable even if the asset fails.
