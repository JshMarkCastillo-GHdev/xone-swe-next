import { describe, expect, it } from "vitest";

import { teamMembers } from "@/lib/team-members";

describe("teamMembers", () => {
  it("lists the three Xone team members with photos", () => {
    expect(teamMembers).toHaveLength(3);
    expect(teamMembers.map((m) => m.name)).toEqual([
      "Engr. Jhon Bert Villarosa",
      "Engr. Ryan Rey Magdalita",
      "Engr. Joshua Mark Castillo",
    ]);
  });

  it("uses team photo assets under public/assets/team_photo/", () => {
    for (const member of teamMembers) {
      expect(member.photoSrc).toMatch(/^\/assets\/team_photo\/\w+\.jpg$/);
      expect(member.initials.length).toBeGreaterThan(0);
      expect(member.role.length).toBeGreaterThan(0);
    }
  });
});
