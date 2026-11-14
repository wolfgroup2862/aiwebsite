import type { Metadata } from "next";
import InsightShell from "../components/InsightShell";
import JsonLd from "../components/JsonLd";
import NewsCover from "../components/NewsCover";
import { getAllNews, KEEP_DAYS, NEWS_UPDATED } from "../lib/news";
import { AGENT, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Malaysia Commercial, Industrial & Land Property News – Updated Daily",
  description:
    "Daily round-up of Malaysia commercial, industrial and land property news: factories, warehouses, industrial land, development land, offices and shop lots. Curated by Jared Wong (REN 07483), Puchong.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const items = getAllNews();
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Malaysia commercial, industrial & land property news",
    url: `${SITE_URL}/news`,
    numberOfItems: items.length,
    itemListElement: items.map((n, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "NewsArticle",
        headline: n.title,
        datePublished: n.date,
        abstract: n.summary,
        url: n.sourceUrl,
        publisher: { "@type": "Organization", name: n.source },
      },
    })),
    author: { "@type": "RealEstateAgent", name: AGENT.name },
  };

  return (
    <InsightShell>
      <JsonLd data={schema} />
      <section className="news-wrap">
        <p className="kicker">News</p>
        <h1>Malaysia commercial, industrial &amp; land property news</h1>
        <p className="insight-lead">
          A short daily round-up of what&apos;s happening with factories, warehouses, industrial and development land, offices and shop
          lots in Malaysia, from The Star, EdgeProp, iProperty, PropertyGuru and other property news sites. Each item is
          summarised in our own words with a link to the original report and stays here for {KEEP_DAYS} days. Last
          updated <time dateTime={NEWS_UPDATED}>{NEWS_UPDATED}</time>.
        </p>
        {items.length === 0 ? <p className="news-note">No new items this week yet. Check back tomorrow.</p> : null}
        <ul className="news-list">
          {items.map((n) => (
            <li key={n.slug} id={n.slug}>
              <article>
                <NewsCover item={n} />
                <div className="news-body">
                  <p className="news-meta">
                    <span className="news-tag">{n.category}</span>
                    <time dateTime={n.date}>{n.date}</time>
                  </p>
                  <h2>{n.title}</h2>
                  <p>{n.summary}</p>
                  {n.whyItMatters ? (
                    <p className="news-why">
                      <strong>Why it matters:</strong> {n.whyItMatters}
                    </p>
                  ) : null}
                  <a className="news-source" href={n.sourceUrl} target="_blank" rel="noreferrer">
                    Source: {n.source} ↗
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <p className="news-note">
          General information only, not investment advice. Figures are as reported by the source on the date shown.
        </p>
      </section>
    </InsightShell>
  );
}
