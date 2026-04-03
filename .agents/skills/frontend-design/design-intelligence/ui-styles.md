# UI Style Reference

Curated from UIUXPROMAX `styles.csv` (MIT License).
Each style entry includes CSS/technical keywords and implementation notes.

---

## Style Lookup Table

| Style Name | Best For | Avoid For | Light/Dark | CSS Keywords | Key Variables |
|---|---|---|---|---|---|
| **Minimalism** | Enterprise, dashboards, SaaS, documentation | Creative portfolios, entertainment | Both ✓ | `display: grid; gap: 2rem; font-family: sans-serif; no box-shadow` | `--border-radius: 0px; --shadow: none; --accent: single primary` |
| **Neumorphism** | Health/wellness, meditation, fitness | Complex apps, critical accessibility, dashboards | Light ✓ / Partial Dark | `box-shadow: -5px -5px 15px rgba(0,0,0,0.1), 5px 5px 15px rgba(255,255,255,0.8); border-radius: 12-16px` | `--border-radius: 14px; --shadow-soft-1: -5px -5px 15px; --shadow-soft-2: 5px 5px 15px` |
| **Glassmorphism** | Modern SaaS, financial dashboards, lifestyle apps, nav overlays | Low-contrast backgrounds, critical accessibility | Both ✓ | `backdrop-filter: blur(15px); background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2)` | `--blur-amount: 15px; --glass-opacity: 0.15; --border-color: rgba(255,255,255,0.2)` |
| **Brutalism** | Design portfolios, creative agencies, editorial, tech blogs | Corporate, healthcare, legal, elderly users | Both ✓ | `border-radius: 0px; transition: none; font-weight: 700+; border: visible 2-4px` | `--border-radius: 0px; --transition: none; --font-weight: 700-900` |
| **Vibrant & Block-based** | Startups, gaming, entertainment, social media, youth | Finance, healthcare, government, elderly | Both ✓ | `display: flex/grid; gap: 48px+; font-size: 32px+; background: animated patterns` | `--block-gap: 48px; --typography-size: 32px+; --contrast-ratio: 7:1+` |
| **Dark Mode (OLED)** | Night-mode apps, coding platforms, entertainment | Print-first, outdoor, color-accuracy-critical | Dark Only | `background: #000000 or #121212; color: #FFFFFF; text-shadow: 0 0 10px neon (sparingly)` | `--bg-black: #000000; --bg-dark-grey: #121212; --accent-neon: vibrant colors` |
| **Accessible & Ethical** | Government, healthcare, education, legal compliance | None — universal | Both ✓ | `color-contrast: 7:1+; font-size: 16px+; outline: 3-4px on :focus-visible; aria-label; touch-target: 44x44px` | `--contrast-ratio: 7:1; --font-size-min: 16px; --focus-ring: 3-4px; --touch-target: 44x44px` |
| **Claymorphism** | Educational, children's, SaaS, creative tools, onboarding | Corporate, legal, medical, finance | Light ✓ / Partial Dark | `border-radius: 16-24px; border: 3-4px solid; box-shadow: inset -2px -2px 8px, 4px 4px 8px` | `--border-radius: 20px; --border-width: 3-4px; --shadow-inner: inset; --animation: bounce` |
| **Aurora UI** | Modern SaaS, creative agencies, music, lifestyle, hero sections | Data-heavy dashboards, critical accessibility | Both ✓ | `background: conic-gradient or radial-gradient; animation: @keyframes gradient (8-12s); background-size: 200%` | `--gradient-colors: complementary pairs; --animation-duration: 8-12s; --blend-mode: screen` |
| **Soft UI Evolution** | Modern enterprise, SaaS, health/wellness, professional tools | Extreme minimalism, critical performance | Both ✓ | `box-shadow: softer multi-layer (0 2px 4px); border-radius: 8-12px; animation: 200-300ms smooth` | `--border-radius: 10px; --animation-duration: 200-300ms; --contrast-ratio: 4.5:1+` |
| **Liquid Glass** | Premium SaaS, luxury e-commerce, creative platforms | Performance-limited, critical accessibility | Both ✓ | `animation: morphing SVG paths (400-600ms); backdrop-filter: blur + saturate; filter: hue-rotate` | `--morph-duration: 400-600ms; --blur-amount: 15px; --iridescent: true` |
| **Motion-Driven** | Portfolio sites, storytelling, interactive experiences, SaaS | Dashboards, critical accessibility, low-power devices | Both ✓ | `animation: @keyframes scroll-reveal; transform: translateY/X; Intersection Observer; will-change: transform` | `--animation-duration: 300-400ms; --parallax-layers: 5; --scroll-behavior: smooth` |
| **Trust & Authority** | Healthcare, finance, legal, enterprise software | Casual products, entertainment | Both ✓ | `badge grid layout; shield icons; professional color scheme (blue/grey); subtle shadows` | `--badge-height: 48px; --trust-color: #1E40AF; --card-shadow: 0 4px 6px rgba(0,0,0,0.1)` |
| **Organic Biophilic** | Wellness, sustainability, eco products, meditation | Tech-focused, gaming, industrial | Both ✓ | `border-radius: 16-24px (varied); background: earth tones; SVG organic shapes (blob); natural shadows` | `--forest-green: #228B22; --earth-brown: #8B4513; --organic-radius: 24px` |
| **AI-Native UI** | AI products, chatbots, voice assistants, copilots | Traditional forms, data-heavy dashboards | Both ✓ | `chat bubble layout (flex-direction: column); typing animation (3 dots pulse); streaming text; input: sticky bottom` | `--ai-accent: #6366F1; --user-bubble-bg: #E0E7FF; --ai-bubble-bg: #F9FAFB` |
| **Bento Box Grid** | Dashboards, product pages, portfolios, Apple-style marketing | Dense data tables, text-heavy content | Both ✓ | `display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 200px; gap: 16px; border-radius: 24px` | `--grid-gap: 16px; --card-radius: 24px; --card-bg: #FFFFFF; --page-bg: #F5F5F7` |
| **Swiss Modernism 2.0** | Corporate, architecture, editorial, museums, professional services | Playful brands, children, entertainment | Both ✓ | `display: grid; grid-template-columns: repeat(12, 1fr); font-family: Inter/Helvetica; single accent only` | `--grid-columns: 12; --grid-gap: 1rem; --base-unit: 8px; --font-primary: Inter` |
| **3D & Hyperrealism** | Gaming, product showcase, high-end e-commerce, architectural viz | Low-end mobile, critical accessibility | Partial | `transform: translate3d; perspective: 1000px; WebGL canvas; Three.js; complex multi-layer shadows` | `--perspective: 1000px; --parallax-layers: 5; --animation-duration: 300-400ms` |
| **Neubrutalism** | Gen Z brands, startups, creative agencies, Figma-style apps | Luxury, finance, healthcare, conservative | Both ✓ | `border: 3px solid black; box-shadow: 5px 5px 0px black; colors: high saturation; font-weight: 700; no gradients` | `--border-width: 3px; --shadow-offset: 4px; --shadow-color: #000; --font: bold sans` |

<!-- ADD NEW ENTRIES BELOW -->
<!-- Format: | **Style Name** | Best For | Avoid For | Light/Dark | CSS Keywords | Key Variables | -->

---

## Style Selection Guide

When you have an industry but aren't sure which style to use, apply this logic:

| Situation | Pick |
|---|---|
| High trust required (legal, finance, medical) | Minimalism or Trust & Authority |
| Elegant, premium feel | Liquid Glass or Glassmorphism |
| Soft, calming, wellness | Soft UI Evolution or Neumorphism |
| Bold, youthful, startup energy | Vibrant & Block-based or Neubrutalism |
| Nature, eco, organic | Organic Biophilic |
| Creative, artistic, portfolio | Brutalism or Motion-Driven |
| Data-dense dashboards | Minimalism or Dark Mode (OLED) |
| Children's or playful products | Claymorphism |
| AI / conversational products | AI-Native UI |
| Apple-inspired product showcase | Bento Box Grid |
