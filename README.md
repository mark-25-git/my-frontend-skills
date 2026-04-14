# Frontend Skills (Agency Intelligence Module)

This repository is a professional **8-Gate AI-Driven Website Redesign Pipeline**. Drop it into any project folder to instantly give your AI agent the skills of a full marketing agency team.

---

## 🚀 How to Start (One Step)

1. **Clone into your project:**
   ```bash
   git clone [repo_url] .agents
   ```

2. **Run `/start` and give the AI a URL:**
   > "Start the pipeline for https://example.com"

That's it. The AI handles everything from here.

---

## 🤖 What Happens Automatically

After you give the URL, the pipeline runs on its own:

| Gate | What Happens | Who Does It |
|---|---|---|
| **Gate 0.5** | AI scrapes the site + researches online → appends client brief to `PROJECT_LOG.md` | Discovery Auditor |
| ⏸ **You review** | AI shows the brief. You confirm or correct it. | — |
| **Gate 1A** | Site audit → appended to `PROJECT_LOG.md` | Discovery Auditor |
| **Gate 1B** | Design direction + implementation plan → appended to `PROJECT_LOG.md` | Conversion Architect |
| **Gate 1.5** | SEO keyword strategy → appended to `PROJECT_LOG.md` | AEO Visibility |
| **Gate 2** | AI writes and selects the best copy → appended to `PROJECT_LOG.md` | Copywriting Specialist |
| **Gate 3** | Next.js project scaffold → appended to `PROJECT_LOG.md` | Frontend Engineer |
| **Gate 4** | All pages built using copy + design from the log, dev server started → appended to `PROJECT_LOG.md` | Frontend Engineer |
| **Gate 5** | AI visually audits the live site, revision list → appended to `PROJECT_LOG.md` | Visual Director |
| ⏸ **You review** | AI shows the revision report. You confirm before final QA. | — |
| **Gate 6** | Final QA sign-off → appended to `PROJECT_LOG.md` | QA Compliance |

You are only asked to do something **twice** — at the two ⏸ pause points.

---

## 📋 PROJECT_LOG.md — The Team's Shared Document

Every role appends their findings and decisions to `PROJECT_LOG.md` in chronological order. **Past entries are never edited.**

This means:
- Any AI can pick up the project in a new conversation by reading the log
- Every decision is traceable (who decided what, when, and why)
- No information lives only in chat history

The log replaces `product-marketing-context.md`, `VISUAL_AUDIT_REPORT.md`, and `QA_PASSED.md` — all in one place.

---

## 🔄 How to Resume a Project

Start a new chat and run `/start` again. The AI reads `project-state.json` (gate statuses) and `PROJECT_LOG.md` (all decisions), then picks up exactly where it left off.

---

## 🛠 The Tech Stack

All builds use: **Next.js 15 + Tailwind CSS + shadcn/ui**

Declared in `project-state.json` as `"stack": "next@15"`.

---

## 📜 Master Protocol

All agents follow `/.agents/protocols/agency-foundation.md` — covering communication standards, engineering integrity, and Windows environment compatibility.
