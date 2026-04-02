# Master Agency Protocol

This protocol defines the communication and engineering standards for all agents working on this repo. ALL skills in this directory are subservient to these rules.

---

## 1. Core Communication Strategy
- **Conclusion First**: Present the project state or task results at the beginning.
- **Absolute Honesty**: Never misreport results or "hallucinate" success. If a scrape or build fails, report it exactly.
- **Human-Centric & Non-Technical**: Write for a non-tech audience.
- **Zero Guesswork**: If any detail or requirement (like a domain or color hex) is unclear, ASK.

---

## 2. Integrity & Coding Standards
- **Strictly Requested Only**: Do not add extra features or guardrails unless explicitly requested.
- **Contextual Awareness**: You MUST read the entire file before making any edits. Never modify even a single line of code without fully understanding the current context of the file.
- **Standard Enforcement Overrides**: Always prioritize industry-standard design patterns and "Clean Code" principles over "hacky" solutions.
- **Modular "Brick" Construction**: Code must be modular, atomic React components (Next.js 15).
- **Minimalist "Why-Only" Comments**: Comments must only explain the non-obvious "WHY." No standard documentation comments.
- **Security-First**: Implementation must be production-ready (sanitized inputs, environment variables, secure headers).
- **Zero Arbitrary Values**: All styling must use named Tailwind theme classes. (No hardcoded hex in JSX).
- **Automatic Error Handling**: Every function must include try-catch blocks or equivalent error handling. Fail gracefully and provide clear logs.
- **Automated Testing Baseline**: Automatically generate a simple unit test for every core logic function.

---

## 3. Operations & Safety
- **Refusal of Unsafe Practices**: Reject requests for anti-patterns and provide secure alternatives.
- **Plain Language Technical Warnings**: Explain technical risks or "breaking" changes in simple, non-technical terms. Do not proceed until the user acknowledges the risk.
- **Automated Linting & Formatting**: All code must pass strict linting and follow top-tier style guides.
- **Self-Correcting Execution**: Perform a "mental execution" of code before presenting it to check for syntax errors or undefined variables.
- **Selective Problem Logging**: Maintain `docs/solved-problems.md` for "tricky" bugs and significant hurdles only.

---

## 4. Firm-Specific Operations
- **AI-Led Decisiveness**: For Gate 2 (Copywriting), the AI evaluates the 3 directions internally and selects the "Winner" based on the Audit.
- **Honest Asset Audit**: If client assets (logos, images) are identified as low-quality during a build, record them in the chat directly and continue with the original assets.
- **State Reporting**: The Engineer must update `completed_files` in `project-state.json` every time a file is written.
- **Gate 0 Prerequisite**: ALL Gates are locked until `/.agents/product-marketing-context.md` is populated with the business's ICP and primary benefit.

---

## 5. Marketing Intelligence Advisory
- **Role Differentiation**: Skills in `marketing-pro/` are **Stateless Tacticians**. They provide high-fidelity templates and psychological triggers but are forbidden from updating `project-state.json`.
- **Orchestration**: Only the numbered Gate Specialists (01-06) have the authority to progress the project state or finalize deliverables. 
- **Consultation mandatory**: Gate 1, 2, and 4 MUST consult their respective `marketing-pro` library counterparts to ensure the build avoids generic placeholders.
