import type { Metadata } from "next";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function createPlaceholderMetadata({
  title,
  description,
}: PlaceholderPageProps): Metadata {
  return {
    title,
    description,
  };
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="bg-xone-section-gradient px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}
