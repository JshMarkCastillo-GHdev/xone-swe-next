export type ProjectCategory =
  | "web-app"
  | "mobile-app"
  | "automation"
  | "marketing-site";

export type ProjectTeamCredit = {
  name: string;
  role: string;
};

export type Project = {
  id: string;
  title: string;
  /** Short card summary */
  summary: string;
  /** Case-study context — challenge or client situation */
  challenge: string;
  /** Measurable or qualitative results */
  outcomes: readonly string[];
  category: ProjectCategory;
  /** Xone engineer highlighted on the case study */
  leadEngineer?: string;
  /** Multi-role team credits when more than one member is featured */
  teamCredits?: readonly ProjectTeamCredit[];
  /** Optional external demo or repo URL */
  href?: string;
  /** Optional live deployment URL */
  liveHref?: string;
  tags: readonly string[];
};

export const projectCategories: Record<ProjectCategory, string> = {
  "web-app": "Web application",
  "mobile-app": "Mobile app",
  automation: "Automation",
  "marketing-site": "Marketing site",
};

/** Showcase projects — PM-approved case study summaries for v1 portfolio. */
export const projects: readonly Project[] = [
  {
    id: "field-ops-dashboard",
    title: "Field operations dashboard",
    summary:
      "Unified web app for a regional services company to schedule crews, track job status, and report daily completion metrics.",
    challenge:
      "Dispatch relied on spreadsheets and group texts. Supervisors lacked a single view of open jobs, and end-of-day reporting took more than an hour.",
    outcomes: [
      "Cut daily reporting time from ~75 minutes to under 15",
      "Single dashboard for dispatch, crew leads, and operations",
      "Role-based views with audit-friendly status history",
    ],
    category: "web-app",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Role-based access"],
  },
  {
    id: "mobile-inspection-app",
    title: "Mobile inspection & photo capture",
    summary:
      "Offline-capable React Native app for technicians completing site inspections with structured checklists and photo evidence.",
    challenge:
      "Technicians worked in low-connectivity areas. Paper forms were re-keyed nightly, causing delays and data entry errors.",
    outcomes: [
      "Offline-first workflows with background sync when online",
      "Structured photo capture tied to checklist items",
      "Same-day sync to operations team without manual re-entry",
    ],
    category: "mobile-app",
    tags: ["React Native", "Offline-first", "Camera", "Sync"],
  },
  {
    id: "crm-lead-routing",
    title: "CRM lead routing automation",
    summary:
      "Automation layer connecting web inquiries, CRM records, Slack alerts, and a lightweight reporting dashboard for sales ops.",
    challenge:
      "Inbound leads arrived through multiple channels with inconsistent follow-up. Sales managers could not see response-time trends.",
    outcomes: [
      "Normalized lead intake with validation at the API boundary",
      "Automatic CRM assignment rules by territory and service line",
      "Webhook notifications and weekly response-time summary",
    ],
    category: "automation",
    tags: ["Node.js", "Zod", "Webhooks", "CRM integrations"],
  },
  {
    id: "xone-marketing-next",
    title: "Xone marketing site rebuild",
    summary:
      "Next.js App Router marketing site with Xone branding, static portfolio content, and email-first lead capture on Vercel.",
    challenge:
      "The legacy SPA required a separate backend for simple lead flows. The team wanted faster deploys, clearer SEO, and a maintainable static-first architecture.",
    outcomes: [
      "Single Next.js app on Vercel — no separate backend in v1",
      "Mobile-first pages with shared brand tokens and shadcn/ui",
      "Portfolio and contact paths optimized for email conversion",
    ],
    category: "marketing-site",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
] as const;

/** Homepage featured work — three client-facing case studies (excludes meta site entry). */
export const featuredProjects: readonly Project[] = projects
  .filter((p) => p.id !== "xone-marketing-next")
  .slice(0, 3);
