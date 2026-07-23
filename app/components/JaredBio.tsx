import Image from "next/image";
import Link from "next/link";

const ipropertyProfileUrl =
  "https://www.iproperty.com.my/property-agent/jared-wong-623987/";

const propertyTypes = [
  "Factories",
  "Warehouses",
  "Industrial land",
  "Shop lots",
  "Commercial units",
  "Logistics spaces",
];

const ipropertyStats = [
  { label: "Total Listings", value: "194" },
  { label: "For Sale", value: "143" },
  { label: "For Rent", value: "51" },
];

const ipropertyCategories = [
  {
    title: "Industrial & Factory",
    description: "Factories, terrace factories, semi-detached factories, and larger industrial assets.",
    listings: [
      {
        status: "Sale",
        price: "RM 3,800,000",
        name: "Rare TPP Semi Detached Factory",
        location: "Taman Perindustrian Puchong, Puchong",
        size: "6,000 sq. ft.",
        href: "https://www.iproperty.com.my/property/puchong/rare-tpp-semi-detached-factory-taman-perindustrian-puchong-mainroad-frontage-prime-location-puchong/sale-501328659/",
      },
      {
        status: "Sale",
        price: "RM 1,800,000",
        name: "25x80 End Lot Terrace Factory",
        location: "Taman Perindustrian Kinrara, Bandar Kinrara",
        size: "3,000 sq. ft.",
        href: "https://www.iproperty.com.my/property/bandar-kinrara/beside-pavilion-bandar-kinrara-25x80-endlot-terrace-factory-prime-location-mainroad-frontage-taman-perindustrian-kinrara-bandar-kinrara/sale-501328695/",
      },
      {
        status: "Sale",
        price: "RM 13,800,000",
        name: "Fully Extended Detached Factory",
        location: "Bandar Kinrara Seksyen 1, Bandar Kinrara",
        size: "13,000 sq. ft.",
        href: "https://www.iproperty.com.my/property/bandar-kinrara/rare-fully-extended-detached-factory-freehold-bandar-kinrara-mainroad-frontage-prime-location-bandar-kinrara-seksyen-1-bandar-kinrara/sale-501328675/",
      },
    ],
  },
  {
    title: "Shop & Commercial",
    description: "Mainroad shop lots, freehold commercial properties, and high visibility business locations.",
    listings: [
      {
        status: "Sale",
        price: "RM 4,800,000",
        name: "Bandar Puteri Freehold Shop",
        location: "Bandar Puteri Puchong, Puchong",
        size: "8,800 sq. ft.",
        href: "https://www.iproperty.com.my/property/puchong/potential-roi-5-mainroad-frontage-hot-high-demand-area-bandar-puteri-freehold-shop-bandar-puteri-puchong-puchong/sale-501328758/",
      },
      {
        status: "Sale",
        price: "RM 8,900,000",
        name: "Rare Corner Lot Bandar Puteri Puchong Shop",
        location: "Bandar Puteri Puchong, Puchong",
        size: "13,000 sq. ft.",
        href: "https://www.iproperty.com.my/property/puchong/rare-corner-lot-mainroad-frontage-freehold-prime-locaton-bandar-puteri-puchong-shop-bandar-puteri-puchong-puchong/sale-500996097/",
      },
    ],
  },
  {
    title: "Residential Portfolio",
    description: "Selected residential listings Jared also carries for owners and investors.",
    listings: [
      {
        status: "Sale",
        price: "RM 3,000,000",
        name: "Lakefront Villa",
        location: "Cyberjaya, Selangor",
        size: "5,300 sq. ft.",
        href: "https://www.iproperty.com.my/property/cyberjaya/lakefront-villa/sale-100297571/",
      },
      {
        status: "Sale",
        price: "RM 1,100,000",
        name: "Setia Eco Glades",
        location: "Cyberjaya, Selangor",
        size: "1,805 sq. ft.",
        href: "https://www.iproperty.com.my/property/cyberjaya/setia-eco-glades/sale-103556376/",
      },
    ],
  },
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
          <a href="#iproperty">iProperty</a>
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

        <section className="iproperty-section" id="iproperty">
          <div className="iproperty-header">
            <div>
              <p className="kicker">Live On iProperty</p>
              <h2>JARED&apos;S ACTIVE PROPERTY PORTFOLIO</h2>
              <p>
                Jared&apos;s verified iProperty profile lists industrial,
                commercial, and residential opportunities. The categories below
                highlight selected listings and lead visitors to the full live
                iProperty portfolio.
              </p>
            </div>
            <a href={ipropertyProfileUrl} target="_blank" rel="noreferrer">
              VIEW FULL IPROPERTY PROFILE
            </a>
          </div>

          <div className="iproperty-stats" aria-label="iProperty listing totals">
            {ipropertyStats.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <div className="listing-categories">
            {ipropertyCategories.map((category) => (
              <section className="listing-category" key={category.title}>
                <div className="category-heading">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <div className="listing-grid">
                  {category.listings.map((listing) => (
                    <a
                      className="listing-card"
                      href={listing.href}
                      key={listing.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{listing.status}</span>
                      <strong>{listing.price}</strong>
                      <h4>{listing.name}</h4>
                      <p>{listing.location}</p>
                      <small>{listing.size}</small>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
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
            <div className="contact-details" aria-label="Jared contact details">
              <a href="tel:+60122971898">012-297 1898</a>
              <a href="mailto:jaredwong.wg@gmail.com">jaredwong.wg@gmail.com</a>
            </div>
          </div>
          <div className="contact-actions">
            <a
              href="https://wa.me/60122971898"
              aria-label="WhatsApp Jared at 012-297 1898"
            >
              WHATSAPP JARED
            </a>
            <a href="mailto:jaredwong.wg@gmail.com" aria-label="Email Jared">
              EMAIL JARED
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>JARED WONG</span>
        <p>
          Malaysia industrial and commercial property guidance for factories,
          warehouses, industrial land, shop lots, commercial units, leasing,
          sales, acquisition, and advisory. Contact Jared at 012-297 1898 or
          jaredwong.wg@gmail.com.
        </p>
      </footer>
    </div>
  );
}
