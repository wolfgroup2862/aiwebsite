import type { Metadata } from "next";
import NightHero from "./NightHero";
import s from "./agent.module.css";

// Shared one-page agent profile template (style based on the "Hello, I'm ..."
// personal-site reference). Each agent has a route folder (app/mandy,
// app/wilson) holding only profile.ts + page.tsx. To move an agent to their
// own repo, copy app/_agent, their route folder and public/agent/<name>.jpg.

export type Profile = {
  firstName: string;
  fullName: string;
  chineseName?: string;
  agency: string;
  tagline: string;
  intro: string;
  areas: string[];
  specialties: string[];
  whatsapp: string; // digits only, e.g. "60123456789". Empty = button hidden.
  photo: string;
  realImage: string; // background-removed photo (PNG/WebP) shown first in the hero
  halfImage?: string; // half-body cut-out for portrait frames (team page); falls back to realImage
  heroImage?: string; // background-removed "hero character" version revealed on tap
};
export type Listing = { title: string; area: string; type: string; price: string; image?: string; facts?: string[] };
export type Note = { tag: string; tone: "lime" | "peach" | "sky" | "lilac"; title: string; body: string };

export function agentMetadata(profile: Profile, path: string): Metadata {
  return {
    title: { absolute: `${profile.fullName} | ${profile.areas.join(", ")} Property | ${profile.agency}` },
    description: profile.tagline,
    // Placeholder details still in profile.ts — keep out of search engines until confirmed.
    robots: { index: false, follow: false },
    alternates: { canonical: path },
    openGraph: { title: `${profile.fullName} — ${profile.agency}`, description: profile.tagline, images: [profile.photo] },
  };
}

export default function AgentPage({ profile, listings, notes }: { profile: Profile; listings: Listing[]; notes: Note[] }) {
  const wa = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(`Hi ${profile.firstName}, I found your website and would like to ask about a property.`)}`
    : null;

  return (
    <main className={s.page}>
      <header className={s.nav}>
        <a href="#top" className={s.brand}>
          {profile.firstName}
          <span>.</span>
        </a>
        <nav aria-label="Agent page sections" className={s.navLinks}>
          {listings.length > 0 && <a href="#listings">Listings</a>}
          <a href="#notes">Notes</a>
          <a href="#contact" className={s.navCta}>Contact</a>
        </nav>
      </header>

      <NightHero
        name={profile.firstName}
        realImage={profile.realImage}
        heroImage={profile.heroImage}
        subtitle={profile.areas.join(" · ")}
        cards={[
          { title: "About", body: profile.intro },
          { title: "Areas", body: profile.areas.join(" · ") },
          { title: "Specialties", body: profile.specialties.join(" · ") },
        ]}
      />

      <section id="about" className={s.intro}>
        <div className={s.introCard}>
          <p className={s.kicker}>{profile.agency}</p>
          <p className={s.tagline}>{profile.tagline}</p>
          <ul className={s.chips}>
            {profile.specialties.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <div className={s.actions}>
            {wa && (
              <a className={s.btnPrimary} href={wa} target="_blank" rel="noopener noreferrer">
                WhatsApp me
              </a>
            )}
            {listings.length > 0 && (
              <a className={s.btnGhost} href="#listings">
                See my listings ↓
              </a>
            )}
          </div>
        </div>
        <figure className={s.photoCard}>
          <img src={profile.photo} alt={`${profile.fullName}, ${profile.agency}`} width={1000} height={1500} loading="lazy" />
          <figcaption>The real {profile.firstName} 👋</figcaption>
        </figure>
      </section>

      <div className={s.marquee} aria-label="Areas I cover">
        <div className={s.track}>
          {[...profile.areas, ...profile.areas, ...profile.areas].map((a, i) => (
            <span key={i}>
              {a} <em>✦</em>
            </span>
          ))}
        </div>
      </div>

      <section className={s.about}>
        <p className={s.label}>About me</p>
        <p className={s.aboutText}>{profile.intro}</p>
      </section>

      {listings.length > 0 && (
        <section id="listings" className={s.section}>
          <div className={s.sectionHead}>
            <p className={s.label}>Selected listings</p>
            <h2>
              Properties I&rsquo;m showing
              <br />
              <span>with heart &amp; homework.</span>
            </h2>
          </div>
          <div className={s.cards}>
            {listings.map((l, i) => (
              <article key={i} className={s.card}>
                <div className={s.cardImg} data-tone={i % 3}>
                  {l.image ? <img src={l.image} alt={l.title} loading="lazy" /> : <span>Photo coming soon</span>}
                </div>
                <div className={s.cardBody}>
                  <p className={s.cardType}>{l.type}</p>
                  <h3>{l.title}</h3>
                  <p className={s.cardMeta}>
                    <span>{l.area}</span>
                    <strong>{l.price}</strong>
                  </p>
                  {l.facts && l.facts.length > 0 && (
                    <ul className={s.cardFacts}>
                      {l.facts.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section id="notes" className={s.section}>
        <div className={s.sectionHead}>
          <p className={s.label}>Field notes</p>
          <h2>
            Tips &amp;
            <br />
            <span>marginalia.</span>
          </h2>
        </div>
        <div className={s.notes}>
          {notes.map((n) => (
            <article key={n.title} className={s.note}>
              <p className={s.tag} data-tone={n.tone}>
                {n.tag}
              </p>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={s.cta}>
        <h2>
          Let&rsquo;s talk <span>property.</span>
        </h2>
        <p>
          {profile.fullName}
          {profile.chineseName && ` · ${profile.chineseName}`} · {profile.agency}
        </p>
        {wa ? (
          <a className={s.btnDark} href={wa} target="_blank" rel="noopener noreferrer">
            Message me on WhatsApp →
          </a>
        ) : (
          <p className={s.pending}>WhatsApp button appears once the number is added.</p>
        )}
      </section>

      <footer className={s.footer}>
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span>{profile.agency}</span>
      </footer>
    </main>
  );
}
