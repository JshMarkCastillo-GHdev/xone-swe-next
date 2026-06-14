# SPRINT_PLAN_v1.md

Week-by-week execution plan for the **Xone Software Development** Next.js marketing site (`xone-swe-next`).

**Source spec:** `PROJECT_INFO_NEXT.md` build phases  
**Team roles:** PM, Tech Lead, Fullstack, Frontend, Backend, QA — see `TEAM_INSTRUCTIONS.md`  
**Sprint cadence:** 4 weeks (Phase 0 → Phase 3)  
**Local dev port:** `5142` (`npm run dev`)

---

## Program Goal

Ship a single Next.js App Router site on Vercel with Xone branding, lead capture APIs, and all marketing routes — matching v1 behavior from `xone-swe-web` without a separate Express backend.

**Program exit criteria (`PROJECT_INFO_NEXT.md` §17)**

- All routes in the porting map live with Xone branding
- Contact + Get Started forms work end-to-end on Vercel production
- Shared Zod validation on client + server
- Rate limiting on POST routes
- Privacy + Terms linked from footer
- CI green: lint, test, build
- No separate backend service or CORS configuration

---

## Week 1 — Phase 0 Bootstrap + Phase 1 API Foundation

### Theme

Greenfield Next.js app, brand tokens, CI, and lead-capture API skeleton.

| Task | Owner | Backlog | Est. |
|------|-------|---------|------|
| Bootstrap Next.js (App Router, TS strict, Tailwind v4, Turbopack) | Fullstack | FND-01 | 4h |
| Dev port 5142, `.env.example`, Zod `env.ts` | Fullstack | FND-02 | 2h |
| Copy Xone brand kit to `public/assets/XONE/` | Frontend | BRD-04 | 1h |
| Port `brand.ts`, global CSS tokens, Geist Sans | Frontend | BRD-05 | 3h |
| Root layout: Navbar + Footer shells | Frontend | ARCH-01 | 3h |
| Scaffold all App Router pages (placeholders OK) | Frontend | PG-00 | 2h |
| Init shadcn/ui; add Button, Input, Card, Sheet | Frontend | ARCH-03 | 3h |
| `GET /api/health` Route Handler | Backend | API-06 | 1h |
| `POST /api/contact` + shared Zod schema | Backend | API-01 | 4h |
| `POST /api/get-started` + shared Zod schema | Backend | API-02 | 4h |
| Choose rate-limit provider (KV / Upstash / edge) | Tech Lead | API-03 | 2h |
| Implement rate limiting on POST routes | Backend | API-03 | 4h |
| CI workflow: lint → test → build | Fullstack | FND-06 | 2h |
| Vitest: env schema + health route tests | Backend / QA | QA-02 | 2h |

### Week 1 Exit Criteria

- [ ] `npm run dev` serves on **http://localhost:5142** with Turbopack
- [ ] All nav routes resolve (/, services, about, process, contact, get-started, privacy, terms)
- [ ] Logo loads from `public/assets/XONE/xone_brand_kit/`
- [ ] `GET /api/health` returns `{ success: true, status: "ok" }`
- [ ] Contact + get-started handlers validate with Zod; invalid input returns 400 shape from spec
- [ ] Rate limit returns 429 per spec (provider chosen and documented in README)
- [ ] GitHub Actions CI passes on push

---

## Week 2 — Phase 2 Core Pages (Part 1)

### Theme

Port marketing pages and homepage sections from `xone-swe-web`.

| Task | Owner | Backlog | Est. |
|------|-------|---------|------|
| Homepage Hero + CTA sections | Frontend | PG-01 | 4h |
| MissionSection (Swiper team carousel, `"use client"`) | Frontend | PG-02 | 6h |
| ServicesSection + ValuePropsSection | Frontend | PG-03 | 4h |
| ProcessSection on homepage | Frontend | PG-04 | 3h |
| Services page (full port) | Frontend | PG-05 | 6h |
| About page (full port) | Frontend | PG-06 | 4h |
| Process page (full port) | Frontend | PG-07 | 4h |
| Mobile Navbar (Sheet hamburger) | Frontend | PG-08 | 4h |
| `/home` → `/` redirect verified | Fullstack | FND-07 | 1h |
| API integration tests (contact, get-started, rate limit) | Backend | QA-03 | 6h |
| Cross-route smoke test (375px + 1280px) | QA | QA-01 | 4h |

### Week 2 Exit Criteria

