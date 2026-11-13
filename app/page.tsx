import type { ReactNode } from "react";
import PropertyCarousel, { type PropertyGroup } from "./property-carousel";

const propertyGroups: PropertyGroup[] = [
  {
    category: "Commercial",
    description: "Shops and business premises",
    listings: [
      {
        id: "01",
        category: "Commercial",
        intent: "For Sale",
        location: "Bandar Puteri Puchong",
        title: "Freehold 4-Storey Shop",
        image: "/properties/listing-02.jpg",
        imageAlt: "Freehold four-storey shop at Bandar Puteri Puchong.",
        price: "RM 4.8M",
        area: "8,800 sq. ft.",
        detail: "Freehold · Partially fitted",
        href: "https://www.iproperty.com.my/property/puchong/potential-roi-5-mainroad-frontage-hot-high-demand-area-bandar-puteri-freehold-shop/sale-501328758/",
      },
      {
        id: "02",
        category: "Commercial",
        intent: "For Sale",
        location: "Bandar Puteri Puchong",
        title: "Freehold 1.5-Storey Shop",
        image: "/properties/listing-04.jpg",
        imageAlt: "Freehold one-and-a-half-storey shop beside IOI Rio in Bandar Puteri Puchong.",
        price: "RM 1.45M",
        area: "2,000 sq. ft.",
        detail: "Freehold · Partially fitted",
        href: "https://www.iproperty.com.my/property/puchong/rare-unit-limited-beside-ioi-rio-development-freehold-mainroad-frontage-premium-location/sale-501545935/",
      },
    ],
  },
  {
    category: "Industrial",
    description: "Factories and operational space",
    listings: [
      {
        id: "03",
        category: "Industrial",
        intent: "For Sale",
        location: "Taman Perindustrian Puchong",
        title: "Semi-D Factory",
        image: "/properties/listing-01.jpg",
        imageAlt: "Semi-detached factory at Taman Perindustrian Puchong.",
        price: "RM 3.8M",
        area: "6,000 sq. ft.",
        detail: "Partially fitted",
        href: "https://www.iproperty.com.my/property/puchong/rare-tpp-semi-detached-factory-taman-perindustrian-puchong-mainroad-frontage-prime-location-puchong/sale-501328659/",
      },
      {
        id: "04",
        category: "Industrial",
        intent: "For Sale",
        location: "Taman Perindustrian Kinrara",
        title: "End-Lot Terrace Factory",
        image: "/properties/listing-03.jpg",
        imageAlt: "End-lot terrace factory at Taman Perindustrian Kinrara.",
        price: "RM 1.8M",
        area: "3,000 sq. ft.",
        detail: "Partially fitted",
        href: "https://www.iproperty.com.my/property/bandar-kinrara/beside-pavilion-bandar-kinrara-25-x-80-endlot-terrace-factory-prime-location-mainroad-frontage-taman-perindustrian-kinrara-bandar-kinrara/sale-501544777/",
      },
    ],
  },
  {
    category: "Residential",
    description: "Homes and investment residences",
    listings: [
      {
        id: "05",
        category: "Residential",
        intent: "For Sale",
        location: "Sejati Lakeside, Cyberjaya",
        title: "Lake-Facing Semi-D",
        image: "/properties/listing-05.jpg",
        imageAlt: "Living room in a lake-facing semi-detached home at Sejati Lakeside, Cyberjaya.",
        price: "RM 1.95M",
        area: "3,201 sq. ft.",
        detail: "4 beds · 4 baths",
        href: "https://www.iproperty.com.my/property/cyberjaya/sejati-lakeside-cyberjaya/sale-501781283/",
      },
      {
        id: "06",
        category: "Residential",
        intent: "For Sale",
        location: "Serin Residency, Cyberjaya",
        title: "Spacious Condominium",
        image: "/properties/listing-06.jpg",
        imageAlt: "Interior of a spacious condominium at Serin Residency, Cyberjaya.",
        price: "RM 500K",
        area: "1,647 sq. ft.",
        detail: "3+1 beds · 4 baths",
        href: "https://www.iproperty.com.my/property/cyberjaya/serin-residency/sale-106573771/",
      },
    ],
  },
];

const sampleFeedback = [
  {
    client: "Jason Tan",
    category: "Home Search",
    title: "Dream Home, Made Simple",
    quote: "Jared helped us find a home that truly fits our lifestyle, needs and future plans.",
  },
  {
    client: "Kayen Wong",
    category: "Industrial",
    title: "The Right Space to Grow",
    quote: "Jared understood our operational needs and guided us towards an industrial property with room to grow.",
  },
  {
    client: "Joanne Wong",
    category: "Commercial",
    title: "A Smarter Business Move",
    quote: "Jared made it easier to evaluate commercial options and choose a location that supports our business goals.",
  },
  {
    client: "Jackson Liew",
    category: "Property Owners",
    title: "Clear, Practical Guidance",
    quote: "Jared gave us a clear view of the options so we could make the right decision for our property.",
  },
  {
    client: "Carol Tan",
    category: "Client Service",
    title: "Support from Start to Finish",
    quote: "Jared was responsive, patient and professional throughout every step of the process.",
  },
] as const;

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

function SampleClientFeedback() {
  return (
    <section className="sample-feedback" id="reviews" aria-labelledby="sample-feedback-title">
      <header className="sample-feedback-heading">
        <SectionLabel number="04">Client feedback</SectionLabel>
        <div>
          <p className="sample-feedback-kicker">Five preview examples</p>
          <h2 id="sample-feedback-title">A reputation built<br /><em>through service.</em></h2>
        </div>
        <p className="sample-feedback-disclaimer"><strong>Sample preview only.</strong> These are sample placeholders—not real client or Google reviews. Replace them with verified feedback before publishing.</p>
      </header>

      <ol className="sample-feedback-grid">
        {sampleFeedback.map((item, index) => (
          <li className={`sample-feedback-card sample-feedback-card--${index + 1}`} key={item.title}>
            <article>
              <div className="sample-feedback-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{item.category}</span>
              </div>
              <blockquote>“{item.quote}”</blockquote>
              <footer>
                <h3>{item.client}</h3>
                <p>{item.title}</p>
              </footer>
            </article>
          </li>
        ))}
      </ol>

      <a
        className="sample-feedback-cta"
        href="https://wa.me/60122971898?text=Hi%20Jared%2C%20I%27d%20like%20to%20leave%20you%20a%20review.%20Could%20you%20send%20me%20your%20official%20Google%20review%20link%3F"
        target="_blank"
        rel="noreferrer"
        aria-label="Request Jared's official Google review link via WhatsApp"
      >
        <span>Worked with Jared?</span>
        <strong>Write a review for Jared</strong>
        <small>Request the official Google review link via WhatsApp.</small>
        <i aria-hidden="true">↗</i>
      </a>
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
              <a href="#credentials">Profile</a>
              <a href="#recognition">Recognition</a>
              <a href="#portfolio">Properties</a>
              <a href="#reviews">Reviews</a>
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
        <SampleClientFeedback />
        <ContactJared />
      </main>
    </div>
  );
}
