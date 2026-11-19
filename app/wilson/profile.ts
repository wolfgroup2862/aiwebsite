import type { Listing, Note, Profile } from "../_agent/AgentPage";
import { WILSON_LISTINGS } from "../_agent/wilson-listings";

// Wilson's details — the ONLY file to edit for his page. "TODO" = placeholder.
export const PROFILE: Profile = {
  firstName: "Wilson",
  fullName: "Wilson Yap",
  chineseName: "", // TODO: optional
  agency: "The Roof Realty (TRR) · Wolf Group",
  tagline: "Straight answers and real numbers for buyers, sellers and tenants — no pressure, just good homework.", // TODO: confirm wording
  intro:
    "Tell visitors in two or three sentences who you are, which areas you know best, and why people enjoy working with you.", // TODO
  areas: ["Puchong", "Bukit Jalil", "Petaling Jaya"],
  specialties: ["Puchong commercial", "Bukit Jalil", "Petaling Jaya (PJ)"],
  whatsapp: "", // TODO
  photo: "/agent/wilson.jpg",
  realImage: "/agent/wilson-real.webp",
  halfImage: "/agent/wilson-half.webp",
  heroImage: "/agent/wilson-hero.webp",
};

// His listings come from the shared list (also shown on /team).
export const LISTINGS: Listing[] = WILSON_LISTINGS.map((l) => ({
  title: l.title,
  area: l.location,
  type: `${l.type} · For sale`,
  price: l.price,
  image: l.image,
  facts: [l.builtUp && `Built-up ${l.builtUp}`, l.land && `Land ${l.land}`, l.psf, l.tenure].filter((x): x is string => Boolean(x)),
}));

// TODO: confirm or replace (general tips, not client data).
export const NOTES: Note[] = [
  { tag: "Buying", tone: "lime", title: "What to check on a first viewing", body: "Natural light, water pressure, noise at night and access roads — the things photos never show." },
  { tag: "Selling", tone: "peach", title: "Pricing it right from day one", body: "Recent transacted prices nearby tell you more than asking prices online. Start there." },
  { tag: "Renting", tone: "sky", title: "A tenancy agreement checklist", body: "Deposit terms, repair responsibilities and the renewal clause — agree them before you sign." },
  { tag: "Investing", tone: "lilac", title: "Yield vs. capital growth", body: "Decide which one you want first; it changes which area and property type makes sense." },
];
