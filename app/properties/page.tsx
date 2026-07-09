import Image from "next/image";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";

const properties = [
  {
    title: "Glasshouse Penthouse",
    location: "Tribeca, New York",
    price: "$4.8M",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    beds: "4",
    baths: "4.5",
    size: "3,240 sq ft",
  },
  {
    title: "Cedar Ridge Residence",
    location: "Austin, Texas",
    price: "$2.15M",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    beds: "5",
    baths: "5",
    size: "4,100 sq ft",
  },
  {
    title: "Marina View Villa",
    location: "Miami, Florida",
    price: "$3.6M",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    beds: "4",
    baths: "4",
    size: "3,780 sq ft",
  },
  {
    title: "Oakline Townhouse",
    location: "Brooklyn, New York",
    price: "$1.72M",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
    beds: "3",
    baths: "3",
    size: "2,140 sq ft",
  },
  {
    title: "Parkside Loft",
    location: "Chicago, Illinois",
    price: "$980K",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    beds: "2",
    baths: "2",
    size: "1,480 sq ft",
  },
  {
    title: "Hillside Retreat",
    location: "Scottsdale, Arizona",
    price: "$2.9M",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    beds: "4",
    baths: "4.5",
    size: "3,950 sq ft",
  },
];

export default function PropertiesPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <Image
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=82"
          alt="Modern luxury home exterior"
          fill
          priority
        />
        <div className="page-hero-content">
          <span className="eyebrow">Properties</span>
          <h1>Curated homes for considered living.</h1>
          <p>
            Replace these placeholder listings with your active inventory,
            featured developments, or investment opportunities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-3">
          {properties.map((property) => (
            <article className="property-card" key={property.title}>
              <div className="property-image">
                <Image src={property.image} alt={property.title} fill />
              </div>
              <div className="property-body">
                <div className="price">{property.price}</div>
                <h3>{property.title}</h3>
                <p>
                  <MapPin size={16} /> {property.location}
                </p>
                <div className="meta">
                  <span>
                    <BedDouble size={16} /> {property.beds} beds
                  </span>
                  <span>
                    <Bath size={16} /> {property.baths} baths
                  </span>
                  <span>
                    <Ruler size={16} /> {property.size}
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
