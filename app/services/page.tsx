import {
  createPlaceholderMetadata,
  PlaceholderPage,
} from "@/components/placeholder-page";

export const metadata = createPlaceholderMetadata({
  title: "Services",
  description: "Explore software development services from Xone Software Development.",
});

export default function ServicesPage() {
  return (
    <PlaceholderPage
      title="Services"
      description="Services page content will be ported from xone-swe-web in Week 2."
    />
  );
}
