import {
  createPlaceholderMetadata,
  PlaceholderPage,
} from "@/components/placeholder-page";

export const metadata = createPlaceholderMetadata({
  title: "Terms of Service",
  description: "Terms of service for Xone Software Development.",
});

export default function TermsPage() {
  return (
    <PlaceholderPage
      title="Terms of Service"
      description="Legal copy placeholder — PM-approved content lands in Week 3."
    />
  );
}
