# Xone Software Development — Next.js Site

Greenfield **Next.js App Router** rebuild of the Xone marketing site. Single app deployed on **Vercel**; no separate Express backend.

**Spec:** [`PROJECT_INFO_NEXT.md`](./PROJECT_INFO_NEXT.md) · **Sprint plan:** [`SPRINT_PLAN_v1.md`](./SPRINT_PLAN_v1.md)

**v1 lead capture:** **View Our Projects** (`/projects`) + **email-only** contact (`mailto:hello@xonesoftware.dev`). Online forms deferred to v1.1.

## Prerequisites

- **Node.js 22.x** (matches Vercel and CI)
- npm 10+

## Quick start

```bash
npm install
cp .env.example .env.local   # Windows: copy .env.example .env.local
npm run dev
```

Open [http://localhost:5142](http://localhost:5142).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Next.js dev server with Turbopack on **port 5142** |
| `npm run build` | Production build |
| `npm run start` | Production server on port 5142 |
| `npm run lint` | ESLint (Next.js + TypeScript) |
| `npm run test` | Vitest unit tests (`tests/*.test.ts`) |

## Environment variables

Optional server env for health checks and **future v1.1 form APIs**. Never prefix secrets with `NEXT_PUBLIC_`.

See [`.env.example`](./.env.example). Production values go in the **Vercel dashboard** only.

## Key routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/projects` | Portfolio showcase + email CTAs |
| `/contact` | Email, phone, location (no form) |
| `/services`, `/about`, `/process` | Marketing pages (Week 2 port) |
| `/privacy`, `/terms` | Legal (Week 3 copy) |
| `/get-started` | Redirects to `/projects` |

## Project structure

```text
app/                 # App Router pages and API route handlers
src/
  components/        # Shared UI (navbar, footer, shadcn/ui)
  features/          # contact, projects, home, …
  lib/               # brand (CONTACT_EMAIL), env, utils
public/assets/XONE/  # Brand kit (SVG logos)
tests/               # Vitest tests
```

## API

| Endpoint | Method | Status |
|----------|--------|--------|
| `/api/health` | GET | Implemented (deploy smoke check) |
| `/api/contact` | POST | **v1.1** — deferred |
| `/api/get-started` | POST | **v1.1** — deferred |

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on every push and PR: lint → test → build.

## Deployment

- **Platform:** Vercel only
- **Root directory:** `.` (repo root)
- **Build command:** `next build`

## Source reference

Behavior and assets are ported from **`xone-swe-web`** (Vite + Express). That repo is read-only reference.
