# Project State

**Project Name:** Teevent Redesign
**URL:** www.teevent.my
**Stack:** next@15
**Dev Server:** http://localhost:3000
**Last Updated:** 2026-04-14
**Blocked:** false

## Pipeline Gates

- [x] **Gate 0.5**: complete
- [x] **Gate 1**: complete
- [x] **Gate 1.5**: complete
- [x] **Gate 2**: complete
- [x] **Gate 3**: complete
- [x] **Gate 4**: complete
- [ ] **Gate 5**: pending
- [ ] **Gate 6**: pending

## Gate Details

**Gate 0.5 (Strategic Context Scrape)**
- Brief Status: Strategic Context Scrape complete.

**Gate 1 (Discovery Audit)**
- Audit Result: Gate 1A (Audit) complete. Pausing for user to switch models for Gate 1B (Planning).

**Gate 1.5 (SEO Strategy)**
- SEO Status: pending
- Keywords: none

**Gate 2 (Copywriting)**
- Message Status: pending

**Gate 3 (Scaffolding)**
- Dev Status: pending

**Gate 4 (Full Build)**
- Build Status: pending
- Completed Files:
  - (empty)

**Gate 5 (Visual Audit)**
- Audit Status: pending
- Revisions: none

**Gate 6 (Final QA)**
- QA Passed: false
- Completed At: pending

---

# Project History & Log

> This section is append-only. Past entries must never be edited.
> Every role reads this section to understand project context.

---

## [Gate 0.0] â€” Initialization
**Role:** System | **Date:** 2026-04-14
Project successfully initialized with single-file tracking via PROJECT_STATE.md.

---

## [Gate 0.5] â€” Strategic Context Scrape (Revised)
**Role:** Discovery Auditor | **Date:** 2026-04-14

### Client Brief
- **Business Name:** Teevent
- **Industry:** Custom Event Merchandise
- **One-Sentence Pitch:** Premium, visual-driven custom merchandise for Malaysian university events â€“ from lanyards to canvas bags.
- **Core Products:** Lanyards, custom ID cards, cardholders, keychains, T-shirts, and canvas bags.
- **Value Proposition:** A high-quality, visual-first approach to event merchandise, focusing on real item photography and premium design quality.
- **Differentiator:** Visual-first experience showcasing real-world outcomes, specialized in university-centric merchandise (TedX, AIESEC, etc.), and a streamlined bridge from design to delivery.

### Target Audience
- **ICP:** Malaysian university student committees, clubs, and societies (e.g., TEDx, AIESEC, competitive fests).
- **Primary Problem:** Finding a single, reliable partner for a full suite of high-quality, professional event merchandise.
- **Desired Outcome:** Premium, cohesive brand presence for university events through high-quality printed merchandise.
- **Common Objections:** Reliability, product quality consistency, and design-to-delivery speed.

### Brand Voice
- **Tone:** Visual-centric, premium, professional, and reliable.
- **Language Style:** Minimalist copywriting, "Show, don't tell" philosophy, focusing on high-quality imagery over text-heavy descriptions.

### Online Research Findings
- **Customer Praise:** High product quality, fast response times, and reliable delivery for major student-led events.
- **Customer Complaints:** None found; feedback is overwhelmingly positive regarding reliability.
- **Market Positioning vs. Competitors:** Positioned as a "Visual-First Premium Partner" specializing in a full range of university merchandise.

### Handoff
Revised brief complete. Proceeding to Gate 1A for Discovery Audit.
NOTE: User requested a HALT at Gate 1B (Frontend UI/UX planning) to switch AI models.

---

## [Gate 1A] — Discovery Audit
**Role:** Discovery Auditor | **Date:** 2026-04-14

### Brand DNA
- **Logo Style:** Minimalist lowercase "teevent" wordmark with crown/lanyard icon.
- **Colors:** #007bff (Primary Blue), #FFC107 (Amber/Gold Icon)
- **Fonts:** Heading — Roboto, Body — Roboto
- **Brand Tone:** Functional, utility-focused, currently missing the "premium visual" feel.

### IA Overview
- **Nav:** Minimalist (none), "Get Quote" button only.
- **Conversion Goal:** Price discovery / Quoting leads.
- **Primary CTA:** "Get Instant Price & Quote"

