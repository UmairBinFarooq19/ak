import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// ── FONT LOADING ───────────────────────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// ── BRAND CONSTANTS ────────────────────────────────────────────────────────────
const SITE_URL   = "https://www.adventureskashmir.com";
const SITE_NAME  = "Adventures Kashmir";
const SITE_TAGLINE = "Luxury Himalayan Treks & Gulmarg Skiing | Gulmarg, Kashmir";
const OG_IMAGE   = `${SITE_URL}/og/adventures-kashmir-hero.jpg`;
const PHONE      = "+919797877243";
const EMAIL      = "info@adventureskashmir.com";
const ADDRESS    = "Main Market, Tangmarg, Gulmarg, Jammu & Kashmir 193402, India";

// ── METADATA ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ─ Core ────────────────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Adventures Kashmir — Gulmarg's premier luxury travel & ski school. Bespoke Himalayan trekking, Gulmarg Gondola, certified ski lessons, Kashmir honeymoon packages & private expeditions. 4.9★ TripAdvisor · Est. 2018 · Govt. registered.",
  keywords: [
    // Primary commercial
    "luxury Kashmir tour package",
    "Adventures Kashmir Gulmarg",
    "luxury Himalayan trek",
    "Gulmarg skiing package",
    "Gulmarg ski school",
    "Kashmir luxury travel agency",
    // Secondary
    "Kashmir Great Lakes Trek",
    "Gulmarg gondola booking",
    "Srinagar to Gulmarg taxi",
    "Kashmir honeymoon package luxury",
    "Apharwat Peak ski",
    "bespoke Kashmir expedition",
    // Long-tail
    "best ski school Gulmarg 2025",
    "Kashmir trekking packages 2025",
    "luxury Kashmir tour operator",
    "Gulmarg Ski School certified instructor",
  ],
  authors:  [{ name: SITE_NAME, url: SITE_URL }],
  creator:  SITE_NAME,
  publisher: SITE_NAME,

  // ─ Robots ──────────────────────────────────────────────────────────────────
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:              true,
      follow:             true,
      "max-snippet":      -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ─ Canonical ───────────────────────────────────────────────────────────────
  alternates: { canonical: "/" },

  // ─ Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type:        "website",
    url:         SITE_URL,
    siteName:    SITE_NAME,
    title:       `${SITE_NAME} | Luxury Himalayan Treks & Gulmarg Skiing`,
    description:
      "Bespoke Himalayan expeditions crafted by Gulmarg's most trusted luxury travel agency. Skiing, trekking, gondola & Kashmir honeymoon packages. 4.9★ · 287+ TripAdvisor reviews.",
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    "Adventures Kashmir — Gulmarg snow mountain landscape luxury travel",
      },
    ],
    locale: "en_IN",
  },

  // ─ Twitter Card ────────────────────────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    title:       `${SITE_NAME} | Luxury Himalayan Expeditions`,
    description: "Gulmarg's premier luxury travel & ski school. Trekking, skiing, gondola & Kashmir honeymoon packages.",
    images:      [OG_IMAGE],
    creator:     "@AdventuresKashmir",
  },

  // ─ Geo / Local ─────────────────────────────────────────────────────────────
  other: {
    "geo.region":    "IN-JK",
    "geo.placename": "Gulmarg, Jammu & Kashmir",
    "geo.position":  "34.0500;74.3800",
    "ICBM":          "34.0500, 74.3800",
    "business:contact_data:street_address": ADDRESS,
    "business:contact_data:locality":       "Gulmarg",
    "business:contact_data:region":         "Jammu & Kashmir",
    "business:contact_data:postal_code":    "193402",
    "business:contact_data:country_name":   "India",
    "business:contact_data:phone_number":   PHONE,
    "business:contact_data:email":          EMAIL,
  },

  // ─ Icons ───────────────────────────────────────────────────────────────────
  icons: {
    icon:        [
      { url: "/favicon.ico",            sizes: "any" },
      { url: "/icon.svg",               type: "image/svg+xml" },
      { url: "/favicon-96x96.png",      sizes: "96x96",   type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",

  // ─ Verification ────────────────────────────────────────────────────────────
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // bing: "YOUR_BING_WEBMASTER_TOKEN",
  },
};

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor:          "#1A1412",
  width:               "device-width",
  initialScale:        1,
  maximumScale:        5,
  colorScheme:         "dark light",
};

