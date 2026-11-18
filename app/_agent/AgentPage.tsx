import type { Metadata } from "next";
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
  heroVideo?: string; // e.g. "/agent/wilson-hello.mp4" — waving clip; when set it replaces the photo card
  heroPoster?: string; // first frame shown before the video loads
  stickyNote?: string;
};
export type Listing = { title: string; area: string; type: string; price: string; image?: string };
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
          <a href="#listings">Listings</a>
          <a href="#notes">Notes</a>
          <a href="#contact" className={s.navCta}>Contact</a>
        </nav>
      </header>

      <section id="top" className={s.hero}>
        <div className={s.grid} aria-hidden="true" />
        <h1 className={s.headline}>
          <span className={s.hello}>
            Hello,<span className={s.wave} aria-hidden="true">👋</span>
          </span>
          <span>I&rsquo;m {profile.firstName}.</span>
        </h1>

        {profile.heroVideo ? (
          <div className={s.stage}>
            {/* AI-generated clip of the agent at a desk, waving — like the reference site */}
            <video
              className={s.stageVideo}
              src={profile.heroVideo}
              poster={profile.heroPoster ?? profile.photo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${profile.fullName} waving hello`}
            />
            <p className={s.stageBadge}>
              <strong>{profile.fullName}</strong>
              <span>{profile.agency}</span>
            </p>
          </div>
        ) : null}

        <div className={`${s.heroBody} ${profile.heroVideo ? s.heroBodyWide : ""}`}>
          {profile.heroVideo ? null : (
            <figure className={s.portrait}>
              <img src={profile.photo} alt={`${profile.fullName}, ${profile.agency}`} width={1000} height={1500} />
              <figcaption className={s.badge}>
                <strong>{profile.fullName}</strong>
                <span>{profile.agency}</span>
              </figcaption>
            </figure>
          )}

          <div className={s.heroText}>
            <p className={s.kicker}>{profile.areas.join(" · ")}</p>
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
              <a className={s.btnGhost} href="#listings">
                See my listings ↓
              </a>
            </div>
          </div>
        </div>

        <aside className={s.sticky} aria-hidden="true">
          {profile.stickyNote ?? "Let’s find somewhere warm."}
        </aside>
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
              </div>
            </article>
          ))}
        </div>
      </section>

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
