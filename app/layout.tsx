import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartesian School — Website Rebuilds for Local Businesses",
  description:
    "See your new homepage live before you pay anything. We rebuild slow, broken local business websites into fast, mobile-first lead generators. Launch in 5 business days, fixed price.",
  keywords:
    "website rebuild, local business website, landing page agency, website audit, fast websites, mobile-first, local SEO",
  openGraph: {
    title: "Cartesian School — See Your New Site Live Before You Pay",
    description:
      "Free audit. Live preview. Fixed price. 5-day delivery. No risk.",
    type: "website",
    locale: "en_US",
    url: "https://cartesianschool.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartesian School — Website Rebuilds for Local Businesses",
    description: "See your new site live before you pay. 5-day delivery.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cartesian School",
  description: "Website audits and rebuilds for local businesses. Free audit, live preview, fixed price.",
  email: "siergej@cartesianschool.net",
  url: "https://cartesianschool.net",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Milenijna Str. 45E/41",
    postalCode: "03-130",
    addressLocality: "Warsaw",
    addressCountry: "PL",
  },
  vatID: "PL5242589542",
  priceRange: "$$",
  areaServed: {
    "@type": "Place",
    name: "United States, European Union",
  },
  serviceType: "Website Design, Website Development, SEO",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
