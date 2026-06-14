import type { Metadata } from "next";

import { BRAND_NAME, brandAssets } from "@/lib/brand";
import { getSiteUrl } from "@/lib/site";

export const DEFAULT_SITE_DESCRIPTION =
  "Xone Software Development builds custom web and mobile software with a clear process and reliable delivery.";

type PageMetadataOptions = {
  /** Page title without brand suffix — root layout template adds `| ${BRAND_NAME}`. */
  title?: string;
  description?: string;
  /** Path including leading slash, e.g. `/projects`. Empty string for home. */
  path?: string;
};

function resolveAbsoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (path === "" || path === "/") {
    return base;
  }
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Shared Open Graph image — PNG for broad platform support. */
export function getDefaultOgImage(): NonNullable<
  Metadata["openGraph"]
>["images"] {
  return [
    {
      url: brandAssets.iconPng,
      width: 256,
      height: 256,
      alt: BRAND_NAME,
    },
  ];
}

export function createRootMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: BRAND_NAME,
      template: `%s | ${BRAND_NAME}`,
    },
    description: DEFAULT_SITE_DESCRIPTION,
    icons: {
      icon: [{ url: brandAssets.icon, type: "image/svg+xml" }],
      shortcut: brandAssets.icon,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: BRAND_NAME,
      title: BRAND_NAME,
      description: DEFAULT_SITE_DESCRIPTION,
      url: siteUrl,
      images: getDefaultOgImage(),
    },
    twitter: {
      card: "summary",
      title: BRAND_NAME,
      description: DEFAULT_SITE_DESCRIPTION,
      images: [brandAssets.iconPng],
    },
  };
}

export function createPageMetadata({
  title,
  description = DEFAULT_SITE_DESCRIPTION,
  path = "",
}: PageMetadataOptions): Metadata {
  const url = resolveAbsoluteUrl(path);
  const pageTitle = title ?? BRAND_NAME;

  return {
    title,
    description,
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: BRAND_NAME,
      type: "website",
      images: getDefaultOgImage(),
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description,
      images: [brandAssets.iconPng],
    },
  };
}
