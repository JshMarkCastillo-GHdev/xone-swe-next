import Link from "next/link";

import { BRAND_NAME } from "@/lib/brand";

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
          Phase 0 bootstrap — homepage sections will be ported from the v1 site
          in Week 2.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/get-started"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-5 text-sm font-medium hover:bg-muted"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
