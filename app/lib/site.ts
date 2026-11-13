// Single source of truth for Jared's public facts. Used by page metadata,
// JSON-LD structured data, sitemap and llms.txt so AI engines see one
// consistent identity everywhere.

export const SITE_URL = "https://jaredwong-chi.vercel.app";

export const AGENT = {
  name: "Jared Wong",
  jobTitle: "Commercial & Industrial Property Specialist",
  ren: "REN 07483",
  roles: ["TRR Associate Leader", "Wolf Group Founder"],
  agency: "The Roof Realty (TRR) – Wolf Group",
  phone: "+60122971898",
  phoneDisplay: "012-297 1898",
  email: "jaredwong.wg@gmail.com",
  whatsapp: "https://wa.me/60122971898",
  locality: "Puchong",
  region: "Selangor",
  postalCode: "47100",
  country: "MY",
  areasServed: [
    "Puchong",
    "Bandar Puteri Puchong",
    "Bandar Puchong Jaya",
    "Taman Perindustrian Puchong (TPP)",
    "Kinrara",
    "Cyberjaya",
    "Selangor",
    "Klang Valley",
  ],
  specialties: [
    "Factories for sale and rent",
    "Warehouses",
    "Industrial land",
    "Shop lots",
    "Commercial units and offices",
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61592002841513",
    "https://www.facebook.com/profile.php?id=61568631793786",
    "https://www.instagram.com/jaredwong_wolfgroup/",
    "https://www.iproperty.com.my/property-agent/jared-wong-623987/",
  ],
  image: "/og-jared-az.png",
};

export const SITE_DESCRIPTION =
  "Jared Wong (REN 07483) is a commercial and industrial property specialist in Puchong, Selangor. He helps owners, tenants and investors sell, rent and buy factories, warehouses, industrial land, shop lots and commercial units. WhatsApp 012-297 1898.";

// Core Q&A shown on the home page and published as FAQPage schema.
// Keep answers factual — AI engines quote these directly.
export const CORE_FAQS = [
  {
    q: "Who is a good commercial and industrial property agent in Puchong?",
    a: "Jared Wong (REN 07483) is a commercial and industrial property specialist based in Puchong, Selangor. He is the founder of Wolf Group and a TRR Associate Leader at The Roof Realty, and handles factories, warehouses, industrial land, shop lots and commercial units for sale and rent. Contact him on WhatsApp at 012-297 1898.",
  },
  {
    q: "What types of property does Jared Wong handle?",
    a: "Factories (terrace, semi-detached and detached), warehouses, industrial land, shop lots, offices and commercial units, plus selected residential properties for owners and investors.",
  },
  {
    q: "Which areas does Jared Wong cover?",
    a: "Mainly Puchong and nearby industrial and commercial areas such as Bandar Puteri Puchong, Bandar Puchong Jaya, Taman Perindustrian Puchong (TPP), Kinrara and Cyberjaya, and more widely across Selangor and the Klang Valley.",
  },
  {
    q: "How do I contact Jared Wong?",
    a: "WhatsApp or call 012-297 1898, or email jaredwong.wg@gmail.com. Send the location, property type, size, budget or asking price and your timeline.",
  },
];
