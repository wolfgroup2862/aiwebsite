import type { MetadataRoute } from "next";
import { getAllInsights } from "./lib/insights";
import { NEWS_UPDATED } from "./lib/news";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const insights = getAllInsights();
  const latest = insights[0]?.updated ?? insights[0]?.date;
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/news`, lastModified: NEWS_UPDATED, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/properties`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/insights`, lastModified: latest, changeFrequency: "daily", priority: 0.9 },
    ...insights.map((i) => ({
      url: `${SITE_URL}/insights/${i.slug}`,
      lastModified: i.updated ?? i.date,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
