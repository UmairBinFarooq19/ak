"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { ArrowDown } from "lucide-react";

// ── HERO IMAGE ─────────────────────────────────────────────────────────────────
// Replace with your own high-resolution Himalayan image (2560×1440 minimum)
const HERO_IMAGE = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2400&q=90";

// ── ANIMATION CONFIG ──────────────────────────────────────────────────────────
// Stagger children with a slow, editorial pace — this is NOT a quick animation
const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren:    0.22,
      delayChildren:      0.4,  // wait for image to settle
    },
  },
};

// Each line fades up from below — the signature "quiet luxury" reveal
const LINE_REVEAL = {
  hidden:  { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y:       0,
    filter:  "blur(0px)",
    transition: {
      duration: 1.4,
      ease:     [0.19, 1, 0.22, 1], // custom expo-out — feels organic
    },
  },
};

const FADE_IN_SLOW = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.8, ease: "easeOut" },
  },
};

const FADE_UP_SUBTLE = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y:       0,
    transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
  },
};

// ── GRAIN OVERLAY (Film-texture for luxury feel) ──────────────────────────────
// Pure CSS grain — zero JS cost
function GrainOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[2] opacity-[0.025] mix-blend-overlay"
      aria-hidden="true"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize:   "192px 192px",
      }}
    />
  );
}

// ── PARALLAX IMAGE WRAPPER ────────────────────────────────────────────────────
function ParallaxImage({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Subtle parallax — image moves up slightly as user scrolls down
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.div
      style={{ y }}
      className="absolute inset-0 z-0 will-change-transform"
    >
      {/* LCP image — priority:true is critical for Core Web Vitals */}
      <Image
        src={HERO_IMAGE}
        alt="Gulmarg Kashmir Himalayas — snow-covered peaks and mountain meadows, Adventures Kashmir luxury expeditions"
        fill
        priority
        fetchPriority="high"
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIRAAAQQCAgMAAAAAAAAAAAAAAQACAwQFERIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AmNc+VrTjKrKuUaW7YWLR5PuJKjhkr5bPdFRVRERERERWn//Z"
      />
    </motion.div>
  );
}

// ── HERO STAT ─────────────────────────────────────────────────────────────────
function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-serif text-2xl md:text-3xl text-ak-gold font-bold leading-none tracking-tight">
        {value}
      </div>
      <div className="font-sans text-label-sm uppercase tracking-[0.2em] text-white/45 mt-1.5">
        {label}
      </div>
    </div>
  );
}

// ── SCROLL INDICATOR ──────────────────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.div
      variants={FADE_IN_SLOW}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      aria-hidden="true"
    >
      {/* Animated scroll line */}
      <div className="w-px h-14 relative overflow-hidden">
        <div className="w-full h-full bg-white/20 absolute inset-0" />
        <motion.div
          className="w-full bg-ak-gold absolute top-0"
          animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
          transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.4 }}
        />
      </div>
      {/* "Scroll" label */}
      <span className="font-sans text-label-sm uppercase tracking-[0.3em] text-white/35">
        Scroll
      </span>
    </motion.div>
  );
}

