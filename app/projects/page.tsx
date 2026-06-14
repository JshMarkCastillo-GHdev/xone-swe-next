import type { Metadata } from "next";

import { ProjectsPageContent } from "@/features/projects/components/ProjectsPageContent";
import { BRAND_NAME } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Projects",
  description: `View software projects delivered by ${BRAND_NAME}. Email us to discuss your next build.`,
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
