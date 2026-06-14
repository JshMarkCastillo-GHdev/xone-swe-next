import type { Metadata } from "next";

import { AboutPageContent } from "@/features/about/components/AboutPageContent";
import { BRAND_NAME } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${BRAND_NAME} — our story, values, and approach.`,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
