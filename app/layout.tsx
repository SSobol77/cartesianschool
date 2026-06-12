import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartesian School — Websites for Local Businesses",
  description:
    "We find what's broken on your website, build a faster replacement you can see live before paying, and launch it in five business days. Fixed price.",
  keywords:
    "website rebuild, local business website, landing page agency, website audit, fast websites",
  openGraph: {
    title: "Cartesian School — Websites for Local Businesses",
    description:
      "See your new homepage live before you pay anything. Launch in five business days, fixed price.",
    type: "website",
    locale: "en_US",
    url: "https://cartesianschool.net",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cartesian School Siergej Sobolewski",
  description: "Website audits and rebuilds for local businesses.",
  email: "siergej@cartesianschool.net",
  url: "https://cartesianschool.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Milenijna Str. 45E/41",
    postalCode: "03-130",
    addressLocality: "Warsaw",
    addressCountry: "PL",
  },
  vatID: "PL5242589542",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-white text-slate-800`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
