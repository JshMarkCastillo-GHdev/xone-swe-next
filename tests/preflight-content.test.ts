import { describe, expect, it } from "vitest";

import {
  PREFLIGHT_CTA_LABEL,
  PREFLIGHT_OBJECTIVES,
  PREFLIGHT_REASONS,
  PREFLIGHT_TIMING,
} from "@/features/preflight/data/preflight-content";

describe("preflight content", () => {
  it("defines three objectives", () => {
    expect(PREFLIGHT_OBJECTIVES).toHaveLength(3);
    expect(PREFLIGHT_OBJECTIVES[0]).toContain("clarity");
  });

  it("defines four reasons with title and description", () => {
    expect(PREFLIGHT_REASONS).toHaveLength(4);
    for (const reason of PREFLIGHT_REASONS) {
      expect(reason.title.length).toBeGreaterThan(0);
      expect(reason.description.length).toBeGreaterThan(0);
    }
  });

  it("uses the approved CTA label", () => {
    expect(PREFLIGHT_CTA_LABEL).toBe("Start Building with XONE");
  });

  it("exposes positive timing values", () => {
    expect(PREFLIGHT_TIMING.logoTotalMs).toBeGreaterThan(0);
    expect(PREFLIGHT_TIMING.fadeInMs).toBeGreaterThan(0);
    expect(PREFLIGHT_TIMING.fadeOutMs).toBeGreaterThan(0);
    expect(PREFLIGHT_TIMING.exitFadeMs).toBeGreaterThan(0);
    expect(PREFLIGHT_TIMING.backgroundFadeMs).toBeGreaterThan(0);
    expect(PREFLIGHT_TIMING.objectiveItemFadeInMs).toBeGreaterThan(0);
    expect(PREFLIGHT_TIMING.objectiveItemFadeOutMs).toBeGreaterThan(0);
    expect(PREFLIGHT_TIMING.objectiveStaggerMs).toBeGreaterThan(0);
    expect(PREFLIGHT_TIMING.objectiveHoldMs).toBeGreaterThan(0);
    expect(PREFLIGHT_TIMING.reasonItemFadeInMs).toBeGreaterThan(0);
    expect(PREFLIGHT_TIMING.ctaLoadingMs).toBeGreaterThan(0);
  });
});
