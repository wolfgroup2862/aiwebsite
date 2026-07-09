import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="page">
      <section className="section section-tight">
        <div className="section-intro">
          <span className="eyebrow">Contact</span>
          <h1>Start a smarter property conversation.</h1>
          <p>
            This placeholder form is ready for a form provider, CRM endpoint, or
            custom API route when you are ready to connect submissions.
          </p>
        </div>
        <div className="contact-layout">
          <div className="grid">
            <article className="contact-panel">
              <MapPin size={30} strokeWidth={1.7} />
              <h3>Visit</h3>
              <p>128 Meridian Avenue, Suite 14, New York, NY 10013</p>
            </article>
            <article className="contact-panel">
              <Phone size={30} strokeWidth={1.7} />
              <h3>Call</h3>
              <p>+1 (555) 014-8821</p>
            </article>
            <article className="contact-panel">
              <Mail size={30} strokeWidth={1.7} />
              <h3>Email</h3>
              <p>hello@aurelia.example</p>
            </article>
          </div>

          <form className="form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Interest
              <select name="interest" defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option>Buying</option>
                <option>Selling</option>
                <option>Investing</option>
                <option>Relocation</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell us what you need" />
            </label>
            <button className="button button-dark" type="submit">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
