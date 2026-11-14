import Link from "next/link";
import { AGENT } from "../lib/site";

export default function InsightShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell insight-shell">
      <header className="insight-nav">
        <Link className="insight-logo" href="/" aria-label="Jared Wong home">
          <img src="/wolf-group-logo-transparent.png" alt="Wolf Group — Stronger Together" width="3050" height="721" />
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/news">News</Link>
          <Link href="/">Home</Link>
          <Link href="/properties">Listings</Link>
          <Link href="/insights">Insights</Link>
          <a href={AGENT.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
      </header>
      {children}
      <section className="insight-cta">
        <h2>Need a factory, warehouse or shop lot in Puchong?</h2>
        <p>
          Send Jared the location, size, budget or asking price and your timeline. {AGENT.name} ({AGENT.ren}) –
          WhatsApp <a href={AGENT.whatsapp} target="_blank" rel="noreferrer">{AGENT.phoneDisplay}</a>.
        </p>
      </section>
      <footer className="insight-footer">
        <span>JARED WONG</span>
        <p>
          {AGENT.jobTitle} · {AGENT.roles.join(" · ")} · {AGENT.ren} · {AGENT.phoneDisplay}
        </p>
      </footer>
    </div>
  );
}
