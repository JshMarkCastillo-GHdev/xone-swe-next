export type ProjectCategory =
  | "web-app"
  | "mobile-app"
  | "automation"
  | "marketing-site";

export type Project = {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  /** Optional external demo or repo URL */
  href?: string;
  tags: readonly string[];
};

export const projectCategories: Record<ProjectCategory, string> = {
  "web-app": "Web application",
  "mobile-app": "Mobile app",
  automation: "Automation",
  "marketing-site": "Marketing site",
};

/** Showcase projects — PM can replace with real case studies. */
export const projects: readonly Project[] = [
  {
    id: "xone-marketing-next",
    title: "Xone marketing site (Next.js)",
    summary:
      "Modern App Router rebuild with Xone branding, static pages, and email-first lead capture.",
    category: "marketing-site",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    id: "lead-capture-platform",
    title: "Lead capture platform",
    summary:
      "Validated contact flows, rate-limited APIs, and webhook integrations for sales teams.",
    category: "web-app",
    tags: ["React", "Express", "Zod", "Webhooks"],
  },
  {
    id: "ops-automation",
    title: "Operations automation suite",
    summary:
      "Workflow automation connecting CRM, notifications, and reporting for distributed teams.",
    category: "automation",
    tags: ["Node.js", "APIs", "Integrations"],
  },
  {
    id: "mobile-field-app",
    title: "Field service mobile app",
    summary:
      "Offline-capable mobile experience for technicians with sync and photo capture.",
    category: "mobile-app",
    tags: ["React Native", "Offline-first"],
  },
] as const;
