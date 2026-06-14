export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  /** Path under `public/` */
  photoSrc: string;
  /** External profile links — omit when not provided. */
  linkedin?: string;
  github?: string;
  portfolio?: string;
};

export const teamMembers: readonly TeamMember[] = [
  {
    name: "Engr. Jhon Bert Villarosa",
    role: "Technical Lead / Project Manager",
    initials: "JB",
    photoSrc: "/assets/team_photo/JB_PHOTO.jpg",
    linkedin: "https://www.linkedin.com/in/jhonbertvillarosa/",
    portfolio: "https://xone-swe-next.vercel.app/",
  },
  {
    name: "Engr. Ryan Rey Magdalita",
    role: "Software Engineer / Lead Developer",
    initials: "RR",
    photoSrc: "/assets/team_photo/RYAN_PHOTO.jpg",
    linkedin: "https://www.linkedin.com/in/ryan-rey-magdalita-416b29222/",
    github: "https://github.com/ryMGDLT",
  },
  {
    name: "Engr. Joshua Mark Castillo",
    role: "Software Engineer / Full Stack Developer",
    initials: "JM",
    photoSrc: "/assets/team_photo/JOSH_PHOTO.jpg",
    linkedin: "https://www.linkedin.com/in/castillo-joshua-mark-76b0b4370/",
    github: "https://github.com/JshMarkCastillo-GHdev",
    portfolio: "https://joshua-fs-dev.vercel.app/",
  },
] as const;
