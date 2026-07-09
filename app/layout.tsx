import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jared | Industrial Property Specialist",
  description:
    "Black and white bio-style page for Jared, an industrial property specialist.",
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
