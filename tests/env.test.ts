import { describe, expect, it } from "vitest";

import { envSchema, parseServerEnv } from "@/lib/env";

describe("envSchema", () => {
  it("applies defaults when optional values are missing", () => {
    const parsed = parseServerEnv({});

    expect(parsed.RATE_LIMIT_WINDOW_MS).toBe(900_000);
    expect(parsed.RATE_LIMIT_MAX).toBe(10);
    expect(parsed.CONTACT_WEBHOOK_URL).toBeUndefined();
  });

  it("accepts a valid webhook URL", () => {
    const parsed = envSchema.parse({
      RATE_LIMIT_WINDOW_MS: "600000",
      RATE_LIMIT_MAX: "5",
      CONTACT_WEBHOOK_URL: "https://example.com/webhook",
    });

    expect(parsed.RATE_LIMIT_WINDOW_MS).toBe(600_000);
    expect(parsed.RATE_LIMIT_MAX).toBe(5);
    expect(parsed.CONTACT_WEBHOOK_URL).toBe("https://example.com/webhook");
  });

  it("treats empty webhook URL as undefined", () => {
    const parsed = parseServerEnv({
      CONTACT_WEBHOOK_URL: "   ",
    });

    expect(parsed.CONTACT_WEBHOOK_URL).toBeUndefined();
  });
});
