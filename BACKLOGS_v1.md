# BACKLOGS_v1.md

Prioritized backlog for the **Xone Software Development** Next.js site (`xone-swe-next`).

**Phase:** Week 1 — Phase 0 bootstrap (in progress)  
**Plan:** `SPRINT_PLAN_v1.md`  
**Spec:** `PROJECT_INFO_NEXT.md`

Priority key: **P0** critical · **P1** high · **P2** medium · **P3** low

---

## Epic: Project Foundation

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| FND-01 | P0 | Bootstrap Next.js at repo root (App Router, TS strict, Tailwind v4, Turbopack) | Fullstack | 1 | In progress |
| FND-02 | P0 | `.env.example` + Zod `src/lib/env.ts` (server-only vars) | Fullstack | 1 | In progress |
| FND-03 | P0 | `.gitignore` for `.env*`, `.next/`, `node_modules` | Fullstack | 1 | Done |
| FND-04 | P0 | Dev server on port **5142** | Fullstack | 1 | Done |
| FND-05 | P1 | README bootstrap instructions | Fullstack | 1 | In progress |
| FND-06 | P1 | CI: lint → test → `next build` (`.github/workflows/ci.yml`) | Fullstack | 1 | Done |
| FND-07 | P2 | `/home` → `/` redirect in `next.config.ts` | Fullstack | 2 | Done |
| FND-08 | P2 | Document Vercel env setup in README | Fullstack | 4 | Pending |

---

## Epic: Brand and Content (Xone)

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| BRD-01 | P0 | Rebrand all copy: **Xone Software Development** (not StuTech) | Frontend | 1–2 | In progress |
| BRD-02 | P0 | Root layout metadata (title, description) | Frontend | 1 | Done |
| BRD-03 | P1 | Team carousel with initials avatars (no photo 404s) | Frontend | 2 | Pending |
| BRD-04 | P1 | Brand kit under `public/assets/XONE/xone_brand_kit/` | Frontend | 1 | Done |
| BRD-05 | P1 | Color tokens in `globals.css` + `brand.ts` | Frontend | 1 | Done |
| BRD-06 | P2 | Privacy Policy + Terms pages (real routes, PM copy) | PM + Frontend | 3 | Scaffolded |
| BRD-07 | P3 | Favicon + Open Graph meta | Frontend | 3 | Pending |

---

## Epic: Page Completion

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| PG-00 | P0 | Scaffold all App Router routes with placeholders | Frontend | 1 | Done |
| PG-01 | P0 | Homepage Hero section | Frontend | 2 | Pending |
| PG-02 | P0 | Homepage MissionSection (Swiper) | Frontend | 2 | Pending |
| PG-03 | P1 | Homepage Services + ValueProps sections | Frontend | 2 | Pending |
| PG-04 | P1 | Homepage Process + CTA sections | Frontend | 2 | Pending |
| PG-05 | P0 | Services page (port from v1) | Frontend | 2 | Pending |
| PG-06 | P0 | About page | Frontend | 2 | Pending |
| PG-07 | P0 | Process page | Frontend | 2 | Pending |
| PG-08 | P1 | Mobile hamburger nav (shadcn Sheet) | Frontend | 2 | Pending |
| PG-09 | P0 | Contact page + form wired to API | Frontend | 3 | Pending |
| PG-10 | P0 | Get Started page + form wired to API | Frontend | 3 | Pending |

---

## Epic: Frontend Architecture

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| ARCH-01 | P0 | Root layout: Navbar + Footer shells | Frontend | 1 | Done |
| ARCH-02 | P1 | Feature folders under `src/features/*` per route | Frontend | 2 | Pending |
| ARCH-03 | P1 | shadcn/ui: Button, Input, Card, Sheet | Frontend | 1 | Pending |
| ARCH-04 | P2 | `src/lib/validation-helpers.ts` (`hasControlCharacters`) | Backend | 1 | Pending |
| ARCH-05 | P2 | Shared Zod schemas in `src/schemas/` | Backend | 1 | Pending |

---

## Epic: Lead Capture API (Route Handlers)

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| API-01 | P0 | `POST /api/contact` with Zod validation | Backend | 1 | Pending |
| API-02 | P0 | `POST /api/get-started` with Zod validation | Backend | 1 | Pending |
| API-03 | P0 | Rate limiting (Vercel-compatible — **provider TBD**) | Backend + Tech Lead | 1 | Pending |
| API-04 | P2 | Optional webhook via `CONTACT_WEBHOOK_URL` | Backend | 3 | Pending |
| API-05 | P2 | Response contracts match `PROJECT_INFO_NEXT.md` §5 | Backend | 1 | Pending |
| API-06 | P0 | `GET /api/health` | Backend | 1 | Done |

**Out of scope:** Legacy Technical Documentation CRUD APIs.

---

## Epic: Security

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| SEC-01 | P0 | No `.env` committed; server vars not in client bundle | Fullstack | 1 | Done |
| SEC-02 | P0 | Server-side Zod on all POST routes | Backend | 1 | Pending |
| SEC-03 | P1 | Client validation mirrors server (shared schemas) | Frontend | 3 | Pending |
| SEC-04 | P2 | Security headers in `next.config.ts` | Tech Lead | 3 | Pending |

---

## Epic: Quality and Testing

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| QA-01 | P1 | Manual smoke: browsers × breakpoints | QA | 2–4 | Pending |
| QA-02 | P1 | Vitest for env schema + utilities | Backend | 1 | Done |
| QA-03 | P1 | Route Handler integration tests (~35 test parity) | Backend | 2 | Pending |
| QA-04 | P2 | Form failure paths (400, 429, network) | QA | 3 | Pending |
| QA-05 | P1 | Vercel post-deploy checklist §10 | QA | 4 | Pending |

---

## Epic: Deployment

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| DEP-01 | P0 | Vercel production deploy (single Next.js project) | Fullstack | 4 | Pending |
| DEP-02 | P2 | Custom domain + HTTPS | Fullstack | 4 | Pending |
| DEP-03 | P3 | `robots.ts` + `sitemap.ts` | Fullstack | 3 | Pending |
| DEP-04 | P3 | Node 22.x on Vercel | Fullstack | 4 | Pending |

---

## Epic: Performance

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| PERF-01 | P1 | Mobile-first typography (no overflow at 375px) | Frontend | 2 | Pending |
| PERF-02 | P2 | Optimize images (WebP, sizing) | Frontend | 4 | Pending |
| PERF-06 | P3 | Lighthouse baseline | QA | 4 | Pending |

---

## Decisions Needed (Human)

| Topic | Options | Decision owner | Target week |
|-------|---------|----------------|-------------|
| Rate limit provider | Vercel KV, Upstash Redis, edge middleware | Tech Lead | Week 1 |
| Form transport | Server Actions vs `fetch('/api/*')` | Tech Lead + Fullstack | Week 1 |
| Legal page copy | PM draft vs external counsel | PM | Week 3 |
| Production domain | TBD | PM + Fullstack | Week 4 |

---

## Future (Post-v1)

| Priority | Feature |
|----------|---------|
| P1 | Case studies / portfolio section |
| P1 | Blog / insights ( `app/blog/` ) |
| P2 | Analytics (Plausible / GA4 + consent) |
| P2 | Live chat / scheduling widget |

---

*Adapted from xone-swe-web BACKLOGS_v1.md — June 2026.*
