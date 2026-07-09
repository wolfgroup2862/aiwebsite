import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, MapPin, Ruler } from "lucide-react";

const featuredProperties = [
  {
    title: "Glasshouse Penthouse",
    location: "Tribeca, New York",
    price: "$4.8M",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    beds: "4 beds",
    size: "3,240 sq ft",
  },
  {
    title: "Cedar Ridge Residence",
    location: "Austin, Texas",
    price: "$2.15M",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    beds: "5 beds",
    size: "4,100 sq ft",
  },
  {
    title: "Marina View Villa",
    location: "Miami, Florida",
    price: "$3.6M",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    beds: "4 beds",
    size: "3,780 sq ft",
  },
];

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <Image
          className="hero-image"
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=82"
          alt="Modern luxury living room with floor to ceiling windows"
          fill
          priority
        />
        <div className="hero-content">
          <span className="eyebrow">Premium real estate advisory</span>
          <h1 className="hero-title">A refined way to find home.</h1>
          <p>
            Placeholder copy for a boutique real estate company representing
            distinctive homes, considered investments, and seamless property
            transitions.
          </p>
          <div className="actions">
            <Link className="button button-primary" href="/properties">
              View Properties <ArrowRight size={18} />
            </Link>
            <Link className="button button-secondary" href="/contact">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Company highlights">
        <div className="stat">
          <strong>$1.2B</strong>
          <span>Placeholder sales represented</span>
        </div>
        <div className="stat">
          <strong>18</strong>
          <span>Prime city markets</span>
        </div>
        <div className="stat">
          <strong>420+</strong>
          <span>Client relationships</span>
        </div>
        <div className="stat">
          <strong>97%</strong>
          <span>Referral-led business</span>
        </div>
      </section>

      <section className="section split">
        <div>
          <span className="eyebrow">Market intelligence</span>
          <h2>Homes chosen with clarity, timing, and taste.</h2>
          <p>
            Aurelia Estates pairs local insight with thoughtful presentation and
            rigorous negotiation. This placeholder section introduces the brand
            promise for buyers, sellers, developers, and investors.
          </p>
          <Link className="button button-dark" href="/services">
            Explore Services <ArrowRight size={18} />
          </Link>
        </div>
        <div className="media-frame">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=80"
            alt="Elegant open plan kitchen and dining space"
            fill
          />
        </div>
      </section>

      <section className="section band">
        <div className="section-intro">
          <span className="eyebrow">Featured listings</span>
          <h2>Signature properties</h2>
          <p>
            Placeholder listings for launch. Replace these cards with live MLS,
            CMS, or manually curated property data when ready.
          </p>
        </div>
        <div className="grid grid-3">
          {featuredProperties.map((property) => (
            <article className="property-card" key={property.title}>
              <div className="property-image">
                <Image src={property.image} alt={property.title} fill />
              </div>
              <div className="property-body">
                <div className="price">{property.price}</div>
                <h3>{property.title}</h3>
                <p>{property.location}</p>
                <div className="meta">
                  <span>
                    <BedDouble size={16} /> {property.beds}
                  </span>
                  <span>
                    <Ruler size={16} /> {property.size}
                  </span>
                  <span>
                    <MapPin size={16} /> Preview
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
