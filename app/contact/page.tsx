import {
  createPlaceholderMetadata,
  PlaceholderPage,
} from "@/components/placeholder-page";

export const metadata = createPlaceholderMetadata({
  title: "Contact",
  description: "Contact Xone Software Development to discuss your project.",
});

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact"
      description="Contact form and API wiring arrive in Week 1 (Phase 1)."
    />
  );
}
