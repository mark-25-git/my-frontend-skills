---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

---

## Step 0: Industry-Adaptive Design Intelligence (MANDATORY)

**Before any aesthetic decisions, identify the target industry and consult the design intelligence library.**

The library is located at: `.agents/skills/frontend-design/design-intelligence/`

Files to read, in order:
1. **`industry-rules.md`** — match the client's industry to a row in the table. Extract: recommended style, color mood, typography mood, key effects, and anti-patterns.
2. **`ui-styles.md`** — look up the recommended style to get its exact CSS keywords and implementation variables.
3. **`typography-pairings.md`** — use the "Industry → Typography Quick Map" to select the correct font pairing. Get the Google Fonts import string.
4. **`landing-patterns.md`** — use the "Industry → Landing Pattern Quick Map" to determine the correct page structure and CTA placement.

**If the industry is not listed**, apply the closest adjacent category. Log the gap for future expansion.

The output of Step 0 must be a locked design brief:
```
Industry:        [identified]
Recommended Style: [from industry-rules.md]
Color Palette:   [from industry-rules.md color mood]
Typography:      [pairing name + heading font + body font]
Page Structure:  [pattern name + section order]
Anti-Patterns:   [list from industry-rules.md — these are BANNED in this build]
```

Only proceed to Step 1 after this brief is complete.

---

## Step 1: Design Thinking

With the industry brief locked, refine the creative direction:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Differentiation**: Within the boundaries set by the industry brief, what makes this UNFORGETTABLE? What's the one thing someone will remember?
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Tone Execution**: The industry brief defines the style category. Now execute it with a strong point of view — within Glassmorphism, will this be dark and dramatic, or light and airy? Within Brutalism, will this be minimal noir or colorful chaos?

**CRITICAL**: The industry brief is the constraint. Creative expression lives within it, not outside it. A spa site with neon cyberpunk aesthetics is a failure regardless of how bold it is.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

---

## Step 2: Frontend Aesthetics Execution

Focus on:
- **Typography**: Use the pairing selected in Step 0. Within that pairing, vary weights, sizes, and tracking to create hierarchy. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Use the color palette defined in Step 0. Build CSS variables for the full palette. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Animations must match the industry mood. Finance/legal = subtle 150–200ms transitions only. Creative agencies = scroll reveals and parallax. Spa/wellness = slow, gentle fades. Never apply the same motion vocabulary to every project.
- **Spatial Composition**: Unexpected layouts within the style chosen. Asymmetry, overlap, diagonal flow, grid-breaking elements. Generous negative space OR controlled density — match to the industry.
- **Backgrounds & Visual Details**: Create atmosphere appropriate to the industry. Legal = muted textures, subtle shadows. Luxury = gradient meshes, chromatic depth. Food = warm, rich imagery-led.

**Anti-Pattern Enforcement**: The anti-patterns from Step 0 are HARD RULES. Do not use them regardless of creative preference. Log any anti-pattern that was tempting — it means the brief is working.

---

## Universal Rules (Always Apply)

NEVER use generic AI-generated aesthetics like:
- Overused font families without context (Inter, Roboto, Arial as defaults — only use if the industry brief calls for them)
- Clichéd color schemes (AI purple/pink gradients on white, unless building an AI product)
- **Generic Styling**: Avoid FULL CAPS (all-caps) and simple Y-axis hover lifts unless 100% required. Use a more sophisticated approach.
- Predictable layouts and cookie-cutter components that lack context-specific character

Every build must be unmistakably designed for its specific industry. No design should be identical to another. Industry constraints are creative fuel, not limitations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations. Minimalist or refined designs need restraint, precision, and attention to spacing. Elegance comes from executing the vision well, not from ignoring the rules.
