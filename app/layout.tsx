import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jared Wong | Malaysia Industrial & Commercial Property Specialist",
  description:
    "Jared Wong helps buyers, tenants, owners, and investors with factories, warehouses, industrial land, shop lots, commercial units, leasing, sales, acquisition, and advisory across Malaysia.",
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
