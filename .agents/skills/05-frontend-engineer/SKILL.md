---
name: frontend-engineer
description: >
  Develops production-ready HTML (for 1-page sites) or Next.js 15 (for multi-page sites) code locally for the redesign pipeline.
  Triggers include: "build site," "generate components," "start Gate 3," or "run Gate 4."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 3 & 4 — Engineering Protocol

**FIRST ACTION:** Read `PROJECT_STATE.md` from top to bottom. Your inputs are:
- Gate 1B: Design system tokens, dependency manifest, page list, component inventory, visual non-negotiables
- Gate 1.5: SEO metadata templates to inject per page
- Gate 2: Final copy to populate all page content
- Gate 5 (if exists): Revision list to implement

**PRE-CONDITION:** Gate 2 must be `approved` or `complete` in `PROJECT_STATE.md`.

---

## Gate 3 — Scaffolding (Dirty Directory Safe)
Set up the core architecture following the [frontend-engineering-standards](/.agents/skills/frontend-engineering-standards/SKILL.md).

1. **Framework Selection**: Use the `Stack` defined in `PROJECT_STATE.md` (Gate 1B). If no stack is defined, use **HTML/Tailwind** ONLY if the site has 1 page. For all multi-page sites, you MUST use **Next.js 15**.
2. **Initialization Workflow**:
   - **For HTML (1-page)**: Initialize a clean directory with `index.html`, `main.js`, and `styles.css`. Configure Tailwind CSS.
   - **For Next.js (>1-page)**: Use the "Scaffold-Move" workflow to initialize Next.js 15 in a temp directory and merge to root. Configure App Router.
3. **Theme Initialization**: Update the relevant config (e.g., `tailwind.config.js`) with exact hex values from the Gate 1B log.
4. **Dependency Installation**: Install pinned versions from Gate 1B. Use `cmd /c npm install`.

### Append to PROJECT_STATE.md after Gate 3

```markdown
---
## [Gate 3] — Scaffold Complete
**Role:** Frontend Engineer | **Date:** [YYYY-MM-DD]

- Stack: [html / next]
- Tailwind configured: ✅
- Build tool (Vite/None) initialized: ✅
- Pinned dependencies installed: ✅

### Frictions & Preventions
- [List ANY issues, hurdles, or technical frictions encountered here]

### Handoff
Scaffold ready. Proceeding to Gate 4 full build.
```

---

## Gate 4 — Full Build (Resumable)
Build pages in the priority order from the Gate 1B log entry.

### 1. Resumption Check
Check the "Completed Files" list in `PROJECT_STATE.md`. **DO NOT** rebuild files already recorded there.

### 2. JIT Deep Scrape (Asset Reporting)
For each page, perform a "Deep Scrape" of the original URL.
- If low-quality assets are found (blurry logos, old images), report them in the chat and continue with the original assets.
- Do NOT replace with AI-generated images unless the user explicitly asks.

### 2.5 Conversion Audit (Money Pages)
If the current page is a conversion page (Homepage, Pricing, Landing Page):
- Consult `marketing-pro-page-cro` to audit the proposed component layout against visual hierarchy and CTA prominence rules.

### 3. Implementation
- **Visual Integrity**: Follow the Aesthetic Direction and Visual Non-Negotiables from the Gate 1B log entry.
- **Copy**: Use the exact copy from the Gate 2 log entry in `PROJECT_STATE.md`. No placeholders.
- **SEO**: Inject metadata from the Gate 1.5 log entry into the page headers or Vue metadata.
- **Stack-Specific Performance**: 
    - **HTML**: Keep it semantic and minimal. 
    - **Next.js**: Use App Router, Server Components (RSC), and modular components. Use `next/image` for optimization.
- **Image Resilience**: Use a `SafeImage` pattern. If an image fails to load, render a styled "Blank Card" displaying the original `alt` text.

### 4. Revision Phase
If a Gate 5 entry exists in `PROJECT_STATE.md` with a revision list:
1. Read every revision item.
2. Implement all changes in `/components/sections/` or `/app/`.
3. Append a new Gate 4 (Revision) entry to `PROJECT_STATE.md` when done.

---

## Gate 4 Completion — Start the Dev Server

After all pages are built (or revisions implemented), run:
```
cmd /c npm run dev
```

Confirm the server is accessible at `http://localhost:3000`, then update the `Dev Server` field in `PROJECT_STATE.md`.

### Append to PROJECT_STATE.md after Gate 4

```markdown
---
## [Gate 4] — Build Complete
**Role:** Frontend Engineer | **Date:** [YYYY-MM-DD]

### Pages Built
- index.html (or app/page.tsx)
- [money-page]
- ...

### Dev Server
- URL: http://localhost:3000
- Status: Running ✅

### Frictions & Preventions
- [List ANY issues, hurdles, or technical frictions encountered here]

### Handoff
All pages built. Dev server running. Passing to Visual Director for Gate 5 audit.
```

*(For a revision pass, use the heading `## [Gate 4] — Revision Pass` instead.)*

---

## Pipeline Reporting
Update `PROJECT_STATE.md` after **every** file is written:

Change the Gate 4 status to:
`- [ ] **Gate 4**: in_progress`

And update the "Completed Files" list in the Gate Details section.
Once all pages are done and dev server is confirmed, set `Gate 4` status to `complete` (check the box `[x]`) and notify the PM.