- [ ] Homepage renders all 6 sections without horizontal scroll at 375px
- [ ] Services, About, Process pages match v1 content structure
- [ ] Mobile navigation works below `md` breakpoint
- [ ] No decorative asset 404s (remove or replace broken paths)
- [ ] API integration tests green in CI

---

## Week 3 — Phase 2 Core Pages (Part 2) + Phase 3 Start

### Theme

Forms wired end-to-end; legal pages and SEO foundations.

| Task | Owner | Backlog | Est. |
|------|-------|---------|------|
| Contact page + ContactForm (client, Zod, fetch `/api/contact`) | Frontend | PG-09 | 6h |
| Get Started page + form (fetch `/api/get-started`) | Frontend | PG-10 | 6h |
| Accessible inline form feedback (no `alert()`) | Frontend | SEC-02 | 2h |
| Optional `CONTACT_WEBHOOK_URL` integration | Backend | API-04 | 3h |
| Privacy Policy page (PM copy) | PM + Frontend | BRD-06 | 4h |
| Terms of Service page (PM copy) | PM + Frontend | BRD-06 | 4h |
| Metadata, favicon, Open Graph (BRD-07) | Frontend | BRD-07 | 3h |
| `robots.ts` + `sitemap.ts` | Fullstack | DEP-04 | 2h |
| Security headers in `next.config.ts` | Tech Lead | SEC-04 | 2h |
| Form failure-path QA (empty, invalid email, 429) | QA | QA-04 | 4h |

### Week 3 Exit Criteria

- [ ] Both forms submit successfully in local prod build (`npm run build && npm run start`)
- [ ] Footer Privacy/Terms links resolve to real pages
- [ ] Page metadata and favicon present on primary routes
- [ ] Webhook documented; works when env var set
- [ ] No P0 QA defects open on lead flows

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
| Retrospective; groom v1.1 backlog | PM | — | 2h |

### Week 4 Exit Criteria

- [ ] Vercel production deploy live on approved domain
- [ ] Post-deploy checklist §10 complete (health, forms, legal links, mobile/desktop)
- [ ] CI green on `main`
- [ ] Rate limit verified in production-like environment
- [ ] `PROJECT_INFO_NEXT.md` §17 success criteria signed off by PM + Tech Lead

---

## Role Focus by Week

| Role | Week 1 | Week 2 | Week 3 | Week 4 |
|------|--------|--------|--------|--------|
| **PM** | Backlog grooming, rate-limit decision input | Copy for pages, accept homepage | Legal copy, scope guard | Deploy sign-off, retro |
| **Tech Lead** | Architecture, CI, rate-limit sign-off | Review ports + RSC boundaries | Security headers, SEO review | Production security sign-off |
| **Fullstack** | Bootstrap, CI, env, redirects | Redirect/middleware, test infra | robots/sitemap, webhook docs | Vercel setup, README |
| **Frontend** | Brand, layout, shadcn, placeholders | Homepage + 3 pages, mobile nav | Forms, legal UI, metadata | Perf/images polish |
| **Backend** | Health + POST routes, Zod, rate limit | API integration tests | Webhook, error paths | Prod env verification |
| **QA** | Build smoke, health test | Responsive + route regression | Form failure paths | Production matrix |

---

## Timeline Overview

| Week | Phase | Milestone |
|------|-------|-----------|
| **Week 1** | Phase 0 + Phase 1 | App boots on :5142, brand applied, APIs + CI green |
| **Week 2** | Phase 2 (pages) | Homepage + Services/About/Process ported |
| **Week 3** | Phase 2 + Phase 3 | Forms live, legal + SEO scaffolding |
| **Week 4** | Phase 3 | Vercel deploy + QA sign-off |

---

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Rate limit unlike Express in-memory | Decide KV/Upstash in Week 1; document in README |
| Tailwind v4 + shadcn on Next | Follow current shadcn Next docs; don't copy Vite config blindly |
| Swiper in RSC tree | `"use client"` on MissionSection only |
| Legal copy delayed | Ship placeholder routes Week 1; swap copy Week 3 |
| Linux CI glob pitfall | Test script uses `tests/*.test.ts` explicitly |

---

## Reporting

- **Daily:** blockers, PRs ready for review
- **Weekly:** demo against that week's exit criteria
- **End of Week 4:** program review against `PROJECT_INFO_NEXT.md` §17

*Adapted from xone-swe-web SPRINT_PLAN_v1 — June 2026.*
