import type { MetadataRoute } from "next";

import { getSiteUrl, publicMarketingRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  return publicMarketingRoutes.map((path) => ({
    url: path === "" ? baseUrl : `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
