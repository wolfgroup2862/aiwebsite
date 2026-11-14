// Malaysia commercial & industrial property news, updated daily.
// Newest first. Summaries are written in our own words from the linked
// source; open the source for the full story. Cover images are our own
// graphics (category + headline figure), not the publisher's photos.

export type NewsCategory = "Industrial" | "Commercial" | "Market";

export type NewsItem = {
  slug: string;
  date: string; // YYYY-MM-DD, the source's publication date
  category: NewsCategory;
  title: string;
  figure: string; // the headline number shown on the cover image
  figureLabel: string;
  summary: string;
  whyItMatters?: string;
  source: string;
  sourceUrl: string;
};

export const NEWS_UPDATED = "2026-11-14";

export const news: NewsItem[] = [
  {
    slug: "3q2026-property-transactions-commercial-up",
    date: "2026-11-13",
    category: "Market",
    title: "Malaysia property transactions up 0.7% in 3Q2026; commercial segment up 5.3%",
    figure: "+5.3%",
    figureLabel: "Commercial, y-o-y",
    summary:
      "JPPH's Third Quarter 2026 Property Market Report recorded 108,990 transactions worth RM60.31 billion nationwide, 0.7% more than 3Q2025. The commercial subsector grew 5.3% year-on-year.",
    whyItMatters:
      "Commercial demand is still growing faster than the overall market, which supports shop-lot and commercial-unit activity in areas like Puchong.",
    source: "The Star (Bernama), citing JPPH",
    sourceUrl:
      "https://www.thestar.com.my/business/business-news/2026/11/13/malaysia039s-property-transactions-record-07-growth-in-3q",
  },
  {
    slug: "industrial-forum-estates-for-occupiers",
    date: "2026-11-11",
    category: "Industrial",
    title: "Industrial players call for estates built around manufacturers and local supply chains",
    figure: "20–50 ac",
    figureLabel: "Plot sizes requested",
    summary:
      "At the Malaysia Industrial Forum 2026, panellists urged developers to offer large manufacturing plots of 20 to 50 acres in established areas and cautioned against relying too heavily on data centres. Entrepreneur Development Minister Steven Sim said foreign investment should create quality jobs and supplier opportunities for local SMEs.",
    whyItMatters:
      "Manufacturers and their local suppliers remain the core users of factories and industrial land in Selangor.",
    source: "EdgeProp Daily Digest",
    sourceUrl: "https://www.edgeprop.my/daily-digest/2026-11-11",
  },
  {
    slug: "menara-apb-rm45m-disposal",
    date: "2026-11-11",
    category: "Commercial",
    title: "APB Resources to sell vacant Menara APB for RM45 million",
    figure: "RM45M",
    figureLabel: "Sale price",
    summary:
      "APB Resources is selling the vacant Menara APB building to Darul Ehsan Investment Group for RM45 million, 2.17% below its valuation. The sale still needs shareholder approval and state consent.",
    source: "EdgeProp Daily Digest",
    sourceUrl: "https://www.edgeprop.my/daily-digest/2026-11-11",
  },
];

export function getAllNews(): NewsItem[] {
  return [...news].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
