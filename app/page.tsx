import Link from "next/link";

import { BRAND_NAME, buildContactMailto } from "@/lib/brand";

export default function HomePage() {
  return (
    <section className="bg-xone-hero-gradient px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-xone-violet">
          {BRAND_NAME}
        </p>
        <h1 className="text-gradient-xone text-4xl font-bold tracking-tight sm:text-5xl">
          Software development with clarity and momentum
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Explore our work, then reach out by email when you are ready to talk
          about your project.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            View Our Projects
          </Link>
          <a
            href={buildContactMailto("Project inquiry")}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-5 text-sm font-medium hover:bg-muted"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
