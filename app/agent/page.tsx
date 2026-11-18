import type { Metadata } from "next";
import s from "./agent.module.css";
import { LISTINGS, NOTES, PROFILE } from "./profile";

// Placeholder data is still in profile.ts, so keep this page out of search
// engines until the real details are confirmed.
export const metadata: Metadata = {
  title: { absolute: `${PROFILE.fullName} | Puchong, Bukit Jalil & PJ Property | ${PROFILE.agency}` },
  description: PROFILE.tagline,
  robots: { index: false, follow: false },
  alternates: { canonical: "/agent" },
};

const wa = PROFILE.whatsapp
  ? `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(`Hi ${PROFILE.firstName}, I found your website and would like to ask about a property.`)}`
  : null;

export default function AgentPage() {
  return (
    <main className={s.page}>
      <header className={s.nav}>
        <a href="#top" className={s.brand}>
          {PROFILE.firstName}
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
          <span>I&rsquo;m {PROFILE.firstName}.</span>
        </h1>

        <div className={s.heroBody}>
          <figure className={s.portrait}>
            <img src={PROFILE.photo} alt={`${PROFILE.fullName}, ${PROFILE.agency}`} width={1000} height={1500} />
            <figcaption className={s.badge}>
              <strong>{PROFILE.fullName}</strong>
              <span>{PROFILE.agency}</span>
            </figcaption>
          </figure>

          <div className={s.heroText}>
            <p className={s.kicker}>{PROFILE.areas.join(" · ")}</p>
            <p className={s.tagline}>{PROFILE.tagline}</p>
            <ul className={s.chips}>
              {PROFILE.specialties.map((x) => (
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
          Let&rsquo;s find
          <br />
          somewhere warm.
        </aside>
      </section>

      <div className={s.marquee} aria-label="Areas I cover">
        <div className={s.track}>
          {[...PROFILE.areas, ...PROFILE.areas, ...PROFILE.areas].map((a, i) => (
            <span key={i}>
              {a} <em>✦</em>
            </span>
          ))}
        </div>
      </div>

      <section className={s.about}>
        <p className={s.label}>About me</p>
        <p className={s.aboutText}>{PROFILE.intro}</p>
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
          {LISTINGS.map((l, i) => (
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
          {NOTES.map((n) => (
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
          {PROFILE.fullName}
          {PROFILE.chineseName && ` · ${PROFILE.chineseName}`} · {PROFILE.agency}
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
        <span>© {new Date().getFullYear()} {PROFILE.fullName}</span>
        <span>{PROFILE.agency}</span>
      </footer>
    </main>
  );
}
