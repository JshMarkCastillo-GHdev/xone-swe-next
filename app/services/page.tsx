import type { Metadata } from "next";

import { ServicesPageContent } from "@/features/services/components/ServicesPageContent";
import { BRAND_NAME } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Services",
  description: `${BRAND_NAME} delivers automation, UI/UX, web, and mobile development.`,
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
