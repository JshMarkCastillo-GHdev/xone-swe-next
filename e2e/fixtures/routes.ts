/** Mirrors `publicMarketingRoutes` in src/lib/site.ts */
export const MARKETING_ROUTES = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About" },
  { path: "/process", label: "Process" },
  { path: "/contact", label: "Contact" },
  { path: "/privacy", label: "Privacy" },
  { path: "/terms", label: "Terms" },
] as const;

export type MarketingRoute = (typeof MARKETING_ROUTES)[number];
