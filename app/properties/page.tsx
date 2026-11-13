import type { Metadata } from "next";
import InsightShell from "../components/InsightShell";
import JsonLd from "../components/JsonLd";
import { allListings, IPROPERTY_PROFILE, LISTINGS_REVIEWED, propertyGroups } from "../lib/listings";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Jared Wong's Property Listings – Puchong Factories, Shops & Commercial Units",
  description:
    "Factories, shop lots, commercial units and selected homes for sale and rent in Puchong, Kinrara and Cyberjaya, listed by Jared Wong (REN 07483). WhatsApp 012-297 1898.",
  alternates: { canonical: "/properties" },
};

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Jared Wong's property listings",
  url: `${SITE_URL}/properties`,
  numberOfItems: allListings.length,
  itemListElement: allListings.map((l, n) => ({
    "@type": "ListItem",
    position: n + 1,
    url: l.href,
    name: `${l.title} ${l.intent.toLowerCase()} – ${l.location} (${l.price}, ${l.area})`,
  })),
};

export default function PropertiesPage() {
  return (
    <InsightShell>
      <JsonLd data={listSchema} />
      <section className="listings-wrap">
        <p className="kicker">All listings</p>
        <h1>Jared Wong&apos;s properties</h1>
        <p className="insight-lead">
          {allListings.length} properties from Jared&apos;s public iProperty profile, reviewed {LISTINGS_REVIEWED}. Prices and
          availability may change, so open the iProperty listing or WhatsApp Jared for the latest.
        </p>
        <nav className="listings-filter" aria-label="Property type">
          {propertyGroups.map((g) => (
            <a key={g.category} href={`#${g.category.toLowerCase()}`}>
              {g.category} <span>{g.listings.length}</span>
            </a>
          ))}
        </nav>
        {propertyGroups.map((g) => (
          <section key={g.category} id={g.category.toLowerCase()} className="listings-group">
            <h2>{g.category}</h2>
            <p className="listings-group-desc">{g.description}</p>
            <ul className="listings-grid">
              {g.listings.map((l) => (
                <li key={l.id}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.image} alt={l.imageAlt} loading="lazy" decoding="async" />
                    <div>
                      <span className="listings-tag">{l.intent}</span>
                      <p className="listings-loc">{l.location}</p>
                      <h3>{l.title}</h3>
                      <p className="listings-price">{l.price}</p>
                      <p className="listings-meta">{l.area} · {l.detail}</p>
                      <span className="listings-link">View on iProperty ↗</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <p className="listings-more">
          <a href={IPROPERTY_PROFILE} target="_blank" rel="noreferrer">See Jared&apos;s full iProperty profile ↗</a>
        </p>
      </section>
    </InsightShell>
  );
}
