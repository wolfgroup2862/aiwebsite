import type { ReactNode } from "react";
import Link from "next/link";
import PropertyCarousel from "./property-carousel";
import { propertyGroups } from "./lib/listings";
import JsonLd from "./components/JsonLd";
import { getAllInsights } from "./lib/insights";
import { CORE_FAQS } from "./lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CORE_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

function QuickAnswers() {
  const latest = getAllInsights().slice(0, 3);
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <JsonLd data={faqSchema} />
      <SectionLabel number="04">Quick answers</SectionLabel>
      <h2 id="faq-title">Questions,<br /><em>answered.</em></h2>
      <div className="faq-grid">
        {CORE_FAQS.map((f) => (
          <article key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </article>
        ))}
      </div>
      {latest.length > 0 && (
        <div className="faq-insights">
          <p className="faq-insights-label">Latest insights</p>
          <ul>
            {latest.map((i) => (
              <li key={i.slug}><Link href={`/insights/${i.slug}`}>{i.title}</Link></li>
            ))}
          </ul>
          <Link className="faq-more" href="/insights">All insights →</Link>
        </div>
      )}
    </section>
  );
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function PropertyPortfolio() {
  return (
    <section className="property-portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <header className="portfolio-intro editorial-heading">
        <SectionLabel number="03">Selected properties</SectionLabel>
        <div className="editorial-heading-copy">
          <p>Across commercial, industrial and residential markets.</p>
          <h2 id="portfolio-title">Property,<br /><em>considered.</em></h2>
        </div>
        <dl className="portfolio-stats" aria-label="Property portfolio highlights">
          <div><dt>100+</dt><dd>Current listings</dd></div>
          <div><dt>06</dt><dd>Selected listings</dd></div>
          <div><dt>03</dt><dd>Property sectors</dd></div>
          <div><dt>REN 07483</dt><dd>Registered negotiator</dd></div>
        </dl>
      </header>

      <PropertyCarousel groups={propertyGroups} />

      <a className="portfolio-cta" href="https://www.iproperty.com.my/property-agent/jared-wong-623987/" target="_blank" rel="noreferrer">
        <span>Explore Jared&apos;s current public portfolio</span>
        <strong>View all listings</strong>
        <i aria-hidden="true">↗</i>
      </a>
      <p className="portfolio-note">Selected from Jared Wong&apos;s public iProperty portfolio · Reviewed 15 August 2026 · Prices, specifications and availability may change—view iProperty for current details.</p>
    </section>
  );
}

