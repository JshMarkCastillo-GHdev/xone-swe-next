import { describe, expect, it } from "vitest";

import {
  buildContactMailto,
  CONTACT_EMAIL,
} from "@/lib/brand";
import { projects } from "@/features/projects/data/projects";

describe("buildContactMailto", () => {
  it("builds a mailto link with default subject", () => {
    expect(buildContactMailto()).toBe(
      `mailto:${CONTACT_EMAIL}?subject=Project+inquiry`,
    );
  });

  it("encodes custom subject", () => {
    expect(buildContactMailto("Hello & welcome")).toContain(
      "subject=Hello+%26+welcome",
    );
  });
});

describe("projects data", () => {
  it("exposes at least one showcase project", () => {
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0]?.id).toBeTruthy();
    expect(projects[0]?.title).toBeTruthy();
  });
});
