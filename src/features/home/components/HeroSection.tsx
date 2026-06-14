import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { PillButton } from "@/components/marketing/pill-button";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[85vh] w-full overflow-x-hidden bg-xone-hero-gradient px-4 py-12 sm:min-h-[95vh] sm:px-6 sm:py-16 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 hidden h-64 w-64 rounded-full bg-xone-violet/20 blur-3xl sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 hidden h-48 w-48 rounded-full bg-xone-cyan/20 blur-3xl sm:block"
      />
      <div className="mx-auto mt-12 max-w-7xl text-center sm:mt-20">
        <h1
          id="hero-heading"
          className="mb-4 text-3xl font-extrabold text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          We design and build
        </h1>
        <p className="mb-4 text-3xl font-bold text-xone-cyan sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          digital solutions
        </p>
        <p className="mb-8 text-3xl font-bold text-white sm:mb-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          that power growth
        </p>
        <p className="text-base font-medium text-xone-light sm:text-lg md:text-xl lg:text-2xl">
          From UI/UX to full-scale systems, we deliver modern applications
        </p>
        <p className="mt-2 text-base font-medium text-xone-light/90 sm:text-lg md:text-xl lg:text-2xl">
          tailored to your business needs. Transform your ideas into
        </p>
        <p className="mt-2 text-base font-medium text-xone-light/90 sm:text-lg md:text-xl lg:text-2xl">
          powerful digital experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-12">
          <Link href="/projects">
            <PillButton
              size="lg"
              variant="secondary"
              className="gap-2 bg-white px-6 py-3 text-xone-navy hover:bg-xone-light sm:px-8 sm:py-4"
            >
              View Our Projects
              <FaArrowRight className="ml-2" aria-hidden />
            </PillButton>
          </Link>
          <Link href="/contact">
            <PillButton
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent px-6 py-3 text-white hover:bg-white/10 sm:px-8 sm:py-4"
            >
              Talk to our Team
            </PillButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