// ── JSON-LD SCHEMA ────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. TravelAgency + LocalBusiness
    {
      "@type":       ["TravelAgency", "LocalBusiness", "TouristInformationCenter"],
      "@id":         `${SITE_URL}/#business`,
      "name":        SITE_NAME,
      "alternateName": ["Adventures Kashmir Gulmarg", "AK Gulmarg", "Adventures Kashmir Ski School"],
      "description": "Gulmarg's premier luxury travel agency and certified ski school. Specialising in bespoke Himalayan trekking, Gulmarg skiing packages, Kashmir Great Lakes Trek, honeymoon tours and private gondola excursions.",
      "url":         SITE_URL,
      "logo":        `${SITE_URL}/logo/adventures-kashmir-logo.png`,
      "image":       OG_IMAGE,
      "telephone":   [PHONE, "+916005700798"],
      "email":       EMAIL,
      "priceRange":  "$$$",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer, Wire Transfer",
      "address": {
        "@type":           "PostalAddress",
        "streetAddress":   "Main Market, Tangmarg",
        "addressLocality": "Gulmarg",
        "addressRegion":   "Jammu & Kashmir",
        "postalCode":      "193402",
        "addressCountry":  "IN",
      },
      "geo": {
        "@type":     "GeoCoordinates",
        "latitude":  34.0500,
        "longitude": 74.3800,
      },
      "openingHoursSpecification": [
        {
          "@type":      "OpeningHoursSpecification",
          "dayOfWeek":  ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens":      "08:00",
          "closes":     "21:00",
        },
      ],
      "aggregateRating": {
        "@type":       "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "287",
        "bestRating":  "5",
        "worstRating": "1",
      },
      "sameAs": [
        "https://www.tripadvisor.in/Attraction_Review-g317095-d15150236-Reviews-Adventures_Kashmir-Gulmarg_Baramulla_District_Kashmir_Jammu_and_Kashmir.html",
        "https://www.instagram.com/adventureskashmir",
        "https://www.facebook.com/adventureskashmir",
      ],
      "hasMap": "https://maps.google.com/?q=Adventures+Kashmir+Gulmarg+India",
      "foundingDate": "2018",
      "areaServed": [
        { "@type": "Place", "name": "Gulmarg, Jammu & Kashmir, India" },
        { "@type": "Place", "name": "Srinagar, Jammu & Kashmir, India" },
        { "@type": "Place", "name": "Pahalgam, Jammu & Kashmir, India" },
        { "@type": "Place", "name": "Sonamarg, Jammu & Kashmir, India" },
        { "@type": "Place", "name": "Leh, Ladakh, India" },
      ],
      "knowsAbout": [
        "Luxury Himalayan Trekking",
        "Gulmarg Skiing",
        "Kashmir Great Lakes Trek",
        "Gulmarg Gondola",
        "Kashmir Honeymoon Packages",
        "High Altitude Expeditions",
        "Ski Instruction",
      ],
    },

    // 2. WebSite (SearchAction)
    {
      "@type":  "WebSite",
      "@id":    `${SITE_URL}/#website`,
      "url":    SITE_URL,
      "name":   SITE_NAME,
      "description": "Luxury Himalayan expeditions from Gulmarg's most trusted travel agency.",
      "publisher": { "@id": `${SITE_URL}/#business` },
      "potentialAction": {
        "@type":       "SearchAction",
        "target":      `${SITE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // 3. Featured Tour Product
    {
      "@type":       "Product",
      "@id":         `${SITE_URL}/kashmir-great-lakes-trek/#product`,
      "name":        "Kashmir Great Lakes Trek — Luxury 8-Day Expedition",
      "description": "India's most spectacular high-altitude trek. 7 pristine alpine lakes across 70+ km, Sonamarg to Naranag. Expert-guided with luxury camping, porter service and gourmet meals.",
      "brand":       { "@id": `${SITE_URL}/#business` },
      "image":       `${SITE_URL}/images/kashmir-great-lakes-trek.jpg`,
      "offers": {
        "@type":         "Offer",
        "price":         "14999",
        "priceCurrency": "INR",
        "priceValidUntil": "2025-12-31",
        "availability":  "https://schema.org/InStock",
        "url":           `${SITE_URL}/kashmir-great-lakes-trek/`,
      },
    },

    // 4. FAQ
    {
      "@type": "FAQPage",
      "@id":   `${SITE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name":  "What makes Adventures Kashmir a luxury travel agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Adventures Kashmir offers bespoke, fully guided expeditions with private transport, handpicked accommodation, gourmet meals, nationally certified ski instructors and 24/7 concierge support. Our team is born and raised in Gulmarg and has an unmatched 4.9★ TripAdvisor rating from 287+ verified reviews.",
          },
        },
        {
          "@type": "Question",
          "name":  "What is the best luxury Kashmir tour package in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Our Kashmir Complete 6N/7D luxury package (₹14,999/person) covers Srinagar, Gulmarg, Pahalgam and Sonamarg with premium hotel stays, gondola excursions, a private guide and all meals. Honeymoon suites start from ₹18,999/couple.",
          },
        },
        {
          "@type": "Question",
          "name":  "Does Adventures Kashmir offer a certified Gulmarg Ski School?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Yes. Our ski instructors hold national and international certifications and are registered with J&K Tourism. We offer beginner, intermediate and advanced ski programmes starting from ₹1,500/hour on Gulmarg's Kongdoori and Apharwat Peak slopes (December–March).",
          },
        },
      ],
    },
  ],
};

// ── ROOT LAYOUT ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ── Preconnects ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* ── DNS prefetch ── */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`
          font-sans bg-ak-cream-100 text-ak-espresso
          antialiased selection:bg-ak-gold/20 selection:text-ak-espresso
          [--nav-h:68px] md:[--nav-h:76px]
        `}
      >
        {children}
      </body>
    </html>
  );
}
