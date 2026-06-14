# PROJECT_INFO_NEXT.md — Next.js Rebuild Brief

**Purpose:** Handover for a **new repository** and **new agent session** rebuilding the Xone marketing site as a **single Next.js app** deployed only on **Vercel**. This file is the source of truth for scope, porting map, and acceptance criteria.

**Relationship to this repo:** `xone-swe-web` (Vite SPA + Express) remains the **v1 reference implementation**. Do not migrate in-place. Copy/port behavior and assets into a **fresh Next.js repo**; treat this document plus the paths below as the specification.

---

## 1. Product summary

**Brand:** Xone Software Development  
**Product:** Static lead-generation website — services, team, process, contact capture.  
**Goal:** Convert visitors into qualified leads via clear messaging and two forms (Contact, Get Started).

**v1 scope (same as current site):**

- No authenticated user area
- No database (leads via optional webhook only)
- No legacy `Technical Documentation` APIs (read-only reference in source repo — never implement)

---

## 2. Target tech stack (non-negotiable)

| Layer | Choice |
|-------|--------|
| Framework | **Next.js** (App Router) |
| Language | **TypeScript** (`strict: true`) |
| Dev bundler | **Turbopack** (`next dev --turbo`) |
| Styling | **Tailwind CSS v4** + **shadcn/ui** |
| Typography | **Geist Sans** (`geist` or `@fontsource-variable/geist`) — do not add Poppins/Inter |
| Validation | **Zod** at API boundary (shared server schemas) |
| API | **Next.js Route Handlers** (`app/api/**/route.ts`) — no separate Express server |
| Hosting | **Vercel only** (single project, repo root = app root) |
| CI | GitHub Actions: lint, test, `next build` |

**Do not introduce:** Railway, separate `BackEnd/` folder, `VITE_*` env vars, React Router, Vite.

---

## 3. Suggested new repo layout

Greenfield single-app structure (adjust names as needed):

```text
xone-web-next/                    # new repo (name TBD)
├── app/
│   ├── layout.tsx                # root layout: Navbar, fonts, metadata
│   ├── page.tsx                  # homepage (replaces /home)
│   ├── services/page.tsx
│   ├── about/page.tsx
│   ├── process/page.tsx
│   ├── contact/page.tsx
│   ├── get-started/page.tsx
│   ├── privacy/page.tsx          # BRD-06 — scaffold early
│   ├── terms/page.tsx            # BRD-06 — scaffold early
│   └── api/
│       ├── health/route.ts
│       ├── contact/route.ts
│       └── get-started/route.ts
├── src/
│   ├── components/
│   │   ├── ui/                   # shadcn primitives
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── features/
│   │   ├── home/
│   │   ├── services/
│   │   ├── about/
│   │   ├── process/
│   │   ├── contact/
│   │   └── get-started/
│   ├── lib/
│   │   ├── brand.ts
│   │   ├── utils.ts
│   │   └── validation-helpers.ts
│   └── schemas/                  # shared Zod — used by API + forms
│       ├── contact.ts
│       └── get-started.ts
├── public/
│   └── assets/XONE/xone_brand_kit/   # copy from source
├── .env.example
├── next.config.ts
├── package.json
└── PROJECT_INFO_NEXT.md          # copy this file into new repo
```

Use `@/*` path alias consistently (`src/` or project root per Next convention).

---

## 4. Route mapping (source → Next)

| Source (React Router) | Next App Router | Source file(s) to port |
|----------------------|-----------------|-------------------------|
| `/home` + `*` fallback | `/` (`app/page.tsx`) | `FrontEnd/src/views/Homepage.tsx`, `features/home/components/*` |
| `/services` | `/services` | `features/services/components/ServicesPage.tsx`, `data/services.ts` |
| `/about` | `/about` | `features/about/components/AboutPage.tsx` |
| `/process` | `/process` | `features/process/components/ProcessPage.tsx`, `data/process-steps.ts` |
| `/contact` | `/contact` | `features/contact/components/ContactPage.tsx`, `ContactForm.tsx` |
| `/get-started` | `/get-started` | `features/get-started/components/GetStartedPage.tsx`, `GetStartedForm.tsx` |
| — | `/privacy` | New — footer links are `#` in source (BRD-06) |
| — | `/terms` | New — footer links are `#` in source (BRD-06) |

