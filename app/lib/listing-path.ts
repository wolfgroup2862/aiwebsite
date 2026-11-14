// URL of a listing's own page on this site.
export const listingPath = (listing: { slug: string }) => `/properties/${listing.slug}`;

export const listingWhatsApp = (listing: { title: string; location: string; intent: string; price: string }) =>
  `https://wa.me/60122971898?text=${encodeURIComponent(
    `Hi Jared, I'm interested in the ${listing.title} at ${listing.location} (${listing.intent}, ${listing.price}) on your website.`,
  )}`;
