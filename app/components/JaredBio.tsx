import Image from "next/image";
import Link from "next/link";

export default function JaredBio() {
  return (
    <div className="site-shell">
      <div className="announcement">Industrial property intelligence for operators who move first.</div>

      <header className="nav">
        <Link className="logo" href="/">
          JARED
        </Link>
        <nav aria-label="Primary navigation">
          <a href="/about">About</a>
          <a href="/properties">Industrial</a>
          <a href="/services">Specialist</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="bio-hero">
          <div className="portrait-panel">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
              alt="Black and white industrial warehouse corridor"
              fill
              priority
            />
          </div>
          <article className="bio-copy">
            <p className="kicker">SPECIALIST</p>
            <h1>JARED</h1>
            <div className="role-lines">
              <span>INDUSTRIAL PROPERTY</span>
              <span>STRATEGY, LEASING, ACQUISITION</span>
            </div>
            <p>
              Jared is an industrial property specialist focused on practical
              sites, serious operators, and decisions that hold up after the
              walkthrough. He works where loading bays, power capacity, access
              routes, and lease structure matter more than polished promises.
            </p>
            <p>
              His work sits at the intersection of real estate, operations, and
              timing. From warehouses and light industrial units to last-mile
              logistics spaces, Jared helps buyers, tenants, and owners compare
              the details that change the outcome.
            </p>
            <p>
              The rule is simple: inspect the fundamentals, pressure-test the
              numbers, and move with discipline. If the deal is not clear,
              cannot drink, go back first.
            </p>
          </article>
        </section>

        <section className="principles">
          <div>
            <p className="kicker">FIELD NOTES</p>
            <h2>CANNOT DRINK GO BACK FIRST</h2>
          </div>
          <div className="principle-grid">
            <article>
              <span>01</span>
              <h3>Site Before Story</h3>
              <p>
                Access, clear height, parking, power, drainage, and neighbors
                come before hype.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Terms Before Emotion</h3>
              <p>
                A good industrial deal works on paper before it works in a
                pitch.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Move When Ready</h3>
              <p>
                Fast is useful only after the fundamentals are checked and the
                downside is known.
              </p>
            </article>
          </div>
        </section>

        <section className="cta-band">
          <div>
            <p className="kicker">WORK WITH JARED</p>
            <h2>NEED AN INDUSTRIAL PROPERTY SPECIALIST?</h2>
            <p>
              Bring the site, the question, or the constraint. Jared will help
              sort what matters first.
            </p>
          </div>
          <a href="mailto:hello@example.com">START THE CONVERSATION</a>
        </section>
      </main>

      <footer className="footer">
        <span>JARED</span>
        <p>
          Specialist industrial property guidance. Placeholder content for
          positioning, leasing, acquisition, and advisory.
        </p>
      </footer>
    </div>
  );
}
