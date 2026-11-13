import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Jared Wong's profile, categorised portfolio and contact actions", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Jared Wong Kim Loong \(REN 07483\)/);
  assert.match(html, /src="\/wolf-group-logo-transparent\.png"/);
  assert.match(html, /Industrial &amp; Commercial Property Specialist/);
  assert.match(html, /Associate Leader/);
  assert.doesNotMatch(html, /class="hero-az"|class="hero-tape"|class="hero-topline"|class="hero-small"|Associate Leader \/ Founder/);
  assert.match(html, /<nav aria-label="Primary navigation">/);
  assert.match(html, /href="#credentials">Profile<\/a>/);
  assert.match(html, /href="#recognition">Recognition<\/a>/);
  assert.match(html, /href="#portfolio">Properties<\/a>/);
  assert.match(html, /href="#reviews">Reviews<\/a>/);
  assert.match(html, /class="hero-specialty">Industrial &amp; Commercial Property Specialist<\/p>/);
  assert.match(html, /src="\/trr-associate-leader\.jpg"/);
  assert.match(html, /promotion poster for Associate Leader at The Roof Realty/);
  assert.doesNotMatch(html, /<span>Current role<\/span>/);
  assert.match(html, /Founder · Wolf Group/);
  assert.match(html, /src="\/wolf-group-team\.jpg"/);
  assert.match(html, /Jared Wong surrounded by members of the Wolf Group team/);
  assert.match(html, /TRR Multi Million Agent/);
  assert.match(html, /id="recognition-title"/);
  assert.match(html, /src="\/jared-mma-2023\.jpg"/);
  assert.match(html, /src="\/jared-mma-2024\.jpg"/);
  assert.match(html, /src="\/jared-mma-2025\.jpg"/);
  assert.match(html, /Jared Wong&#x27;s 2023 MMA achiever poster/);
  assert.match(html, /Jared Wong&#x27;s 2024 MMA achiever poster/);
  assert.match(html, /Jared Wong&#x27;s 2025 MMA achiever poster/);
  assert.equal((html.match(/class="award-posters"/g) ?? []).length, 1);
  assert.equal((html.match(/class="award-poster-card"/g) ?? []).length, 3);
  assert.doesNotMatch(html, /class="award-year\b|class="award-meta\b/);
  assert.doesNotMatch(html, /Profile \/ Track record|Recognition \/ The Roof Realty|Property portfolio \/ iProperty|02 selected/);
  assert.match(html, /Freehold 4-Storey Shop/);
  assert.match(html, /Semi-D Factory/);
  assert.match(html, /Lake-Facing Semi-D/);
  assert.match(html, /Spacious Condominium/);
  assert.match(html, /Explore Jared&#x27;s current public portfolio/);
  assert.equal((html.match(/class="property-card property-card--/g) ?? []).length, 6);
  assert.equal((html.match(/class="property-card-media"/g) ?? []).length, 6);
  assert.match(html, /role="tablist" aria-label="Property categories"/);
  assert.equal((html.match(/class="property-carousel-tab"/g) ?? []).length, 3);
  assert.equal((html.match(/aria-selected="true"/g) ?? []).length, 1);
  assert.match(html, /id="property-panel-commercial"/);
  assert.match(html, /id="property-panel-industrial"/);
  assert.match(html, /id="property-panel-residential"/);
  assert.equal((html.match(/For Sale(?:<!-- -->)? · iProperty/g) ?? []).length, 6);
  assert.doesNotMatch(html, />Land \/ /);
  assert.match(html, /id="contact"/);
  assert.match(html, /id="reviews"/);
  assert.match(html, /id="sample-feedback-title"/);
  assert.match(html, /Sample preview only\./);
  assert.match(html, /not real client or Google reviews/);
  assert.equal((html.match(/class="sample-feedback-card\s/g) ?? []).length, 5);
  assert.match(html, /Jason Tan/);
  assert.match(html, /Kayen Wong/);
  assert.match(html, /Joanne Wong/);
  assert.match(html, /Jackson Liew/);
  assert.match(html, /Carol Tan/);
  assert.doesNotMatch(html, /\bDraft\b/i);
  assert.doesNotMatch(html, /Sample only/);
  assert.doesNotMatch(html, /Google Review|★★★★★/);
  assert.match(html, /Write a review for Jared/);
  assert.match(html, /Request the official Google review link via WhatsApp\./);
  assert.match(html, /wa\.me\/60122971898/);
  assert.match(html, /href="tel:\+60122971898"/);
  assert.match(html, /WhatsApp/);
  assert.match(html, /Call now/);
  assert.match(html, /\+60 12-297 1898/);
  assert.doesNotMatch(html, /3×|3x|three-time|Three years/i);
  assert.equal((html.match(/class="az-entry\b/g) ?? []).length, 0);
  assert.doesNotMatch(html, /class="alphabet-index\b|class="finale\b|class="site-footer\b/);
  assert.doesNotMatch(html, /555-555-5555|mymail@mailservice\.com/i);
});

test("keeps the profile assets, metadata and responsive safeguards intact", async () => {
  const [page, carousel, css, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/property-carousel.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    access(new URL("../public/jared-cover.jpg", import.meta.url)),
    access(new URL("../public/wolf-group-logo.png", import.meta.url)),
    access(new URL("../public/wolf-group-logo-transparent.png", import.meta.url)),
    access(new URL("../public/og-jared-az.png", import.meta.url)),
    access(new URL("../public/jared-mma-2023.jpg", import.meta.url)),
    access(new URL("../public/jared-mma-2024.jpg", import.meta.url)),
    access(new URL("../public/jared-mma-2025.jpg", import.meta.url)),
    access(new URL("../public/wolf-group-team.jpg", import.meta.url)),
    access(new URL("../public/trr-associate-leader.jpg", import.meta.url)),
    ...Array.from({ length: 6 }, (_, index) => access(new URL(`../public/properties/listing-${String(index + 1).padStart(2, "0")}.jpg`, import.meta.url))),
  ]);

  assert.equal((page.match(/\{ letter: "[A-Z]"/g) ?? []).length, 0);
  assert.doesNotMatch(page, /AlphabetEntry|alphabet-index|finale|site-footer/);
  assert.match(page, /property-agent\/jared-wong-623987/);
  assert.match(carousel, /target="_blank" rel="noreferrer"/);
  assert.match(carousel, /role="tablist"/);
  assert.match(carousel, /role="tabpanel"/);
  assert.match(carousel, /const centeredLeft = target\.offsetLeft - \(viewport\.clientWidth - target\.offsetWidth\) \/ 2/);
  assert.match(carousel, /const viewportCenter = viewport\.scrollLeft \+ viewport\.clientWidth \/ 2/);
  assert.match(layout, /og-jared-az\.png/);
  assert.doesNotMatch(layout, /three-time|3×|3x/i);
  assert.match(layout, /Jared Wong Kim Loong \(REN 07483\)/);
  assert.match(css, /@media \(max-width: 1200px\)/);
  assert.match(css, /@media \(max-width: 900px\)/);
  assert.match(css, /@media \(max-width: 650px\)/);
  assert.match(css, /@media \(max-width: 480px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.doesNotMatch(css, /hero-az|hero-tape|hero-topline|hero-small/);
  assert.match(css, /:focus-visible\s*\{[^}]*outline:\s*2px solid var\(--brass\)/s);
  assert.match(css, /\.site-header\s*\{[^}]*position:\s*absolute;[^}]*grid-template-columns:\s*1fr auto 1fr;[^}]*border-bottom:\s*1px solid var\(--line-light\)/s);
  assert.doesNotMatch(css, /\.site-header\s*\{[^}]*position:\s*fixed;/s);
  assert.match(css, /\.wordmark\s*\{[^}]*width:\s*clamp\(230px, 19vw, 350px\)/s);
  assert.match(css, /\.hero\s*\{[^}]*min-height:\s*100svh;/s);
  assert.match(css, /\.hero-content/);
  assert.match(css, /\.hero-specialty/);
  assert.match(css, /\.site-header nav/);
  assert.match(css, /--ivory:\s*#f4f1ea/);
  assert.match(css, /--charcoal:\s*#171715/);
  assert.match(css, /--brass:\s*#aa8951/);
  assert.match(css, /\.profile-facts/);
  assert.match(css, /\.credentials-roles/);
  assert.match(css, /\.recognition/);
  assert.match(css, /\.award-posters/);
  assert.doesNotMatch(css, /\.award-year\b|\.award-meta\b/);
  assert.match(css, /\.property-portfolio/);
  assert.match(css, /\.property-carousel/);
  assert.match(css, /\.property-slider-track/);
  assert.match(css, /\.property-slider-viewport\s*\{[^}]*overflow-x:\s*auto;[^}]*scroll-snap-type:\s*x mandatory;/s);
  assert.match(css, /\.property-slide\s*\{[^}]*scroll-snap-align:\s*start;/s);
  assert.doesNotMatch(css, /\.property-carousel-count\s*\{\s*display:\s*none;/s);
  assert.match(css, /\.property-card-media img\s*\{[^}]*aspect-ratio:\s*3 \/ 2;/s);
  assert.match(css, /\.contact-button--whatsapp/);
  assert.match(css, /\.sample-feedback-grid/);
  assert.match(css, /\.sample-feedback-grid\s*\{[^}]*grid-template-columns:\s*repeat\(5,/s);
  assert.match(css, /@media \(max-width: 1200px\)[\s\S]*\.sample-feedback-grid\s*\{\s*grid-template-columns:\s*repeat\(3,/s);
  assert.match(css, /@media \(max-width: 900px\)[\s\S]*\.sample-feedback-grid\s*\{\s*grid-template-columns:\s*repeat\(2,/s);
  assert.match(css, /@media \(max-width: 480px\)[\s\S]*\.sample-feedback-grid\s*\{\s*grid-template-columns:\s*1fr;/s);
  assert.match(css, /\.sample-feedback-cta/);
});