**Redirect:** Consider `middleware` or `next.config` redirect `/home` → `/` for parity with old URLs.

---

## 5. API mapping (Express → Route Handlers)

Port logic from `BackEnd/src/` — behavior must match source tests.

| Endpoint | Method | Source | Next target |
|----------|--------|--------|-------------|
| `/api/health` | GET | `routes/health-routes.js` | `app/api/health/route.ts` |
| `/api/contact` | POST | `routes/contact-routes.js`, `schemas/contact-schema.js`, `services/contact-service.js` | `app/api/contact/route.ts` |
| `/api/get-started` | POST | `routes/get-started-routes.js`, `schemas/get-started-schema.js`, `services/get-started-service.js` | `app/api/get-started/route.ts` |

### Response contracts (keep stable)

**Success (201):**

```json
{
  "success": true,
  "message": "Thanks for reaching out...",
  "data": { "id": "contact-1739...", "receivedAt": "2026-06-14T..." }
}
```

**Validation error (400):**

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": { "email": "Enter a valid email address" }
}
```

**Rate limit (429):**

```json
{
  "success": false,
  "message": "Too many requests. Please try again later."
}
```

### Server env (`.env.example`)

```env
# Server-only — never NEXT_PUBLIC_
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=10
CONTACT_WEBHOOK_URL=          # optional — POST lead JSON on submit
```

**CORS:** Not required (same-origin). Remove `CORS_ORIGIN` from v1 Next design.

**Rate limiting:** Source uses `express-rate-limit` (in-memory). On Vercel serverless, use one of:

- [Vercel KV](https://vercel.com/docs/storage/vercel-kv) + sliding window, or
- [Upstash Redis](https://upstash.com/) rate limit, or
- Vercel WAF / edge middleware (document choice in new repo README)

Do not ship without *some* rate limit on public POST routes.

---

## 6. Brand and design system

Copy from source:

| Asset / token | Source path |
|---------------|-------------|
| Logo SVGs, icons | `FrontEnd/public/assets/XONE/xone_brand_kit/` |
| Brand constants | `FrontEnd/src/lib/brand.ts` |
| CSS tokens / palette | `FrontEnd/src/index.css` (`@theme inline`, Xone colors) |
| shadcn components | `FrontEnd/src/components/ui/` (button, input, card, sheet, badge, separator) |

**Palette (official):**

| Token | Hex |
|-------|-----|
| navy | `#1a1a2e` |
| violet | `#533bda` |
| cyan | `#22d3ee` |
| light | `#f1f5f9` |

**Client components:** Mark with `"use client"` where needed:

- Navbar (mobile Sheet, state)
- ContactForm, GetStartedForm (controlled inputs, submit state)
- Homepage Swiper (`MissionSection` — uses Swiper)
- Any interactive shadcn usage with hooks

Marketing sections that are static HTML can stay Server Components.

---

## 7. Forms and validation

### Contact fields

| Field | Rules |
|-------|-------|
| name | required, 1–100 chars, no control chars |
| email | required, valid email, lowercased, max 254 |
| company | optional, max 100 |
| message | required, 10–2000 chars, no control chars |

### Get Started fields

| Field | Rules |
|-------|-------|
| name, email, company | same as contact |
| projectType | enum: `web-app`, `mobile-app`, `ui-ux`, `automation`, `other` |
| timeline | enum: `asap`, `1-3-months`, `3-6-months`, `flexible` |
| description | 10–1000 chars, no control chars |

**Implementation preference:**

1. **Single Zod schema per form** in `src/schemas/` used by Route Handler and client (import server schema in client only if no secrets — or split `contact-client.ts` / `contact-server.ts` from same base).
2. Client-side validation for UX; server validation is authoritative.
3. Forms may use **Server Actions** or **fetch to `/api/*`** — either is fine if error shapes match above.

Source references:

