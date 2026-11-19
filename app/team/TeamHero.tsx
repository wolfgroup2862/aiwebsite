"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import s from "./team.module.css";

export type HeroMember = {
  id: string;
  name: string;
  cutout: string; // background-removed crop of this person from the team photo
  box: { left: number; top: number; width: number; height: number }; // % of photo
  bubble: { left: number; top: number; mobile?: { left: number; top: number } }; // % of the person's box
};

// time (s) in team-hero.mp4 of the frame used for the cut-outs
const CUTOUT_FRAME_TIME = 4.2;

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Click a person → they step out of the photo, jump down the page and land
// in their own intro section's portrait frame.
export default function TeamHero({
  photo,
  video,
  aspect,
  members,
}: {
  photo: string;
  video?: string;
  aspect: number; // width / height of the photo or video
  members: HeroMember[];
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const busy = useRef(false);

  // keep the speech bubbles inside the screen (the photo is cropped at the sides on narrow screens)
  const [shifts, setShifts] = useState<Record<string, number>>({});
  useEffect(() => {
    const fit = () => {
      const vw = document.documentElement.clientWidth;
      const next: Record<string, number> = {};
      stageRef.current?.querySelectorAll<HTMLElement>("[data-bubble]").forEach((b) => {
        const parent = (b.offsetParent as HTMLElement | null)?.getBoundingClientRect();
        if (!parent) return;
        const current = parseFloat(b.style.marginLeft) || 0;
        // layout box without the current shift (ignores the pop-in scale animation)
        const left = parent.left + b.offsetLeft - current;
        const right = left + b.offsetWidth;
        const pad = 12;
        let shift = 0;
        if (left < pad) shift = pad - left;
        else if (right > vw - pad) shift = vw - pad - right;
        next[b.dataset.bubble as string] = Math.round(shift);
      });
      setShifts(next);
    };
    fit();
    const t = window.setTimeout(fit, 300);
    window.addEventListener("resize", fit);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", fit);
    };
  }, []);

  const jump = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const section = document.getElementById(id);
    const landing = section?.querySelector<HTMLElement>("[data-landing]");
    const person = e.currentTarget.querySelector<HTMLImageElement>("img");
    if (!section || !landing || !person) return; // fall back to the plain #anchor jump
    e.preventDefault();
    if (busy.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.scrollIntoView({ behavior: "smooth" });
      return;
    }
    busy.current = true;

    const sy0 = window.scrollY;
    const a = person.getBoundingClientRect();
    // land exactly where the formal photo sits inside the portrait frame
    const formal = landing.querySelector<HTMLImageElement>("img");
    const t0 = (formal ?? landing).getBoundingClientRect();
    const from = { x: a.left, y: a.top + sy0, w: a.width, h: a.height };
    const to = { x: t0.left, y: t0.top + sy0, w: t0.width, h: t0.height };
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const endScroll = Math.min(maxScroll, section.getBoundingClientRect().top + sy0 - 70);

    // flying clone: the cut-out from the video, which turns into the formal
    // photo half-way through the jump (so it lands already as the formal photo)
    const clone = document.createElement("div");
    clone.className = s.flyer;
    const imgA = document.createElement("img");
    imgA.src = person.currentSrc || person.src;
    imgA.alt = "";
    clone.appendChild(imgA);
    let imgB: HTMLImageElement | null = null;
    if (formal) {
      imgB = document.createElement("img");
      imgB.src = formal.currentSrc || formal.src;
      imgB.alt = "";
      imgB.style.opacity = "0";
      clone.appendChild(imgB);
    }
    document.body.appendChild(clone);

    // freeze the clip on the frame the cut-outs were taken from (both smiling, waving)
    const vid = stageRef.current?.querySelector("video");
    if (vid) {
      vid.pause();
      vid.currentTime = CUTOUT_FRAME_TIME;
    }
    stageRef.current?.classList.add(s.dim);
    person.classList.add(s.lifted);
    section.classList.remove(s.arrived);
    section.classList.add(s.waiting);

    const D = 1600;
    let start = -1;
    const step = (now: number) => {
      if (start < 0) start = now;
      const t = clamp((now - start) / D);
      const lift = clamp(t / 0.18); // step out towards the viewer
      const travel = ease(clamp((t - 0.18) / 0.72)); // jump down the page
      const land = clamp((t - 0.9) / 0.1); // small squash on landing
      const morph = clamp((travel - 0.3) / 0.4); // cut-out → formal photo, mid-air

      window.scrollTo({ top: sy0 + (endScroll - sy0) * travel, behavior: "instant" as ScrollBehavior });

      const x = from.x + (to.x - from.x) * travel;
      const y = from.y + (to.y - from.y) * travel - Math.sin(Math.PI * travel) * 160 - lift * (1 - travel) * 24;
      const cw = from.w + (to.w - from.w) * travel;
      const ch = from.h + (to.h - from.h) * travel;
      const pop = 1 + 0.1 * lift * (1 - travel);
      const squash = 1 - 0.06 * Math.sin(Math.PI * land);
      const rot = Math.sin(Math.PI * travel) * -6;

      clone.style.width = `${cw}px`;
      clone.style.height = `${ch}px`;
      clone.style.transform = `translate(${x}px, ${y - window.scrollY}px) rotate(${rot}deg) scale(${pop * (2 - squash)}, ${pop * squash})`;
      if (imgB) {
        imgA.style.opacity = String(1 - morph);
        imgB.style.opacity = String(morph);
      }

      if (t < 1) {
        requestAnimationFrame(step);
        return;
      }
      // the clone now sits exactly on the formal photo: swap invisibly
      section.classList.remove(s.waiting);
      section.classList.add(s.arrived);
      requestAnimationFrame(() => clone.remove());
      stageRef.current?.classList.remove(s.dim);
      person.classList.remove(s.lifted);
      history.replaceState(null, "", `#${id}`);
      busy.current = false;
    };
    requestAnimationFrame(step);
  };

  return (
    <div ref={stageRef} className={`${s.stage} ${video ? s.hasVideo : ""}`} style={{ "--ar": aspect } as CSSProperties}>
      {video ? (
        // AI-generated clip of the same shot where they wave; the photo is its poster
        <video className={s.photo} poster={photo} autoPlay muted playsInline preload="auto" aria-label="Mandy and Wilson waving hello">
          <source src={video} type="video/mp4" />
          <source src={video.replace(/\.mp4$/, ".webm")} type="video/webm" />
        </video>
      ) : (
        <img className={s.photo} src={photo} alt="Mandy and Wilson working together at a desk" />
      )}
      <div className={s.shade} aria-hidden="true" />

      {members.map((m, i) => (
        <a
          key={m.id}
          href={`#${m.id}`}
          className={s.person}
          style={{ left: `${m.box.left}%`, top: `${m.box.top}%`, width: `${m.box.width}%`, height: `${m.box.height}%`, animationDelay: `${i * -2.2}s` }}
          onClick={(e) => jump(e, m.id)}
          aria-label={`Meet ${m.name}`}
        >
          <img src={m.cutout} alt="" draggable={false} />
          <span
            className={s.bubble}
            data-bubble={m.id}
            style={
              {
                "--bl": `${m.bubble.left}%`,
                "--bt": `${m.bubble.top}%`,
                "--mbl": `${(m.bubble.mobile ?? m.bubble).left}%`,
                "--mbt": `${(m.bubble.mobile ?? m.bubble).top}%`,
                animationDelay: `${0.9 + i * 0.7}s`,
                marginLeft: `${shifts[m.id] ?? 0}px`,
              } as CSSProperties
            }
            aria-hidden="true"
          >
            <span className={s.wave}>👋</span> Hi, I&rsquo;m {m.name}!<em>Tap me ↓</em>
          </span>
        </a>
      ))}
    </div>
  );
}
