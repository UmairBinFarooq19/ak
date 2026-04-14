"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Mountain, Snowflake, Tent, Clock, Users } from "lucide-react";

// ── EXPERIENCE DATA ────────────────────────────────────────────────────────────
// This is the DATA LAYER — separated cleanly from the presentational components below.
// To update experiences: only edit this array. Zero UI changes required.
export interface Experience {
  id:          string;
  slug:        string;
  category:    "Skiing" | "Trekking" | "Tour" | "Expedition";
  tag:         string;         // displayed pill
  title:       string;
  subtitle:    string;
  description: string;
  image:       string;
  imageAlt:    string;
  stats: {
    duration: string;
    altitude?: string;
    groupSize: string;
  };
  priceFrom:   number;
  priceUnit:   "person" | "couple" | "group";
  featured:    boolean;        // if true, renders as large card
  difficulty?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

const EXPERIENCES: Experience[] = [
  {
    id:          "great-lakes-trek",
    slug:        "/kashmir-great-lakes-trek",
    category:    "Trekking",
    tag:         "Flagship Expedition",
    title:       "Kashmir Great Lakes Trek",
    subtitle:    "Seven Sacred Alpine Lakes",
    description:
      "India's most spectacular high-altitude journey — seven pristine glacier-fed lakes woven across 70+ km of untouched Himalayan wilderness. Sonamarg to Naranag, crossing the legendary Gadsar Pass at 4,267m.",
    image:        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1400&q=90",
    imageAlt:     "Kashmir Great Lakes Trek — Krishnasar and Vishansar alpine lakes at high altitude, Adventures Kashmir",
    stats: {
      duration:  "7–8 Days",
      altitude:  "4,267m",
      groupSize: "6–12",
    },
    priceFrom:   14999,
    priceUnit:   "person",
    featured:    true,
    difficulty:  "Expert",
  },
  {
    id:          "gulmarg-skiing",
    slug:        "/gulmarg-ski-school",
    category:    "Skiing",
    tag:         "Ski School · Dec–Mar",
    title:       "Gulmarg Ski Packages",
    subtitle:    "Asia's Premier Himalayan Slopes",
    description:
      "Carve fresh powder on Apharwat Peak (4,390m) with certified instructors who have competed nationally. All levels welcome — from first snowflake to expert back-country runs.",
    image:        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=900&q=85",
    imageAlt:     "Gulmarg Ski School — certified skiing on Apharwat Peak slopes, Adventures Kashmir luxury ski packages",
    stats: {
      duration:  "1–7 Days",
      altitude:  "4,390m",
      groupSize: "Private",
    },
    priceFrom:   6999,
    priceUnit:   "person",
    featured:    false,
    difficulty:  "Beginner",
  },
  {
    id:          "kashmir-honeymoon",
    slug:        "/kashmir-honeymoon",
    category:    "Tour",
    tag:         "Romantic · 5N/6D",
    title:       "Kashmir Honeymoon",
    subtitle:    "Dal Lake · Gulmarg · Pahalgam",
    description:
      "A curated romantic journey through three of Kashmir's most enchanting landscapes — from a luxury Dal Lake houseboat at sunrise to Gulmarg's silent snowfields.",
    image:        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85",
    imageAlt:     "Kashmir honeymoon Dal Lake luxury houseboat sunrise — romantic Kashmir tour, Adventures Kashmir",
    stats: {
      duration:  "5 Nights",
      groupSize: "Couples only",
    },
    priceFrom:   18999,
    priceUnit:   "couple",
    featured:    false,
    difficulty:  undefined,
  },
];

// ── DIFFICULTY BADGE MAP ──────────────────────────────────────────────────────
const DIFFICULTY_STYLES: Record<string, { bg: string; text: string }> = {
  Beginner:     { bg: "bg-emerald-900/30",  text: "text-emerald-400" },
  Intermediate: { bg: "bg-amber-900/30",    text: "text-amber-400"   },
  Advanced:     { bg: "bg-orange-900/30",   text: "text-orange-400"  },
  Expert:       { bg: "bg-red-900/30",      text: "text-red-400"     },
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Trekking:   <Mountain  size={11} strokeWidth={1.5} />,
  Skiing:     <Snowflake size={11} strokeWidth={1.5} />,
  Tour:       <Tent      size={11} strokeWidth={1.5} />,
  Expedition: <Mountain  size={11} strokeWidth={1.5} />,
};

// ── ANIMATION VARIANTS ────────────────────────────────────────────────────────
const SECTION_STAGGER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const CARD_REVEAL = {
  hidden:  { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y:       0,
    scale:   1,
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] },
  },
};

const HEAD_REVEAL = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y:       0,
    transition: { duration: 1.1, ease: [0.19, 1, 0.22, 1] },
  },
};