// ── MAIN HERO ─────────────────────────────────────────────────────────────────
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target:  heroRef,
    offset:  ["start start", "end start"],
  });

  // Opacity fade: hero content fades as user scrolls
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY       = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[640px] max-h-[1200px] flex items-center justify-center overflow-hidden"
      aria-label="Adventures Kashmir — Luxury Himalayan Expeditions hero"
    >

      {/* ── Background Image with Parallax ── */}
      <ParallaxImage scrollYProgress={scrollYProgress} />

      {/* ── Film Grain ── */}
      <GrainOverlay />

      {/* ── Multi-layer gradient overlay ──
          Layer 1: Atmospheric top vignette
          Layer 2: Story-depth centre
          Layer 3: Typography-readability bottom  */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(26, 20, 18, 0.45) 0%,
              rgba(26, 20, 18, 0.10) 35%,
              rgba(26, 20, 18, 0.08) 50%,
              rgba(26, 20, 18, 0.55) 75%,
              rgba(26, 20, 18, 0.80) 100%
            )
          `,
        }}
      />

      {/* ── Subtle diagonal vignette (edges) ── */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 60%, rgba(26,20,18,0.45) 100%)",
        }}
      />

      {/* ── Hero Content ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-[10] w-full max-w-content mx-auto px-6 md:px-10
          flex flex-col items-center text-center"
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >

          {/* ── Eyebrow: Location pill ── */}
          <motion.div variants={FADE_UP_SUBTLE} className="mb-8 md:mb-10">
            <span
              className="inline-flex items-center gap-2.5 px-4 py-2
                border border-ak-gold/40 rounded-sm
                font-sans text-label uppercase tracking-[0.25em] text-white/65
                backdrop-blur-sm bg-white/5"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-ak-gold animate-pulse"
                aria-hidden="true"
              />
              Gulmarg, Kashmir  ·  Est. 2018  ·  4.9★ TripAdvisor
            </span>
          </motion.div>

          {/* ── H1 Tagline — 3 lines, each revealed separately ── */}
          <h1 className="sr-only">
            Chase the wild, Trek the trails, Ski the peaks — Adventures Kashmir
          </h1>

          {/* Visual H1 — aria-hidden because sr-only above covers it */}
          <div aria-hidden="true" className="space-y-1 md:space-y-2 mb-10 md:mb-12">
            <motion.div variants={LINE_REVEAL}>
              <span className="block font-serif text-display-xl text-white font-normal italic leading-none">
                Chase the wild,
              </span>
            </motion.div>
            <motion.div variants={LINE_REVEAL}>
              <span className="block font-serif text-display-xl text-white font-bold leading-none tracking-tight">
                Trek the trails,
              </span>
            </motion.div>
            <motion.div variants={LINE_REVEAL}>
              <span
                className="block font-serif text-display-xl font-normal italic leading-none"
                style={{ color: "#D4AF37" }}
              >
                Ski the peaks.
              </span>
            </motion.div>
          </div>

          {/* ── Sub-tagline ── */}
          <motion.p
            variants={FADE_UP_SUBTLE}
            className="font-sans text-body-lg text-white/65 max-w-reading
              leading-relaxed mb-10 md:mb-14"
          >
            Bespoke Himalayan expeditions crafted by a team born and raised in Gulmarg.
            Trekking, skiing, gondola &amp; luxury Kashmir tours — all in one place.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            variants={FADE_UP_SUBTLE}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-16 md:mb-20"
          >
            {/* Primary: gold bordered button */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4
                border border-ak-gold text-ak-gold
                font-sans text-label uppercase tracking-[0.22em]
                overflow-hidden transition-colors duration-500"
            >
              <span className="absolute inset-0 bg-ak-gold translate-y-[101%]
                group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              <span className="relative z-10 group-hover:text-ak-espresso transition-colors duration-300">
                Plan My Expedition
              </span>
              <span className="relative z-10 w-3.5 h-px bg-ak-gold group-hover:bg-ak-espresso
                transition-colors duration-300" />
            </Link>

            {/* Secondary: ghost button */}
            <Link
              href="/expeditions"
              className="inline-flex items-center gap-2 px-6 py-4
                text-white/60 hover:text-white border-b border-white/20 hover:border-white/50
                font-sans text-label uppercase tracking-[0.22em]
                transition-all duration-400"
            >
              View Expeditions
            </Link>
          </motion.div>

          {/* ── Stats Row ── */}
          <motion.div
            variants={FADE_IN_SLOW}
            className="flex items-center gap-8 md:gap-14 px-8 py-5
              border-t border-white/10"
          >
            <HeroStat value="4.9★"  label="TripAdvisor" />
            <div className="w-px h-8 bg-white/15" aria-hidden="true" />
            <HeroStat value="287+"  label="Verified Reviews" />
            <div className="w-px h-8 bg-white/15 hidden sm:block" aria-hidden="true" />
            <HeroStat value="2018"  label="Est. Gulmarg" />
            <div className="w-px h-8 bg-white/15 hidden md:block" aria-hidden="true" />
            <div className="hidden md:block">
              <HeroStat value="$$$" label="Luxury Tier" />
            </div>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_IN_SLOW}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10]
          flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <div className="w-px h-14 relative overflow-hidden">
          <div className="w-full h-full bg-white/15 absolute inset-0" />
          <motion.div
            className="w-full bg-ak-gold/80 absolute top-0"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{
              duration:    1.8,
              ease:        "easeInOut",
              repeat:      Infinity,
              repeatDelay: 0.6,
              delay:       2.5,
            }}
          />
        </div>
        <span className="font-sans text-label-sm uppercase tracking-[0.3em] text-white/30">
          Discover
        </span>
      </motion.div>

      {/* ── Bottom gold rule ── */}
      <div
        className="absolute bottom-0 inset-x-0 z-[10] h-px bg-gradient-to-r
          from-transparent via-ak-gold/30 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
