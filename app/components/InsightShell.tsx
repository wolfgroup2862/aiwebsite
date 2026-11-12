import Link from "next/link";
import { AGENT } from "../lib/site";

export default function InsightShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <header className="nav">
        <Link className="logo" href="/">JARED</Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/insights">Insights</Link>
          <a href={AGENT.whatsapp}>WhatsApp</a>
        </nav>
      </header>
      {children}
      <section className="insight-cta">
        <h2>Need a factory, warehouse or shop lot in Puchong?</h2>
        <p>
          Send Jared the location, size, budget or asking price and your timeline. {AGENT.name} ({AGENT.ren}) –
          WhatsApp <a href={AGENT.whatsapp}>{AGENT.phoneDisplay}</a>.
        </p>
      </section>
      <footer className="footer">
        <span>JARED WONG</span>
        <p>
          {AGENT.jobTitle} · {AGENT.roles.join(" · ")} · {AGENT.ren} · {AGENT.phoneDisplay} · {AGENT.email}
        </p>
      </footer>
    </div>
  );
}
