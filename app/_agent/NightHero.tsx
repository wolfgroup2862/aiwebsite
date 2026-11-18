"use client";

import { useEffect, useId, useRef, useState } from "react";
import Character, { type CharacterKind } from "./Character";
import s from "./agent.module.css";

// Deterministic star field so server and client render the same markup.
const STARS = Array.from({ length: 90 }, (_, i) => {
  const r = (n: number) => {
    const x = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  return { x: r(1) * 100, y: r(2) * 70, size: r(3) < 0.85 ? 1 : 2, delay: r(4) * 4 };
});

export default function NightHero({
  name,
  kind,
  subtitle,
}: {
  name: string;
  kind: CharacterKind;
  subtitle: string;
}) {
  const [robot, setRobot] = useState(false);
  const [scanKey, setScanKey] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const uid = useId().replace(/:/g, "");

  // Scroll: character zooms in, text fades (like the reference site).
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
    setRobot((r) => !r);
    setScanKey((k) => k + 1);
  };

  return (
    <section id="top" ref={heroRef} className={s.night}>
      <div className={s.stars} aria-hidden="true">
        {STARS.map((st, i) => (
          <i
            key={i}
            style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.size, height: st.size, animationDelay: `${st.delay}s` }}
          />
        ))}
      </div>
      <div className={s.glowHorizon} aria-hidden="true" />
      <svg className={s.mountains} viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 210 L120 150 L230 190 L360 110 L470 170 L600 120 L720 180 L860 100 L980 160 L1110 115 L1240 175 L1340 140 L1440 170 L1440 320 L0 320 Z" fill="#1a1736" />
        <path d="M0 260 L150 205 L300 245 L420 200 L560 250 L700 215 L840 255 L990 210 L1140 250 L1290 215 L1440 245 L1440 320 L0 320 Z" fill="#100e24" />
      </svg>

      <div className={s.heroInner}>
        <p className={s.hi}>Hi there</p>
        <h1 className={s.srOnly}>I am {name}</h1>
        <div className={s.iam}>
          <span className={s.iamLeft} aria-hidden="true">I am</span>

          <button
            type="button"
            className={`${s.charBtn} ${robot ? s.isRobot : ""}`}
            onClick={toggle}
            aria-pressed={robot}
            aria-label={robot ? `Switch ${name} back to human` : `Tap to turn ${name} into a robot`}
          >
            <span className={s.charFloat}>
              <span className={s.layerHuman}>
                <Character kind={kind} robot={false} uid={`${uid}h`} />
              </span>
              <span className={s.layerRobot}>
                <Character kind={kind} robot uid={`${uid}r`} />
              </span>
              {scanKey > 0 && <span key={scanKey} className={`${s.scan} ${robot ? s.scanUp : s.scanDown}`} />}
            </span>
            <svg className={s.rock} viewBox="0 0 300 80" aria-hidden="true">
              <path d="M10 70 Q30 30 80 26 Q110 8 150 18 Q200 6 240 28 Q285 36 292 70 Z" fill="#242040" />
              <path d="M40 46 Q90 30 130 36 M170 30 Q210 26 250 40" stroke="#3a3466" strokeWidth="3" fill="none" />
            </svg>
            <span className={s.tapHint} aria-hidden="true">
              {robot ? "Tap to switch back" : "Tap me ✦"}
            </span>
          </button>

          <span className={s.iamRight} aria-hidden="true">{name}</span>
        </div>
        <p className={s.subtitle}>{subtitle}</p>
      </div>

      <a href="#about" className={s.scrollCue} aria-label="Scroll down">
        <span>Scroll</span>
        <i />
      </a>
    </section>
  );
}
