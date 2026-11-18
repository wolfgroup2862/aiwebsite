"use client";

import { useEffect, useRef, useState } from "react";
import KLSkyline from "./KLSkyline";
import s from "./agent.module.css";

// Hero: the agent's real photo stands on a KL rooftop at night.
// Tap → a scan line sweeps up and reveals their "hero" character version.
export default function NightHero({
  name,
  realImage,
  heroImage,
  subtitle,
}: {
  name: string;
  realImage: string;
  heroImage?: string;
  subtitle: string;
}) {
  const [hero, setHero] = useState(false);
  const [scanKey, setScanKey] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Scroll: figure zooms in slightly, headline fades.
  useEffect(() => {
    const el = heroRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const p = Math.min(1, Math.max(0, window.scrollY / (el.offsetHeight * 0.8)));
        el.style.setProperty("--p", p.toFixed(3));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggle = () => {
    if (!heroImage) return;
    setHero((h) => !h);
    setScanKey((k) => k + 1);
  };

  const figure = (
    <span className={s.figFloat}>
      <img className={s.layerReal} src={realImage} alt="" draggable={false} />
      {heroImage && <img className={s.layerHero} src={heroImage} alt="" draggable={false} />}
      {scanKey > 0 && <span key={scanKey} className={`${s.scan} ${hero ? s.scanUp : s.scanDown}`} />}
      {scanKey > 0 && <span key={`f${scanKey}`} className={s.flash} />}
    </span>
  );

  return (
    <section id="top" ref={heroRef} className={s.night}>
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
          type="button"
          className={`${s.figure} ${hero ? s.isHero : ""}`}
          onClick={toggle}
          aria-pressed={hero}
          aria-label={hero ? `Switch ${name} back` : `Tap to reveal ${name}'s hero form`}
        >
          {figure}
          <span className={s.tapHint} aria-hidden="true">
            {hero ? "Tap to switch back" : "Tap me ✦"}
          </span>
        </button>
      ) : (
        <div className={`${s.figure} ${s.figureHalf}`}>{figure}</div>
      )}

      <a href="#about" className={s.scrollCue} aria-label="Scroll down">
        <span>Scroll</span>
        <i />
      </a>
    </section>
  );
}
