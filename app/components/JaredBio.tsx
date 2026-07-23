import Link from "next/link";

const jaredCoverImage =
  "data:image/jpeg;base64,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";

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
    description:
      "Factories, terrace factories, semi-detached factories, and larger industrial assets.",
    listings: [
      {
        status: "Sale",
        price: "RM 3,800,000",
        name: "Rare TPP Semi Detached Factory",
        location: "Taman Perindustrian Puchong, Puchong",
        size: "6,000 sq. ft.",
        image:
          "https://ipp1-cdn.pgimgs.com/listing/501328659/UPHO.381163972.V800/RARE-TPP-SEMI-DETACHED-FACTORY-TAMAN-PERINDUSTRIAN-PUCHONG-MAINROAD-FRONTAGE-PRIME-LOCATION-Puchong-Malaysia.jpg",
        href: "https://www.iproperty.com.my/property/puchong/rare-tpp-semi-detached-factory-taman-perindustrian-puchong-mainroad-frontage-prime-location-puchong/sale-501328659/",
      },
    ],
  },
  {
    title: "Shop & Commercial",
    description:
      "Mainroad shop lots, freehold commercial properties, and high visibility business locations.",
    listings: [
      {
        status: "Sale",
        price: "RM 4,800,000",
        name: "Bandar Puteri Freehold Shop",
        location: "Bandar Puteri Puchong, Puchong",
        size: "8,800 sq. ft.",
        image:
          "https://ipp1-cdn.pgimgs.com/listing/501328758/UPHO.381165051.V800/POTENTIAL-ROI-5-MAINROAD-FRONTAGE-HOT-HIGH-DEMAND-AREA-BANDAR-PUTERI-FREEHOLD-SHOP-Puchong-Malaysia.jpg",
        href: "https://www.iproperty.com.my/property/puchong/potential-roi-5-mainroad-frontage-hot-high-demand-area-bandar-puteri-freehold-shop-bandar-puteri-puchong-puchong/sale-501328758/",
      },
      {
        status: "Sale",
        price: "RM 8,900,000",
        name: "Rare Corner Lot Bandar Puteri Puchong Shop",
        location: "Bandar Puteri Puchong, Puchong",
        size: "13,000 sq. ft.",
        image:
          "https://ipp1-cdn.pgimgs.com/listing/500996097/UPHO.287705333.V800/RARE-CORNER-LOT-MAINROAD-FRONTAGE-FREEHOLD-PRIME-LOCATON-BANDAR-PUTERI-PUCHONG-SHOP-Puchong-Malaysia.jpg",
        href: "https://www.iproperty.com.my/property/puchong/rare-corner-lot-mainroad-frontage-freehold-prime-locaton-bandar-puteri-puchong-shop-bandar-puteri-puchong-puchong/sale-500996097/",
      },
    ],
  },
  {
    title: "Residential Portfolio",
    description:
      "Selected residential listings Jared also carries for owners and investors.",
    listings: [
      {
        status: "Sale",
        price: "RM 2,100,000",
        name: "Charms of Nusantara",
        location: "Setia Eco Glades, Cyberjaya",
        size: "3,342 sq. ft.",
        image:
          "https://ipp1-cdn.pgimgs.com/listing/100869457/UPHO.315939975.V800/Charms-of-Nusantara-Setia-Eco-Glades-Cyberjaya-Charms-of-Nusantara-Setia-Eco-Glades-Malaysia.jpeg",
        href: "https://www.iproperty.com.my/property/cyberjaya/charms-of-nusantara-setia-eco-glades-cyberjaya/sale-100869457/",
      },
      {
        status: "Sale",
        price: "RM 500,000",
        name: "Serin Residency",
        location: "Cyberjaya, Selangor",
        size: "1,647 sq. ft.",
        image:
          "https://ipp1-cdn.pgimgs.com/listing/106573771/UPHO.360617208.V800/Serin-Residency-Cyberjaya-Malaysia.jpeg",
        href: "https://www.iproperty.com.my/property/cyberjaya/serin-residency/sale-106573771/",
      },
      {
        status: "Sale",
        price: "RM 1,050,000",
        name: "Liu Li Garden",
        location: "Setia Eco Glades, Cyberjaya",
        size: "2,900 sq. ft.",
        image:
          "https://ipp1-cdn.pgimgs.com/listing/103556376/UPHO.368225326.V800/Liu-Li-Garden-Setia-Eco-Glades-Cyberjaya-Liu-Li-Garden-Setia-Eco-Glades-Malaysia.jpeg",
        href: "https://www.iproperty.com.my/property/cyberjaya/liu-li-garden-setia-eco-glades-cyberjaya-liu-li-garden-setia-eco-glades-cyberjaya/sale-103556376/",
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
            <img src={jaredCoverImage} alt="Jared Wong portrait" />
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
                      <img
                        src={listing.image}
                        alt={`${listing.name} property photo`}
                        loading="lazy"
                      />
                      <div className="listing-card-copy">
                        <span>{listing.status}</span>
                        <strong>{listing.price}</strong>
                        <h4>{listing.name}</h4>
                        <p>{listing.location}</p>
                        <small>{listing.size}</small>
                      </div>
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
