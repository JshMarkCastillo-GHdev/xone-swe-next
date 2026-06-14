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

  it("includes expected profile links per member", () => {
    const [jb, ryan, josh] = teamMembers;

    expect(jb.linkedin).toContain("linkedin.com/in/jhonbertvillarosa");
    expect(jb.portfolio).toBe("https://xone-swe-next.vercel.app/");
    expect(jb.github).toBeUndefined();

    expect(ryan.linkedin).toContain("linkedin.com/in/ryan-rey-magdalita");
    expect(ryan.github).toBe("https://github.com/ryMGDLT");
    expect(ryan.portfolio).toBeUndefined();

    expect(josh.linkedin).toContain("linkedin.com/in/castillo-joshua-mark");
    expect(josh.github).toBe("https://github.com/JshMarkCastillo-GHdev");
    expect(josh.portfolio).toBe("https://joshua-fs-dev.vercel.app/");
  });
});
