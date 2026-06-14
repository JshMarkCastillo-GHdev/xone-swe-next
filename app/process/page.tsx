import {
  createPlaceholderMetadata,
  PlaceholderPage,
} from "@/components/placeholder-page";

export const metadata = createPlaceholderMetadata({
  title: "Process",
  description: "See how Xone Software Development delivers projects.",
});

export default function ProcessPage() {
  return (
    <PlaceholderPage
      title="Process"
      description="Process page content will be ported from xone-swe-web in Week 2."
    />
  );
}
