import { describe, expect, it } from "vitest";

import { createHealthPayload } from "@/lib/health";

describe("health payload", () => {
  it("returns ok status shape", () => {
    const payload = createHealthPayload(new Date("2026-06-14T12:00:00.000Z"));

    expect(payload).toEqual({
      success: true,
      status: "ok",
      timestamp: "2026-06-14T12:00:00.000Z",
    });
  });
});