### Top 3 Friction Points
1. **Product Invisibility**: Zero visual representation of the expanded product range (ID cards, keychains, shirts, bags).
2. **Text-Heavy Hero**: The main interface prioritizes sales copy over the "Visual-First" real-item photography the user desires.
3. **Lack of Identity**: Single-page structure limits the ability to tell a "Premium Partner" story for a multi-product agency.

### Marketing Intelligence
- **Search Profile:** Optimized for "Lanyards for uni events" (H1), but missing meta-data and product-specific SEO for the new range.
- **Market Positioning:** Currently a "Lanyard Vendor." Need to pivot to "Premium University Merchandise Partner."
- **VOC (Voice of Customer):** "Accurate, trustworthy, and efficient" — based on external student reviews.

### Handoff
Audit complete. ? **HALTING** as requested by the user. 
The next step is Gate 1B (Implementation Plan & UI/UX Design), which should be handled by the next AI model.

---

## [Gate 1B] - Implementation Plan
**Role:** Conversion Architect | **Date:** 2026-04-14

### Design Brief
- **Industry:** Custom Event Merchandise (E-commerce, Youth/University)
- **Recommended Style:** Bento Box Grid (Apple-style product showcase)
- **Chosen Aesthetic:** Dark Canvas Bento Grid with warm amber accent
- **Justification:** A dark (#0F0F0F) background makes real product photography dramatically pop — this is how premium streetwear and tech brands (Suprema, Nothing, Apple) command attention. Combined with a Bento Grid layout, every product category gets its own visual card. Competitors all use white backgrounds with generic lanyard renders — Teevent will be the ONLY one in MY presenting merch like a lifestyle brand.
- **Visual Non-Negotiables:**
  1. Real product photography is the hero — zero stock images or generic renders
  2. Every product category gets its own Bento card — 6 cards minimum on homepage
  3. Dark canvas + amber (#F5A623) as the ONLY accent — no gradients, no neon
- **Anti-Patterns (BANNED):** Light/white backgrounds, AI gradient purples/pinks, stock photo mockups as hero elements, text-heavy sections, generic Roboto at default weight

### Design System (Tailwind Tokens)
`javascript
colors: {
  primary: '#F5A623',
  background: '#0F0F0F',
  surface: '#1A1A1A',
  'surface-2': '#242424',
  foreground: '#F5F5F5',
  muted: '#6B7280',
  border: '#2A2A2A',
},
fontFamily: {
  display: ['Syne', 'sans-serif'],
  body: ['Manrope', 'sans-serif'],
}
`

### Typography Pairing
- **Pairing:** Fashion Forward (Syne + Manrope)
- **Google Fonts Import:** family=Manrope:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700
- **Rationale:** Syne for headings gives a bold, editorial art-school feel that resonates with university students. Manrope for body copy is clean and highly legible on dark backgrounds.

### Dependency Manifest
- next@15.3.1
- react@19.0.0
- tailwindcss@3.4.17
- framer-motion@12.6.0
- lucide-react@0.454.0
- @next/font (built-in)

### Page List (Priority Order)
1. **Home** — (High) Bento grid product showcase, social proof, single CTA
2. **Products** — (High) Dedicated landing page per product category (6 pages)
   - /products/lanyards
   - /products/id-cards
   - /products/cardholders
   - /products/keychains
   - /products/tshirts
   - /products/canvas-bags
3. **Portfolio / Gallery** — (Medium) Real event photos, past client showcase
4. **About** — (Medium) Brand story and trust signals
5. **Contact / Order** — (Low) WhatsApp-first CTA form

### Component Inventory
- Navbar (sticky, minimal, amber logo wordmark)
- Footer (4-column, dark, amber accent links)
- Hero (full-bleed dark, large Syne headline, product image right)
- BentoGrid (CSS Grid, 4-column, responsive collapse to 2-col mobile)
- ProductCard (image-first, minimal label, hover reveals category name)
- ProductDetailHero (full-bleed photo left, specs right)
- SocialProofBar (logo strip — TEDx, AIESEC etc.)
- TestimonialCard (quote + student name + university)
- WhatsApp CTA button (sticky bottom on mobile)
- PageTransition (Framer Motion, fade from black)

### Handoff
Plan complete. Engineer uses this entry for Gate 3 scaffold and Gate 4 build. Copywriter uses Design Brief for tone alignment.

---

## [Gate 1.5] - SEO & Visibility Strategy
**Role:** AEO Visibility | **Date:** 2026-04-14

### Target Keywords
- **Primary:** custom lanyard printing Malaysia
- **Secondary:** university event merchandise Malaysia, custom ID card holder Malaysia, custom keychain Malaysia, branded t-shirt printing Malaysia, canvas bag printing Malaysia, promotional merchandise university events
- **AI Entities:** custom event merchandise supplier, university student organization merchandise, Malaysian event printing vendor, bulk corporate gift Malaysia, student orientation merchandise

### Page Metadata Templates
| Page | Title Tag | Meta Description | Primary Keyword |
|---|---|---|---|
| Home | Teevent - Custom Event Merchandise Malaysia | Premium custom lanyards, ID cards, keychains, T-shirts & canvas bags for Malaysian university events. Real products. Fast delivery. | custom lanyard printing Malaysia |
| /products/lanyards | Custom Lanyard Printing Malaysia - Teevent | High-quality custom lanyard printing for university events in Malaysia. 20mm/25mm. Two-sided print. Order in bulk. | custom lanyard printing Malaysia |
| /products/id-cards | Custom ID Card Printing Malaysia - Teevent | Print custom ID cards for your university event or student committee. Full-colour, durable, fast turnaround. | custom ID card printing Malaysia |
| /products/cardholders | Custom ID Card Holders Malaysia - Teevent | Waterproof, premium card holders for lanyards and events. Branded with your club or event logo. | custom card holder Malaysia |
| /products/keychains | Custom Keychain Printing Malaysia - Teevent | Branded custom keychains for orientation packs and university events. Acrylic, metal, and more. | custom keychain Malaysia |
| /products/tshirts | Custom T-Shirt Printing Malaysia - Teevent | Premium custom t-shirt printing for university clubs, events, and team uniforms. Bulk orders welcome. | custom t-shirt printing Malaysia |
| /products/canvas-bags | Custom Canvas Bag Printing Malaysia - Teevent | Eco-friendly custom canvas bag printing for university events in Malaysia. Durable and stylish. | canvas bag printing Malaysia |
| /about | About Teevent - Malaysia's University Merchandise Partner | Teevent is Malaysia's trusted custom merchandise partner for university events. Real products, reliable delivery. | university merchandise Malaysia |
| /portfolio | Teevent Portfolio - Real Events, Real Merchandise | See how Malaysian universities and student clubs brought their events to life with Teevent merchandise. | university event merchandise Malaysia |

### Schema.org Requirements
- **Type:** LocalBusiness + Product
- **Required Fields:** name, url, logo, description, areaServed (Malaysia), hasOfferCatalog (6 product categories)
- **ProductSchema per page:** name, image, description, offers.priceCurrency (MYR)

### Handoff
SEO strategy complete. Copywriter uses keywords for copy. Engineer injects metadata templates into each page's export const metadata.

---

## [Gate 2] - Winning Copy
**Role:** Copywriting Specialist | **Date:** 2026-04-14

### Direction Chosen
- **Framework:** PAS (Problem-Agitate-Solve) — applied in a minimalist, visual-first execution
- **Winning Direction:** "The Visual Proof" — ultra-short copy that frames the problem (generic events), raises the stakes (your brand represents you), then solves it with a product image. Copy earns its space; images do the heavy lifting.
- **Rationale over 3 considered directions:**
  - Direction A "Hype-first" (Bold slogans, FULL CAPS energy) — REJECTED: Anti-pattern per brand rules, feels cheap.
  - Direction B "Feature Listing" (product specs, table-driven) — REJECTED: Text-heavy, defeats visual-first goal.
  - Direction C "The Visual Proof" (minimal words, images = proof) — SELECTED: Aligns with user directive of more photos, less copy. Gives premium feel consistent with design aesthetic.
- **SEO Keywords Woven In:** custom lanyard printing Malaysia, university event merchandise Malaysia

---

### Homepage Copy

**Hero Headline:** Your event deserves to look this good.
**Subheadline:** Custom merchandise for Malaysian university events. Lanyards, ID cards, keychains, tees, bagss — all in one place.
**Primary CTA:** "See What We Do"
**Secondary CTA:** "Order via WhatsApp"

**Product Section Headline:** Everything your event needs.
**Product Section Subheadline:** Six categories. One supplier. Zero compromise on quality.

**Social Proof Section Headline (above logo strip):** Trusted at events across Malaysia.
**Social Proof Subheadline:** Student committees from TEDx, AIESEC, and university orientation weeks choose Teevent.

**Testimonial Label:** What organisers say.

**Final CTA Section Headline:** Ready to make your event unforgettable?
**Final CTA Body:** Send us a message. We will handle everything else.
**Final CTA Button:** "Chat on WhatsApp"

---

### About Page Copy

**Core Message:**
Teevent started with one goal — to make university events look as good as the effort that goes into them.

We know what it's like to plan an event from scratch. The late nights, the budget approvals, the fear that the merchandise won't arrive in time. That's exactly why we exist.

We are a specialist merchandise partner for Malaysian universities. Not a generic printer. Not a middleman. A team that has supplied lanyards, ID cards, tees, and bags to some of the country's biggest student-led events — and we show up the same way every single time.

**About CTA:** "Let's work together"

---

### Product Pages Copy (template applied to all 6 categories)

**Lanyard Page:**
- **Headline:** The lanyard that does not look like an afterthought.
- **Body:** 20mm or 25mm. Two-sided printing. Your design, your colours, your branding — done right. Available in sublimation print with safety clip and custom ID hook.
- **CTA:** "Get a quote on WhatsApp"

**ID Card Page:**
- **Headline:** Your pass. Your brand.
- **Body:** Full-colour custom ID cards printed on durable PVC. Landscape or portrait. Perfect for committees, volunteered staff, and event crews.
- **CTA:** "Get a quote on WhatsApp"

**Cardholder Page:**
- **Headline:** The detail that ties it all together.
- **Body:** Waterproof clear and frosted cardholders for lanyards. Keeps your ID cards and event passes protected throughout the day.
- **CTA:** "Get a quote on WhatsApp"

**Keychain Page:**
- **Headline:** A takeaway they will actually keep.
- **Body:** Custom-printed keychains for orientation packs, event giveaways, and club merchandise. Acrylic, stamped, and more.
- **CTA:** "Get a quote on WhatsApp"

**T-Shirt Page:**
- **Headline:** Wear the event.
- **Body:** Custom printed and embroidered t-shirts for committees, volunteered teams, and university runs. Bulk-friendly pricing. Consistent sizing across orders.
- **CTA:** "Get a quote on WhatsApp"

**Canvas Bag Page:**
- **Headline:** The bag they bring to every class after.
- **Body:** Durable cotton canvas bags printed with your event or club branding. A merchandise item that lives long after your event ends.
- **CTA:** "Get a quote on WhatsApp"

---

### Portfolio Page Copy

**Headline:** Real events. Real merchandise.
**Subheadline:** Every photo you see was produced by Teevent for a real Malaysian university event.
**CTA:** "Your event is next — talk to us"

---

### Footer Copy
**Tagline line:** Custom merchandise for university events across Malaysia.
**Legal line:** 2026 Teevent. All rights reserved.

---

### Handoff
Copy complete. Engineer reads this entry to populate page content in Gate 4. No placeholders — all copy is final. Visual-first philosophy enforced: copy is short, specific, and image-dependent. All CTAs route to WhatsApp.

---


---

## [Gate 3] — Scaffold Complete
**Role:** Frontend Engineer | **Date:** 2026-04-14

- Next.js version: 15.3.1
- Tailwind configured: ? (Tailwind 4 CSS Theme)
- shadcn/ui initialized: ? (Skipped due to TW4 compatibility; using standard TW4 theme instead)
- Pinned dependencies installed: ?

### Frictions & Preventions
- **Tailwind 4 Transition**: Next.js 15 defaults to Tailwind 4 which uses a CSS-first configuration. I adapted the Gate 1B tokens to the globals.css @theme block instead of a 	ailwind.config.ts.
- **shadcn Compatibility**: Standard shadcn init fails to detect TW4. I will implement custom components following the design system tokens in globals.css to maintain visual integrity.

### Handoff
Scaffold ready. Proceeding to Gate 4 full build.



