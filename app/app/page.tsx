import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero   from "@/components/Hero";
import ExperienceGrid from "@/components/ExperienceGrid";

// ── PAGE-LEVEL METADATA ───────────────────────────────────────────────────────
// This overrides the layout.tsx defaults for the homepage
export const metadata: Metadata = {
  title: "Adventures Kashmir | Luxury Himalayan Treks & Gulmarg Ski School",
  description:
    "Gulmarg's premier luxury travel agency. Bespoke Himalayan trekking, certified Gulmarg Ski School, gondola booking, Kashmir honeymoon packages & private expeditions. 4.9★ TripAdvisor · 287+ verified reviews · Est. 2018.",
  alternates: { canonical: "/" },
  openGraph: {
    title:       "Adventures Kashmir | Luxury Himalayan Expeditions",
    description: "Bespoke treks, skiing & Kashmir tours by Gulmarg's most trusted luxury agency.",
    url:         "https://www.adventureskashmir.com/",
  },
};

// ── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Main content ── */}
      <main id="main-content" role="main">

        {/* 1. Hero — Full viewport */}
        <Hero />

        {/* 2. Experience Grid — Curated Expeditions */}
        <ExperienceGrid />

        {/*
          Add further sections here, e.g.:
          <ReviewsSection />
          <SkiSchoolSection />
          <TeamSection />
          <FAQSection />
          <CTASection />
        */}

      </main>
    </>
  );
}
