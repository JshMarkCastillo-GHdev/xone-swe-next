import {
  createPlaceholderMetadata,
  PlaceholderPage,
} from "@/components/placeholder-page";

export const metadata = createPlaceholderMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Xone Software Development.",
});

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      description="Legal copy placeholder — PM-approved content lands in Week 3."
    />
  );
}
