# MnT-Web (Magizh NexGen Technologies) — Codebase Documentation

> Auto-generated documentation based on full codebase analysis.
> Generated on: 2026-04-19

This is the complete marketing/corporate website for **Magizh NexGen Technologies (MNT Future)** — a Madurai, Tamil Nadu-based AI & digital transformation consultancy. The site is a Single-Page Application (SPA) built with Vite + React + TypeScript, heavily animated with Framer Motion, styled with Tailwind CSS + shadcn/ui, and deployed to GitHub Pages.

---

## Table of Contents

1. [Overview](#1-overview)
2. [Tech Stack & Dependencies](#2-tech-stack--dependencies)
3. [Project Structure](#3-project-structure)
4. [Architecture](#4-architecture)
5. [Getting Started](#5-getting-started)
6. [Environment Variables](#6-environment-variables)
7. [Database Schema & Models](#7-database-schema--models)
8. [API Reference](#8-api-reference)
9. [Features & Modules (Pages)](#9-features--modules-pages)
10. [Authentication & Authorization](#10-authentication--authorization)
11. [Core Business Logic Flows](#11-core-business-logic-flows)
12. [Patterns & Conventions](#12-patterns--conventions)
13. [Third-Party Integrations](#13-third-party-integrations)
14. [Testing](#14-testing)
15. [Deployment & CI/CD](#15-deployment--cicd)
16. [Known Tech Debt & Observations](#16-known-tech-debt--observations)

---

## 1. Overview

**Name:** `vite_react_shadcn_ts` (internal) — **MNT Future / Magizh NexGen Technologies** (brand).

**Purpose:** A high-end marketing website that showcases MnT's:
- **Services** — AI Employees, Smart Automation, AI Web/Mobile Apps, Enterprise Knowledge AI, Generative AI for Marketing.
- **Products** — `iSuite AI`, `iSuite CRM`, Quick Commerce, POS System, Mahal Management, Textile E-Commerce.
- **Portfolio** — Case studies (Lia Fashion, Leats Food Corp, TrusComp, Elegant Care Services, Civil ERP).
- **Testimonials** and company info (About, Contact, Legal).

**Audience:** Enterprise buyers, product innovators, and industry leaders in Tamil Nadu and internationally who are evaluating AI implementation partners.

**Origin:** The project was bootstrapped via [Lovable.dev](https://lovable.dev) (see [README.md](README.md:1) — the `lovable-tagger` plugin still runs in development). No README-documented business logic beyond the boilerplate; most meaning has to be inferred from the code.

**Key traits:**
- Purely frontend — no backend, no database, no auth. All data is hardcoded in TypeScript files under `src/data/`.
- Heavy use of scroll-linked animations (Framer Motion `useScroll`, `useTransform`, `useInView`).
- Animated "cinematic" section designs with SVG, parallax text, gradient meshes, and particle systems.
- Deployed to GitHub Pages under the subpath `/MnT-web/`.

---

## 2. Tech Stack & Dependencies

### Languages & Runtime
- **Language:** TypeScript (non-strict — see [tsconfig.json](tsconfig.json:1): `strict: false`, `noImplicitAny: false`, `strictNullChecks: false`).
- **Target:** ES2020, DOM.
- **JSX:** `react-jsx` (automatic runtime).
- **Node:** 20 (per CI config).
- **Package manager:** npm (lockfile `package-lock.json`) — though a `bun.lockb` also exists, suggesting it was tried.

### Build Toolchain
- **Bundler:** [Vite 5.4](vite.config.ts:1) with `@vitejs/plugin-react-swc` (SWC for fast refresh/transpile).
- **Dev server:** Host `::` (IPv6), port `8080`.
- **Production `base`:** `/MnT-web/` (for GH Pages); dev `base`: `/`.
- **Plugin:** `lovable-tagger` (dev-only, tags components for Lovable.dev's IDE).
- **Post-CSS:** Tailwind + Autoprefixer (see [postcss.config.js](postcss.config.js:1)).

### Core Framework Dependencies
- **React:** `^18.3.1` + `react-dom`.
- **Routing:** `react-router-dom` `^6.30.1`.
- **Forms:** `react-hook-form` + `@hookform/resolvers` + `zod` (installed but barely used — the Contact form uses plain `useState`).
- **Async/Data:** `@tanstack/react-query` `^5.83.0` (`QueryClient` is instantiated in [App.tsx](src/App.tsx:23) but **no queries are actually made**).

### UI / Styling
- **Tailwind CSS** `^3.4.17` with `tailwindcss-animate`, `@tailwindcss/typography`.
- **shadcn/ui** — the entire `components/ui/*` directory (40+ files) is scaffolded via shadcn; config in [components.json](components.json:1).
- **Radix UI** — the primitives that back shadcn (accordion, dialog, dropdown, popover, select, tabs, tooltip, toast, etc.).
- **class-variance-authority (cva)** + `clsx` + `tailwind-merge` — see `cn()` helper in [src/lib/utils.ts](src/lib/utils.ts:4).
- **Icons:** `lucide-react` `^0.462.0` (primary icon library, used across every page).
- **Design tokens:** Custom "MnT" palette in [tailwind.config.ts](tailwind.config.ts:55-61) — `mnt.blue`, `mnt.teal`, `mnt.cyan`, `mnt.soft`, `mnt.surface`. Brand primary hex is `#2095F1`.
- **Fonts:** Google Fonts — `Space Grotesk` (display) and `Inter` (body), imported in [index.css](src/index.css:1).

### Animation / 3D
- **framer-motion** `^12.24.7` — the workhorse. Used on every page for scroll-linked parallax, reveals, staggered children, `AnimatePresence`, tab/indicator `layoutId` morphing, etc.
- **GSAP** `^3.14.2` — installed but no usage found in source.
- **Three.js** `^0.183.1` + **@react-three/fiber** + **@react-three/drei** — installed for a 3D scene used in [src/components/about/AICore3D.tsx](src/components/about/AICore3D.tsx) (about page).

### Miscellaneous Installed Deps (shadcn adjacencies)
- `cmdk`, `sonner` (toasts), `vaul` (drawer), `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `recharts`, `date-fns`, `next-themes`.

### Dev / Lint
- **ESLint 9** with `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` (see [eslint.config.js](eslint.config.js:1)). Rule `@typescript-eslint/no-unused-vars` is **off**.

---

## 3. Project Structure

```
MnT-web/
├── .github/workflows/deploy.yml   # GH Pages CI/CD
├── public/                        # Static assets served at site root
│   ├── favicon.ico
│   ├── robots.txt
│   ├── mnt.png, mntai.png, isuitec.png, ...    # Product hero images
│   ├── robomnt.png, robomnt2.png               # Hero robot illustrations
│   ├── placeholder.svg
│   └── (Screenshot + various branding images)
├── src/
│   ├── main.tsx                   # React entry — mounts <App/> into #root
│   ├── App.tsx                    # Root component — providers + <Routes>
│   ├── App.css                    # Legacy Vite starter CSS (largely unused)
│   ├── index.css                  # Tailwind base + @layer + custom keyframes
│   ├── vite-env.d.ts              # Vite type refs
│   │
│   ├── pages/                     # Top-level routes (13 pages)
│   │   ├── Index.tsx                 # Home (/)
│   │   ├── ServicesPage.tsx          # /services
│   │   ├── ServiceDetailPage.tsx     # /services/:serviceId
│   │   ├── ProductsPage.tsx          # /products
│   │   ├── PortfolioPage.tsx         # /portfolio
│   │   ├── ProjectDetailPage.tsx     # /portfolio/:projectId
│   │   ├── TestimonialsPage.tsx      # /testimonials
│   │   ├── AboutPage.tsx             # /about
│   │   ├── ContactPage.tsx           # /contact
│   │   ├── PrivacyPolicyPage.tsx     # /privacy-policy
│   │   ├── TermsPage.tsx             # /terms
│   │   ├── PaymentPolicyPage.tsx     # /payment-policy
│   │   └── NotFound.tsx              # 404 catch-all
│   │
│   ├── components/                # Shared & page-section components
│   │   ├── Navigation.tsx            # Sticky top nav + mobile drawer
│   │   ├── Footer.tsx                # Site footer w/ link columns
│   │   ├── HeroSection.tsx           # Home hero
│   │   ├── HeroStoryTimeline.tsx     # Home hero timeline variant
│   │   ├── HeroProcessTimeline.tsx
│   │   ├── ServicesSection.tsx       # Home "Our Services" split layout
│   │   ├── StatsSection.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── PackagesSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── PageHero.tsx              # Reusable title hero for legal pages
│   │   ├── TechDoodles.tsx
│   │   ├── NavLink.tsx
│   │   ├── ScrollToTop.tsx           # Route-change scroll reset
│   │   ├── AIAssistant.tsx           # Floating chat bubble (cosmetic)
│   │   │
│   │   ├── home/                     # Home-page-specific sections
│   │   │   ├── AuthoritySection.tsx
│   │   │   ├── BlogsSection.tsx
│   │   │   ├── EcosystemSection.tsx
│   │   │   ├── FinalCTASection.tsx
│   │   │   ├── PartnersSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── SpecializationSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── VideoSection.tsx
│   │   │
│   │   ├── about/                    # About-page visuals
│   │   │   ├── AICore3D.tsx          # react-three-fiber 3D scene
│   │   │   └── AICoreVisual.tsx
│   │   │
│   │   ├── services/                 # Animated visuals per service
│   │   │   ├── AIAppsVisual.tsx
│   │   │   ├── AIEmployeesVisual.tsx
│   │   │   ├── GenerativeAIVisual.tsx
│   │   │   ├── KnowledgeBaseVisual.tsx
│   │   │   └── SmartAutomationVisual.tsx
│   │   │
│   │   ├── animations/               # Decorative animation primitives
│   │   │   ├── AIBotCharacter.tsx
│   │   │   ├── AnimatedPath.tsx
│   │   │   ├── AuthorityEcosystem.tsx
│   │   │   ├── BinaryBackground.tsx
│   │   │   ├── EnterpriseBackground.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── MouseTraceGlow.tsx
│   │   │   ├── ParticleSystem.tsx
│   │   │   ├── RoboDoodle.tsx
│   │   │   ├── ScrollProgress.tsx    # Fixed scroll progress dots
│   │   │   ├── StorytellingDoodle.tsx
│   │   │   ├── TechnicalAIDoodle.tsx
│   │   │   └── index.ts              # Barrel export
│   │   │
│   │   └── ui/                       # shadcn/ui primitives (40+ files)
│   │       ├── button.tsx, card.tsx, dialog.tsx, toast.tsx, ...
│   │       ├── toaster.tsx           # Radix-based
│   │       ├── sonner.tsx            # Sonner-based (both in use)
│   │       └── use-toast.ts          # Re-export bridge
│   │
│   ├── data/                      # Hardcoded content (TypeScript modules)
│   │   ├── servicesData.ts           # Record<string, ServiceDetail>
│   │   ├── productsData.ts           # Record<string, ProductDetail>
│   │   └── portfolioData.ts          # ProjectData[]
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx            # useIsMobile() — 768px breakpoint
│   │   └── use-toast.ts              # Toast context/store
│   │
│   ├── lib/
│   │   ├── utils.ts                  # cn() — clsx + tailwind-merge
│   │   └── cloudinary.ts             # uploadToCloudinary() — unused in UI
│   │
│   └── assets/                    # Bundled images (imported via `@/assets/...`)
│       ├── mntlogo.png, mntlogo-white.png
│       ├── aboutbg.png, hero-bg.jpg
│       ├── mision.png, vision.png, values.png, goals.png
│       ├── clutch.png
│       ├── p1.png … p9.png (testimonial avatars)
│       └── poli*.png, po*.png (portfolio thumbnails)
│
├── index.html                     # Vite entry HTML — mount point + meta tags
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── postcss.config.js
├── components.json                # shadcn/ui config
├── eslint.config.js
├── package.json / package-lock.json / bun.lockb
└── README.md                      # Lovable.dev-generated stub
```

---

## 4. Architecture

### Pattern
**Client-only SPA with flat route-based composition.** There is no layered backend architecture — the site is effectively a static multi-page experience implemented with React Router. Concerns are organized by responsibility:

- **Pages** own layout and section orchestration.
- **Components** are reusable UI + animation primitives.
- **Data modules** substitute for a CMS/API — exported as typed TS records/arrays.

### Entry & Bootstrap Sequence

1. [index.html](index.html:20) renders `<div id="root">` and loads `/src/main.tsx` as a module.
2. [src/main.tsx](src/main.tsx:5) calls `createRoot(...).render(<App />)`. Also imports `./index.css` for global styles.
3. [src/App.tsx](src/App.tsx:25) mounts providers top-down:
    - `<QueryClientProvider>` (react-query) — no queries made, but available.
    - `<TooltipProvider>` (Radix).
    - `<Toaster />` (Radix-based) **and** `<Sonner />` (sonner) — **both active** for toast notifications.
    - `<AIAssistant />` — floating chat bubble rendered outside the router.
    - `<BrowserRouter basename={import.meta.env.BASE_URL}>` — uses Vite's base (`/` in dev, `/MnT-web/` in prod).
    - `<ScrollToTop />` — side-effect-only component that resets scroll on route change ([ScrollToTop.tsx:14](src/components/ScrollToTop.tsx:14)).
    - `<Routes>` — the 13 routes.

### Route → Component Map ([src/App.tsx:33-46](src/App.tsx:33))

| Path | Component | File |
|---|---|---|
| `/` | `Index` | [pages/Index.tsx](src/pages/Index.tsx) |
| `/services` | `ServicesPage` | [pages/ServicesPage.tsx](src/pages/ServicesPage.tsx) |
| `/services/:serviceId` | `ServiceDetailPage` | [pages/ServiceDetailPage.tsx](src/pages/ServiceDetailPage.tsx) |
| `/products` | `ProductsPage` | [pages/ProductsPage.tsx](src/pages/ProductsPage.tsx) |
| `/portfolio` | `PortfolioPage` | [pages/PortfolioPage.tsx](src/pages/PortfolioPage.tsx) |
| `/portfolio/:projectId` | `ProjectDetailPage` | [pages/ProjectDetailPage.tsx](src/pages/ProjectDetailPage.tsx) |
| `/testimonials` | `TestimonialsPage` | [pages/TestimonialsPage.tsx](src/pages/TestimonialsPage.tsx) |
| `/about` | `AboutPage` | [pages/AboutPage.tsx](src/pages/AboutPage.tsx) |
| `/contact` | `ContactPage` | [pages/ContactPage.tsx](src/pages/ContactPage.tsx) |
| `/privacy-policy` | `PrivacyPolicyPage` | [pages/PrivacyPolicyPage.tsx](src/pages/PrivacyPolicyPage.tsx) |
| `/terms` | `TermsPage` | [pages/TermsPage.tsx](src/pages/TermsPage.tsx) |
| `/payment-policy` | `PaymentPolicyPage` | [pages/PaymentPolicyPage.tsx](src/pages/PaymentPolicyPage.tsx) |
| `*` | `NotFound` | [pages/NotFound.tsx](src/pages/NotFound.tsx) |

### Typical Page Composition

```
<main>
  <Navigation />           ← sticky top bar, shared
  <HeroSection/Hero… />    ← page-specific
  <Section 1 />            ← 3–8 animated sections
  <Section 2 />
  …
  <FinalCTASection />
  <Footer />               ← shared
</main>
```

Every page imports `Navigation` + `Footer` directly — there is **no shared layout component** wrapping the router. `<ScrollToTop />` is mounted once at the router level.

### How "Layers" Communicate
There are no real layers — only:
- **Direct imports** from `@/data/*` into pages (static data lookup by key/id).
- **URL params** via `useParams()` to drive detail-page lookups (e.g., [ServiceDetailPage.tsx:52](src/pages/ServiceDetailPage.tsx:52)).
- **No state management library.** Per-component state only (`useState`, `useRef`).

The path alias `@` resolves to `src/` (defined in both [vite.config.ts:15-17](vite.config.ts:15) and [tsconfig.json:6-7](tsconfig.json:6)).

---

## 5. Getting Started

### Prerequisites
- Node.js **20+** (the GH Actions workflow uses Node 20; any Node 18+ with Vite 5 should work locally).
- npm (matches `package-lock.json`). `bun.lockb` exists but is not authoritative.

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server on http://localhost:8080
npm run dev
```

### All Scripts ([package.json:6-11](package.json:6))
| Script | Command | Purpose |
|---|---|---|
| `npm run dev` | `vite` | Dev server with HMR, port 8080, `base: /` |
| `npm run build` | `vite build` | Production build → `dist/`, `base: /MnT-web/` |
| `npm run build:dev` | `vite build --mode development` | Dev-mode production build (keeps lovable-tagger) |
| `npm run preview` | `vite preview` | Serve built `dist/` locally |
| `npm run lint` | `eslint .` | Lint all TS/TSX |

---

## 6. Environment Variables

There is **no `.env.example` file in the repo**. Environment variables actually referenced:

| Variable | Where used | Purpose | Required? |
|---|---|---|---|
| `VITE_CLOUDINARY_CLOUD_NAME` | [src/lib/cloudinary.ts:6](src/lib/cloudinary.ts:6) | Used to build the Cloudinary upload URL. The preset is hardcoded to `ml_default`. | Optional — `uploadToCloudinary()` is exported but **not called anywhere** in the UI. |
| `import.meta.env.BASE_URL` | [src/App.tsx:31](src/App.tsx:31), many pages | Vite-provided. Used for `<BrowserRouter basename>` and prefixing `/public` image src (e.g., `${BASE_URL}mnt.png`). Resolves from `vite.config.ts`'s `base`. | Built-in — no action required. |

No secrets, API keys, database URLs, or auth credentials exist anywhere.

---

## 7. Database Schema & Models

**Not applicable.** There is no database. What substitutes for "models" are three typed content modules, each exporting a typed structure consumed by pages:

### `src/data/servicesData.ts`
Exports `servicesData: Record<string, ServiceDetail>` where `ServiceDetail` ([servicesData.ts:4-42](src/data/servicesData.ts:4)):

```ts
interface ServiceDetail {
  id: string;
  name: string;
  summary: string;
  heroImage: string;
  description: { overview: string; howItWorks: string; designedFor: string };
  challenges: { title: string; icon: any; description: string }[];
  deliverables: { title: string; icon: any; description: string }[];
  benefits: { metric: string; label: string; description: string }[];
  useCases?: { industry: string; scenario: string; image?: string }[];
  whyMnT: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}
```

**Keys:** `ai-employees`, `smart-automation`, `ai-apps`, `knowledge-ai`, `generative-ai`. These map 1-to-1 with the `/services/:serviceId` route.

### `src/data/productsData.ts`
Exports `productsData: Record<string, ProductDetail>` ([productsData.ts:11-41](src/data/productsData.ts:11)):

```ts
interface ProductDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: { title: string; icon: any; description: string }[];
  capabilities: { title: string; icon: any; description: string }[];
  metrics: { metric: string; label: string; description: string }[];
  useCases: { industry: string; scenario: string }[];
  whyMnT: { title: string; description: string }[];
}
```

**Keys:** `isuite-ai`, `isuite-crm`, `quick-commerce`, `pos-system`, `mahal-management`, `textile-ecommerce`. Images load from `public/` via `${import.meta.env.BASE_URL}…png`.

### `src/data/portfolioData.ts`
Exports `portfolioProjects: ProjectData[]` ([portfolioData.ts:8-55](src/data/portfolioData.ts:8)):

```ts
interface ProjectData {
  id: string; name: string; title: string; tagline: string; category: string;
  shortDescription: string; description: string; overview: string;
  image: string; mainImage: string;
  techStack: string[];
  snapshot: { industry: string; projectType: string; duration: string; platform: string; keyResult: string };
  challenge: { requirements: string[]; painPoints: string[] };
  timeline: { phase: string; title: string; desc: string }[];
  approach: string; solution: string[]; features: string[]; results: string[];
  impact: string; ctaText: string;
  metrics: { value: string; suffix: string; prefix: string; label: string; desc: string }[];
  testimonial?: { quote: string; author: string; role: string };
  websiteUrl?: string;
}
```

**Projects:** `lia-fashion`, `leats`, `truscomp`, `elegant-care`, `civil-erp`. These drive `/portfolio/:projectId`.

### "Relationships"
- `/services/:serviceId` requires `serviceId ∈ keys(servicesData)` — otherwise [ServiceDetailPage.tsx:57-59](src/pages/ServiceDetailPage.tsx:57) redirects to `/services`.
- `/portfolio/:projectId` uses `Array.find()`; a missing id renders a "Project Not Found" view ([ProjectDetailPage.tsx:165](src/pages/ProjectDetailPage.tsx:165)).
- `ProductsPage` default tab is `"isuite-ai"` ([ProductsPage.tsx:267](src/pages/ProductsPage.tsx:267)). `CoreCapabilities` **always** renders `productsData["isuite-ai"].capabilities`, regardless of the active tab — this is a latent inconsistency noted in the tech-debt section.

---

## 8. API Reference

**Not applicable.** This is a static frontend.

The only external HTTP call in the code is:

- **`POST https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`** — defined in [src/lib/cloudinary.ts:15](src/lib/cloudinary.ts:15) but **not invoked anywhere** in the UI. Dead code ready for future use.

The Contact form ([ContactPage.tsx:179-193](src/pages/ContactPage.tsx:179)) **does not POST**. It `console.log`s the form data, `await`s a fake 1500 ms promise, then shows a toast:

```ts
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  console.log("Form submitted:", formData);
  await new Promise((r) => setTimeout(r, 1500));
  toast({ title: "Consultation Requested", description: "Our team will reach out to you within 24 hours." });
  setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  setIsSubmitting(false);
};
```

A Google Maps iframe is embedded at [ContactPage.tsx:627](src/pages/ContactPage.tsx:627) pointing to MnT's physical office (Madurai).

---

## 9. Features & Modules (Pages)

### Shared shell
Every page renders:
- **Navigation** ([Navigation.tsx](src/components/Navigation.tsx)) — logo + 7 top-level links + "Get Started" CTA → `/contact`. On scroll past 50 px, adds white/blur backdrop. Mobile (`< lg`) collapses to a hamburger that opens a motion dropdown.
- **Footer** ([Footer.tsx](src/components/Footer.tsx)) — 4 columns (branding + social, Platform, Solutions, Ecosystem), plus bottom-row policy links and copyright. Social links go to MnT's Facebook/Instagram/LinkedIn.
- **AIAssistant** ([AIAssistant.tsx](src/components/AIAssistant.tsx)) — fixed bottom-right floating bubble. Opens a scripted "panel" with two buttons (`Analyze my project scope`, `Speak to an expert`). The buttons are cosmetic — no handlers.

### 9.1 Home (`/` — [pages/Index.tsx](src/pages/Index.tsx))
Composition (in render order):
1. `<EnterpriseBackground />` — decorative animated layer ([components/animations/EnterpriseBackground.tsx](src/components/animations/EnterpriseBackground.tsx)).
2. `<ScrollProgress sections={["hero","services","products","authority","video","portfolio","testimonials"]} />` — scroll indicator dots.
3. `<Navigation />`.
4. `<HeroSection />` — [HeroSection.tsx](src/components/HeroSection.tsx): full-viewport hero with `BinaryBackground`, `MouseTraceGlow`, animated "TRANSFORM" background text, "Start Your Journey" + "Explore Ecosystem" CTAs, then `<HeroStoryTimeline />` below.
5. `<ServicesSection />` — [ServicesSection.tsx](src/components/ServicesSection.tsx): 3-column split with a central floating `robomnt.png` robot. 5 services (3 left / 2 right) with hover-revealed "Read More" chips that `Link` to `/services/{id}`.
6. `<ProductsSection />` — [home/ProductsSection.tsx](src/components/home/ProductsSection.tsx): 6 product cards from the same set as `productsData`.
7. `<AuthoritySection />` — [home/AuthoritySection.tsx](src/components/home/AuthoritySection.tsx): 3 feature pillars (AI Strategy, Enterprise Automation, Intelligent Product Engineering) beside the `about.png` illustration.
8. `<VideoSection />` + `<PortfolioSection />` + `<TestimonialsSection />` + `<FinalCTASection />`.
9. `<Footer />`.

### 9.2 Services (`/services` — [pages/ServicesPage.tsx](src/pages/ServicesPage.tsx))
Four in-file sections + the shared shell:
1. `ServicesHero` — mouse-parallax floating icons, animated "DIGITAL WORKFORCE" background text, headline + CTAs.
2. `MigratedServicesExplorer` ([ServicesPage.tsx:459](src/pages/ServicesPage.tsx:459)) — stateful tabs on the left (5 services), active visual + description on the right. Uses `<AnimatePresence>` and `layoutId="service-indicator"` for the active pill. Each entry's `Visual` component is one of the 5 `services/*Visual.tsx` files. `Read More` links to `/services/{id}`.
3. `ProcessWorkflow` — dark section with 4 phases: Define → Architect → Integrate → Optimize.
4. `IndustryImpact` — scroll-linked parallax "IMPACT PERFORMANCE / SCALE INTELLIGENCE" type + `<Counter>` animated metrics (80% / 4X / 60% / 24/7) + `mnt.png` hero image.
5. Full-width final CTA section.

### 9.3 Service Detail (`/services/:serviceId` — [pages/ServiceDetailPage.tsx](src/pages/ServiceDetailPage.tsx))
- Reads `serviceId` via `useParams`, looks up `servicesData[serviceId]`. If missing, `navigate("/services")`.
- `visualMap` ([ServiceDetailPage.tsx:22-28](src/pages/ServiceDetailPage.tsx:22)) — picks the matching animated `Visual` component.
- Nine sections: Hero → Overview/HowItWorks/DesignedFor → Challenges → What We Deliver → Business Impact (metrics) → Industry Use Cases (optional) → Why MnT (with `robomnt2.png`) → FAQ accordion → Final CTA.
- `<FAQItem>` ([ServiceDetailPage.tsx:398](src/pages/ServiceDetailPage.tsx:398)) is a local accordion using `AnimatePresence` + `useState(isOpen)`.

### 9.4 Products (`/products` — [pages/ProductsPage.tsx](src/pages/ProductsPage.tsx))
- `ProductsHero` with floating keywords (AI/CRM/HEALTH/EDU).
- `ProductPlatformExplorer` — horizontally scrollable tabs across the 6 products. Active pill animates with `layoutId="activePill"`. Uses `<AnimatePresence mode="wait">` to swap product details. Features displayed in a 3×2 grid. CTA → `/contact`.
- `CoreCapabilities` — **always reads `productsData["isuite-ai"].capabilities`** (bug-prone / debt item).
- `EcosystemVisual` — dark section with animated "central brain" + 4 satellite nodes (iSuite AI/CRM/Health/Edu).
- `ProductUseCases` — flattens all products' `useCases`, shows first 6.
- Final CTA.

### 9.5 Portfolio (`/portfolio` — [pages/PortfolioPage.tsx](src/pages/PortfolioPage.tsx))
- `PortfolioHero` with `BlueprintBackground` (SVG dotted grid + diagonal animated paths).
- `PortfolioShowcase` — alternating zigzag layout of the 5 `portfolioProjects`, each card links to `/portfolio/{id}`.

### 9.6 Project Detail (`/portfolio/:projectId` — [pages/ProjectDetailPage.tsx](src/pages/ProjectDetailPage.tsx))
- 10 scroll-anchored sections: `hero`, `snapshot`, `challenge`, `timeline`, `features`, `tech`, `impact`, `showcase` (commented out), `testimonial`, `cta`. A scroll handler tracks `activeSection` ([ProjectDetailPage.tsx:150-163](src/pages/ProjectDetailPage.tsx:150)).
- Floating back button to `/portfolio`.
- `AnimatedCounter` counts numeric `metric.value` from 0 with `requestAnimationFrame` easing.
- **Tech-stack icon logos** are hardcoded in a big `logoData` map ([ProjectDetailPage.tsx:447-472](src/pages/ProjectDetailPage.tsx:447)) with URLs from `cdn.worldvectorlogo.com`, `vectorlogo.zone`, and `svgrepo.com`. Unknown techs fall back to a `Code2` Lucide icon.

### 9.7 Testimonials (`/testimonials` — [pages/TestimonialsPage.tsx](src/pages/TestimonialsPage.tsx))
- Static header + two `RatingCard`s (Google 4.9/5 with 512+ reviews, Clutch 4.8/5 with 150+ reviews).
- Two infinite `MarqueeRow` rows of 10 testimonials total (5 per row), scrolling left and right respectively. Animation is CSS-injected via a `<ScrollStyles>` component. `hover-pause` CSS class pauses the scroll on hover.
- Final CTA to `/contact`.

### 9.8 About (`/about` — [pages/AboutPage.tsx](src/pages/AboutPage.tsx))
- `HeroSection` (local) — scroll-parallax with giant faded "INTELLIGENCE" text.
- `WhoWeAre` — dark section with `<AICoreVisual />` ([about/AICoreVisual.tsx](src/components/about/AICoreVisual.tsx)) on the right.
- `VisionaryExperience` — **scroll-driven pinned section** ([AboutPage.tsx:260-371](src/pages/AboutPage.tsx:260)). A 300-400vh `<section>` with a `sticky top-0 h-screen` container. A robot image (`aboutbg.png`) stays pinned at the bottom. As the user scrolls, four content blocks (Mission / Vision / Values / Goals) fade/scale in and out via per-item `useTransform` of `scrollYProgress`.
  - ⚠️ Hooks-in-map: the `.map(...)` calls `useTransform` inside an `eslint-disable-next-line react-hooks/rules-of-hooks`. This only works because the array length is constant, but it's fragile.
- `ArchitecturalFlow` — 5 philosophy items rendered alternating L/R with `<FlowItem>`.
- Founder quote + final CTA.

### 9.9 Contact (`/contact` — [pages/ContactPage.tsx](src/pages/ContactPage.tsx))
- **Form state** via plain `useState` — fields: `name, company, email, phone, service, message`.
- **Custom service dropdown** ([ContactPage.tsx:447-506](src/pages/ContactPage.tsx:447)) — click-outside close handling via `useEffect` + `document.addEventListener("mousedown", …)`.
- **Hash handling:** if the URL is `/contact#contact-form`, auto-scrolls to the form after 500 ms ([ContactPage.tsx:165-173](src/pages/ContactPage.tsx:165)).
- Form submission is mocked (see [§8 API Reference](#8-api-reference)).
- Contact cards (address, two phone numbers, two emails). Social not included here.
- Embedded Google Maps iframe pointing at the MnT office (Madurai — `3/501 Subash St, Muneeswarar Nagar, Iyer Bunglow, Madurai, Tamilnadu 625014`).

### 9.10 Legal pages (Privacy / Terms / Payment Policy)
All three follow the same structural template:
- Shared `<PageHero variant="legal" centered badge="Legal Framework" … />` ([components/PageHero.tsx](src/components/PageHero.tsx)).
- Sticky sidebar TOC (desktop only) linking to `#section-N`.
- Numbered sections rendered from a local `sections` array — [PrivacyPolicyPage.tsx:7-85](src/pages/PrivacyPolicyPage.tsx:7), [TermsPage.tsx:7-49](src/pages/TermsPage.tsx:7), [PaymentPolicyPage.tsx:7-56](src/pages/PaymentPolicyPage.tsx:7).
- Final CTA with "Contact Legal Team" / "Start Your AI Journey" / "Contact Support".

### 9.11 NotFound (`*` — [pages/NotFound.tsx](src/pages/NotFound.tsx))
Minimal. `console.error`s the attempted path and shows a link back to `/`.

---

## 10. Authentication & Authorization

**Not applicable.** There are no user accounts, no login flows, no protected routes, no session tokens, no cookies for auth, and no JWTs. Every route is publicly accessible. All "Get Started / Schedule Consultation / Talk to Expert" CTAs funnel to `/contact`.

---

## 11. Core Business Logic Flows

The app's only real "flow" is content discovery and lead capture:

### Content Discovery
```
User lands on  /  (Index)
  ↓  ServicesSection / ProductsSection / PortfolioSection cards
User clicks a service card
  ↓  <Link to="/services/ai-employees">
<ServiceDetailPage> reads useParams().serviceId
  ↓  servicesData[serviceId]  ← from src/data/servicesData.ts
Renders 9 sections (hero, challenges, deliverables, metrics, use cases, why-mnt, faqs, CTA)
  ↓  CTA
Navigate to /contact
```

### Lead Capture (Contact Form)
```
User fills Name/Company/Email/Phone/Service/Message on /contact
  ↓  onSubmit (handleSubmit in ContactPage.tsx:179)
setIsSubmitting(true)
  ↓
console.log("Form submitted:", formData)     ← no network request
await sleep(1500ms)                          ← fake latency
  ↓
toast({ title: "Consultation Requested" })   ← user sees success
reset formData
```

There is no server, email relay, CRM push, analytics beacon, or backend integration for the form. A production-grade implementation would need to wire `handleSubmit` to an API (e.g., a serverless function, Formspree, or the mentioned Cloudinary-sibling infra).

### Navigation Scroll Reset
```
Route changes (pathname or hash via useLocation)
  ↓  <ScrollToTop/> in App.tsx
useEffect fires
  ↓
  hash?  → getElementById(hash); scroll to el.top - 80 (HEADER_OFFSET) smoothly
  no hash → window.scrollTo({ top: 0, behavior: "instant" })
```

---

## 12. Patterns & Conventions

### Naming
- **Files:** PascalCase for component/page files (`ServicesPage.tsx`, `HeroSection.tsx`); kebab-case for shadcn primitives (`alert-dialog.tsx`). Hooks: `use-*.tsx`/`.ts`.
- **Components:** PascalCase. Many pages declare multiple local sub-components (e.g., `ServicesHero`, `ProcessWorkflow`, `IndustryImpact` inside `ServicesPage`) instead of extracting — favors co-location over reuse.
- **IDs:** Service, product, and project ids are kebab-case (`ai-employees`, `isuite-crm`, `lia-fashion`) and are used directly as URL params.
- **Sections:** `id="hero"`, `"services"`, `"products"`, etc. are used for `<ScrollProgress>` anchoring and `document.getElementById(…).scrollIntoView({behavior:'smooth'})` jumps.

### Styling Patterns
- **Tailwind everywhere.** Almost no CSS modules.
- **`container-custom`** ([index.css:78-99](src/index.css:78)) — shared max-width container (1400 px, responsive padding).
- **Brand blue `#2095F1`** is hardcoded in dozens of places alongside the `text-primary` CSS variable. Not consolidated.
- **`@layer components`** custom classes: `.text-gradient`, `.magnetic-btn`, `.surface-layer`, `.enterprise-block`, `.narrative-flow`, `.split-reveal`, `.soft-glow`.
- **shadcn/ui `cn()`** helper ([src/lib/utils.ts:4](src/lib/utils.ts:4)) used for conditional class composition.

### Animation Patterns
- **Scroll-linked:** `useScroll({ target, offset })` + `useTransform(scrollYProgress, [0,1], [startVal, endVal])` applied via `motion.div style={{ y, x, scale, opacity }}`.
- **In-view reveals:** `useInView(ref, { once: true, margin: "-100px" })` guards initial/animate states.
- **Layout morphing:** `layoutId` (e.g., `service-indicator`, `activePill`) animates the active tab indicator between positions.
- **Enter/exit:** `<AnimatePresence mode="wait">` around keyed content that swaps (tabs, FAQ answers, modal-like panels).
- **Infinite loops:** plain CSS `@keyframes` marquee/shimmer in [index.css](src/index.css), injected-at-render `<style>` tags in [TestimonialsPage.tsx:129](src/pages/TestimonialsPage.tsx:129).
- **Counters:** custom `requestAnimationFrame` ease-out-expo counters in both [ServicesPage.tsx:255-298](src/pages/ServicesPage.tsx:255) (`Counter`) and [ProjectDetailPage.tsx:52-76](src/pages/ProjectDetailPage.tsx:52) (`AnimatedCounter`). Not DRY.

### Error Handling
- No error boundaries.
- `NotFound` handles unknown routes.
- `ServiceDetailPage` `navigate("/services")` on missing data.
- `ProjectDetailPage` renders an in-place "Project Not Found" UI.
- Cloudinary helper rethrows after `console.error`.

### Validation
- `zod` + `@hookform/resolvers` are installed but **not used**. The Contact form has minimal `required` HTML attributes only.

### State Management
- Component-local `useState`/`useRef` only.
- `react-query` `QueryClient` is instantiated but never queried.
- `next-themes` is installed but not configured (site is always light mode).

### Testing
- None. No test runner, no test files, no `npm run test` script.

---

## 13. Third-Party Integrations

| Service | What it does | Where | Creds |
|---|---|---|---|
| **Google Fonts** | Loads `Space Grotesk` + `Inter` | [src/index.css:1](src/index.css:1) | None (public CDN) |
| **Google Maps Embed** | Displays MnT's Madurai office location | [ContactPage.tsx:627](src/pages/ContactPage.tsx:627) (iframe src) | None (public embed) |
| **Cloudinary** | Image upload endpoint (helper only — unused in UI) | [src/lib/cloudinary.ts](src/lib/cloudinary.ts) | `VITE_CLOUDINARY_CLOUD_NAME` env var + hardcoded `ml_default` preset |
| **Logo CDNs** | Tech-stack icons on project detail pages | [ProjectDetailPage.tsx:447-472](src/pages/ProjectDetailPage.tsx:447) — `cdn.worldvectorlogo.com`, `vectorlogo.zone`, `svgrepo.com`, `lucide.dev`, `turbo.build` | None |
| **Social links** (Facebook/Instagram/LinkedIn) | Outbound links in Footer | [Footer.tsx:30-34](src/components/Footer.tsx:30) | None |
| **External product sites** | `isuite.ai`, `isuite.io` | [Footer.tsx:23-24](src/components/Footer.tsx:23) | None |
| **Unsplash** | Single profile photo for one testimonial | [TestimonialsPage.tsx:37](src/pages/TestimonialsPage.tsx:37) | None |
| **transparenttextures.com** | Carbon-fibre texture overlay | [ServicesPage.tsx:603](src/pages/ServicesPage.tsx:603), [ProjectDetailPage.tsx:599](src/pages/ProjectDetailPage.tsx:599) | None |
| **Lovable.dev** | Original scaffolder; `lovable-tagger` plugin runs only in dev | [vite.config.ts:4](vite.config.ts:4) | None |

**Meta/SEO:** Open Graph / Twitter tags in [index.html:10-17](index.html:10) reference `lovable.dev/opengraph-image-p98pqg.png` (leftover from scaffolding) — worth updating.

---

## 14. Testing

**Not found in codebase.**

- No testing framework is installed (no Vitest, Jest, Playwright, Cypress, or Testing Library in `package.json`).
- No `tests/`, `__tests__/`, `*.test.tsx`, or `*.spec.tsx` files exist.
- The `package.json` has no `test` script.

To add tests, Vitest + React Testing Library would be the natural fit given the Vite toolchain.

---

## 15. Deployment & CI/CD

### Target: GitHub Pages

**Workflow:** [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:       # manual trigger also enabled

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - actions/checkout@v4
      - actions/setup-node@v4 (Node 20, npm cache)
      - run: npm ci
      - run: npm run build                       # builds dist/ with base=/MnT-web/
      - run: cp dist/index.html dist/404.html    # SPA fallback for GH Pages
      - actions/configure-pages@v4
      - actions/upload-pages-artifact@v3 (path: dist)
      - actions/deploy-pages@v4
```

### Key deployment notes
- **Base path:** [vite.config.ts:8](vite.config.ts:8) sets `base: "/MnT-web/"` in production. All internal asset URLs that use `import.meta.env.BASE_URL` and `<BrowserRouter basename>` resolve correctly under this subpath.
- **SPA fallback:** `404.html = index.html` so deep-link refreshes (e.g., `/MnT-web/services/ai-employees`) still render correctly — a standard GitHub Pages SPA trick.
- **Concurrency:** `group: pages, cancel-in-progress: true` — older deploys are canceled when new pushes land.
- **No staging environment, no preview deployments, no PR checks.**

---

## 16. Known Tech Debt & Observations

### Dead or Unused Code
- **`@tanstack/react-query`** — `QueryClient` is created in [App.tsx:23](src/App.tsx:23) but no `useQuery`/`useMutation` calls exist anywhere.
- **`zod` + `@hookform/resolvers` + `react-hook-form`** — installed but the only form on the site (`ContactPage`) uses raw `useState`. Validation is limited to `required` HTML attributes.
- **`GSAP`** — installed (`gsap@3.14.2`) but no imports found.
- **`next-themes`** — installed but never used. Site is effectively light-only.
- **`uploadToCloudinary`** in [src/lib/cloudinary.ts](src/lib/cloudinary.ts) — exported but never imported anywhere.
- **[src/App.css](src/App.css)** — Vite starter boilerplate, imported nowhere.
- **Many home-page sections** (e.g., `SpecializationSection`, `EcosystemSection`, `BlogsSection`, `PartnersSection`) exist but are commented out in [pages/Index.tsx](src/pages/Index.tsx).
- **Commented-out components** at the bottom of [pages/ProductsPage.tsx](src/pages/ProductsPage.tsx) (`WhyMnTProducts`), inside the contact page's process preview, and in many service-page CTAs — suggests heavy iteration was done.

### Latent Bugs / Inconsistencies
- **`CoreCapabilities` hardcoded to `isuite-ai`:** [ProductsPage.tsx:383](src/pages/ProductsPage.tsx:383) comments `// This could also be dynamic per tab` but the component only ever displays iSuite AI's capabilities, even when another product is selected. Product data loss for the user.
- **Both `<Toaster />` and `<Sonner />` mounted** in [App.tsx:28-29](src/App.tsx:28) — two parallel toast systems. `ContactPage.tsx` uses `useToast()` (the Radix-backed one). If both fire on the same event, they'd render twice.
- **Hooks-in-`.map()`** in [AboutPage.tsx:316-318](src/pages/AboutPage.tsx:316) — `useTransform` is called inside a `.map(...)`. Works only because `AI_STRATEGIC_ITEMS.length` is constant; masked by `eslint-disable-next-line react-hooks/rules-of-hooks`. Fragile.
- **Two `AnimatedCounter`/`Counter` implementations** with the same logic — [ServicesPage.tsx:255](src/pages/ServicesPage.tsx:255) and [ProjectDetailPage.tsx:52](src/pages/ProjectDetailPage.tsx:52). Should be extracted to `src/components/animations/Counter.tsx`.
- **Two hero sections named `HeroSection`** in the same codebase — one in [components/HeroSection.tsx](src/components/HeroSection.tsx) (home), one declared locally in [pages/AboutPage.tsx:74](src/pages/AboutPage.tsx:74). OK in scope, but confusing when grepping.
- **Lovable placeholder README** — [README.md](README.md) still reads "Welcome to your Lovable project" with `REPLACE_WITH_PROJECT_ID` URLs. Not updated for MnT.
- **OG image URL** is Lovable's `opengraph-image-p98pqg.png` in [index.html:13](index.html:13) — social previews will show a generic/Lovable image.
- **Brand color duplication** — `#2095F1` is hardcoded in 100+ places in parallel with `text-primary` / `bg-primary` CSS variables. A single source of truth would reduce drift.
- **Empty `handleScroll` dependency array** in [ProjectDetailPage.tsx:163](src/pages/ProjectDetailPage.tsx:163) — `sections` is captured by closure, which is fine here but future-proof a memoization or `useRef`.

### Security / Compliance Notes
- **No CSP meta tag** in [index.html](index.html). For a legal-regulated site (the Privacy/Terms pages), adding a Content-Security-Policy is worth considering.
- **Third-party logo CDNs** (svgrepo.com etc.) are fetched at runtime without integrity hashes. Site rendering would degrade (but not break) if any CDN goes down.
- **External tracking:** No analytics (GA, Plausible, Segment) is wired up. The company may want to add this.

### Accessibility
- Contact form inputs have visual `<label>`s but no `htmlFor`/`id` pairing — screen readers may not associate them.
- The iframe map has `title="MnT Office Location"` ✓.
- Social icons have `aria-label`s ✓.
- `AIAssistant` open/close button has no `aria-label` or `aria-expanded`.
- The giant background typography words (`TRANSFORM`, `INTELLIGENCE`, `DIGITAL WORKFORCE`) are plain text — screen readers will announce them. They should be `aria-hidden="true"`.

### Performance
- Testimonial avatars come from both bundled `@/assets/p*.png` and one external Unsplash URL — mix of bundled and network.
- No explicit code-splitting per route (`React.lazy` / `Suspense`) — every page ships in the main chunk. Most pages are heavy (1000+ lines with inline animations), so route-level lazy loading is low-hanging fruit for perf.
- All images are PNG/JPG — no WebP/AVIF conversion or `<picture>` tags.

### Suggested Next Steps (if ongoing work)
1. Wire `ContactPage.handleSubmit` to a real backend (serverless function, Formspree, or an internal API).
2. Remove unused deps (gsap, next-themes, react-query OR start using them, zod + rhf).
3. Extract shared `Counter`/`AnimatedCounter` to `src/components/animations/`.
4. Fix `CoreCapabilities` to read from `productsData[activeTab]`.
5. Choose one toast system (`sonner` or the Radix Toaster) and remove the other.
6. Replace the Lovable README and OG image.
7. Add route-level `React.lazy` for ProjectDetail / ServiceDetail (the two heaviest pages).
8. Add a test runner + smoke tests for each route's data lookups.
