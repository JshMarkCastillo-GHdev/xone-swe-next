import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  buildContactMailto,
  BRAND_NAME,
  CONTACT_EMAIL,
} from "@/lib/brand";
import {
  projectCategories,
  projects,
} from "@/features/projects/data/projects";

export function ProjectsPageContent() {
  return (
    <div className="bg-xone-section px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-xone-violet">
            Portfolio
          </p>
          <h1 className="text-3xl font-bold text-foreground sm:text-5xl">
            View our projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A sample of the kinds of software {BRAND_NAME} delivers. Interested
            in something similar? Email us — we respond within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={buildContactMailto("Project inquiry from portfolio")}
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              <Mail className="size-4" aria-hidden />
              Email {CONTACT_EMAIL}
            </a>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Contact details
            </Link>
          </div>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex flex-col rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-xone-violet">
                {projectCategories[project.category]}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                {project.title}
              </h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {project.summary}
              </p>
              <p className="mt-3 text-sm text-foreground/80">
                <span className="font-medium text-foreground">Challenge: </span>
                {project.challenge}
              </p>
              <div className="mt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-xone-violet">
                  Outcomes
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-xone-violet hover:underline"
                >
                  View project
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              ) : null}
            </li>
          ))}
        </ul>

        <aside className="mt-12 rounded-xl border border-xone-violet/20 bg-xone-violet/5 p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Tell us about your goals by email. No forms required for v1 — we
            will follow up to schedule a discovery call.
          </p>
          <a
            href={buildContactMailto()}
            className={cn(buttonVariants(), "mt-6 inline-flex")}
          >
            Send us an email
          </a>
        </aside>
      </div>
    </div>
  );
}
