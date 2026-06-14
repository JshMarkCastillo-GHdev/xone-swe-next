import {
  createPlaceholderMetadata,
  PlaceholderPage,
} from "@/components/placeholder-page";

export const metadata = createPlaceholderMetadata({
  title: "Get Started",
  description: "Start your project with Xone Software Development.",
});

export default function GetStartedPage() {
  return (
    <PlaceholderPage
      title="Get Started"
      description="Lead qualification form arrives in Week 2 with shared Zod validation."
    />
  );
}
