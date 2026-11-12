import type { MetadataRoute } from "next";
import { getAllInsights } from "./lib/insights";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const insights = getAllInsights();
  const latest = insights[0]?.updated ?? insights[0]?.date;
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/insights`, lastModified: latest, changeFrequency: "daily", priority: 0.9 },
    ...insights.map((i) => ({
      url: `${SITE_URL}/insights/${i.slug}`,
      lastModified: i.updated ?? i.date,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