- `BackEnd/src/schemas/contact-schema.js`
- `BackEnd/src/schemas/get-started-schema.js`
- `BackEnd/src/lib/validation-helpers.js` (`hasControlCharacters`)
- `FrontEnd/src/features/contact/schemas/contact-form.ts`
- `FrontEnd/src/features/get-started/schemas/get-started-form.ts`

---

## 8. Homepage sections (port order)

Source homepage is composed in `FrontEnd/src/views/Homepage.tsx` from:

1. `HeroSection.tsx`
2. `MissionSection.tsx` (Swiper team carousel — initials avatars, no photo 404s)
3. `ServicesSection.tsx`
4. `ValuePropsSection.tsx`
5. `ProcessSection.tsx`
6. `CtaSection.tsx`
7. `Footer.tsx` (shared)

Known source issue: decorative paths like `/assets/images/shape1.png` may 404 — fix or remove in Next build.

---

## 9. Navigation and footer

**Navbar links (source):** Home, Services, About, Process, Contact + CTA to Get Started.  
**Footer:** Services column, Company column, Resources (Privacy/Terms currently `#` — implement real routes).

Source: `FrontEnd/src/components/Navbar.tsx`, `Footer.tsx`

---

## 10. Deployment (Vercel only)

| Setting | Value |
|---------|--------|
| Framework | Next.js |
| Root Directory | `.` (repo root) |
| Build | `next build` |
| Node | 22.x |
| Env | server vars in Vercel dashboard only |

**No** `FrontEnd/vercel.json` SPA rewrites — App Router handles routing.

**Post-deploy checks:**

- [ ] `/`, `/contact`, `/get-started` render on mobile and desktop
- [ ] `GET /api/health` returns `{ success: true, status: "ok" }`
- [ ] Contact + Get Started forms submit successfully on production
- [ ] `/privacy` and `/terms` linked from footer (placeholder copy OK initially)
- [ ] Favicon + Open Graph meta (BRD-07)

Optional: `robots.txt`, `sitemap.xml` via `app/robots.ts`, `app/sitemap.ts` (Next metadata API).

---

## 11. CI (GitHub Actions)

Single pipeline on new repo:

```yaml
# Suggested jobs
- lint (eslint)
- test (vitest or jest)
- build (next build)
```

No separate backend job. No GitHub Pages CD.

---

## 12. Testing expectations

Port or rewrite coverage comparable to source (~35 tests):

| Area | Source | Next target |
|------|--------|-------------|
| Zod schemas | `FrontEnd/src/features/*/schemas/*.test.ts` | `src/schemas/*.test.ts` |
| API client | `FrontEnd/src/lib/api.test.ts` | Route Handler tests or integration tests |
| Pages smoke | `*Page.test.tsx` | React Testing Library + Vitest |
| API integration | `BackEnd/tests/api.test.js` | `supertest` against Route Handlers or `next/test` patterns |

**Linux CI note:** If using glob in test script, prefer `tests/*.test.ts` not `tests/**/*.test.ts` (shell glob pitfall on Ubuntu).

---

## 13. Build phases (recommended order)

### Phase 0 — Bootstrap (Day 1)

- [ ] `create-next-app` with TypeScript, App Router, Tailwind, ESLint
- [ ] Enable Turbopack in dev script
- [ ] Init shadcn/ui; add Button, Input, Card, Sheet
- [ ] Copy `public/assets/XONE/`, port `brand.ts` + global CSS tokens
- [ ] Root layout: Geist font, Navbar shell, Footer shell

### Phase 1 — API (Day 1–2)

- [ ] `app/api/health/route.ts`
- [ ] `app/api/contact/route.ts` + shared Zod schema
- [ ] `app/api/get-started/route.ts` + shared Zod schema
- [ ] Rate limiting (Vercel-compatible)
- [ ] Optional `CONTACT_WEBHOOK_URL`
- [ ] API tests green

### Phase 2 — Core pages (Day 2–4)

- [ ] Homepage (all 6 sections)
- [ ] Services, About, Process
- [ ] Contact + Get Started (wired to API)

