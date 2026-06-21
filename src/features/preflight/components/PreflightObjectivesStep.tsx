"use client";

import { useEffect, useState } from "react";

import {
  PREFLIGHT_OBJECTIVES,
  PREFLIGHT_TIMING,
} from "@/features/preflight/data/preflight-content";
import { cn } from "@/lib/utils";

type ObjectiveItemState = "hidden" | "visible" | "hiddenAgain";

type PreflightObjectivesStepProps = {
  onComplete: () => void;
  prefersReducedMotion?: boolean;
};

export function PreflightObjectivesStep({
  onComplete,
  prefersReducedMotion = false,
}: PreflightObjectivesStepProps) {
  const [itemStates, setItemStates] = useState<ObjectiveItemState[]>(() =>
    PREFLIGHT_OBJECTIVES.map(() =>
      prefersReducedMotion ? "visible" : "hidden",
    ),
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = window.setTimeout(onComplete, 1200);
      return () => window.clearTimeout(timer);
    }

    const timers: number[] = [];
    const {
      objectiveItemFadeInMs,
      objectiveStaggerMs,
      objectiveHoldMs,
      objectiveItemFadeOutMs,
    } = PREFLIGHT_TIMING;

    PREFLIGHT_OBJECTIVES.forEach((_, index) => {
      timers.push(
        window.setTimeout(
          () => {
            setItemStates((previous) => {
              const next = [...previous];
              next[index] = "visible";
              return next;
            });
          },
          index * (objectiveItemFadeInMs + objectiveStaggerMs),
        ),
      );
    });

    const fadeInPhase =
      PREFLIGHT_OBJECTIVES.length * objectiveItemFadeInMs +
      (PREFLIGHT_OBJECTIVES.length - 1) * objectiveStaggerMs;

    PREFLIGHT_OBJECTIVES.forEach((_, index) => {
      timers.push(
        window.setTimeout(
          () => {
            setItemStates((previous) => {
              const next = [...previous];
              next[index] = "hiddenAgain";
              return next;
            });
          },
          fadeInPhase +
            objectiveHoldMs +
            index * (objectiveItemFadeOutMs + objectiveStaggerMs),
        ),
      );
    });

    const fadeOutPhase =
      PREFLIGHT_OBJECTIVES.length * objectiveItemFadeOutMs +
      (PREFLIGHT_OBJECTIVES.length - 1) * objectiveStaggerMs;

    timers.push(
      window.setTimeout(
        onComplete,
        fadeInPhase + objectiveHoldMs + fadeOutPhase,
      ),
    );

    return () => {
      for (const timer of timers) {
        window.clearTimeout(timer);
      }
    };
  }, [onComplete, prefersReducedMotion]);

  return (
    <ul className="space-y-6 text-center sm:text-left" aria-live="polite">
      {PREFLIGHT_OBJECTIVES.map((objective, index) => (
        <li
          key={objective}
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            "motion-safe:transition-opacity motion-safe:duration-700 motion-safe:ease-in-out",
            itemStates[index] === "visible" ? "opacity-100" : "opacity-0",
          )}
        >
          {objective}
        </li>
      ))}
    </ul>
  );
}
