import Link from "next/link";
import { Mail } from "lucide-react";

import { ProjectCard } from "@/components/marketing/project-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildContactMailto, BRAND_NAME, CONTACT_EMAIL } from "@/lib/brand";
import { projects } from "@/features/projects/data/projects";

export function ProjectsPageContent() {
  return (
    <div className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-xone-violet">
            Portfolio
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our projects
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Case studies from {BRAND_NAME}. See something close to your needs?
            Email us — we respond within one business day.
          </p>
          <a
            href={buildContactMailto("Project inquiry from portfolio")}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-6 inline-flex gap-2",
            )}
          >
            <Mail className="size-4" aria-hidden />
            Email {CONTACT_EMAIL}
          </a>
        </header>

        <ul className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project) => (
            <li key={project.id} className="flex">
              <ProjectCard
                project={project}
                variant="full"
                className="w-full"
              />
            </li>
          ))}
        </ul>

        <aside className="mt-12 border-t border-border pt-10 text-center sm:text-left">
          <h2 className="text-xl font-semibold text-foreground">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground sm:mx-0">
            Tell us about your goals by email. We will follow up to schedule a
            discovery call.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-start">
            <a
              href={buildContactMailto()}
              className={buttonVariants({ size: "lg" })}
            >
              Send us an email
            </a>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Contact details
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
