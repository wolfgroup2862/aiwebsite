import type { PropertyGroup, PropertyListing } from "../property-carousel";

// Jared's listings (details copied from his own portal listings).
// To add a listing: add an entry to the right group. The home page carousel
// shows these, /properties lists every one and each gets its own page at
// /properties/<slug>. Visitors are never sent to the portal: enquiries go to
// Jared's WhatsApp. sourceUrl is kept only so we can re-check the details.


export const propertyGroups: PropertyGroup[] = [
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
        slug: "freehold-4-storey-shop-bandar-puteri-puchong",
        highlights: ["Main-road frontage", "High-demand area in Bandar Puteri", "Freehold"],
        sourceUrl: "https://www.iproperty.com.my/property/puchong/potential-roi-5-mainroad-frontage-hot-high-demand-area-bandar-puteri-freehold-shop/sale-501328758/",
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
        slug: "freehold-1-5-storey-shop-bandar-puteri-puchong",
        highlights: ["Beside IOI Rio development", "Main-road frontage", "Freehold", "Limited units"],
        sourceUrl: "https://www.iproperty.com.my/property/puchong/rare-unit-limited-beside-ioi-rio-development-freehold-mainroad-frontage-premium-location/sale-501545935/",
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
        slug: "semi-d-factory-taman-perindustrian-puchong",
        highlights: ["Semi-detached factory in Taman Perindustrian Puchong (TPP)", "Main-road frontage", "Prime Puchong location"],
        sourceUrl: "https://www.iproperty.com.my/property/puchong/rare-tpp-semi-detached-factory-taman-perindustrian-puchong-mainroad-frontage-prime-location-puchong/sale-501328659/",
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
        slug: "end-lot-terrace-factory-taman-perindustrian-kinrara",
        highlights: ["Beside Pavilion Bandar Kinrara", "25 x 80 end-lot terrace factory", "Main-road frontage", "Prime location"],
        sourceUrl: "https://www.iproperty.com.my/property/bandar-kinrara/beside-pavilion-bandar-kinrara-25-x-80-endlot-terrace-factory-prime-location-mainroad-frontage-taman-perindustrian-kinrara-bandar-kinrara/sale-501544777/",
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
        slug: "lake-facing-semi-d-sejati-lakeside-cyberjaya",
        highlights: ["Lake-facing semi-detached home", "Sejati Lakeside, Cyberjaya"],
        sourceUrl: "https://www.iproperty.com.my/property/cyberjaya/sejati-lakeside-cyberjaya/sale-501781283/",
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
        slug: "condominium-serin-residency-cyberjaya",
        highlights: ["Serin Residency, Cyberjaya", "3+1 bedrooms, 4 bathrooms"],
        sourceUrl: "https://www.iproperty.com.my/property/cyberjaya/serin-residency/sale-106573771/",
      },
    ],
  },
];

export const allListings: PropertyListing[] = propertyGroups.flatMap((g) => g.listings);
