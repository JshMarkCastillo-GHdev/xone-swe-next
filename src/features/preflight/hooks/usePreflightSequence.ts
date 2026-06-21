"use client";

import { useCallback, useEffect, useState } from "react";

import { PREFLIGHT_TIMING } from "@/features/preflight/data/preflight-content";

export type PreflightStep =
  | "logo"
  | "objectives"
  | "reasons"
  | "exiting"
  | "done";

function getPrefersReducedMotion(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function usePreflightSequence() {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [step, setStep] = useState<PreflightStep>("logo");
  const [stepVisible, setStepVisible] = useState(false);
  const [backgroundVisible, setBackgroundVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = getPrefersReducedMotion();
    setPrefersReducedMotion(reducedMotion);

    if (reducedMotion) {
      setStep("reasons");
      setStepVisible(true);
      setBackgroundVisible(true);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || prefersReducedMotion) {
      return;
    }

    const showFrame = window.requestAnimationFrame(() => {
      setBackgroundVisible(true);

      if (step === "logo" || step === "reasons") {
        setStepVisible(true);
      }
    });

    return () => window.cancelAnimationFrame(showFrame);
  }, [mounted, prefersReducedMotion, step]);

  useEffect(() => {
    if (!mounted || prefersReducedMotion || step !== "logo") {
      return;
    }

    const holdMs =
      PREFLIGHT_TIMING.logoTotalMs -
      PREFLIGHT_TIMING.fadeInMs -
      PREFLIGHT_TIMING.fadeOutMs;

    const fadeOutTimer = window.setTimeout(() => {
      setStepVisible(false);
    }, PREFLIGHT_TIMING.fadeInMs + holdMs);

    const nextStepTimer = window.setTimeout(() => {
      setStep("objectives");
    }, PREFLIGHT_TIMING.logoTotalMs);

    return () => {
      window.clearTimeout(fadeOutTimer);
      window.clearTimeout(nextStepTimer);
    };
  }, [mounted, prefersReducedMotion, step]);

  useEffect(() => {
    if (!mounted || step === "done") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mounted, step]);

  const completeObjectives = useCallback(() => {
    setStep("reasons");
    setStepVisible(true);
  }, []);

  const dismiss = useCallback(() => {
    setStepVisible(false);
    setBackgroundVisible(false);
    setStep("exiting");

    window.setTimeout(() => {
      setStep("done");
    }, PREFLIGHT_TIMING.exitFadeMs);
  }, []);

  return {
    mounted,
    step,
    stepVisible,
    backgroundVisible,
    prefersReducedMotion,
    dismiss,
    skipIntro: dismiss,
    completeObjectives,
  };
}
