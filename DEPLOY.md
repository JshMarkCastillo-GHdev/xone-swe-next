# Deployment guide — Vercel (Next.js)

Production hosting for **Week 4 / DEP-01**. Single Next.js app at repo root — **no Railway, no separate backend, no CORS**.

**Spec:** [`PROJECT_INFO_NEXT.md`](./PROJECT_INFO_NEXT.md) §10 · **Sprint:** [`SPRINT_PLAN_v1.md`](./SPRINT_PLAN_v1.md) Week 4

---

## Before you deploy (local)

From repo root:

```bash
npm install
npm run lint
npm run test
npm run build
```

All three must pass (matches GitHub Actions CI).

---

## YOUR ACTION — Step 1: Push to GitHub

1. Commit and push your work to the branch Vercel will track (usually `main`).
2. Confirm **GitHub Actions CI** is green on that branch.

> **Owner:** You (or Fullstack with repo access)

---

## YOUR ACTION — Step 2: Create Vercel project

1. Log in to [vercel.com](https://vercel.com) and link your GitHub account if needed.
2. **Add New → Project** → import this repository (`xone-swe-next`).
3. Confirm project settings:

| Setting | Value |
|---------|--------|
| **Framework Preset** | Next.js (auto-detected) |
| **Root Directory** | `.` (repo root — **not** a subfolder) |
| **Build Command** | `next build` (default) |
| **Output Directory** | Next.js default (leave automatic) |
| **Install Command** | `npm ci` or `npm install` |
| **Node.js Version** | **22.x** (Project Settings → General) |

4. Click **Deploy** (first build may use preview URL only).

> **Owner:** You (Fullstack)

---

## YOUR ACTION — Step 3: Environment variables

In **Vercel → Project → Settings → Environment Variables**, add:

| Variable | Required | Environments | Example |
|----------|----------|--------------|---------|
| `SITE_URL` | **Strongly recommended** | Production (+ Preview optional) | `https://www.xonesoftware.dev` |

**Why `SITE_URL` matters:** `app/sitemap.ts`, `app/robots.ts`, and Open Graph metadata use `getSiteUrl()` from `src/lib/site.ts`. Without it, production may fall back to `VERCEL_URL` (works on `*.vercel.app`) but **custom domains need the explicit canonical URL**.

**Not required for v1:**

| Variable | Notes |
|----------|--------|
| `RATE_LIMIT_*` | v1.1 form APIs only |
| `CONTACT_WEBHOOK_URL` | v1.1 form APIs only |

Never add secrets with a `NEXT_PUBLIC_` prefix unless they are intentionally browser-safe.

After changing env vars, ** redeploy** (Deployments → … → Redeploy).

> **Owner:** You (Fullstack)

---

## YOUR ACTION — Step 4: Custom domain (optional)

1. **Vercel → Project → Settings → Domains**
2. Add your production domain (e.g. `www.xonesoftware.dev`).
3. Configure DNS per Vercel instructions (A/CNAME records).
4. Update **`SITE_URL`** to match the canonical HTTPS URL (with or without `www` — pick one and stay consistent).
5. Redeploy.

> **Owner:** You + PM (domain approval)

---

## Post-deploy verification (QA-05)

Replace `BASE` with your production URL (e.g. `https://your-app.vercel.app` or custom domain).

### Routes (mobile 375px + desktop 1280px)

| Check | URL | Pass |
|-------|-----|------|
| Homepage | `BASE/` | ☐ |
| Projects | `BASE/projects` | ☐ |
| Services | `BASE/services` | ☐ |
| About | `BASE/about` | ☐ |
| Process | `BASE/process` | ☐ |
| Contact | `BASE/contact` | ☐ |
| Privacy | `BASE/privacy` | ☐ |
| Terms | `BASE/terms` | ☐ |
| Legacy redirect | `BASE/get-started` → `/projects` | ☐ |
| Legacy redirect | `BASE/home` → `/` | ☐ |

### Lead capture (email-only v1)

| Check | Pass |
|-------|------|
| Contact page shows `hello@xonesoftware.dev` | ☐ |
| `mailto:` link opens mail client (or prompts) | ☐ |
| Projects page email CTAs work | ☐ |
| Homepage CTA → Projects + Email | ☐ |

### SEO & infra

| Check | URL / command | Pass |
|-------|---------------|------|
| Health API | `curl BASE/api/health` → `{ "success": true, "status": "ok" }` | ☐ |
| Sitemap | `BASE/sitemap.xml` lists marketing routes | ☐ |
| Robots | `BASE/robots.txt` references sitemap; disallows `/api/` | ☐ |
| Favicon | Browser tab shows Xone icon | ☐ |
| OG tags | Share debugger / view-source on homepage | ☐ |

### Security headers (sample)

```bash
curl -sI BASE/ | findstr /I "x-frame-options x-content-type-options referrer-policy"
```

Expect: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, etc.

### Lighthouse (PERF-06)

Run Lighthouse on **Homepage** and **Contact** (mobile + desktop). Record scores; fix P0 a11y/contrast issues before PM sign-off.

> **Owner:** QA (you can run this checklist manually)

---

## YOUR ACTION — Step 5: Sign-off

| Role | Task |
|------|------|
| **PM** | Stakeholder demo on production URL; accept `PROJECT_INFO_NEXT.md` §17 criteria |
| **Tech Lead** | Confirm security headers + env strategy on production |
| **PM** | Retrospective; groom v1.1 backlog (form APIs) if needed |

> **Owner:** PM + Tech Lead

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Sitemap shows `localhost:5142` | Set `SITE_URL` in Vercel and redeploy |
| OG preview wrong URL | Same — `SITE_URL` + redeploy |
| Build fails on Vercel | Match Node 22.x; run `npm run build` locally first |
| 404 on routes | Ensure Root Directory is `.` not a monorepo subfolder |
| CI fails on GitHub | Fix lint/test/build locally; push again |

---

## v1 success criteria reminder

From `PROJECT_INFO_NEXT.md` §17:

- Single Next.js app on Vercel
- All marketing routes live with Xone branding
- Email-only lead capture works
- Privacy + Terms linked from footer
- CI green on `main`
- No separate backend or CORS

**v1.1 (optional later):** online forms, POST APIs, rate limiting, webhook.

---

## v1 ship complete

If you are verifying an existing production deployment, use the checklist above. Initial v1 ship: production deploy, smoke tests, and sitemap/robots verification completed June 2026.

---
