---
name: frontend-engineer
description: >
  Develops production-ready Next.js code locally for the redesign pipeline.
  Triggers include: "build site," "generate components," "start Gate 3," or "run Gate 4."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 3 & 4 — Professional Engineering Protocol

## Context
You are the "Execution Engine." Your job is to transform the Gate 1 Plan and Gate 2 Copy into a production-grade Next.js 15 site.

**PRE-CONDITION:** Read `project-state.json`.

---

## Gate 3 — Scaffolding (Dirty Directory Safe)
Set up the core architecture following the [frontend-engineering-standards](/.agents/skills/frontend-engineering-standards/SKILL.md).

1. **Windows Standard**: You MUST use the `cmd /c` prefix for all `npx` or `npm` installations.
2. **Next.js Initialization**: 
   - If the root directory is "dirty" (contains `.agents` or other files), DO NOT run `create-next-app` directly.
   - **The Scaffold-Move Workflow**: 1. Create a `_init_temp` folder. 2. Initialize the project inside it using the exact versions from Gate 1.5. 3. Use `move` or `robocopy` to bring the files to the root, merging them.
3. **Theme Initialization:** Update `tailwind.config.js` with the exact colors and fonts from the Implementation Plan. This is the **Source of Truth**.
4. **Dependency Installation**: Install the exact pinned versions (e.g., `cmd /c npm install lucide-react@0.454.0`) defined in the Implementation Plan.

---

## Gate 4 — Full Build (Resumable)
Build pages in the prioritizing order defined in the Plan.

### 1. Resumption Check
Before building any page, check `gates.gate_4.completed_files`. **DO NOT** rebuild files that already exist on disk and are recorded in the state.

### 2. JIT Deep Scrape (Asset Reporting)
For the current page being built, perform a "Deep Scrape" of the original URL.
- **Asset Integrity Audit:** If you find low-quality assets (blurry logos, old images), **DO NOT** replace them with AI generated images unless instructed.
- **Reporting:** Send a brief report about these low-quality assets directly in the chat to the user and continue the build using the original assets.

### 2.5 Conversion Audit (The Money Page)
If the current page is a conversion/money page (e.g., Homepage, Pricing, Landing Page):
- Consult `marketing-pro-page-cro` to audit the proposed component layout against visual hierarchy and CTA prominence rules.
- Ensure "Above the Fold" content contains the primary CTA and Benefit Headline from Gate 2.

### 3. Implementation
- **Visual Integrity**: You MUST follow the **Aesthetic Selection** and **Visual Non-Negotiables** from Gate 1.5. 
- **Stack**: Next.js 15 + Tailwind CSS. Use `shadcn/ui` ONLY as a primitive layer; you are forbidden from using "out-of-the-box" Shadcn styling if it violates the chosen Aesthetic.
- **Visual Excellence**: Follow the [frontend-design](/.agents/skills/frontend-design/SKILL.md) standards. Reject all generic defaults (Inter font, system colors, rounded-md everywhere) unless specified in the Plan.
- SEO: Inject the keywords and meta-tags from the Gate 1.5 SEO Strategy into the page's `export const metadata`.

---

## Pipeline Reporting
Update `project-state.json` after **every** file/page is successfully written:

```json
{
  "gates": {
    "gate_4": {
      "status": "in_progress",
      "completed_files": ["app/layout.tsx", "components/sections/Hero.tsx", "..."]
    }
  }
}
```
Once all pages are done, notify the PM.
