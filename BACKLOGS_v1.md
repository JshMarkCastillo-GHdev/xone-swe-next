# BACKLOGS_v1.md

Prioritized backlog for the **Xone Software Development** Next.js site (`xone-swe-next`).

**Phase:** Week 3 complete — legal pages, SEO, security headers, project case studies  
**Plan:** `SPRINT_PLAN_v1.md`  
**Spec:** `PROJECT_INFO_NEXT.md`

**v1 lead capture:** Email-only + `/projects` — form APIs deferred to **v1.1**.

Priority key: **P0** critical · **P1** high · **P2** medium · **P3** low

---

## Epic: Project Foundation

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| FND-01 | P0 | Bootstrap Next.js at repo root | Fullstack | 1 | Done |
| FND-02 | P0 | `.env.example` + Zod `src/lib/env.ts` | Fullstack | 1 | Done |
| FND-03 | P0 | `.gitignore` for `.env*`, `.next/`, `node_modules` | Fullstack | 1 | Done |
| FND-04 | P0 | Dev server on port **5142** | Fullstack | 1 | Done |
| FND-05 | P1 | README bootstrap instructions | Fullstack | 1 | Done |
| FND-06 | P1 | CI: lint → test → `next build` | Fullstack | 1 | Done |
| FND-07 | P2 | `/home` → `/`, `/get-started` → `/projects` redirects | Fullstack | 1 | Done |
| FND-08 | P2 | Document Vercel env setup in README | Fullstack | 4 | Pending |

---

## Epic: Brand and Content (Xone)

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| BRD-01 | P0 | Rebrand: **Xone Software Development** | Frontend | 1–2 | In progress |
| BRD-02 | P0 | Root layout metadata | Frontend | 1 | Done |
| BRD-03 | P1 | Team carousel with initials avatars | Frontend | 2 | Done |
| BRD-04 | P1 | Brand kit under `public/assets/XONE/` | Frontend | 1 | Done |
| BRD-05 | P1 | Color tokens in `globals.css` + `brand.ts` | Frontend | 1 | Done |
| BRD-06 | P2 | Privacy + Terms (PM copy) | PM + Frontend | 3 | Done |
| BRD-07 | P3 | Favicon + Open Graph meta | Frontend | 3 | Done |

---

## Epic: Page Completion

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| PG-00 | P0 | Scaffold App Router routes | Frontend | 1 | Done |
| PG-11 | P0 | **`/projects` page** + showcase data | Frontend | 1 | Done (Week 3 case-study polish) |
| PG-12 | P0 | **Email-only `/contact` page** | Frontend | 1 | Done |
| PG-13 | P0 | Navbar/footer CTAs; get-started redirect | Frontend | 1 | Done |
| PG-01 | P0 | Homepage Hero section | Frontend | 2 | Done |
| PG-02 | P0 | Homepage MissionSection (Swiper) | Frontend | 2 | Done |
| PG-03 | P1 | Homepage Services + ValueProps sections | Frontend | 2 | Done |
| PG-04 | P1 | Homepage Process + CTA sections | Frontend | 2 | Done |
| PG-05 | P0 | Services page (port from v1) | Frontend | 2 | Done |
| PG-06 | P0 | About page | Frontend | 2 | Done |
| PG-07 | P0 | Process page | Frontend | 2 | Done |
| PG-08 | P1 | Mobile hamburger nav (shadcn Sheet) | Frontend | 2 | Done |

---

## Epic: Frontend Architecture

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| ARCH-01 | P0 | Root layout: Navbar + Footer | Frontend | 1 | Done |
| ARCH-02 | P1 | Feature folders under `src/features/*` | Frontend | 1 | Done |
| ARCH-03 | P1 | shadcn/ui: Button, Input, Card, Sheet | Frontend | 2 | Done |

---

## Epic: Lead Capture API (Route Handlers) — **v1.1 deferred**

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| API-01 | P2 | `POST /api/contact` with Zod | Backend | v1.1 | Deferred |
| API-02 | P2 | `POST /api/get-started` with Zod | Backend | v1.1 | Deferred |
| API-03 | P2 | Rate limiting on POST routes | Backend + Tech Lead | v1.1 | Deferred |
| API-04 | P3 | Optional `CONTACT_WEBHOOK_URL` | Backend | v1.1 | Deferred |
| API-06 | P1 | `GET /api/health` | Backend | 1 | Done |

---

## Epic: QA and Deploy

| ID | Priority | Item | Owner | Week | Status |
|----|----------|------|-------|------|--------|
| QA-01 | P1 | Cross-route responsive smoke | QA | 2 | Pending |
| QA-02 | P1 | Vitest: env + health tests | QA | 1 | Done |
| QA-04 | P1 | Email link QA (mailto, tel) | QA | 3 | Done |
| QA-05 | P0 | Production smoke matrix | QA | 4 | Pending |
| DEP-01 | P0 | Vercel production deploy | Fullstack | 4 | Pending |
| DEP-04 | P2 | `robots.ts` + `sitemap.ts` | Fullstack | 3 | Done |

---

## Decisions Log

| Decision | Choice | Owner | When |
|----------|--------|-------|------|
| v1 lead capture | Email-only + Projects page | PM | Week 1 |
| Form APIs | Deferred to v1.1 | PM + Tech Lead | Week 1 |
| Rate limit provider | N/A until v1.1 POST routes | Tech Lead | v1.1 |
| Dev port | **5142** | Fullstack | Week 1 |

---

*Updated for email-only v1 scope — June 2026.*
