import Link from "next/link";

const jaredCoverImage = "/jared-cover.jpg";
const ipropertyProfileUrl = "https://www.iproperty.com.my/property-agent/jared-wong-623987/";
const facebookUrl = "https://www.facebook.com/profile.php?id=61568631793786";
const instagramUrl = "https://www.instagram.com/jaredwong_wolfgroup/?hl=en";
const whatsappUrl = "https://wa.me/60122971898";
const emailUrl = "mailto:jaredwong.wg@gmail.com";
const propertyTypes = ["Factories", "Warehouses", "Industrial land", "Shop lots", "Commercial units", "Logistics spaces"];
const ipropertyStats = [{ label: "Total Listings", value: "194" }, { label: "For Sale", value: "143" }, { label: "For Rent", value: "51" }];
const quickReasons = ["Need to sell or rent out fast", "Looking for factory or land", "Want better market positioning", "Need a practical shortlist"];
const awards = ["Annual Dinner Award", "StarProperty Award", "Top Performance Recognition"];
const ipropertyCategories = [
  { title: "Industrial & Land", description: "Factories, terrace factories, semi-detached factories, industrial land, and larger industrial assets.", listings: [{ status: "Sale", price: "RM 3,800,000", name: "Rare TPP Semi Detached Factory", location: "Taman Perindustrian Puchong, Puchong", size: "6,000 sq. ft.", image: "https://ipp1-cdn.pgimgs.com/listing/501328659/UPHO.381163972.V800/RARE-TPP-SEMI-DETACHED-FACTORY-TAMAN-PERINDUSTRIAN-PUCHONG-MAINROAD-FRONTAGE-PRIME-LOCATION-Puchong-Malaysia.jpg", href: "https://www.iproperty.com.my/property/puchong/rare-tpp-semi-detached-factory-taman-perindustrian-puchong-mainroad-frontage-prime-location-puchong/sale-501328659/" }, { status: "Sale", price: "RM 2,500,000", name: "Rare Industrial Zoning Land", location: "Bandar Puchong Industrial Park, Puchong", size: "10,000 sq. ft.", image: "https://ipp1-cdn.pgimgs.com/listing/501328659/UPHO.381163973.V800/RARE-TPP-SEMI-DETACHED-FACTORY-TAMAN-PERINDUSTRIAN-PUCHONG-MAINROAD-FRONTAGE-PRIME-LOCATION-Puchong-Malaysia.jpg", href: "https://www.iproperty.com.my/property/puchong/sale-501206541/" }] },
  { title: "Shop & Commercial", description: "Mainroad shop lots, freehold commercial properties, and high visibility business locations.", listings: [{ status: "Sale", price: "RM 4,800,000", name: "Bandar Puteri Freehold Shop", location: "Bandar Puteri Puchong, Puchong", size: "8,800 sq. ft.", image: "https://ipp1-cdn.pgimgs.com/listing/501328758/UPHO.381165051.V800/POTENTIAL-ROI-5-MAINROAD-FRONTAGE-HOT-HIGH-DEMAND-AREA-BANDAR-PUTERI-FREEHOLD-SHOP-Puchong-Malaysia.jpg", href: "https://www.iproperty.com.my/property/puchong/potential-roi-5-mainroad-frontage-hot-high-demand-area-bandar-puteri-freehold-shop-bandar-puteri-puchong-puchong/sale-501328758/" }, { status: "Sale", price: "RM 8,900,000", name: "Rare Corner Lot Bandar Puteri Puchong Shop", location: "Bandar Puteri Puchong, Puchong", size: "13,000 sq. ft.", image: "https://ipp1-cdn.pgimgs.com/listing/500996097/UPHO.287705333.V800/RARE-CORNER-LOT-MAINROAD-FRONTAGE-FREEHOLD-PRIME-LOCATON-BANDAR-PUTERI-PUCHONG-SHOP-Puchong-Malaysia.jpg", href: "https://www.iproperty.com.my/property/puchong/rare-corner-lot-mainroad-frontage-freehold-prime-locaton-bandar-puteri-puchong-shop-bandar-puteri-puchong-puchong/sale-500996097/" }] },
  { title: "Residential", description: "Selected residential listings Jared also carries for owners and investors.", listings: [{ status: "Sale", price: "RM 2,100,000", name: "Charms of Nusantara", location: "Setia Eco Glades, Cyberjaya", size: "3,342 sq. ft.", image: "https://ipp1-cdn.pgimgs.com/listing/100869457/UPHO.315939975.V800/Charms-of-Nusantara-Setia-Eco-Glades-Cyberjaya-Charms-of-Nusantara-Setia-Eco-Glades-Malaysia.jpeg", href: "https://www.iproperty.com.my/property/cyberjaya/charms-of-nusantara-setia-eco-glades-cyberjaya/sale-100869457/" }, { status: "Sale", price: "RM 500,000", name: "Serin Residency", location: "Cyberjaya, Selangor", size: "1,647 sq. ft.", image: "https://ipp1-cdn.pgimgs.com/listing/106573771/UPHO.360617208.V800/Serin-Residency-Cyberjaya-Malaysia.jpeg", href: "https://www.iproperty.com.my/property/cyberjaya/serin-residency/sale-106573771/" }] },
];
const fundamentals = [
  { label: "01", title: "Tell Jared The Situation", text: "Share the location, size, asking price or budget, property type, and your timing. Jared starts by understanding the real reason behind the move." },
  { label: "02", title: "Get The Market Read", text: "He checks nearby demand, pricing, access, utility, zoning, renovation risk, and whether the property is positioned correctly." },
  { label: "03", title: "Move With A Clear Plan", text: "You get a practical next step: list, shortlist, inspect, negotiate, adjust pricing, or prepare the property for the right buyer or tenant." },
];

