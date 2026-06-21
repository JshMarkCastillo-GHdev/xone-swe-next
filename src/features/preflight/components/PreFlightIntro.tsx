"use client";

import Image from "next/image";

import { PreflightObjectivesStep } from "@/features/preflight/components/PreflightObjectivesStep";
import { PreflightReasonsStep } from "@/features/preflight/components/PreflightReasonsStep";
import { PreFlightStep } from "@/features/preflight/components/PreFlightStep";
import { usePreflightSequence } from "@/features/preflight/hooks/usePreflightSequence";
import { brandAssets } from "@/lib/brand";
import { cn } from "@/lib/utils";

const logoClassName = "h-auto w-60 max-w-[85vw] sm:w-72 md:w-80";

export function PreFlightIntro() {
  const {
    mounted,
    step,
    stepVisible,
    backgroundVisible,
    prefersReducedMotion,
    dismiss,
    skipIntro,
    completeObjectives,
  } = usePreflightSequence();

  if (!mounted || step === "done") {
    return null;
  }

  const isOverlayVisible = backgroundVisible && step !== "exiting";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preflight-heading"
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-xone-navy px-4 py-10 text-xone-light sm:px-6",
        "motion-safe:transition-opacity motion-safe:duration-1000 motion-safe:ease-in-out",
        isOverlayVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <button
        type="button"
        onClick={skipIntro}
        className={cn(
          "absolute top-4 right-4 text-sm text-xone-light/70 underline-offset-4 transition-colors hover:text-xone-light hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-xone-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-xone-navy",
          "motion-safe:transition-opacity motion-safe:duration-700 motion-safe:ease-in-out",
          isOverlayVisible && stepVisible ? "opacity-100" : "opacity-0",
        )}
      >
        Skip intro
      </button>

      {step === "logo" && (
        <PreFlightStep visible={stepVisible} className="flex justify-center">
          <Image
            src={brandAssets.logoInverse}
            alt="Xone Software Development"
            width={320}
            height={88}
            priority
            className={logoClassName}
          />
        </PreFlightStep>
      )}

      {step === "objectives" && (
        <div className="w-full max-w-lg">
          <PreflightObjectivesStep
            onComplete={completeObjectives}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>
      )}

      {(step === "reasons" || step === "exiting") && (
        <PreFlightStep
          visible={stepVisible && step !== "exiting"}
          animate={!prefersReducedMotion}
          className="flex flex-col items-center"
        >
          {prefersReducedMotion ? (
            <Image
              src={brandAssets.logoInverse}
              alt="Xone Software Development"
              width={320}
              height={88}
              priority
              className={cn(logoClassName, "mb-8")}
            />
          ) : null}

          <PreflightReasonsStep
            onDismiss={dismiss}
            prefersReducedMotion={prefersReducedMotion}
          />
        </PreFlightStep>
      )}
    </div>
  );
}
