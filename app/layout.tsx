import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jared Wong | Malaysia Industrial & Commercial Property Agent",
  description:
    "Looking for an industrial and commercial property agent in Puchong? Jared Wong specializes in factories, warehouses, industrial land, shop lots, and commercial properties across Malaysia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
