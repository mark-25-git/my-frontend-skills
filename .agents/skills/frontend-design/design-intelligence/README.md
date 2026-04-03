# Design Intelligence Library

This folder contains curated design rules ported from UIUXPROMAX (MIT License).
The Python runtime has been removed — all knowledge is encoded as plain markdown
tables that any AI can read and reason over directly.

## Files

| File | Source | Purpose |
|---|---|---|
| `industry-rules.md` | `ui-reasoning.csv` | Per-industry style, color mood, and anti-patterns |
| `ui-styles.md` | `styles.csv` | Named UI style definitions with CSS keywords |
| `typography-pairings.md` | `typography.csv` | Curated Google Font pairings by industry/mood |
| `landing-patterns.md` | `landing.csv` | Landing page structural patterns |

## How to Use

The `frontend-design` SKILL.md references this library.
When designing for a target industry, the AI must:
1. Identify the industry from `industry-rules.md`
2. Apply the recommended style from `ui-styles.md`
3. Select a typography pairing from `typography-pairings.md`
4. Choose a landing structure from `landing-patterns.md`

## How to Expand

Each file has an `<!-- ADD NEW ENTRIES BELOW -->` marker.
To add a new industry:
1. Add a row to `industry-rules.md` using the same column format.
2. If the industry uses a style not yet listed, add it to `ui-styles.md`.
3. If the industry needs a specific font pairing, add it to `typography-pairings.md`.

Original data source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (MIT License)
