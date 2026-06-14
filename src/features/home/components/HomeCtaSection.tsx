import { buildContactMailto } from "@/lib/brand";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeCtaSection() {
  return (
    <section
      aria-labelledby="home-cta-heading"
      className="bg-background px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="home-cta-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Ready to talk about your project?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Tell us what you are building. We respond within one business day to
          schedule a discovery conversation.
        </p>
        <a
          href={buildContactMailto("Project inquiry")}
          className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex w-full sm:w-auto")}
        >
          Email us
        </a>
      </div>
    </section>
  );
}
