import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  projectCategories,
  type Project,
} from "@/features/projects/data/projects";
import { getProjectTagClassName } from "@/features/projects/lib/project-tech-badge";

type ProjectCardProps = {
  project: Project;
  variant?: "compact" | "full";
  className?: string;
};

export function ProjectCard({
  project,
  variant = "compact",
  className,
}: ProjectCardProps) {
  const isCompact = variant === "compact";

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-lg border border-border bg-background p-5 sm:p-6",
        "motion-safe:transition-[border-color,box-shadow,transform] motion-safe:duration-200",
        "motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-xone-violet/40 motion-safe:hover:shadow-sm",
        className,
      )}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-xone-violet">
        {projectCategories[project.category]}
      </p>
      <h3
        className={cn(
          "mt-2 font-semibold text-foreground",
          isCompact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl",
        )}
      >
        {project.title}
      </h3>
      {!isCompact ? (
        <div className="mt-1 min-h-[3.75rem]">
          {project.teamCredits ? (
            <ul className="space-y-0.5 text-xs leading-snug">
              {project.teamCredits.map((member) => (
                <li key={member.name}>
                  <span className="font-medium text-xone-violet">
                    {member.name}
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    — {member.role}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p
              className={cn(
                "text-xs font-medium text-xone-violet",
                !project.leadEngineer && "invisible",
              )}
              aria-hidden={!project.leadEngineer}
            >
              Led by {project.leadEngineer ?? "Engr. Ryan Rey Magdalita"}
            </p>
          )}
        </div>
      ) : project.leadEngineer ? (
        <p className="mt-1 text-xs font-medium text-xone-violet">
          Led by {project.leadEngineer}
        </p>
      ) : project.teamCredits?.[0] ? (
        <p className="mt-1 text-xs font-medium text-xone-violet">
          Led by {project.teamCredits[0].name}
        </p>
      ) : null}

      <div className={cn("flex flex-1 flex-col", !isCompact && "min-h-0")}>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed text-muted-foreground",
            isCompact ? "flex-1" : "line-clamp-3 min-h-[4.5rem]",
          )}
        >
          {project.summary}
        </p>

        {!isCompact ? (
          <>
            <p className="mt-4 line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed text-foreground/85">
              <span className="font-medium text-foreground">Challenge: </span>
              {project.challenge}
            </p>
            <div className="mt-4 min-h-[6.75rem]">
              <p className="text-xs font-medium uppercase tracking-wider text-xone-violet">
                Outcomes
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
            {project.outcomes[0]}
          </p>
        )}
      </div>

      <div className={cn(!isCompact && "mt-auto pt-4")}>
        <div className={cn(!isCompact && "min-h-[5.75rem]")}>
          {!isCompact ? (
            <p className="text-xs font-medium uppercase tracking-wider text-xone-violet">
              Tech Stack
            </p>
          ) : null}
          <ul
            className={cn(
              "flex flex-wrap gap-2",
              isCompact ? "mt-4" : "mt-2 min-h-[4.75rem] content-start",
            )}
          >
            {project.tags
              .slice(0, isCompact ? 3 : project.tags.length)
              .map((tag) => (
                <li
                  key={tag}
                  className={cn(
                    "rounded-md border px-2 py-0.5 text-xs font-medium",
                    getProjectTagClassName(tag),
                  )}
                >
                  {tag}
                </li>
              ))}
          </ul>
        </div>

        <div
          className={cn(
            isCompact ? "mt-4" : "mt-4 min-h-12",
            !isCompact &&
              (project.href || project.liveHref) &&
              "flex flex-wrap items-center gap-x-4 gap-y-2",
          )}
        >
          {project.liveHref ? (
            <a
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-xone-violet hover:underline"
            >
              View live site
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          ) : null}
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-xone-violet hover:underline"
            >
              View repository
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

type ProjectCardLinkProps = {
  href: string;
  label?: string;
  className?: string;
};

export function ProjectsLinkButton({
  href,
  label = "View all projects",
  className,
}: ProjectCardLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "outline", size: "lg" }),
        className,
      )}
    >
      {label}
    </Link>
  );
}
