import Image from "next/image";
import { ChartNoAxesCombined, Home, KeyRound, Landmark, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Buyer Representation",
    body: "Search strategy, private tours, valuation guidance, and negotiation support for primary and secondary homes.",
  },
  {
    icon: Sparkles,
    title: "Seller Advisory",
    body: "Positioning, staging direction, launch planning, and premium marketing for standout listings.",
  },
  {
    icon: Landmark,
    title: "Investment Property",
    body: "Placeholder support for acquisition criteria, rental potential, portfolio review, and resale planning.",
  },
  {
    icon: KeyRound,
    title: "Relocation",
    body: "Neighborhood orientation, shortlists, school and commute context, and move coordination.",
  },
  {
    icon: ShieldCheck,
    title: "Private Client Search",
    body: "Discreet off-market outreach and confidential representation for high-profile clients.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Market Reports",
    body: "Quarterly insights, pricing snapshots, and decision-ready summaries for active clients.",
  },
];

export default function ServicesPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <Image
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=82"
          alt="Premium residential interior with lounge seating"
          fill
          priority
        />
        <div className="page-hero-content">
          <span className="eyebrow">Services</span>
          <h1>End-to-end guidance for every move.</h1>
          <p>
            Placeholder service descriptions for buyers, sellers, investors,
            relocations, and private-client advisory.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <Icon size={30} strokeWidth={1.7} />
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