function WhatsAppLogo() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.8 11.8 0 0 0 12.11 0C5.5 0 .12 5.38.12 11.99c0 2.11.55 4.17 1.61 5.99L0 24l6.17-1.62a11.95 11.95 0 0 0 5.94 1.51h.01c6.61 0 11.99-5.38 11.99-11.99 0-3.2-1.25-6.21-3.59-8.42Zm-8.4 18.39h-.01a9.92 9.92 0 0 1-5.06-1.39l-.36-.21-3.66.96.98-3.56-.23-.37a9.9 9.9 0 0 1-1.52-5.31c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.04 7.04 2.92a9.88 9.88 0 0 1 2.91 7.03c0 5.48-4.46 9.93-10.04 9.93Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" /></svg>;
}

function FacebookLogo() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" /></svg>;
}

function InstagramLogo() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.35 2.03C8.56 1.98 8.95 1.97 12 1.97s3.44.01 4.65.06c1.2.05 2.02.24 2.73.52.75.29 1.38.68 2 1.31.63.62 1.02 1.25 1.31 2 .28.71.47 1.53.52 2.73.05 1.21.06 1.6.06 4.65s-.01 3.44-.06 4.65c-.05 1.2-.24 2.02-.52 2.73-.29.75-.68 1.38-1.31 2-.62.63-1.25 1.02-2 1.31-.71.28-1.53.47-2.73.52-1.21.05-1.6.06-4.65.06s-3.44-.01-4.65-.06c-1.2-.05-2.02-.24-2.73-.52a5.5 5.5 0 0 1-2-1.31 5.5 5.5 0 0 1-1.31-2c-.28-.71-.47-1.53-.52-2.73C.74 16.68.73 16.29.73 13.24s.01-3.44.06-4.65c.05-1.2.24-2.02.52-2.73.29-.75.68-1.38 1.31-2a5.5 5.5 0 0 1 2-1.31c.71-.28 1.53-.47 2.73-.52Zm9.21 2.02C15.37 4 15.01 4 12 4s-3.37 0-4.56.05c-1.1.05-1.69.23-2.09.39-.52.2-.9.45-1.29.84-.39.39-.64.77-.84 1.29-.16.4-.34.99-.39 2.09-.05 1.19-.05 1.55-.05 4.56s0 3.37.05 4.56c.05 1.1.23 1.69.39 2.09.2.52.45.9.84 1.29.39.39.77.64 1.29.84.4.16.99.34 2.09.39 1.19.05 1.55.05 4.56.05s3.37 0 4.56-.05c1.1-.05 1.69-.23 2.09-.39.52-.2.9-.45 1.29-.84.39-.39.64-.77.84-1.29.16-.4.34-.99.39-2.09.05-1.19.05-1.55.05-4.56s0-3.37-.05-4.56c-.05-1.1-.23-1.69-.39-2.09-.2-.52-.45-.9-.84-1.29-.39-.39-.77-.64-1.29-.84-.4-.16-.99-.34-2.09-.39ZM12 7.45a5.79 5.79 0 1 1 0 11.58 5.79 5.79 0 0 1 0-11.58Zm0 9.55a3.76 3.76 0 1 0 0-7.52 3.76 3.76 0 0 0 0 7.52Zm6.02-10.99a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7Z" /></svg>;
}

function EmailLogo() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5.75A2.75 2.75 0 0 1 4.75 3h14.5A2.75 2.75 0 0 1 22 5.75v12.5A2.75 2.75 0 0 1 19.25 21H4.75A2.75 2.75 0 0 1 2 18.25V5.75Zm2.75-.5a.5.5 0 0 0-.5.5v.43l7.75 5.03 7.75-5.03v-.43a.5.5 0 0 0-.5-.5H4.75Zm15 3.62-7.14 4.63a1.12 1.12 0 0 1-1.22 0L4.25 8.87v9.38c0 .28.22.5.5.5h14.5a.5.5 0 0 0 .5-.5V8.87Z" /></svg>;
}

