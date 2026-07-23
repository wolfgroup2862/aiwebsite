import Image from "next/image";
import Link from "next/link";

const propertyTypes = [
  "Factories",
  "Warehouses",
  "Industrial land",
  "Shop lots",
  "Commercial units",
  "Logistics spaces",
];

const fundamentals = [
  {
    label: "01",
    title: "Site Before Story",
    text: "Access routes, loading flow, clear height, power supply, drainage, parking, and surrounding use are checked before the pitch gets exciting.",
  },
  {
    label: "02",
    title: "Numbers Before Emotion",
    text: "Rental, asking price, renovation cost, holding risk, and exit options need to make sense before a buyer or tenant moves forward.",
  },
  {
    label: "03",
    title: "Decision Before Delay",
    text: "When the fundamentals are clear, Jared helps clients move quickly with a practical shortlist and a clean next step.",
  },
];

export default function JaredBio() {
  return (
    <div className="site-shell">
      <div className="announcement">
        Industrial and commercial property guidance across Malaysia.
      </div>

      <header className="nav">
        <Link className="logo" href="/">
          JARED
        </Link>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#properties">Properties</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="bio-hero" id="about">
          <div className="portrait-panel">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
              alt="Industrial warehouse and logistics corridor"
              fill
              priority
            />
          </div>
          <article className="bio-copy">
            <p className="kicker">Industrial Property Specialist</p>
            <h1>JARED WONG</h1>
            <div className="role-lines">
              <span>FACTORIES, WAREHOUSES, INDUSTRIAL LAND</span>
              <span>LEASING, SALES, ACQUISITION, ADVISORY</span>
            </div>
            <p>
              Jared helps business owners, investors, tenants, and landlords make
              clearer property decisions in the industrial and commercial market.
              His focus is practical: understand the site, compare the numbers,
              and make sure the property can support the operation behind it.
            </p>
            <p>
              From factories and warehouses to shop lots, commercial units, and
              industrial land, Jared looks beyond the listing headline. Access,
              loading, power, zoning, renovation needs, surrounding activity, and
              lease structure all matter when the wrong space can slow a business
              down.
            </p>
            <p>
              The approach is direct and disciplined: shortlist only what fits,
              explain the trade-offs clearly, and help clients negotiate from a
              stronger position.
            </p>
          </article>
        </section>

        <section className="property-strip" id="properties" aria-label="Property types">
          {propertyTypes.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className="principles" id="services">
          <div>
            <p className="kicker">How Jared Helps</p>
            <h2>PROPERTY DECISIONS BUILT ON FUNDAMENTALS</h2>
          </div>
          <div className="principle-grid">
            {fundamentals.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services-band">
          <article>
            <h3>For Buyers And Investors</h3>
            <p>
              Identify suitable industrial and commercial opportunities, compare
              asking prices against location and utility, and understand the
              practical upside and risk before committing.
            </p>
          </article>
          <article>
            <h3>For Tenants And Operators</h3>
            <p>
              Find spaces that match operational needs such as access, loading,
              storage, staff movement, visibility, utilities, and lease terms.
            </p>
          </article>
          <article>
            <h3>For Owners And Landlords</h3>
            <p>
              Position factories, warehouses, land, shop lots, and commercial
              properties with clearer market language and a sharper tenant or
              buyer profile.
            </p>
          </article>
        </section>

        <section className="cta-band" id="contact">
          <div>
            <p className="kicker">Work With Jared</p>
            <h2>NEED HELP WITH A PROPERTY DECISION?</h2>
            <p>
              Send Jared the location, property type, budget or asking price,
              size requirement, and your timeline. He can help sort what matters
              first and what to inspect next.
            </p>
          </div>
          <a href="#contact" aria-label="Contact Jared">
            CONTACT JARED
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>JARED WONG</span>
        <p>
          Malaysia industrial and commercial property guidance for factories,
          warehouses, industrial land, shop lots, commercial units, leasing,
          sales, acquisition, and advisory.
        </p>
      </footer>
    </div>
  );
}
