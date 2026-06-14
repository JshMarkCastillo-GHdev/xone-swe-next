import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BRAND_NAME, buildContactMailto } from "@/lib/brand";

export function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="border-b border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl motion-safe:animate-fade-in-up">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-xone-violet">
          {BRAND_NAME}
        </p>
        <h1
          id="home-hero-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-tight"
        >
          Custom software for teams that need clarity and reliable delivery
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          We design and build web apps, mobile experiences, and automation —
          with a direct line to the engineers who ship your product.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/projects"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
          >
            View our projects
          </Link>
          <a
            href={buildContactMailto("Project inquiry")}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto",
            )}
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
