---
name: frontend-engineer
description: >
  Develops production-ready Next.js code locally for the redesign pipeline.
  Triggers include: "build site," "generate components," "start Gate 3," or "run Gate 4."
  Follows the standards in @[/.agents/protocols/agency-foundation.md].
---

# Gate 3 & 4 — Engineering Protocol

**FIRST ACTION:** Read `PROJECT_LOG.md` from top to bottom. Your inputs are:
- Gate 1B: Design system tokens, dependency manifest, page list, component inventory, visual non-negotiables
- Gate 1.5: SEO metadata templates to inject per page
- Gate 2: Final copy to populate all page content
- Gate 5 (if exists): Revision list to implement

**PRE-CONDITION:** `gate_2.status` must be `approved` in `project-state.json`.

---

## Gate 3 — Scaffolding (Dirty Directory Safe)
Set up the core architecture following the [frontend-engineering-standards](/.agents/skills/frontend-engineering-standards/SKILL.md).

1. **Windows Standard**: Use the `cmd /c` prefix for all `npx` or `npm` commands.
2. **Next.js Initialization**:
   - If the root directory is "dirty" (contains `.agents` or other files), DO NOT run `create-next-app` directly.
   - **The Scaffold-Move Workflow**: 1. Create `_init_temp`. 2. Initialize inside it using exact versions from the Gate 1B log entry. 3. Use `move` or `robocopy` to merge files to the root.
3. **Theme Initialization**: Update `tailwind.config.js` with the exact tokens from the Gate 1B log entry. This is the Source of Truth.
4. **Dependency Installation**: Install exact pinned versions from the Gate 1B manifest.

### Append to PROJECT_LOG.md after Gate 3

```markdown
---
## [Gate 3] — Scaffold Complete
**Role:** Frontend Engineer | **Date:** [YYYY-MM-DD]

- Next.js version: ...
- Tailwind configured: ✅
- shadcn/ui initialized: ✅
- Pinned dependencies installed: ✅

### Handoff
Scaffold ready. Proceeding to Gate 4 full build.
```

---

## Gate 4 — Full Build (Resumable)
Build pages in the priority order from the Gate 1B log entry.

### 1. Resumption Check
Check `gates.gate_4.completed_files` in `project-state.json`. **DO NOT** rebuild files already recorded there.

### 2. JIT Deep Scrape (Asset Reporting)
For each page, perform a "Deep Scrape" of the original URL.
- If low-quality assets are found (blurry logos, old images), report them in the chat and continue with the original assets.
- Do NOT replace with AI-generated images unless the user explicitly asks.

### 2.5 Conversion Audit (Money Pages)
If the current page is a conversion page (Homepage, Pricing, Landing Page):
- Consult `marketing-pro-page-cro` to audit the proposed component layout against visual hierarchy and CTA prominence rules.

### 3. Implementation
- **Visual Integrity**: Follow the Aesthetic Direction and Visual Non-Negotiables from the Gate 1B log entry.
- **Copy**: Use the exact copy from the Gate 2 log entry. No placeholders.
- **SEO**: Inject metadata from the Gate 1.5 log entry into each page's `export const metadata`.
- **Stack**: Next.js 15 + Tailwind CSS. Use `shadcn/ui` as a primitive layer only.

### 4. Revision Phase
If a Gate 5 entry exists in `PROJECT_LOG.md` with a revision list:
1. Read every revision item.
2. Implement all changes in `/components/sections/` or `/app/`.
3. Append a new Gate 4 (Revision) entry to the log when done.

---

## Gate 4 Completion — Start the Dev Server

After all pages are built (or revisions implemented), run:
```
cmd /c npm run dev
```

Confirm the server is accessible at `http://localhost:3000`, then update `project-state.json`:

```json
{ "dev_server": "http://localhost:3000" }
```

### Append to PROJECT_LOG.md after Gate 4

```markdown
---
## [Gate 4] — Build Complete
**Role:** Frontend Engineer | **Date:** [YYYY-MM-DD]

### Pages Built
- app/page.tsx (Home)
- app/[money-page]/page.tsx
- ...

### Dev Server
- URL: http://localhost:3000
- Status: Running ✅

### Handoff
All pages built. Dev server running. Passing to Visual Director for Gate 5 audit.
```

*(For a revision pass, use the heading `## [Gate 4] — Revision Pass` instead.)*

---

## Pipeline Reporting
Update `project-state.json` after **every** file is written:

```json
{
  "gates": {
    "gate_4": {
      "status": "in_progress",
      "completed_files": ["app/layout.tsx", "components/sections/Hero.tsx"]
    }
  }
}
```
Once all pages are done and dev server is confirmed, set `gate_4.status` to `"complete"` and notify the PM.
