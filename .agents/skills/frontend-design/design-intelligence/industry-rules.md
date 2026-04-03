# Industry Design Rules

Curated from UIUXPROMAX `ui-reasoning.csv` (MIT License).
Use this table to determine the correct design direction for a given industry.

## How to Match

1. Identify the client's industry from the **Industry** column.
2. Apply the **Recommended Style** — cross-reference with `ui-styles.md` for full CSS specs.
3. Honor the **Color Mood** — exact palette guidance is in `colors` column.
4. Eliminate everything listed in **Anti-Patterns (NEVER use)**.

---

## Curated Industry Table (25 Core Industries)

| # | Industry | Recommended Style | Color Mood | Typography Mood | Key Effects | Conditional Rules | Anti-Patterns (NEVER use) |
|---|---|---|---|---|---|---|---|
| 1 | **SaaS / Software Product** | Glassmorphism + Flat Design | Trust blue + accent contrast | Professional + Hierarchy | Subtle hover 200–250ms, smooth transitions | If data-heavy → add glassmorphism; if UX-focused → prioritize minimalism | Excessive animation, dark mode by default |
| 2 | **E-commerce (General)** | Vibrant & Block-based | Brand primary + success green | Engaging + clear hierarchy | Card hover lift 200ms, scale effect | If luxury → switch to Liquid Glass; if conversion-focused → add urgency colors | Flat design without depth, text-heavy pages |
| 3 | **E-commerce (Luxury / Premium)** | Liquid Glass + Glassmorphism | Premium colors + minimal accent | Elegant + Refined | Chromatic aberration, fluid animations 400–600ms | If checkout → emphasize trust; if hero needed → use 3D Hyperrealism | Vibrant & Block-based, playful colors |
| 4 | **B2B Service / Consulting** | Trust & Authority + Minimalism | Professional blue + neutral grey | Formal + Clear | Section transitions, feature reveals | Must have: case studies, ROI messaging | Playful design, hidden credentials, AI purple/pink gradients |
| 5 | **Healthcare / Medical Clinic** | Accessible & Ethical + Minimalism | Medical blue (#0077B6) + trust white | Professional + Readable (16px+) | Online booking flow, doctor profile reveals | Must have: appointment booking, insurance info | Bright neon, motion-heavy animations, AI purple/pink gradients |
| 6 | **Beauty / Spa / Wellness** | Soft UI Evolution + Neumorphism | Soft pastels (Pink, Sage, Cream) + gold accents | Elegant + Calming | Soft shadows, smooth transitions 200–300ms, gentle hover | Must have: booking system + before/after gallery; if luxury → add gold accents | Bright neon, harsh animations, dark mode |
| 7 | **Restaurant / Food Service** | Vibrant & Block-based + Motion-Driven | Warm colors (Orange, Red, Brown) | Appetizing + Clear | Food image reveal, menu hover effects | Must have: high-quality images; if delivery → emphasize speed | Low-quality imagery, outdated hours |
| 8 | **Hotel / Hospitality** | Liquid Glass + Minimalism | Warm neutrals + Gold (#D4AF37) | Elegant + Welcoming | Room gallery, amenity reveals | Must have: room booking + virtual tour | Poor photos, complex booking |
| 9 | **Real Estate / Property** | Glassmorphism + Minimalism | Trust blue + gold + white | Professional + Confident | 3D property tour zoom, map hover | If luxury → add 3D models; must have: map integration | Poor photos, no virtual tours |
| 10 | **Travel / Tourism Agency** | Aurora UI + Motion-Driven | Vibrant destination colors + Sky Blue | Inspirational + Engaging | Destination parallax, itinerary animations | If experience-focused → use storytelling; must have: mobile booking | Generic photos, complex booking |
| 11 | **Legal Services / Law Firm** | Trust & Authority + Minimalism | Navy blue (#1E3A5F) + gold + white | Professional + Authoritative | Practice area reveal, attorney profile animations | Must have: case results + credential display | Outdated design, hidden credentials, AI purple/pink gradients |
| 12 | **Fintech / Banking / Finance** | Minimalism + Accessible & Ethical | Navy (#0A1628) + trust blue + gold | Professional + Trustworthy | Smooth number animations, security indicators | Must have: security-first, accessibility | Playful design, poor security UX, AI purple/pink gradients |
| 13 | **Creative Agency / Design Studio** | Brutalism + Motion-Driven | Bold primaries + artistic freedom | Bold + Expressive | Portfolio reveals, results animations | Must have: portfolio + results metrics | Boring design, hidden work |
| 14 | **Personal Portfolio** | Motion-Driven + Minimalism | Brand primary + artistic | Expressive + Variable | Parallax 3–5 layers, scroll-triggered reveals | If creative field → add brutalism; if minimal → reduce motion | Corporate templates, generic layouts |
| 15 | **Online Course / E-learning** | Claymorphism + Vibrant & Block-based | Vibrant learning colors + progress green | Friendly + Engaging | Progress bar animations, certificate reveals | Must have: progress tracking + video player | Boring design, no gamification |
| 16 | **Fitness / Gym / Sports** | Vibrant & Block-based + Dark Mode (OLED) | Energetic orange (#FF6B35) + dark bg | Bold + Motivational | Progress ring animations, achievement unlocks | Must have: progress tracking + workout plans | Static design, no gamification |
| 17 | **Marketing Agency** | Brutalism + Motion-Driven | Bold brand colors + creative freedom | Bold + Expressive | Portfolio reveals, results animations | Must have: portfolio + results metrics | Boring design, hidden work |
| 18 | **Non-profit / Charity** | Accessible & Ethical + Organic Biophilic | Cause-related colors + trust + warm | Heartfelt + Readable | Impact counter animations, story reveals | Must have: impact stories + donation transparency | No impact data, hidden financials |
| 19 | **Wedding / Event Planning** | Soft UI Evolution + Aurora UI | Soft Pink (#FFD6E0) + gold + cream | Elegant + Romantic | Gallery reveals, timeline animations | Must have: portfolio gallery + planning tools | Generic templates, no portfolio |
| 20 | **Photography Studio** | Motion-Driven + Minimalism | Black + white + minimal accent | Elegant + Minimal | Full-bleed gallery, before/after reveal | Must have: portfolio showcase; if booking → add calendar | Heavy text, poor image showcase |
| 21 | **Bakery / Café** | Vibrant & Block-based + Soft UI Evolution | Warm Brown + Cream + appetizing accents | Warm + Inviting | Menu hover, order animations | Must have: menu display + online ordering | Poor food photos, hidden hours |
| 22 | **AI / Chatbot Platform** | AI-Native UI + Minimalism | Neutral + AI Purple (#6366F1) | Modern + Clear | Streaming text, typing indicators, fade-in | Must have: conversational UI + context awareness | Heavy chrome, slow response feedback |
| 23 | **Construction / Architecture / Interior** | Minimalism + 3D & Hyperrealism | Grey (#4A4A4A) + orange (safety) + blueprint blue | Professional + Bold | 3D model viewer, timeline animations | Must have: project portfolio; if collaboration → real-time updates | 2D-only layouts, poor image quality |
| 24 | **Home Services (Plumber / Electrician / HVAC)** | Flat Design + Trust & Authority | Trust blue + safety orange + grey | Professional + Clear | Emergency contact highlight, service menu animations | Must have: emergency contact + certifications display | Hidden contact info, no certifications |
| 25 | **Job Board / Recruitment** | Flat Design + Minimalism | Professional blue + success green + neutral | Clear + Professional | Search/filter animations, application flow | Must have: advanced search; if salary-focused → highlight compensation | Outdated forms, hidden filters |

<!-- ADD NEW ENTRIES BELOW -->
<!-- Format: | # | **Industry Name** | Style | Color Mood | Typography Mood | Key Effects | Conditional Rules | Anti-Patterns | -->

---

## Quick Anti-Pattern Reference

These patterns are **universally wrong** for professional client work. Never use them unless the industry rules explicitly permit them:

- **AI purple/pink gradients** — banned in finance, legal, healthcare, government, B2B service
- **Dark mode by default** — wrong for beauty/spa, wellness, children's products, e-commerce
- **Bright neon colors** — wrong for healthcare, legal, senior care, government
- **Playful/Claymorphism** — wrong for finance, legal, government, healthcare, enterprise B2B
- **Generic Inter/Roboto at default weights** — always pair with a distinctive display font or use a unique pairing from `typography-pairings.md`
- **FULL CAPS & Simple Y-Hover** — Avoid using all-caps text and basic vertical hover lifts unless 100% required by the specific brand context.
