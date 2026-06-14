# PROJECT_OVERVIEW.md

## Brand

**Xone Software Development**

This repository is the **Next.js greenfield rebuild** of the v1 marketing site. Legacy StuTech references in the read-only `xone-swe-web` repo are historical; all active UI and copy use Xone branding.

## Project Purpose

A **static lead-generation website** deployed as a **single Next.js app on Vercel**. The site showcases services, team, and process to convert visitors into qualified leads via Contact and Get Started forms.

**v1 scope:** no authentication, no database (optional webhook for leads only).

## Current State

| Area | Status |
|------|--------|
| Next.js bootstrap | **In progress (Week 1 / Phase 0)** |
| App Router routes | Scaffolded placeholders for all marketing + legal pages |
| Brand assets | Copied to `public/assets/XONE/xone_brand_kit/` |
| API | `GET /api/health` only — contact/get-started in Week 1 |
| Forms | Placeholder pages — wiring in Week 3 |
| CI/CD | GitHub Actions: lint, test, build |
| Deployment | Vercel — Week 4 |

**Source reference:** `xone-swe-web` (Vite SPA + Express) — read-only; port behavior, do not migrate in-place.

## Tech Summary

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router), Turbopack in dev |
| Language | TypeScript (`strict: true`) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Typography | Geist Sans (`@fontsource-variable/geist`) |
| Validation | Zod at Route Handler boundary |
| API | Next.js Route Handlers (`app/api/**/route.ts`) |
| Hosting | **Vercel only** (repo root = app root) |
| Testing | Vitest |
| Local dev port | **5142** |

## Timeline (4 weeks)

| Week | Focus |
|------|-------|
| Week 1 | Phase 0 bootstrap + Phase 1 API (health, contact, get-started, rate limit, CI) |
| Week 2 | Phase 2 — homepage sections + Services/About/Process pages |
| Week 3 | Phase 2 forms + Phase 3 legal/SEO |
| Week 4 | Vercel deploy + QA sign-off |

See `SPRINT_PLAN_v1.md` for deliverables and exit criteria per week.

## Key Roles

| Role | Responsibility |
|------|----------------|
| **PM** | Backlog, sprint plan, copy/legal, deploy sign-off |
| **Tech Lead** | Architecture, security, rate-limit decision, code review |
| **Fullstack** | Bootstrap, CI, env, Vercel, cross-cutting features |
| **Frontend** | Pages, components, brand, accessibility |
| **Backend** | Route Handlers, validation, rate limiting, webhooks |
| **QA** | Smoke/regression, production checklist |

Role workflows: `TEAM_INSTRUCTIONS.md`

## Open Decisions

1. **Rate limit provider** — Vercel KV vs Upstash vs edge middleware (required before POST routes ship)
2. **Form transport** — Server Actions vs client `fetch` to `/api/*`
3. **Production domain** — TBD before Week 4 deploy

## Success Criteria

Matches `PROJECT_INFO_NEXT.md` §17: all routes live, forms work on Vercel, shared Zod validation, rate limiting, legal pages linked, CI green, no separate backend.

## Related Documentation

| Document | Purpose |
|----------|---------|
| `PROJECT_INFO_NEXT.md` | Authoritative spec and porting map |
| `AGENTS.md` | Engineering rules |
| `TEAM_INSTRUCTIONS.md` | Role responsibilities |
| `SPRINT_PLAN_v1.md` | Week-by-week plan |
| `BACKLOGS_v1.md` | Prioritized backlog |
| `README.md` | Local setup and commands |
