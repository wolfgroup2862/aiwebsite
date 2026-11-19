import type { Listing, Note, Profile } from "../_agent/AgentPage";

// Mandy's details — the ONLY file to edit for her page. "TODO" = placeholder.
export const PROFILE: Profile = {
  firstName: "Mandy",
  fullName: "Mandy Lee",
  chineseName: "", // TODO: optional, e.g. "陈美玲"
  agency: "The Roof Realty (TRR) · Wolf Group",
  tagline: "Commercial and property advice across Puchong, Bukit Jalil and PJ — honest numbers, clear answers and zero pressure.", // TODO: confirm wording
  intro:
    "Tell visitors in two or three sentences who you are, which areas you know best, and why people enjoy working with you.", // TODO
  areas: ["Puchong", "Bukit Jalil", "Petaling Jaya"],
  specialties: ["Puchong commercial", "Bukit Jalil", "Petaling Jaya (PJ)"],
  whatsapp: "", // TODO: digits only, e.g. "60123456789". Empty = button hidden.
  photo: "/agent/mandy.jpg",
  realImage: "/agent/mandy-real.webp",
  // heroImage: "/agent/mandy-hero.webp", // TODO: add once her hero-character image is ready
};

// TODO: replace with her real listings (photo in public/agent/, title, area, price).
export const LISTINGS: Listing[] = []; // TODO: add her listings (section stays hidden while empty)

// TODO: confirm or replace these short notes (general tips, not client data).
export const NOTES: Note[] = [
  { tag: "Buying", tone: "lime", title: "What to check on a first viewing", body: "Natural light, water pressure, noise at night and the walk to the nearest LRT — the things photos never show." },
  { tag: "Selling", tone: "peach", title: "Pricing it right from day one", body: "Recent transacted prices nearby tell you more than asking prices online. Start there." },
  { tag: "Renting", tone: "sky", title: "A tenancy agreement checklist", body: "Deposit terms, repair responsibilities and the renewal clause — agree them before you sign." },
  { tag: "Investing", tone: "lilac", title: "Yield vs. capital growth", body: "Decide which one you want first; it changes which area and property type makes sense." },
];
