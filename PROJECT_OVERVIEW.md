# PROJECT_OVERVIEW.md

## Brand

**Xone Software Development**

This repository is the **Next.js greenfield rebuild** of the v1 marketing site. Legacy StuTech references in the read-only `xone-swe-web` repo are historical; all active UI and copy use Xone branding.

## Project Purpose

A **static marketing website** deployed as a **single Next.js app on Vercel**. The site showcases services, team, process, and **portfolio projects**, converting visitors through **email contact** (`mailto:`) and **View Our Projects**.

**v1 scope:** no authentication, no database, no online forms. Form APIs deferred to **v1.1**.

## Status: v1 shipped

**Production:** live on Vercel · **Smoke tests:** passed · **Sitemap/robots:** verified · **Program:** 4-week sprint complete (June 2026)

## Current State

| Area              | Status                                                                |
| ----------------- | --------------------------------------------------------------------- |
| Next.js bootstrap | **Done**                                                              |
| App Router routes | **Done** — all marketing + legal pages                                |
| Brand assets      | `public/assets/XONE/xone_brand_kit/`                                  |
| Lead capture      | **Email-only** + `/projects`                                          |
| Legal pages       | **Done** — Privacy + Terms (PM placeholder; legal review optional)    |
| SEO               | **Done** — favicon, OG/Twitter, `robots.ts`, `sitemap.ts`, `SITE_URL` |
| Security headers  | **Done** — `next.config.ts` (SEC-04)                                  |
| API               | `GET /api/health` only                                                |
| CI/CD             | GitHub Actions: lint, test, build                                     |
| Deployment        | **Done** — Vercel production                                          |

**Source reference:** `xone-swe-web` (Vite SPA + Express) — read-only.

## Tech Summary

| Layer          | Technology                                |
| -------------- | ----------------------------------------- |
| Framework      | Next.js 15 (App Router), Turbopack in dev |
| Language       | TypeScript (`strict: true`)               |
| Styling        | Tailwind CSS v4 + shadcn/ui               |
| Typography     | Geist Sans                                |
| Validation     | Zod (v1.1 form APIs)                      |
| API            | Route Handlers — health only in v1        |
| Hosting        | **Vercel** (repo root)                    |
| Testing        | Vitest                                    |
| Local dev port | **5142**                                  |

## Timeline (4 weeks) — complete

| Week   | Focus                                | Status |
| ------ | ------------------------------------ | ------ |
| Week 1 | Bootstrap + email contact + projects | Done   |
| Week 2 | Homepage + Services/About/Process    | Done   |
| Week 3 | Legal, SEO, security headers         | Done   |
| Week 4 | Vercel deploy + QA                   | Done   |

See `SPRINT_PLAN_v1.md` for details.

## Security posture (v1)

| Area              | v1 status          | Notes                                                         |
| ----------------- | ------------------ | ------------------------------------------------------------- |
| Attack surface    | **Low**            | Static pages + one public GET endpoint                        |
| Secrets in client | **None**           | No `NEXT_PUBLIC_*` secrets; no `.env` in repo                 |
| Response headers  | **Configured**     | X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy |
| User input        | **N/A**            | No forms or POST APIs in v1                                   |
| HTTPS             | **Vercel default** | TLS on all production traffic                                 |
| Email harvesting  | **Accepted risk**  | Public `mailto:` address; mitigated by business need          |
| Legal copy        | **Placeholder**    | Compliance review optional before high traffic                |
| Dependency CVEs   | **Monitor**        | Run `npm audit` periodically; enable Dependabot on GitHub     |

**Before v1.1 (forms):** rate limiting, Zod at API boundary, generic error responses, no webhook secrets in client.

**Optional hardening (not required for v1):** Content-Security-Policy, Vercel Deployment Protection on previews, lawyer-reviewed Privacy/Terms.

## Open decisions (post-v1)

1. **v1.1 forms** — if/when to add POST APIs + rate limiting
2. **Custom domain** — if not on one yet, add in Vercel + `SITE_URL`
3. **Legal review** — replace placeholder Privacy/Terms when ready

## Success criteria

All `PROJECT_INFO_NEXT.md` §17 criteria met for v1 ship.

## Related Documentation

| Document               | Purpose                        |
| ---------------------- | ------------------------------ |
| `PROJECT_INFO_NEXT.md` | Authoritative spec             |
| `AGENTS.md`            | Engineering rules              |
| `TEAM_INSTRUCTIONS.md` | Role responsibilities          |
| `SPRINT_PLAN_v1.md`    | Week-by-week plan (complete)   |
| `BACKLOGS_v1.md`       | Backlog + v1.1 items           |
| `README.md`            | Local setup                    |
| `DEPLOY.md`            | Vercel + post-deploy checklist |