export default function JaredBio() {
  return (
    <div className="site-shell">
      <div className="announcement">Need to sell, rent, or secure the right property? Talk to Jared first.</div>
      <header className="nav">
        <Link className="logo" href="/">JARED</Link>
        <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#iproperty">Properties</a><a href="#awards">Awards</a><a href="#services">Process</a><a href="#contact">Contact</a></nav>
      </header>
      <main>
        <section className="bio-hero" id="about">
          <div className="portrait-panel"><img src={jaredCoverImage} alt="Jared Wong portrait" /></div>
          <article className="bio-copy">
            <p className="kicker">Malaysia Property Advisor</p><h1>SELL, RENT, OR FIND THE RIGHT PROPERTY FASTER</h1>
            <p className="hero-lead">Jared Wong helps owners, investors, tenants, and business operators make faster property decisions for factories, industrial land, warehouses, shop lots, commercial units, and selected residential assets.</p>
            <div className="hero-actions"><a className="primary-action" href={whatsappUrl}>GET PROPERTY REVIEW</a><a className="secondary-action" href={ipropertyProfileUrl} target="_blank" rel="noreferrer">VIEW LISTINGS</a></div>
            <div className="lead-panel" aria-label="Common reasons to contact Jared"><strong>What do you need help with?</strong>{quickReasons.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        </section>
        <section className="trust-strip" aria-label="Jared listing credibility">{ipropertyStats.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}<article><strong>REN 07483</strong><span>Verified Negotiator</span></article></section>
        <section className="property-strip" id="properties" aria-label="Property types">{propertyTypes.map((item) => <span key={item}>{item}</span>)}</section>
        <section className="reason-section"><div><p className="kicker">Personal Or Business Reasons?</p><h2>WHEN TIMING MATTERS, THE PROPERTY PLAN NEEDS TO BE CLEAR.</h2></div><div className="reason-grid"><article><h3>Owners</h3><p>Position your factory, land, shop, commercial unit, or residential property for the right buyer or tenant.</p></article><article><h3>Investors</h3><p>Compare the numbers, location strength, rental potential, and exit options before moving forward.</p></article><article><h3>Operators</h3><p>Find a space that fits loading, access, utilities, staff movement, visibility, and daily workflow.</p></article></div></section>
        <section className="iproperty-section" id="iproperty">
          <div className="iproperty-header"><div><p className="kicker">Live On iProperty</p><h2>ACTIVE PROPERTY PORTFOLIO</h2><p>Selected listings from Jared&apos;s verified iProperty profile. Visitors can browse by category and continue to the full live portfolio.</p></div><a href={ipropertyProfileUrl} target="_blank" rel="noreferrer">VIEW FULL IPROPERTY PROFILE</a></div>
          <div className="listing-categories">{ipropertyCategories.map((category) => <section className="listing-category" key={category.title}><div className="category-heading"><h3>{category.title}</h3><p>{category.description}</p></div><div className="listing-grid">{category.listings.map((listing) => <a className="listing-card" href={listing.href} key={listing.href} target="_blank" rel="noreferrer"><img src={listing.image} alt={`${listing.name} property photo`} loading="lazy" /><div className="listing-card-copy"><span>{listing.status}</span><strong>{listing.price}</strong><h4>{listing.name}</h4><p>{listing.location}</p><small>{listing.size}</small></div></a>)}</div></section>)}</div>
        </section>
        <section className="awards-section" id="awards"><div className="awards-copy"><p className="kicker">Awards & Recognition</p><h2>PROOF OF PERFORMANCE</h2><p>A dedicated recognition page for Jared&apos;s award moments. Photos are intentionally left blank for now and can be added later.</p></div><div className="award-grid">{awards.map((item) => <article className="award-slot" key={item}><div aria-hidden="true" /><h3>{item}</h3><p>Photo space reserved</p></article>)}</div></section>
        <section className="principles" id="services"><div><p className="kicker">Simple Process</p><h2>GET A CLEAR NEXT STEP</h2></div><div className="principle-grid">{fundamentals.map((item) => <article key={item.label}><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
        <section className="cta-band" id="contact"><div><p className="kicker">Get Your Property Reviewed</p><h2>READY TO TALK TO JARED?</h2><p>Send the location, property type, size, budget or asking price, and your timeline. Jared will help you sort what matters first.</p><div className="contact-details" aria-label="Jared contact details"><a href="tel:+60122971898">012-297 1898</a><a href={emailUrl}>jaredwong.wg@gmail.com</a><a href={facebookUrl} target="_blank" rel="noreferrer">Facebook</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a></div></div><div className="contact-actions"><a href={whatsappUrl} aria-label="WhatsApp Jared at 012-297 1898"><WhatsAppLogo /><span>WhatsApp</span></a><a href={emailUrl} aria-label="Email Jared"><EmailLogo /><span>Email</span></a><a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Open Jared Wong Facebook"><FacebookLogo /><span>Facebook</span></a><a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Open Jared Wong Instagram"><InstagramLogo /><span>Instagram</span></a></div></section>
      </main>
      <footer className="footer"><span>JARED WONG</span><p>Malaysia property guidance for factories, warehouses, industrial land, shop lots, commercial units, leasing, sales, acquisition, and advisory. Contact Jared at 012-297 1898 or jaredwong.wg@gmail.com.</p><Link href="/fish-game" className="footer-fish-link">🐟 Fish Game</Link></footer>
    </div>
  );
}
