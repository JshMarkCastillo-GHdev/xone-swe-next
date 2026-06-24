import Link from "next/link";
import { Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildContactMailto, BRAND_NAME, CONTACT_EMAIL } from "@/lib/brand";
import { ProjectsCarousel } from "@/features/projects/components/ProjectsCarousel";

export function ProjectsPageContent() {
  return (
    <div className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-xone-violet">
            Portfolio
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our projects
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Case studies from {BRAND_NAME}. Swipe or use the dots to browse —
            the center card is in focus. Email us if something matches your
            needs.
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
      </div>

      <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-hidden">
        <ProjectsCarousel />
      </div>

      <div className="mx-auto max-w-6xl">
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
