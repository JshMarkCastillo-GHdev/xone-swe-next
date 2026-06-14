import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildContactMailto } from "@/lib/brand";

export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="w-full bg-xone-section px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="cta-heading"
          className="mb-4 text-2xl font-bold text-foreground sm:mb-6 sm:text-3xl lg:text-4xl"
        >
          Let&apos;s Build Something Great Together!
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:mb-12 sm:text-lg">
          Ready to transform your ideas into powerful digital solutions? View
          our work or email us to start the conversation.
        </p>
        <div className="mx-auto mb-6 flex max-w-md flex-col justify-center gap-3 sm:mb-8 sm:flex-row">
          <Link
            href="/projects"
            className={cn(buttonVariants({ size: "lg" }), "h-11 px-6 font-semibold")}
          >
            View Our Projects
          </Link>
          <a
            href={buildContactMailto("Project inquiry")}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 px-6 font-semibold",
            )}
          >
            Email Us
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          <em>We respond within one business day.</em>
        </p>
      </div>
    </section>
  );
}
