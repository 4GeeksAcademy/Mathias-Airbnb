import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb Buenos Aires",
  description: "Landing mobile-first inspirada en Airbnb para descubrir alojamientos, experiencias y servicios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${manrope.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--surface)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
