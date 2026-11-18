import type { Metadata } from "next";
import { PROFILE as MANDY } from "../mandy/profile";
import { PROFILE as WILSON } from "../wilson/profile";
import type { Profile } from "../_agent/AgentPage";
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
  // hotspot over the person in the hero photo, in % of the photo
  spot: { left: number; top: number; width: number; height: number; labelTop: number };
};

const TEAM: Member[] = [
  { id: "mandy", profile: MANDY, spot: { left: 26, top: 20, width: 31, height: 80, labelTop: 12 } },
  { id: "wilson", profile: WILSON, spot: { left: 57.5, top: 15, width: 30, height: 80, labelTop: 6 } },
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
        <div className={s.stage}>
          <img className={s.photo} src="/agent/team-hero.webp" alt="Mandy and Wilson working together at a desk" width={1672} height={859} />
          <div className={s.shade} aria-hidden="true" />

          {TEAM.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className={s.spot}
              style={{ left: `${m.spot.left}%`, top: `${m.spot.top}%`, width: `${m.spot.width}%`, height: `${m.spot.height}%` }}
              aria-label={`Meet ${m.profile.firstName}`}
            >
              <span className={s.spotLabel} style={{ top: `${m.spot.labelTop}%` }}>
                <i aria-hidden="true" />
                Meet {m.profile.firstName} <b aria-hidden="true">↓</b>
              </span>
            </a>
          ))}
        </div>

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
            <figure className={s.portrait}>
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
