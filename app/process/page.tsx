import type { Metadata } from "next";

import { ProcessPageContent } from "@/features/process/components/ProcessPageContent";
import { BRAND_NAME } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Process",
  description: `How ${BRAND_NAME} delivers projects from discovery through support.`,
};

export default function ProcessPage() {
  return <ProcessPageContent />;
}
