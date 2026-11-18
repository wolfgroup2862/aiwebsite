"use client";

import { useRef, type CSSProperties, type MouseEvent } from "react";
import s from "./team.module.css";

export type HeroMember = {
  id: string;
  name: string;
  cutout: string; // background-removed crop of this person from the team photo
  box: { left: number; top: number; width: number; height: number }; // % of photo
  bubble: { left: number; top: number; mobile?: { left: number; top: number } }; // % of the person's box
};

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
    const t0 = landing.getBoundingClientRect();
    const from = { x: a.left, y: a.top + sy0, w: a.width, h: a.height };
    const ratio = a.width / a.height;
    let h = t0.height * 0.94;
    let w = h * ratio;
    if (w > t0.width * 0.98) {
      w = t0.width * 0.98;
      h = w / ratio;
    }
    const to = { x: t0.left + (t0.width - w) / 2, y: t0.top + sy0 + t0.height - h, w, h };
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const endScroll = Math.min(maxScroll, section.getBoundingClientRect().top + sy0 - 70);

    const clone = document.createElement("img");
    clone.src = person.currentSrc || person.src;
    clone.alt = "";
    clone.className = s.flyer;
    document.body.appendChild(clone);

    // freeze the clip on its first frame, which is the frame the cut-outs came from
    const vid = stageRef.current?.querySelector("video");
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
    }
    stageRef.current?.classList.add(s.dim);
    person.classList.add(s.lifted);
    section.classList.remove(s.arrived);
    section.classList.add(s.waiting);

    const D = 1700;
    let start = -1;
    const step = (now: number) => {
      if (start < 0) start = now;
      const t = clamp((now - start) / D);
      const lift = clamp(t / 0.2); // step out towards the viewer
      const travel = ease(clamp((t - 0.2) / 0.68)); // jump down the page
      const land = clamp((t - 0.88) / 0.12); // squash on landing

      window.scrollTo({ top: sy0 + (endScroll - sy0) * travel, behavior: "instant" as ScrollBehavior });

      const x = from.x + (to.x - from.x) * travel;
      const y = from.y + (to.y - from.y) * travel - Math.sin(Math.PI * travel) * 180 - lift * (1 - travel) * 24;
      const cw = from.w + (to.w - from.w) * travel;
      const ch = from.h + (to.h - from.h) * travel;
      const pop = 1 + 0.1 * lift * (1 - travel);
      const squash = 1 - 0.09 * Math.sin(Math.PI * land);
      const rot = Math.sin(Math.PI * travel) * -7;

      clone.style.width = `${cw}px`;
      clone.style.height = `${ch}px`;
      clone.style.transform = `translate(${x}px, ${y - window.scrollY}px) rotate(${rot}deg) scale(${pop * (2 - squash)}, ${pop * squash})`;

      if (t < 1) {
        requestAnimationFrame(step);
        return;
      }
      section.classList.remove(s.waiting);
      section.classList.add(s.arrived);
      stageRef.current?.classList.remove(s.dim);
      vid?.play().catch(() => {});
      person.classList.remove(s.lifted);
      clone.classList.add(s.flyerOut);
      window.setTimeout(() => clone.remove(), 500);
      history.replaceState(null, "", `#${id}`);
      busy.current = false;
    };
    requestAnimationFrame(step);
  };

  return (
    <div ref={stageRef} className={`${s.stage} ${video ? s.hasVideo : ""}`} style={{ "--ar": aspect } as CSSProperties}>
      {video ? (
        // AI-generated clip of the same shot where they wave; the photo is its poster
        <video className={s.photo} poster={photo} autoPlay muted loop playsInline preload="auto" aria-label="Mandy and Wilson waving hello">
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
            style={
              {
                "--bl": `${m.bubble.left}%`,
                "--bt": `${m.bubble.top}%`,
                "--mbl": `${(m.bubble.mobile ?? m.bubble).left}%`,
                "--mbt": `${(m.bubble.mobile ?? m.bubble).top}%`,
                animationDelay: `${0.9 + i * 0.7}s`,
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
