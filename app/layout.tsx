import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurelia Estates | Premium Real Estate",
  description:
    "A modern real estate company website for premium homes, advisory, investment, and property services.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Aurelia Estates home">
            <span className="brand-mark">
              <Building2 size={22} strokeWidth={1.8} />
            </span>
            <span>Aurelia Estates</span>
          </Link>
          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div>
            <Link className="brand footer-brand" href="/">
              <span className="brand-mark">
                <Building2 size={22} strokeWidth={1.8} />
              </span>
              <span>Aurelia Estates</span>
            </Link>
            <p>
              Premium residential brokerage and advisory for modern buyers,
              sellers, and investors.
            </p>
          </div>
          <div className="footer-grid">
            <span>
              <MapPin size={17} /> 128 Meridian Avenue, New York
            </span>
            <span>
              <Phone size={17} /> +1 (555) 014-8821
            </span>
            <span>
              <Mail size={17} /> hello@aurelia.example
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
