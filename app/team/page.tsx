import type { Metadata } from "next";
import { PROFILE as MANDY } from "../mandy/profile";
import { PROFILE as WILSON } from "../wilson/profile";
import type { Profile } from "../_agent/AgentPage";
import TeamHero, { type HeroMember } from "./TeamHero";
import s from "./team.module.css";

// Team landing page (warm studio style). Click a person in the hero photo →
// page scrolls down to their introduction. Agent details come from each
// agent's own profile.ts, so there is one place to edit them.

export const metadata: Metadata = {
  title: { absolute: "Meet the Team | Wolf Group · The Roof Realty (TRR)" },
  description: "Meet Mandy and Wilson of Wolf Group, The Roof Realty (TRR).",
  robots: { index: false, follow: false }, // placeholder details still being filled in
  alternates: { canonical: "/team" },
};

type Member = {
  id: string;
  profile: Profile;
  cutout: string; // this person cut out of the team photo (they "jump" out on click)
  box: HeroMember["box"]; // where that cutout sits on the photo, in %
  bubble: HeroMember["bubble"]; // speech-bubble position, in % of the box
};

const TEAM: Member[] = [
  {
    id: "mandy",
    profile: MANDY,
    cutout: "/agent/mandy-team.webp",
    box: { left: 23.86, top: 11.68, width: 28.8, height: 46.88 },
    bubble: { left: -40, top: 18, mobile: { left: 10, top: -16 } },
  },
  {
    id: "wilson",
    profile: WILSON,
    cutout: "/agent/wilson-team.webp",
    box: { left: 52.66, top: 6.52, width: 38.83, height: 52.04 },
    bubble: { left: 70, top: 4, mobile: { left: 18, top: -8 } },
  },
];

function waLink(p: Profile) {
  return p.whatsapp
    ? `https://wa.me/${p.whatsapp}?text=${encodeURIComponent(`Hi ${p.firstName}, I found your website and would like to ask about a property.`)}`
    : null;
}

export default function TeamPage() {
  return (
    <main className={s.page}>
      <header className={s.nav}>
        <a href="#top" className={s.brand} aria-label="Wolf Group home">
          <img src="/wolf-group-logo-transparent.png" alt="Wolf Group" width={3050} height={721} />
        </a>
        <nav aria-label="Team page sections" className={s.links}>
          <a href="#top">Home</a>
          {TEAM.map((m) => (
            <a key={m.id} href={`#${m.id}`}>
              {m.profile.firstName}
            </a>
          ))}
        </nav>
        <a href="#contact" className={s.navCta}>
          Get in Touch <span aria-hidden="true">→</span>
        </a>
      </header>

      <section id="top" className={s.hero}>
        <TeamHero
          photo="/agent/team-hero-poster.webp"
          video="/agent/team-hero.mp4" // AI clip of Mandy & Wilson waving (plays forward then back, so it loops smoothly)
          aspect={1316 / 736}
          members={TEAM.map((m) => ({ id: m.id, name: m.profile.firstName, cutout: m.cutout, box: m.box, bubble: m.bubble }))}
        />

        <div className={s.heroText}>
          <h1 className={s.hello}>Hello,</h1>
          <p className={s.lede}>
            We help you find the right property
            <br />
            — and people you can trust.
          </p>
          <a href="#mandy" className={s.cta}>
            Meet our team <span aria-hidden="true">→</span>
          </a>
          <p className={s.hint}>Tip: tap Mandy or Wilson in the photo</p>
        </div>
      </section>

      {TEAM.map((m, i) => {
        const p = m.profile;
        const wa = waLink(p);
        return (
          <section key={m.id} id={m.id} className={`${s.member} ${i % 2 ? s.flip : ""}`}>
            <figure className={s.portrait} data-landing>
              <img src={p.realImage} alt={`${p.fullName}`} loading="lazy" />
            </figure>
            <div className={s.memberText}>
              <p className={s.kicker}>
                {String(i + 1).padStart(2, "0")} · {p.agency}
              </p>
              <h2 className={s.name}>
                {p.firstName}
                <span>.</span>
              </h2>
              <p className={s.tagline}>{p.tagline}</p>
              <p className={s.intro}>{p.intro}</p>
              <dl className={s.facts}>
                <div>
                  <dt>Areas</dt>
                  <dd>{p.areas.join(" · ")}</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>{p.specialties.join(" · ")}</dd>
                </div>
              </dl>
              <div className={s.actions}>
                {wa && (
                  <a className={s.btnYellow} href={wa} target="_blank" rel="noopener noreferrer">
                    WhatsApp {p.firstName}
                  </a>
                )}
                <a className={s.btnLine} href={`/${m.id}`}>
                  View {p.firstName}&rsquo;s page →
                </a>
                <a className={s.back} href="#top">
                  ↑ Back to photo
                </a>
              </div>
            </div>
          </section>
        );
      })}

      <section id="contact" className={s.contact}>
        <h2>
          Let&rsquo;s find your <span>next place.</span>
        </h2>
        <p>Wolf Group · The Roof Realty (TRR)</p>
        <div className={s.actions}>
          {TEAM.map((m) => (
            <a key={m.id} className={s.btnDark} href={`#${m.id}`}>
              Talk to {m.profile.firstName}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
