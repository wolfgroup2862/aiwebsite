// Agent profile data — the ONLY file to edit when filling in her details.
// Every value marked "TODO" is a placeholder waiting for the real info.
// When this page moves to its own repo, copy the whole app/agent folder
// plus public/agent/.

export const PROFILE = {
  firstName: "Your Name", // TODO: e.g. "Mira"
  fullName: "Your Full Name", // TODO
  chineseName: "", // TODO: optional, e.g. "陈美玲"
  ren: "REN 00000", // TODO
  jobTitle: "Real Estate Negotiator", // TODO: confirm
  agency: "The Roof Realty (TRR) · Wolf Group",
  tagline: "I help families and investors find homes they'll love — with honest advice, clear numbers and zero pressure.", // TODO: confirm wording
  intro:
    "Tell visitors in two or three sentences who you are, which areas you know best, and why people enjoy working with you.", // TODO
  areas: ["Area 1", "Area 2", "Area 3", "Area 4"], // TODO
  specialties: ["Residential sale", "Residential rental", "New launches"], // TODO
  whatsapp: "", // TODO: digits only, e.g. "60123456789". Empty = button hidden.
  photo: "/agent/profile.jpg",
};

// TODO: replace with her real listings (photo in public/agent/, title, area, price).
export const LISTINGS: { title: string; area: string; type: string; price: string; image?: string }[] = [
  { title: "Listing title", area: "Area", type: "Condominium · For sale", price: "RM —" },
  { title: "Listing title", area: "Area", type: "Terrace house · For sale", price: "RM —" },
  { title: "Listing title", area: "Area", type: "Serviced residence · For rent", price: "RM — / month" },
];

// TODO: confirm or replace these short notes (general tips, not client data).
export const NOTES = [
  { tag: "Buying", tone: "lime", title: "What to check on a first viewing", body: "Natural light, water pressure, noise at night and the walk to the nearest LRT — the things photos never show." },
  { tag: "Selling", tone: "peach", title: "Pricing it right from day one", body: "Recent transacted prices nearby tell you more than asking prices online. Start there." },
  { tag: "Renting", tone: "sky", title: "A tenancy agreement checklist", body: "Deposit terms, repair responsibilities and the renewal clause — agree them before you sign." },
  { tag: "Investing", tone: "lilac", title: "Yield vs. capital growth", body: "Decide which one you want first; it changes which area and property type makes sense." },
];
