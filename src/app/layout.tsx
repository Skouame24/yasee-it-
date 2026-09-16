import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Formation PECB Certified ISO/IEC 27001 Lead Implementer | YASEE IT",
  description:
    "De la norme à la pratique : pilotez un SMSI qui tient sur le terrain. Formation certifiante officielle de 5 jours animée par deux experts Cybersécurité et GRC en activité. Du 14 au 18 Décembre 2026.",
  keywords: [
    "ISO 27001",
    "Lead Implementer",
    "SMSI",
    "Cybersécurité",
    "PECB",
    "GRC",
    "YASEE IT",
    "Côte d'Ivoire",
    "Formation Cybersécurité Afrique",
  ],
  authors: [{ name: "YASEE IT" }],
  openGraph: {
    title: "Formation PECB Certified ISO/IEC 27001 Lead Implementer | YASEE IT",
    description:
      "De la norme à la pratique : pilotez un SMSI qui tient sur le terrain. Formation certifiante de 5 jours en ligne en français.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-white text-[#0B0E1E]">
        {children}
      </body>
    </html>
  );
}
