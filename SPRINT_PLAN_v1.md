# SPRINT_PLAN_v1.md

Week-by-week execution plan for the **Xone Software Development** Next.js marketing site (`xone-swe-next`).

**Source spec:** `PROJECT_INFO_NEXT.md`  
**Team roles:** PM, Tech Lead, Fullstack, Frontend, Backend, QA — see `TEAM_INSTRUCTIONS.md`  
**Sprint cadence:** 4 weeks (Phase 0 → Phase 3)  
**Local dev port:** `5142` (`npm run dev`)

**v1 lead capture:** Email-only (`mailto:`) + **View Our Projects** — no online forms until v1.1.

---

## Program Goal

Ship a single Next.js App Router site on Vercel with Xone branding, a projects portfolio, email-based contact, and all marketing routes.

**Program exit criteria (`PROJECT_INFO_NEXT.md` §17)**

- All routes in the porting map live with Xone branding (including `/projects`)
- Email CTAs work from Contact, Projects, and homepage
- `/get-started` redirects to `/projects`
- Privacy + Terms linked from footer
- CI green: lint, test, build
- No separate backend service or CORS configuration

**Deferred to v1.1:** Contact/Get Started form APIs, Zod POST validation, rate limiting, webhook.

---

## Week 1 — Phase 0 Bootstrap + Phase 1 Static Lead Capture

### Theme

Greenfield Next.js app, brand tokens, CI, projects page, email-only contact.

| Task | Owner | Backlog | Est. | Status |
|------|-------|---------|------|--------|
| Bootstrap Next.js (App Router, TS strict, Tailwind v4, Turbopack) | Fullstack | FND-01 | 4h | Done |
| Dev port 5142, `.env.example`, Zod `env.ts` | Fullstack | FND-02 | 2h | Done |
| Copy Xone brand kit to `public/assets/XONE/` | Frontend | BRD-04 | 1h | Done |
| Port `brand.ts`, global CSS tokens, Geist Sans | Frontend | BRD-05 | 3h | Done |
| Root layout: Navbar + Footer shells | Frontend | ARCH-01 | 3h | Done |
| Scaffold App Router pages (placeholders OK) | Frontend | PG-00 | 2h | Done |
| **`/projects` page** + showcase data | Frontend | PG-11 | 4h | Done |
| **Email-only `/contact` page** | Frontend | PG-12 | 3h | Done |
| Navbar CTA → View Our Projects; `/get-started` redirect | Frontend | PG-13 | 1h | Done |
| `GET /api/health` Route Handler | Backend | API-06 | 1h | Done |
| CI workflow: lint → test → build | Fullstack | FND-06 | 2h | Done |
| Vitest: env schema + health route tests | Backend / QA | QA-02 | 2h | Done |
| Init shadcn/ui; add Button (Input, Card, Sheet for Week 2) | Frontend | ARCH-03 | 3h | Partial |

### Week 1 Exit Criteria

- [x] `npm run dev` serves on **http://localhost:5142** with Turbopack
- [x] Nav routes resolve (/, projects, services, about, process, contact, privacy, terms)
- [x] Logo loads from `public/assets/XONE/xone_brand_kit/`
- [x] `/projects` showcases portfolio cards with email CTAs
- [x] `/contact` is email-only (mailto, tel, location)
- [x] `/get-started` redirects to `/projects`
- [x] `GET /api/health` returns `{ success: true, status: "ok" }`
- [ ] GitHub Actions CI passes on push (after commit)

---

## Week 2 — Phase 2 Core Pages (Part 1)

### Theme

Port marketing pages and homepage sections from `xone-swe-web`.

| Task | Owner | Backlog | Est. |
|------|-------|---------|------|
| Homepage Hero + CTA sections (Projects + Email CTAs) | Frontend | PG-01 | 4h |
| MissionSection (Swiper team carousel, `"use client"`) | Frontend | PG-02 | 6h |
| ServicesSection + ValuePropsSection | Frontend | PG-03 | 4h |
| ProcessSection on homepage | Frontend | PG-04 | 3h |
| Services page (full port) | Frontend | PG-05 | 6h |
| About page (full port) | Frontend | PG-06 | 4h |
| Process page (full port) | Frontend | PG-07 | 4h |
| Mobile Navbar (Sheet hamburger) | Frontend | PG-08 | 4h |
| shadcn: Input, Card, Sheet | Frontend | ARCH-03 | 2h |
| Cross-route smoke test (375px + 1280px) | QA | QA-01 | 4h |

### Week 2 Exit Criteria

