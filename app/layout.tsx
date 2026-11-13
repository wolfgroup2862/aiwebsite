import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${protocol}://${host}` : "https://jared-wong-a-to-z.wolfgroup2862.chatgpt.site";
  const title = "Jared Wong — Industrial & Commercial Property Specialist";
  const description = "Jared Wong Kim Loong (REN 07483): Industrial & Commercial Property Specialist, Associate Leader at The Roof Realty, Founder of Wolf Group, and TRR Multi Million Agent for 2023–2025.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      images: [{ url: `${origin}/og-jared-az.png`, alt: "Jared Wong — Industrial & Commercial Property Specialist" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og-jared-az.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
