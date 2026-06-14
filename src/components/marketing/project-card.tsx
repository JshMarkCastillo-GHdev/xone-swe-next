import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  projectCategories,
  type Project,
} from "@/features/projects/data/projects";

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
        "group flex flex-col rounded-lg border border-border bg-background p-5 sm:p-6",
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
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      {!isCompact ? (
        <>
          <p className="mt-4 text-sm leading-relaxed text-foreground/85">
            <span className="font-medium text-foreground">Challenge: </span>
            {project.challenge}
          </p>
          <div className="mt-4">
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
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
          {project.outcomes[0]}
        </p>
      )}

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags
          .slice(0, isCompact ? 3 : project.tags.length)
          .map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
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