- [ ] Homepage renders all 6 sections without horizontal scroll at 375px
- [ ] Services, About, Process pages match v1 content structure
- [ ] Mobile navigation works below `md` breakpoint
- [ ] No decorative asset 404s (remove or replace broken paths)
- [ ] Email CTAs present on homepage and key pages

---

## Week 3 — Phase 2 Polish + Phase 3 Start

### Theme

Legal pages, SEO foundations, real project case studies (PM content).

| Task | Owner | Backlog | Est. |
|------|-------|---------|------|
| Replace placeholder projects with PM-approved case studies | PM + Frontend | PG-11 | 4h |
| Privacy Policy page (PM copy) | PM + Frontend | BRD-06 | 4h |
| Terms of Service page (PM copy) | PM + Frontend | BRD-06 | 4h |
| Metadata, favicon, Open Graph (BRD-07) | Frontend | BRD-07 | 3h |
| `robots.ts` + `sitemap.ts` | Fullstack | DEP-04 | 2h |
| Security headers in `next.config.ts` | Tech Lead | SEC-04 | 2h |
| Responsive QA on Contact + Projects | QA | QA-04 | 3h |

### Week 3 Exit Criteria

- [ ] Footer Privacy/Terms links resolve to real pages
- [ ] Page metadata and favicon present on primary routes
- [ ] Projects page reflects approved showcase content
- [ ] No P0 QA defects open on navigation or email links

---

## Week 4 — Phase 3 Polish + Vercel Deploy

### Theme

Production deploy, performance pass, sign-off.

| Task | Owner | Backlog | Est. |
|------|-------|---------|------|
| Vercel project connect + env vars in dashboard | Fullstack | DEP-01 | 2h |
| Production smoke matrix (`PROJECT_INFO_NEXT.md` §10) | QA | QA-05 | 4h |
| Lighthouse baseline (performance + a11y) | QA | PERF-06 | 3h |
| Image optimization pass (WebP, sizing) | Frontend | PERF-02 | 4h |
| README + `.env.example` final review | Fullstack | FND-08 | 2h |
| PM stakeholder demo + acceptance | PM | — | 2h |
| Tech Lead security review pre-deploy | Tech Lead | SEC-04 | 2h |
| Retrospective; groom v1.1 backlog (form APIs) | PM | — | 2h |

### Week 4 Exit Criteria

- [ ] Vercel production deploy live on approved domain
- [ ] Post-deploy checklist §10 complete (projects, contact email links, legal, mobile/desktop)
- [ ] CI green on `main`
- [ ] `PROJECT_INFO_NEXT.md` §17 success criteria signed off by PM + Tech Lead

---

## v1.1 Backlog (post-launch, optional)

| Task | Owner | Notes |
|------|-------|-------|
| `POST /api/contact` + Zod | Backend | Port from xone-swe-web |
| `POST /api/get-started` + Zod | Backend | Port from xone-swe-web |
| Rate limit provider + implementation | Tech Lead + Backend | Required before POST routes |
| Wire ContactForm / GetStartedForm | Frontend | After APIs approved |

---

## Role Focus by Week

| Role | Week 1 | Week 2 | Week 3 | Week 4 |
|------|--------|--------|--------|--------|
| **PM** | Scope lock (email-only v1) | Copy for pages | Legal copy, project case studies | Deploy sign-off, retro |
| **Tech Lead** | Architecture, CI | Review ports + RSC boundaries | Security headers, SEO review | Production security sign-off |
| **Fullstack** | Bootstrap, CI, redirects | Middleware/infra | robots/sitemap | Vercel setup, README |
| **Frontend** | Projects, contact, nav | Homepage + 3 pages, mobile nav | Metadata, project content | Perf/images polish |
| **Backend** | Health route only | — | — | Prod env verification |
| **QA** | Build smoke, health test | Responsive regression | Email link QA | Production matrix |

---

## Timeline Overview

| Week | Phase | Milestone |
|------|-------|-----------|
| **Week 1** | Phase 0 + Phase 1 | App on :5142, projects + email contact, CI green |
| **Week 2** | Phase 2 (pages) | Homepage + Services/About/Process ported |
| **Week 3** | Phase 2 + Phase 3 | Legal + SEO + real project content |
| **Week 4** | Phase 3 | Vercel deploy + QA sign-off |

---

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| `mailto:` poor UX on some devices | Accept for v1; plan v1.1 forms if conversion suffers |
| Email harvesting | Use business email; consider form APIs in v1.1 |
| Tailwind v4 + shadcn on Next | Follow current shadcn Next docs |
| Swiper in RSC tree | `"use client"` on MissionSection only |
| Legal copy delayed | Placeholder routes Week 1; swap copy Week 3 |

---

*Adapted for email-only v1 scope — June 2026.*