### Phase 3 — Polish (Day 4–5)

- [ ] Privacy + Terms pages (BRD-06)
- [ ] Metadata, favicon, Open Graph (BRD-07)
- [ ] Security headers in `next.config.ts` (SEC-04)
- [ ] `robots.ts` / `sitemap.ts` (DEP-04)
- [ ] Vercel production deploy + manual QA matrix (QA-01)

---

## 14. Out of scope (unless product direction changes)

- User registration / authentication
- PostgreSQL or any database
- Admin dashboard
- Legacy StuTech CRUD APIs from `Technical Documentation`
- Separate Express/Railway backend
- Blog / case studies (future — structure `app/blog/` when scheduled)

---

## 15. Engineering rules (Next version)

Adapted from source `AGENTS.md`:

- `strict: true` — never weaken TypeScript
- No secrets in `NEXT_PUBLIC_*` or client bundles
- Validate all external input at Route Handler boundary with Zod
- Business logic in `src/features/*/services/` or `src/lib/` — not in presentational components
- Mobile-first (320px–768px before desktop polish)
- Semantic HTML, accessible forms, no `alert()` for user feedback
- Never commit `.env` — provide `.env.example` only
- Rebrand: **Xone Software Development** (not StuTech) in all user-facing copy

---

## 16. Source repo reference map

**Repository:** `JshMarkCastillo-GHdev/xone-swe-web` (local folder: `xone-swe-web`)  
**Do not modify source** when building Next — read and port only.

| What | Where in source |
|------|-----------------|
| Pages & features | `FrontEnd/src/features/`, `FrontEnd/src/views/` |
| Shared UI | `FrontEnd/src/components/` |
| API logic | `BackEnd/src/routes/`, `services/`, `schemas/` |
| Brand | `FrontEnd/src/lib/brand.ts`, `FrontEnd/src/index.css` |
| Static assets | `FrontEnd/public/assets/XONE/` |
| API tests | `BackEnd/tests/api.test.js` |
| Env templates | `BackEnd/.env.example`, `FrontEnd/.env.example` |
| Product backlog | `BACKLOGS_v1.md` |
| Deploy lessons | `DEPLOY.md` (Vercel+Railway — **ignore Railway** for Next) |

---

## 17. Success criteria (Next v1 done)

- [ ] Single Next.js repo runs locally with `npm run dev` (Turbopack)
- [ ] All routes in §4 live with Xone branding
- [ ] Both lead forms work end-to-end on Vercel production
- [ ] Shared Zod validation on client + server
- [ ] Rate limiting on POST routes
- [ ] Privacy + Terms pages linked from footer
- [ ] CI green: lint, test, build
- [ ] No separate backend service or CORS configuration
- [ ] README in new repo documents setup, env, and Vercel deploy

---

## 18. Opener for new agent chat (copy-paste)

```text
New repo: Next.js rebuild of Xone Software Development marketing site.
Read PROJECT_INFO_NEXT.md (full spec). Source reference: xone-swe-web (Vite+Express) — port, don't migrate in-place.

Stack: Next.js App Router, Turbopack, TypeScript strict, Tailwind v4, shadcn/ui, Zod, Route Handlers, Vercel only.

Priority: Phase 0 bootstrap → Phase 1 API (health, contact, get-started + rate limit) → Phase 2 pages → Phase 3 legal/SEO/deploy.

Do not implement Technical Documentation legacy APIs. Do not commit unless I ask.
```

---

## 19. Risks to plan for

| Risk | Mitigation |
|------|------------|
| Rate limit unlike Express | Choose KV/Upstash early in Phase 1 |
| Tailwind v4 + shadcn on Next | Follow current shadcn Next + Tailwind v4 docs; don't copy Vite config blindly |
| Duplicate Zod client/server | Consolidate in `src/schemas/` |
| Swiper in RSC tree | `"use client"` on MissionSection only |
| Content drift from source | Use this doc + source files as spec; PM copy for legal pages |

---

*Created: June 2026 — Next.js greenfield brief for Xone marketing site. Source: xone-swe-web (Vite 7 + Express 5).*
