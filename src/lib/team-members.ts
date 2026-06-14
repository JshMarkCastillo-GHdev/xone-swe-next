export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  /** Path under `public/` */
  photoSrc: string;
};

export const teamMembers: readonly TeamMember[] = [
  {
    name: "Engr. Jhon Bert Villarosa",
    role: "Technical Lead / Project Manager",
    initials: "JB",
    photoSrc: "/assets/team_photo/JB_PHOTO.jpg",
  },
  {
    name: "Engr. Ryan Rey Magdalita",
    role: "Software Engineer / Lead Developer",
    initials: "RR",
    photoSrc: "/assets/team_photo/RYAN_PHOTO.jpg",
  },
  {
    name: "Engr. Joshua Mark Castillo",
    role: "Software Engineer / Full Stack Developer",
    initials: "JM",
    photoSrc: "/assets/team_photo/JOSH_PHOTO.jpg",
  },
] as const;
