import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { AGENT, SITE_DESCRIPTION, SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jared Wong (REN 07483) | Puchong Factory, Warehouse & Commercial Property Agent",
    template: "%s | Jared Wong, Puchong Commercial & Industrial Property",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Jared Wong – Commercial & Industrial Property",
    title: "Jared Wong | Puchong Commercial & Industrial Property Specialist",
    description: SITE_DESCRIPTION,
    images: [AGENT.image],
    locale: "en_MY",
  },
  robots: { index: true, follow: true },
};

const agentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#agent`,
  name: `${AGENT.name} – Commercial & Industrial Property Specialist`,
  url: SITE_URL,
  image: `${SITE_URL}${AGENT.image}`,
  telephone: AGENT.phone,
  email: AGENT.email,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: AGENT.locality,
    addressRegion: AGENT.region,
    postalCode: AGENT.postalCode,
    addressCountry: AGENT.country,
  },
  areaServed: AGENT.areasServed.map((name) => ({ "@type": "Place", name })),
  knowsAbout: AGENT.specialties,
  sameAs: AGENT.sameAs,
  employee: {
    "@type": "Person",
    "@id": `${SITE_URL}/#jared`,
    name: AGENT.name,
    jobTitle: AGENT.jobTitle,
    description: `${AGENT.roles.join(", ")}. ${AGENT.ren}.`,
    worksFor: { "@type": "Organization", name: AGENT.agency },
    telephone: AGENT.phone,
    sameAs: AGENT.sameAs,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Jared Wong – Commercial & Industrial Property",
  inLanguage: "en-MY",
  publisher: { "@id": `${SITE_URL}/#agent` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <head>
        <link rel="stylesheet" href="/logo-overrides.css" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM summary" />
        <JsonLd data={agentSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
