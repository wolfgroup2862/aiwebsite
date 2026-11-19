// Wilson Yap's commercial properties for sale — ONE list used by both
// /team (the "Properties" section after Wilson) and /wilson (his listings).
// Copy the details in here — no links out to iProperty.
// Photos go in public/agent/listings/ (e.g. "/agent/listings/01.jpg").
// The sections and their nav links stay hidden while this list is empty.

export type TeamListing = {
  title: string;
  type: string; // e.g. "Factory", "Shop office", "Warehouse"
  location: string;
  price: string; // e.g. "RM 4,800,000"
  builtUp?: string; // e.g. "8,800 sq. ft."
  land?: string;
  psf?: string; // e.g. "RM 545 psf"
  tenure?: string; // Freehold / Leasehold
  notes?: string[]; // short extra details
  image?: string;
};

export const WILSON_LISTINGS: TeamListing[] = [];
