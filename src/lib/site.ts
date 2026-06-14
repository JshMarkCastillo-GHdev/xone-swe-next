/** Canonical site URL for sitemap, Open Graph, and robots. */

const FALLBACK_SITE_URL = "http://localhost:5142";

export function getSiteUrl(): string {
  const configured = process.env.SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/\/$/, "")}`;
  }

  return FALLBACK_SITE_URL;
}

/** Public marketing routes included in the sitemap (no trailing slash). */
export const publicMarketingRoutes = [
  "",
  "/projects",
  "/services",
  "/about",
  "/process",
  "/contact",
  "/privacy",
  "/terms",
] as const;
