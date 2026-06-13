import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cartesianschool.net"),
  title: "Cartesian School - Website Rebuilds for Local Businesses",
  description:
    "See your new homepage live before you pay anything. We rebuild slow, broken local business websites into fast, mobile-first lead generators. Launch in 5 business days, fixed price.",
  keywords:
    "website rebuild, local business website, landing page agency, website audit, fast websites, mobile-first, local SEO",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Cartesian School - See Your New Site Live Before You Pay",
    description:
      "Free audit. Live preview. Fixed price. 5-day delivery. No risk.",
    type: "website",
    locale: "en_US",
    url: "https://cartesianschool.net",
    siteName: "Cartesian School",
    images: [
      {
        url: "/brand/big_logo.png",
        width: 1731,
        height: 909,
        alt: "Cartesian School - Website Rebuilds for Local Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartesian School - Website Rebuilds for Local Businesses",
    description: "See your new site live before you pay. 5-day delivery.",
    images: ["/brand/big_logo.png"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
