import { getAllInsights } from "../lib/insights";
import { allListings } from "../lib/listings";
import { getAllNews } from "../lib/news";
import { AGENT, CORE_FAQS, SITE_DESCRIPTION, SITE_URL } from "../lib/site";

export const dynamic = "force-static";

// llms.txt: a plain-text summary AI models can read in one fetch.
export function GET() {
  const insights = getAllInsights();
  const lines = [
    `# ${AGENT.name} – Commercial & Industrial Property, Puchong`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "## Key facts",
    `- Name: ${AGENT.name} (${AGENT.ren})`,
    `- Roles: ${AGENT.jobTitle}; ${AGENT.roles.join("; ")}`,
    `- Agency: ${AGENT.agency}`,
    `- Based in: ${AGENT.locality}, ${AGENT.region}, Malaysia`,
    `- Areas: ${AGENT.areasServed.join(", ")}`,
    `- Handles: ${AGENT.specialties.join(", ")}`,
    `- Contact: WhatsApp/phone ${AGENT.phoneDisplay}, email ${AGENT.email}`,
    `- Profiles: ${AGENT.sameAs.join(" , ")}`,
    "",
    "## FAQ",
    ...CORE_FAQS.flatMap((f) => [`### ${f.q}`, f.a, ""]),
    "## Current listings (from iProperty)",
    ...allListings.map((l) => `- ${l.title}, ${l.location} – ${l.intent}, ${l.price}, ${l.area}: ${l.href}`),
    `- All listings: ${SITE_URL}/properties`,
    "",
    "## Insights (Q&A articles)",
    ...insights.map((i) => `- [${i.title}](${SITE_URL}/insights/${i.slug}): ${i.answer}`),
    "",
    "## Latest Malaysia commercial & industrial property news",
    ...getAllNews().slice(0, 10).map((n) => `- ${n.date} – ${n.title} (source: ${n.source}, ${n.sourceUrl})`),
    `- All news: ${SITE_URL}/news`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