// ── FEATURED LARGE CARD ───────────────────────────────────────────────────────
// Used for the flagship "Great Lakes Trek" — occupies 60% width on desktop
function FeaturedCard({ exp }: { exp: Experience }) {
  const isInView = useInView(useRef<HTMLDivElement>(null), { once: true, margin: "-80px" });

  return (
    <motion.article
      variants={CARD_REVEAL}
      className="group relative bg-ak-espresso rounded-2xl overflow-hidden
        shadow-luxury-lg h-[520px] md:h-[580px] col-span-full lg:col-span-2"
      aria-label={`${exp.title} — ${exp.category} expedition`}
    >
      {/* Background image — scale on hover (IMAGE only, not text) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={exp.image}
            alt={exp.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            quality={88}
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            135deg,
            rgba(26,20,18,0.72) 0%,
            rgba(26,20,18,0.25) 40%,
            rgba(26,20,18,0.08) 65%,
            rgba(26,20,18,0.60) 100%
          )`,
        }}
        aria-hidden="true"
      />
      {/* Strong bottom readability gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(26,20,18,0.92) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top badges */}
      <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
        <span className="inline-flex items-center gap-1.5 bg-ak-gold text-ak-espresso
          text-label-sm uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-sm">
          {CATEGORY_ICONS[exp.category]}
          {exp.tag}
        </span>
        {exp.difficulty && (
          <span className={`text-label-sm uppercase tracking-wider font-medium px-2.5 py-1.5
            rounded-sm ${DIFFICULTY_STYLES[exp.difficulty].bg} ${DIFFICULTY_STYLES[exp.difficulty].text}
            border border-current/20`}
          >
            {exp.difficulty}
          </span>
        )}
      </div>

      {/* Content — bottom of card */}
      <div className="absolute bottom-0 inset-x-0 p-7 md:p-9 z-10">
        <p className="font-sans text-label uppercase tracking-[0.22em] text-ak-gold/80 mb-3">
          {exp.subtitle}
        </p>
        <h3 className="font-serif text-display-md text-white mb-4 leading-tight">
          {exp.title}
        </h3>
        <p className="font-sans text-body-sm text-white/60 leading-relaxed mb-6 max-w-[44ch]">
          {exp.description}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-5 mb-7">
          <div className="flex items-center gap-1.5 text-white/45">
            <Clock size={11} strokeWidth={1.5} />
            <span className="font-sans text-[0.72rem] tracking-wide">{exp.stats.duration}</span>
          </div>
          {exp.stats.altitude && (
            <>
              <div className="w-px h-3 bg-white/20" aria-hidden="true" />
              <div className="flex items-center gap-1.5 text-white/45">
                <Mountain size={11} strokeWidth={1.5} />
                <span className="font-sans text-[0.72rem] tracking-wide">{exp.stats.altitude}</span>
              </div>
            </>
          )}
          <div className="w-px h-3 bg-white/20" aria-hidden="true" />
          <div className="flex items-center gap-1.5 text-white/45">
            <Users size={11} strokeWidth={1.5} />
            <span className="font-sans text-[0.72rem] tracking-wide">{exp.stats.groupSize}</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-sans text-label-sm uppercase tracking-wider text-white/35 mb-0.5">
              From
            </div>
            <div className="font-serif text-2xl text-white font-semibold">
              ₹{exp.priceFrom.toLocaleString("en-IN")}
              <span className="font-sans text-body-sm text-white/40 font-normal ml-1">
                / {exp.priceUnit}
              </span>
            </div>
          </div>

          <Link
            href={exp.slug}
            className="group/btn relative inline-flex items-center gap-3 px-6 py-3.5
              border border-ak-gold/60 text-ak-gold
              font-sans text-label uppercase tracking-[0.2em]
              overflow-hidden transition-colors duration-500
              hover:text-ak-espresso"
            aria-label={`View ${exp.title} expedition details`}
          >
            <span className="absolute inset-0 bg-ak-gold translate-y-[101%]
              group-hover/btn:translate-y-0 transition-transform duration-500
              ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <span className="relative z-10">View Expedition</span>
            <ArrowUpRight size={13} strokeWidth={1.5} className="relative z-10" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ── REGULAR CARD ──────────────────────────────────────────────────────────────
// Used for Skiing and Honeymoon — 50/50 layout in the right column
function RegularCard({ exp }: { exp: Experience }) {
  return (
    <motion.article
      variants={CARD_REVEAL}
      className="group relative bg-ak-espresso rounded-2xl overflow-hidden
        shadow-luxury h-[250px] md:h-[280px]"
      aria-label={`${exp.title} — ${exp.category}`}
    >
      {/* Background image — scale on hover */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={exp.image}
            alt={exp.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={82}
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(26,20,18,0.88) 0%, rgba(26,20,18,0.1) 60%)",
        }}
        aria-hidden="true"
      />

      {/* Top badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center gap-1.5 bg-ak-espresso/70 backdrop-blur-sm
          text-ak-gold border border-ak-gold/25
          text-label-sm uppercase tracking-[0.18em] px-2.5 py-1.5 rounded-sm">
          {CATEGORY_ICONS[exp.category]}
          {exp.category}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 inset-x-0 p-5 z-10">
        <div className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-ak-gold/70 mb-1.5">
          {exp.tag}
        </div>
        <h3 className="font-serif text-xl text-white font-semibold leading-tight mb-3">
          {exp.title}
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-serif text-lg text-white font-semibold">
              ₹{exp.priceFrom.toLocaleString("en-IN")}
              <span className="font-sans text-[0.7rem] text-white/40 ml-1">/ {exp.priceUnit}</span>
            </div>
          </div>
          <Link
            href={exp.slug}
            className="group/btn relative flex items-center gap-1.5 px-4 py-2
              border border-white/20 hover:border-ak-gold/60 text-white/55
              hover:text-ak-gold font-sans text-label-sm uppercase tracking-wider
              transition-all duration-400 rounded-sm overflow-hidden"
            aria-label={`View ${exp.title}`}
          >
            View
            <ArrowUpRight size={11} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ── SECTION HEADER ────────────────────────────────────────────────────────────
function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={SECTION_STAGGER}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-14 md:mb-18"
    >
      {/* Decorative gold rule + eyebrow */}
      <motion.div variants={HEAD_REVEAL} className="flex items-center gap-4 mb-5">
        <div className="h-px w-12 bg-ak-gold/60" aria-hidden="true" />
        <span className="font-sans text-label uppercase tracking-[0.28em] text-ak-gold">
          Curated Expeditions
        </span>
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        <motion.h2
          variants={HEAD_REVEAL}
          className="font-serif text-display-lg text-ak-espresso leading-tight max-w-[18ch]"
        >
          Where will the{" "}
          <em className="italic font-normal" style={{ color: "#CC1100" }}>
            mountains
          </em>{" "}
          take you?
        </motion.h2>

        <motion.div variants={HEAD_REVEAL} className="flex flex-col gap-2 lg:text-right">
          <p className="font-sans text-body-sm text-ak-stone max-w-[38ch] lg:max-w-[30ch] leading-relaxed">
            Each expedition is personally curated — never a template, always an adventure.
          </p>
          <Link
            href="/expeditions"
            className="inline-flex items-center gap-2 text-ak-espresso/70 hover:text-ak-espresso
              font-sans text-label uppercase tracking-[0.2em]
              border-b border-ak-espresso/20 hover:border-ak-espresso
              transition-all duration-400 self-start lg:self-end pb-0.5 group"
          >
            View all expeditions
            <ArrowUpRight
              size={12}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function ExperienceGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  const featured = EXPERIENCES.filter((e) => e.featured);
  const regular  = EXPERIENCES.filter((e) => !e.featured);

  return (
    <section
      className="bg-ak-cream-100 py-[clamp(5rem,10vw,9rem)] px-6 md:px-10"
      aria-labelledby="experiences-heading"
    >
      <div className="max-w-content mx-auto">

        {/* Section header */}
        <SectionHeader />

        {/* ── GRID ── */}
        {/* Layout:
            Desktop: [Featured Large (2/3)] [2 Regular stacked (1/3)]
            Mobile:  Single column, featured first              */}
        <motion.div
          ref={gridRef}
          variants={SECTION_STAGGER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {/* Featured card — spans 2 columns */}
          {featured.map((exp) => (
            <FeaturedCard key={exp.id} exp={exp} />
          ))}

          {/* Right column: 2 regular cards stacked */}
          <div className="lg:col-span-1 flex flex-col gap-4 md:gap-5">
            {regular.map((exp) => (
              <RegularCard key={exp.id} exp={exp} />
            ))}
          </div>
        </motion.div>

        {/* ── Bottom Trust Strip ── */}
        <motion.div
          variants={HEAD_REVEAL}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 pt-10 border-t border-ak-mist
            flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {[
              { v: "4.9★",  l: "TripAdvisor Rating" },
              { v: "287+",  l: "Verified Reviews"   },
              { v: "2018",  l: "Est. Gulmarg"        },
              { v: "$$$",   l: "Luxury Travel Tier"  },
            ].map(({ v, l }) => (
              <div key={l} className="flex flex-col">
                <span className="font-serif text-2xl text-ak-espresso font-bold leading-none">
                  {v}
                </span>
                <span className="font-sans text-label-sm uppercase tracking-[0.18em] text-ak-stone mt-1.5">
                  {l}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-7 py-4
              bg-ak-espresso text-white font-sans text-label uppercase tracking-[0.2em]
              overflow-hidden transition-colors duration-500 rounded-sm
              hover:text-ak-espresso"
          >
            <span className="absolute inset-0 bg-ak-gold translate-x-[-101%]
              group-hover:translate-x-0 transition-transform duration-500
              ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <span className="relative z-10">Get a Free Quote</span>
            <ArrowUpRight size={13} strokeWidth={1.5} className="relative z-10" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

// ── RE-EXPORT DATA for use in other pages (e.g., SSG/RSC) ────────────────────
export { EXPERIENCES };
export type { Experience as ExperienceType };
