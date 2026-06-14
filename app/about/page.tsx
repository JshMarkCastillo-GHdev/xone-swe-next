import {
  createPlaceholderMetadata,
  PlaceholderPage,
} from "@/components/placeholder-page";

export const metadata = createPlaceholderMetadata({
  title: "About",
  description: "Learn about Xone Software Development and our team.",
});

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About"
      description="About page content will be ported from xone-swe-web in Week 2."
    />
  );
}
