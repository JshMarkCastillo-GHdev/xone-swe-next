import { describe, expect, it } from "vitest";

import { buildContactMailto, CONTACT_EMAIL } from "@/lib/brand";
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
  it("exposes showcase projects with case-study fields", () => {
    expect(projects.length).toBeGreaterThan(0);
    const first = projects[0];
    expect(first?.id).toBeTruthy();
    expect(first?.title).toBeTruthy();
    expect(first?.challenge).toBeTruthy();
    expect(first?.outcomes.length).toBeGreaterThan(0);
  });
});
