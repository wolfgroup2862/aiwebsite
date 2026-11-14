import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InsightShell from "../../components/InsightShell";
import JsonLd from "../../components/JsonLd";
import { listingPath, listingWhatsApp } from "../../lib/listing-path";
import { allListings } from "../../lib/listings";
import { AGENT, SITE_URL } from "../../lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allListings.map((l) => ({ slug: l.slug }));
}

function findListing(slug: string) {
  return allListings.find((l) => l.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const l = findListing(slug);
  if (!l) return {};
  return {
    title: `${l.title} ${l.intent} – ${l.location} (${l.price})`,
    description: `${l.title} ${l.intent.toLowerCase()} in ${l.location}: ${l.price}, ${l.area}, ${l.detail}. Listed by ${AGENT.name} (${AGENT.ren}). WhatsApp ${AGENT.phoneDisplay}.`,
    alternates: { canonical: listingPath(l) },
    openGraph: { images: [l.image] },
  };
}

export default async function ListingPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const l = findListing(slug);
  if (!l) notFound();

  const priceNumber = (() => {
    const m = l.price.replace(/,/g, "").match(/RM\s*([\d.]+)\s*(M|K)?/i);
    if (!m) return undefined;
    const n = parseFloat(m[1]);
    const unit = m[2]?.toUpperCase();
    return Math.round(unit === "M" ? n * 1_000_000 : unit === "K" ? n * 1_000 : n);
  })();

  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: `${l.title} ${l.intent} – ${l.location}`,
    url: `${SITE_URL}${listingPath(l)}`,
    image: `${SITE_URL}${l.image}`,
    description: `${l.title} ${l.intent.toLowerCase()} in ${l.location}. ${l.area}. ${l.detail}.`,
    offers: {
      "@type": "Offer",
      priceCurrency: "MYR",
      ...(priceNumber ? { price: priceNumber } : {}),
      businessFunction: l.intent === "For Rent" ? "http://purl.org/goodrelations/v1#LeaseOut" : "http://purl.org/goodrelations/v1#Sell",
      seller: { "@type": "RealEstateAgent", name: AGENT.name, telephone: AGENT.phone },
    },
  };

  const others = allListings.filter((o) => o.slug !== l.slug && o.category === l.category);

  return (
    <InsightShell>
      <JsonLd data={schema} />
      <article className="listing-detail">
        <p className="listing-back">
          <Link href="/properties">← All listings</Link>
        </p>
        <div className="listing-detail-grid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="listing-detail-img" src={l.image} alt={l.imageAlt} />
          <div className="listing-detail-info">
            <p className="kicker">
              {l.category} · {l.intent}
            </p>
            <h1>{l.title}</h1>
            <p className="listing-detail-loc">{l.location}</p>
            <p className="listing-detail-price">{l.price}</p>
            <dl className="listing-detail-facts">
              <div>
                <dt>Type</dt>
                <dd>{l.category}</dd>
              </div>
              <div>
                <dt>Size</dt>
                <dd>{l.area}</dd>
              </div>
              <div>
                <dt>Details</dt>
                <dd>{l.detail}</dd>
              </div>
              <div>
                <dt>Listing</dt>
                <dd>{l.intent}</dd>
              </div>
            </dl>
            <div className="listing-detail-actions">
              <a className="listing-btn listing-btn--wa" href={listingWhatsApp(l)} target="_blank" rel="noreferrer">
                WhatsApp Jared about this property
              </a>
              <a className="listing-btn" href={`tel:${AGENT.phone}`}>
                Call {AGENT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {l.highlights.length ? (
          <section className="listing-detail-section">
            <h2>Highlights</h2>
            <ul>
              {l.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="listing-detail-section">
          <h2>Viewing &amp; enquiries</h2>
          <p>
            Prices, specifications and availability may change. WhatsApp {AGENT.name} ({AGENT.ren}) at{" "}
            <a href={listingWhatsApp(l)} target="_blank" rel="noreferrer">
              {AGENT.phoneDisplay}
            </a>{" "}
            for the latest details, more photos, the floor plan or to arrange a viewing.
          </p>
        </section>

        {others.length ? (
          <section className="listing-detail-section">
            <h2>More {l.category.toLowerCase()} listings</h2>
            <ul className="listing-detail-more">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={listingPath(o)}>
                    {o.title} – {o.location} · {o.price}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </InsightShell>
  );
}