function ContactJared() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <SectionLabel number="05">Contact Jared</SectionLabel>
      <div className="contact-heading">
        <p>Buying, selling or leasing?</p>
        <h2 id="contact-title">Your next property move<br /><em>starts with a conversation.</em></h2>
      </div>
      <div className="contact-actions" aria-label="Contact options">
        <a className="contact-button contact-button--whatsapp" href="https://wa.me/60122971898?text=Hi%20Jared%2C%20I%27d%20like%20to%20discuss%20a%20property." target="_blank" rel="noreferrer">
          <span>WhatsApp Jared</span><strong aria-hidden="true">↗</strong>
        </a>
        <a className="contact-button contact-button--call" href="tel:+60122971898">
          <span>Call now</span><strong aria-hidden="true">↗</strong>
        </a>
      </div>
      <div className="contact-footer">
        <a className="contact-logo" href="#top" aria-label="Wolf Group, back to top">
          <img src="/wolf-group-logo-transparent.png" alt="Wolf Group — Stronger Together" width="3050" height="721" />
        </a>
        <p className="contact-number"><span>Jared Wong · REN 07483</span><a href="tel:+60122971898">+60 12-297 1898</a></p>
        <a href="#top" className="back-to-top">Back to top ↑</a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">Skip to main content</a>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-portrait" aria-hidden="true">
            <img src="/jared-cover.jpg" alt="" width="1280" height="664" fetchPriority="high" />
          </div>
          <header className="site-header">
            <a className="wordmark" href="#top" aria-label="Wolf Group, back to top">
              <img src="/wolf-group-logo-transparent.png" alt="Wolf Group — Stronger Together" width="3050" height="721" />
            </a>
            <nav aria-label="Primary navigation">
              <Link href="/news">News</Link>
              <a href="#credentials">Profile</a>
              <a href="#recognition">Recognition</a>
              <a href="#portfolio">Properties</a>
              <Link href="/properties">All listings</Link>
              <a href="#faq">FAQ</a>
              <Link href="/insights">Insights</Link>
            </nav>
            <a className="header-contact" href="#contact">Let&apos;s connect</a>
          </header>

          <div className="hero-content">
            <p className="hero-kicker">Jared Wong · REN 07483</p>
            <h1 id="hero-title"><span>Jared</span> <span>Wong</span></h1>
            <p className="hero-specialty">Industrial &amp; Commercial Property Specialist</p>
            <div className="hero-roles">
              <span>Associate Leader · The Roof Realty</span>
              <span>Founder · Wolf Group</span>
            </div>
            <a className="hero-cta" href="#credentials">Discover Jared&apos;s profile <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-location">Puchong · Klang Valley · Malaysia</p>
        </section>

        <section className="credentials" id="credentials" aria-labelledby="credentials-title">
          <div className="credentials-intro">
            <SectionLabel number="01">Profile</SectionLabel>
            <div className="credentials-title">
              <p>Industrial, commercial and people-focused.</p>
              <h2 id="credentials-title">Built for business.<br /><em>Led with people.</em></h2>
            </div>
            <div className="credentials-copy">
              <p className="credentials-lead">Jared Wong Kim Loong (REN 07483) is an Industrial &amp; Commercial Property Specialist with more than a decade of real estate experience.</p>
              <p>His background spans new projects and sub-sales, with roots in Cyberjaya landed property and an expanding focus on factories, warehouses, commercial premises and land. As Associate Leader at The Roof Realty and Founder of Wolf Group, he combines hands-on market work with team development.</p>
            </div>
            <dl className="profile-facts" aria-label="Jared Wong profile highlights">
              <div><dt>10+</dt><dd>Years in real estate</dd></div>
              <div><dt>REN 07483</dt><dd>Registered negotiator</dd></div>
              <div><dt>2021</dt><dd>Wolf Group founded</dd></div>
              <div><dt>ATLP</dt><dd>Knowledge sharing</dd></div>
            </dl>
          </div>

          <div className="credentials-roles" aria-label="Current leadership roles">
            <article className="role-card role-card--roof">
              <img src="/trr-associate-leader.jpg" alt="Jared Wong's promotion poster for Associate Leader at The Roof Realty." width="2600" height="1462" loading="lazy" decoding="async" />
              <div className="role-card-caption"><span>The Roof Realty</span><h3>Associate Leader</h3></div>
            </article>
            <article className="role-card role-card--wolf">
              <img src="/wolf-group-team.jpg" alt="Jared Wong surrounded by members of the Wolf Group team." width="2600" height="1733" loading="lazy" decoding="async" />
              <div className="role-card-caption"><span>Wolf Group · Stronger Together</span><h3>Founder</h3></div>
            </article>
          </div>
        </section>

        <section className="recognition" id="recognition" aria-labelledby="recognition-title">
          <header className="recognition-heading">
            <SectionLabel number="02">Recognition</SectionLabel>
            <h2 id="recognition-title">Consistency,<br /><em>recognised.</em></h2>
            <p>TRR Multi Million Agent recognition across 2023, 2024 and 2025.</p>
          </header>
          <ul className="award-posters" aria-label="Jared Wong's TRR Multi Million Agent posters" tabIndex={0}>
            <li className="award-poster-card"><img src="/jared-mma-2023.jpg" alt="Jared Wong's 2023 MMA achiever poster for The Roof Realty Puchong." width="1023" height="1280" loading="lazy" decoding="async" /><span>2023</span></li>
            <li className="award-poster-card"><img src="/jared-mma-2024.jpg" alt="Jared Wong's 2024 MMA achiever poster for The Roof Realty Puchong." width="1680" height="2000" loading="lazy" decoding="async" /><span>2024</span></li>
            <li className="award-poster-card"><img src="/jared-mma-2025.jpg" alt="Jared Wong's 2025 MMA achiever poster for The Roof Realty Puchong." width="905" height="1280" loading="lazy" decoding="async" /><span>2025</span></li>
          </ul>
        </section>

        <PropertyPortfolio />
        <QuickAnswers />
        <ContactJared />
      </main>
    </div>
  );
}
