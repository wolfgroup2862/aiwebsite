"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import KLSkyline from "./KLSkyline";
import s from "./agent.module.css";

type Card = { title: string; body: string };

// Hero, modelled on the "Hi there, I am Joe" reference:
//  • the agent's real photo stands on a KL rooftop at night
//  • moving the cursor / finger over them reveals the "hero" version
//    inside an x-ray spotlight; a tap expands it to the whole body
//  • scrolling zooms into the face while glass info cards slide in
export default function NightHero({
  name,
  realImage,
  heroImage,
  subtitle,
  cards,
}: {
  name: string;
  realImage: string;
  heroImage?: string;
  subtitle: string;
  cards: Card[];
}) {
  const [full, setFull] = useState(false);
  const [hover, setHover] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const figRef = useRef<HTMLButtonElement>(null);

  // Scroll progress across the tall section → --p (0..1)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "0");
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const range = el.offsetHeight - window.innerHeight;
        const p = Math.min(1, Math.max(0, -r.top / Math.max(1, range)));
        el.style.setProperty("--p", p.toFixed(3));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const track = (e: PointerEvent<HTMLButtonElement>) => {
    const b = figRef.current;
    if (!b) return;
    const r = b.getBoundingClientRect();
    b.style.setProperty("--mx", `${e.clientX - r.left}px`);
    b.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const figureInner = (
    <span className={s.figZoom}>
      <span className={s.maskReal}>
        <img className={s.figImg} src={realImage} alt="" draggable={false} />
      </span>
      {heroImage && (
        <span className={s.maskHero}>
          <img className={s.figImg} src={heroImage} alt="" draggable={false} />
        </span>
      )}
    </span>
  );

  return (
    <section id="top" ref={sectionRef} className={s.night}>
      <div className={s.nightSticky}>
        <KLSkyline className={s.skyline} />
        <div className={s.vignette} aria-hidden="true" />

        <div className={s.heroText}>
          <p className={s.hi}>Hi there</p>
          <h1 className={s.iam}>
            <span className={s.iamLeft}>I am</span> <span className={s.iamRight}>{name}</span>
          </h1>
          <p className={s.subtitle}>{subtitle}</p>
        </div>

        {heroImage ? (
          <button
            ref={figRef}
            type="button"
            className={`${s.figure} ${hover ? s.isHover : ""} ${full ? s.isFull : ""}`}
            onPointerEnter={(e) => {
              track(e);
              setHover(true);
            }}
            onPointerMove={track}
            onPointerLeave={() => setHover(false)}
            onPointerDown={track}
            onClick={() => setFull((f) => !f)}
            aria-pressed={full}
            aria-label={full ? `Switch ${name} back` : `Reveal ${name}'s hero form`}
          >
            {figureInner}
            <span className={s.ring} aria-hidden="true" />
            <span className={s.tapHint} aria-hidden="true">
              {full ? "Tap to switch back" : "Hover or tap ✦"}
            </span>
          </button>
        ) : (
          <div className={`${s.figure} ${s.figureHalf}`}>{figureInner}</div>
        )}

        <div className={s.glassCards}>
          {cards.map((c, i) => (
            <article key={c.title} className={s.glass} style={{ ["--i" as string]: i }}>
              <h2>{c.title}</h2>
              <p>{c.body}</p>
            </article>
          ))}
        </div>

        <a href="#about" className={s.scrollCue} aria-label="Scroll down">
          <span>Scroll</span>
          <i />
        </a>
      </div>
    </section>
  );
}
