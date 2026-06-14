# PROJECT_OVERVIEW.md

## Brand

**Xone Software Development**

This repository is the **Next.js greenfield rebuild** of the v1 marketing site. Legacy StuTech references in the read-only `xone-swe-web` repo are historical; all active UI and copy use Xone branding.

## Project Purpose

A **static marketing website** deployed as a **single Next.js app on Vercel**. The site showcases services, team, process, and **portfolio projects**, converting visitors through **email contact** (`mailto:`) and **View Our Projects**.

**v1 scope:** no authentication, no database, no online forms. Form APIs deferred to **v1.1**.

## Current State

| Area | Status |
|------|--------|
| Next.js bootstrap | **Done** |
| App Router routes | **Done** — homepage + Services/About/Process ported |
| Brand assets | Copied to `public/assets/XONE/xone_brand_kit/` |
| Lead capture | **Email-only** + `/projects` — no POST APIs in v1 |
| API | `GET /api/health` only |
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
| Validation | Zod at Route Handler boundary (v1.1 forms) |
| API | Route Handlers — health only in v1 |
| Hosting | **Vercel only** (repo root = app root) |
| Testing | Vitest |
| Local dev port | **5142** |

## Timeline (4 weeks)

| Week | Focus |
|------|-------|
| Week 1 | Bootstrap + projects page + email contact (**done**) |
| Week 2 | Homepage sections + Services/About/Process pages (**done**) |
| Week 3 | Legal copy, SEO, PM project case studies |
| Week 4 | Vercel deploy + QA sign-off |

See `SPRINT_PLAN_v1.md` for deliverables and exit criteria per week.

## Key Roles

| Role | Responsibility |
|------|----------------|
| **PM** | Backlog, sprint plan, copy/legal, project showcase content, deploy sign-off |
| **Tech Lead** | Architecture, security, code review |
| **Fullstack** | Bootstrap, CI, env, Vercel, cross-cutting features |
| **Frontend** | Pages, components, brand, accessibility |
| **Backend** | Route Handlers when v1.1 forms approved |
| **QA** | Smoke/regression, production checklist |

Role workflows: `TEAM_INSTRUCTIONS.md`

## Open Decisions

1. **Production domain** — TBD before Week 4 deploy
2. **v1.1 forms** — if/when to add POST APIs, rate limit provider, webhook

## Success Criteria

Matches `PROJECT_INFO_NEXT.md` §17: all routes live (including `/projects`), email CTAs work, `/get-started` → `/projects`, legal pages linked, CI green, no separate backend.

## Related Documentation

| Document | Purpose |
|----------|---------|
| `PROJECT_INFO_NEXT.md` | Authoritative spec and porting map |
| `AGENTS.md` | Engineering rules |
| `TEAM_INSTRUCTIONS.md` | Role responsibilities |
| `SPRINT_PLAN_v1.md` | Week-by-week plan |
| `BACKLOGS_v1.md` | Prioritized backlog |
| `README.md` | Local setup and commands |
