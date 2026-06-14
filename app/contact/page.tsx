import type { Metadata } from "next";

import { ContactPageContent } from "@/features/contact/components/ContactPageContent";
import { BRAND_NAME } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${BRAND_NAME} by email to discuss your software project.`,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
