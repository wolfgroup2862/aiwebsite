import fs from "node:fs";
import path from "node:path";

// One JSON file per article in /content/insights. The daily GEO task adds a
// new file; nothing else needs to change for it to appear on the site,
// sitemap and llms.txt.

export type InsightSection = { heading: string; body: string[] };
export type InsightFaq = { q: string; a: string };
export type InsightSource = { title: string; url: string };

export type Insight = {
  slug: string;
  title: string;
  question: string;
  answer: string; // 2–3 sentence direct answer shown first (what AI quotes)
  date: string; // YYYY-MM-DD
  updated?: string;
  tags: string[];
  sections: InsightSection[];
  faqs: InsightFaq[];
  sources?: InsightSource[];
};

const DIR = path.join(process.cwd(), "content", "insights");

export function getAllInsights(): Insight[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as Insight)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getInsight(slug: string): Insight | undefined {
  return getAllInsights().find((i) => i.slug === slug);
}
