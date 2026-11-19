import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wolf Group · The Roof Realty (TRR)",
  description: "Meet the Wolf Group team at The Roof Realty (TRR).",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-MY">
      <body>{children}</body>
    </html>
  );
}
