import type { Metadata } from "next";
import Link from "next/link";
import InsightShell from "../components/InsightShell";
import { getAllInsights } from "../lib/insights";

export const metadata: Metadata = {
  title: "Puchong Commercial & Industrial Property Insights",
  description:
    "Straight answers on renting and buying factories, warehouses, industrial land, shop lots and offices in Puchong and Selangor, by Jared Wong (REN 07483).",
  alternates: { canonical: "/insights" },
};

export default function InsightsIndex() {
  const insights = getAllInsights();
  return (
    <InsightShell>
      <section className="insight-wrap">
        <p className="kicker">Insights</p>
        <h1>Puchong commercial &amp; industrial property, answered</h1>
        <p className="insight-lead">
          Practical answers for business owners, landlords and investors, based on Jared&apos;s day-to-day work with
          factories, warehouses, land and shop lots.
        </p>
        <ul className="insight-list">
          {insights.map((i) => (
            <li key={i.slug}>
              <Link href={`/insights/${i.slug}`}>
                <time dateTime={i.date}>{i.date}</time>
                <h2>{i.title}</h2>
                <p>{i.answer}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </InsightShell>
  );
}
