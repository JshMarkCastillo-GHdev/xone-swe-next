# Xone Software Development — Next.js Site

Greenfield **Next.js App Router** rebuild of the Xone marketing site. Single app deployed on **Vercel**; no separate Express backend.

**Spec:** [`PROJECT_INFO_NEXT.md`](./PROJECT_INFO_NEXT.md) · **Sprint plan:** [`SPRINT_PLAN_v1.md`](./SPRINT_PLAN_v1.md)

## Prerequisites

- **Node.js 22.x** (matches Vercel and CI)
- npm 10+

## Quick start

```bash
# Install dependencies
npm install

# Copy environment template (never commit .env)
cp .env.example .env.local   # Windows: copy .env.example .env.local

# Start dev server (Turbopack) on port 5142
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

Server-only — **never** prefix with `NEXT_PUBLIC_`.

| Variable | Default | Description |
|----------|---------|-------------|
| `RATE_LIMIT_WINDOW_MS` | `900000` | Rate limit window (15 minutes) |
| `RATE_LIMIT_MAX` | `10` | Max requests per window per route |
| `CONTACT_WEBHOOK_URL` | _(empty)_ | Optional webhook URL for lead JSON POST |

See [`.env.example`](./.env.example). Set production values in the **Vercel dashboard** only.

## Project structure

```text
app/                 # App Router pages and API route handlers
src/
  components/        # Shared UI (navbar, footer, shadcn/ui)
  features/          # Feature modules per page
  lib/               # brand, env, utils
  schemas/           # Shared Zod schemas
public/assets/XONE/  # Brand kit (SVG logos)
tests/               # Vitest tests
```

## API (v1)

| Endpoint | Method | Status |
|----------|--------|--------|
| `/api/health` | GET | Implemented |
| `/api/contact` | POST | Week 1 |
| `/api/get-started` | POST | Week 1 |

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on every push and PR:

1. `npm run lint`
2. `npm run test`
3. `npm run build`

## Deployment

- **Platform:** Vercel only
- **Root directory:** `.` (repo root)
- **Build command:** `next build`
- Connect the GitHub repo; add env vars in Vercel project settings.

## Source reference

Behavior and assets are ported from **`xone-swe-web`** (Vite + Express). That repo is read-only reference — do not modify it when building this project.

## Rate limiting (decision pending)

The v1 Express app used in-memory rate limiting. On Vercel serverless, choose one of:

- [Vercel KV](https://vercel.com/docs/storage/vercel-kv)
- [Upstash Redis](https://upstash.com/)
- Edge middleware / WAF

Document the chosen approach here once Tech Lead signs off (Week 1).
