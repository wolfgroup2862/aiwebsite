import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I'm Jared",
  description: "A minimal black page with I'm Jared centered.",
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
