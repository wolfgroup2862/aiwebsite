"use client";

import { useRef, useState, type KeyboardEvent } from "react";

export type PropertyCategory = "Commercial" | "Industrial" | "Residential";

export type PropertyListing = {
  id: string;
  category: PropertyCategory;
  intent: "For Sale" | "For Rent";
  location: string;
  title: string;
  image: string;
  imageAlt: string;
  price: string;
  area: string;
  detail: string;
  href: string;
};

export type PropertyGroup = {
  category: PropertyCategory;
  description: string;
  listings: PropertyListing[];
};

function PropertyCard({ listing }: { listing: PropertyListing }) {
  return (
    <article className={`property-card property-card--${Number(listing.id)} property-slide`}>
      <a href={listing.href} target="_blank" rel="noreferrer" aria-label={`View ${listing.title} in ${listing.location} on iProperty`}>
        <figure className="property-card-media">
          <img src={listing.image} alt={listing.imageAlt} loading="lazy" decoding="async" />
          <figcaption>{listing.intent} · iProperty</figcaption>
        </figure>
        <div className="property-card-copy">
          <div className="property-card-meta">
            <span>{listing.category}</span>
            <span>{listing.id} / 06</span>
          </div>
          <p>{listing.location}</p>
          <h4>{listing.title}</h4>
          <dl>
            <div><dt>Price</dt><dd>{listing.price}</dd></div>
            <div><dt>Built-up</dt><dd>{listing.area}</dd></div>
            <div><dt>Details</dt><dd>{listing.detail}</dd></div>
          </dl>
          <span className="property-card-link">View listing <b aria-hidden="true">↗</b></span>
        </div>
      </a>
    </article>
  );
}

export default function PropertyCarousel({ groups }: { groups: PropertyGroup[] }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSlides, setActiveSlides] = useState(() => groups.map(() => 0));
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const viewportRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollFrame = useRef<number | null>(null);

  const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const selectCategory = (index: number, focus = false) => {
    setActiveCategory(index);
    setActiveSlides((current) => current.map((slide, groupIndex) => groupIndex === index ? 0 : slide));
    window.requestAnimationFrame(() => {
      viewportRefs.current[index]?.scrollTo({ left: 0, behavior: reducedMotion() ? "auto" : "smooth" });
      if (focus) tabRefs.current[index]?.focus();
    });
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % groups.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + groups.length) % groups.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = groups.length - 1;
    else return;

    event.preventDefault();
    selectCategory(nextIndex, true);
  };

  const scrollToSlide = (groupIndex: number, slideIndex: number) => {
    const viewport = viewportRefs.current[groupIndex];
    const slides = viewport?.querySelectorAll<HTMLElement>(".property-slide");
    const target = slides?.[slideIndex];
    if (!viewport || !target) return;

    const centeredLeft = target.offsetLeft - (viewport.clientWidth - target.offsetWidth) / 2;
    viewport.scrollTo({ left: Math.max(0, centeredLeft), behavior: reducedMotion() ? "auto" : "smooth" });
    setActiveSlides((current) => current.map((slide, index) => index === groupIndex ? slideIndex : slide));
  };

  const handleScroll = (groupIndex: number) => {
    if (scrollFrame.current !== null) window.cancelAnimationFrame(scrollFrame.current);
    scrollFrame.current = window.requestAnimationFrame(() => {
      const viewport = viewportRefs.current[groupIndex];
      const slides = [...(viewport?.querySelectorAll<HTMLElement>(".property-slide") ?? [])];
      if (!viewport || slides.length === 0) return;

      const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
      const nearest = viewport.scrollLeft <= 1
        ? 0
        : slides.reduce((best, slide, index) => {
          const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
          const bestCenter = slides[best].offsetLeft + slides[best].offsetWidth / 2;
          return Math.abs(slideCenter - viewportCenter) < Math.abs(bestCenter - viewportCenter) ? index : best;
        }, 0);
      setActiveSlides((current) => current[groupIndex] === nearest
        ? current
        : current.map((slide, index) => index === groupIndex ? nearest : slide));
    });
  };

  return (
    <div className="property-carousel">
      <div className="property-carousel-tabs" role="tablist" aria-label="Property categories">
        {groups.map((group, index) => {
          const slug = group.category.toLowerCase();
          return (
            <button
              className="property-carousel-tab"
              id={`property-tab-${slug}`}
              key={group.category}
              ref={(node) => { tabRefs.current[index] = node; }}
              type="button"
              role="tab"
              aria-selected={activeCategory === index}
              aria-controls={`property-panel-${slug}`}
              tabIndex={activeCategory === index ? 0 : -1}
              onClick={() => selectCategory(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              <span>0{index + 1}</span>
              {group.category}
            </button>
          );
        })}
      </div>

      <div className="property-carousel-panels">
        {groups.map((group, groupIndex) => {
          const slug = group.category.toLowerCase();
          const activeSlide = activeSlides[groupIndex];
          return (
            <section
              className="property-carousel-panel"
              id={`property-panel-${slug}`}
              key={group.category}
              role="tabpanel"
              aria-labelledby={`property-tab-${slug}`}
              hidden={activeCategory !== groupIndex}
            >
              <header className="property-carousel-header">
                <div>
                  <p>{group.category}</p>
                  <h3>{group.description}</h3>
                </div>
                <div className="property-carousel-controls">
                  <span className="property-carousel-count" aria-live="polite">0{activeSlide + 1} / 0{group.listings.length}</span>
                  <button type="button" onClick={() => scrollToSlide(groupIndex, activeSlide - 1)} disabled={activeSlide === 0} aria-label={`Previous ${group.category} property`}>←</button>
                  <button type="button" onClick={() => scrollToSlide(groupIndex, activeSlide + 1)} disabled={activeSlide === group.listings.length - 1} aria-label={`Next ${group.category} property`}>→</button>
                </div>
              </header>

              <div
                className="property-slider-viewport"
                ref={(node) => { viewportRefs.current[groupIndex] = node; }}
                onScroll={() => handleScroll(groupIndex)}
                aria-label={`${group.category} property listings`}
                tabIndex={0}
              >
                <div className="property-slider-track">
                  {group.listings.map((listing) => <PropertyCard listing={listing} key={listing.href} />)}
                </div>
              </div>
              <div className="property-slider-progress" aria-hidden="true">
                <span style={{ transform: `scaleX(${(activeSlide + 1) / group.listings.length})` }} />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
