import type { Listing, Note, Profile } from "../_agent/AgentPage";

// Wilson's details — the ONLY file to edit for his page. "TODO" = placeholder.
export const PROFILE: Profile = {
  firstName: "Wilson",
  fullName: "Wilson", // TODO: full name?
  chineseName: "", // TODO: optional
  agency: "The Roof Realty (TRR) · Wolf Group",
  tagline: "Straight answers and real numbers for buyers, sellers and tenants — no pressure, just good homework.", // TODO: confirm wording
  intro:
    "Tell visitors in two or three sentences who you are, which areas you know best, and why people enjoy working with you.", // TODO
  areas: ["Area 1", "Area 2", "Area 3"], // TODO
  specialties: ["Specialty 1", "Specialty 2"], // TODO
  whatsapp: "", // TODO
  photo: "/agent/wilson.jpg",
  realImage: "/agent/wilson-real.webp",
  heroImage: "/agent/wilson-hero.webp",
};

// TODO: replace with his real listings.
export const LISTINGS: Listing[] = [
  { title: "Listing title", area: "Area", type: "Property type · For sale", price: "RM —" },
  { title: "Listing title", area: "Area", type: "Property type · For sale", price: "RM —" },
  { title: "Listing title", area: "Area", type: "Property type · For rent", price: "RM — / month" },
];

// TODO: confirm or replace (general tips, not client data).
export const NOTES: Note[] = [
  { tag: "Buying", tone: "lime", title: "What to check on a first viewing", body: "Natural light, water pressure, noise at night and access roads — the things photos never show." },
  { tag: "Selling", tone: "peach", title: "Pricing it right from day one", body: "Recent transacted prices nearby tell you more than asking prices online. Start there." },
  { tag: "Renting", tone: "sky", title: "A tenancy agreement checklist", body: "Deposit terms, repair responsibilities and the renewal clause — agree them before you sign." },
  { tag: "Investing", tone: "lilac", title: "Yield vs. capital growth", body: "Decide which one you want first; it changes which area and property type makes sense." },
];
