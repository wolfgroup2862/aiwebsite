import type { Metadata } from "next";
import InsightShell from "../components/InsightShell";
import JsonLd from "../components/JsonLd";
import { allListings, IPROPERTY_PROFILE, LISTINGS_REVIEWED, propertyGroups } from "../lib/listings";
import { SITE_URL } from "../lib/site";

const CATEGORY_ZH: Record<string, string> = { Commercial: "商业", Industrial: "工业", Residential: "住宅" };

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
          <section key={g.category} id={g.category.toLowerCase()} className="shelf" aria-labelledby={`shelf-${g.category}`}>
            <header className="shelf-head">
              <h2 id={`shelf-${g.category}`}>{g.category}</h2>
              <p>{CATEGORY_ZH[g.category]} · {g.listings.length} listings</p>
            </header>
            <ol className="shelf-row">
              {g.listings.map((l, n) => (
                <li key={l.id} className={n === 0 ? "shelf-card is-first" : "shelf-card"}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    <div className="shelf-card-top">
                      <span className="shelf-num">{String(n + 1).padStart(2, "0")}</span>
                      <span className="shelf-label">
                        <b>{l.intent}</b>
                        <small>{l.location}</small>
                      </span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.image} alt={l.imageAlt} loading="lazy" decoding="async" />
                    <div className="shelf-card-body">
                      <h3>{l.title}</h3>
                      <p className="shelf-price">{l.price}</p>
                      <p className="shelf-meta">{l.area} · {l.detail}</p>
                    </div>
                  </a>
                </li>
              ))}
              <li className="shelf-card shelf-card--more">
                <a href={IPROPERTY_PROFILE} target="_blank" rel="noreferrer">
                  <span>More {g.category.toLowerCase()} listings</span>
                  <strong>View on iProperty ↗</strong>
                </a>
              </li>
            </ol>
          </section>
        ))}
        <p className="listings-more">
          <a href={IPROPERTY_PROFILE} target="_blank" rel="noreferrer">See Jared&apos;s full iProperty profile ↗</a>
        </p>
      </section>
    </InsightShell>
  );
}
