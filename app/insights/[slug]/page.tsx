import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InsightShell from "../../components/InsightShell";
import JsonLd from "../../components/JsonLd";
import { getAllInsights, getInsight } from "../../lib/insights";
import { AGENT, SITE_URL } from "../../lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllInsights().map((i) => ({ slug: i.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const i = getInsight(slug);
  if (!i) return {};
  return {
    title: i.title,
    description: i.answer,
    alternates: { canonical: `/insights/${i.slug}` },
    openGraph: { type: "article", title: i.title, description: i.answer, publishedTime: i.date },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const i = getInsight(slug);
  if (!i) notFound();

  const url = `${SITE_URL}/insights/${i.slug}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: i.title,
    description: i.answer,
    datePublished: i.date,
    dateModified: i.updated ?? i.date,
    mainEntityOfPage: url,
    inLanguage: "en-MY",
    keywords: i.tags.join(", "),
    author: { "@id": `${SITE_URL}/#jared`, "@type": "Person", name: AGENT.name, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#agent` },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [{ q: i.question, a: i.answer }, ...i.faqs].map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <InsightShell>
      <JsonLd data={article} />
      <JsonLd data={faq} />
      <article className="insight-wrap">
        <p className="kicker">
          <Link href="/insights">Insights</Link> · <time dateTime={i.date}>{i.date}</time>
        </p>
        <h1>{i.title}</h1>
        <div className="insight-answer">
          <strong>{i.question}</strong>
          <p>{i.answer}</p>
        </div>
        {i.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body.map((p, n) => (
              <p key={n}>{p}</p>
            ))}
          </section>
        ))}
        {i.faqs.length > 0 && (
          <section>
            <h2>FAQ</h2>
            {i.faqs.map((f) => (
              <div className="insight-faq" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </section>
        )}
        {i.sources && i.sources.length > 0 && (
          <section className="insight-sources">
            <h2>Sources</h2>
            <ul>
              {i.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
        <p className="insight-byline">
          Written by {AGENT.name}, {AGENT.jobTitle} ({AGENT.ren}), {AGENT.roles.join(", ")}. This is general
          information, not legal or tax advice.
        </p>
      </article>
    </InsightShell>
  );
}
