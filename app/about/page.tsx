import Image from "next/image";

const values = [
  "Discreet client representation",
  "Data-backed pricing strategy",
  "Editorial property presentation",
  "Negotiation with calm precision",
];

export default function AboutPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <Image
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=82"
          alt="Premium home exterior with landscaped entry"
          fill
          priority
        />
        <div className="page-hero-content">
          <span className="eyebrow">About Aurelia</span>
          <h1>Quiet confidence in high-value real estate.</h1>
          <p>
            Placeholder content for a real estate firm built around thoughtful
            advice, beautiful marketing, and lasting client relationships.
          </p>
        </div>
      </section>

      <section className="section split">
        <div className="media-frame wide">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
            alt="Real estate advisor presenting a home"
            fill
          />
        </div>
        <div>
          <span className="eyebrow">Our approach</span>
          <h2>Advisory first, transaction second.</h2>
          <p>
            Use this section to describe the company history, market focus, and
            values. The current copy is intentionally generic so it can be
            replaced with your real brand story.
          </p>
          <p>
            From first valuation to final closing, Aurelia keeps clients
            informed with clear options, precise positioning, and careful
            execution.
          </p>
        </div>
      </section>

      <section className="section dark-band">
        <span className="eyebrow">What guides us</span>
        <h2>Premium service without the noise.</h2>
        <div className="values">
          {values.map((value) => (
            <div className="value" key={value}>
              <strong>{value}</strong>
              <p>
                Placeholder detail that explains how this value shows up in
                client work and day-to-day service.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
