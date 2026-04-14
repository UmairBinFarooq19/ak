"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";

// ── NAVIGATION DATA ────────────────────────────────────────────────────────────
const NAV_LINKS = [
  {
    label:  "Expeditions",
    href:   "/expeditions",
    children: [
      { label: "Kashmir Great Lakes Trek",  href: "/kashmir-great-lakes-trek",  tag: "Flagship" },
      { label: "Tarsar Marsar Trek",         href: "/tarsar-marsar-trek",         tag: null },
      { label: "Gulmarg–Khilanmarg Trek",    href: "/gulmarg-khilanmarg-trek",    tag: null },
      { label: "Kolahoi Glacier Trek",       href: "/kolahoi-glacier-trek",       tag: null },
    ],
  },
  {
    label:  "Skiing",
    href:   "/skiing",
    children: [
      { label: "Ski School — All Levels", href: "/gulmarg-ski-school",   tag: "Certified" },
      { label: "Gulmarg Ski Packages",     href: "/gulmarg-skiing",        tag: null },
      { label: "Private Ski Guiding",      href: "/private-ski-guiding",   tag: "Luxury" },
    ],
  },
  {
    label:    "Kashmir Tours",
    href:     "/kashmir-tour-package",
    children: [
      { label: "Kashmir Classic 4N/5D",    href: "/kashmir-classic-tour",   tag: "Popular" },
      { label: "Kashmir Complete 6N/7D",   href: "/kashmir-complete-tour",  tag: "Best Value" },
      { label: "Kashmir Honeymoon",        href: "/kashmir-honeymoon",      tag: "Romantic" },
      { label: "Gulmarg Gondola Day Tour", href: "/gulmarg-gondola-tour",   tag: null },
      { label: "Pahalgam & Sonamarg",      href: "/pahalgam-sonamarg-tour", tag: null },
    ],
  },
  { label: "About",  href: "/about",   children: null },
  { label: "Blog",   href: "/blog",    children: null },
  { label: "Prices", href: "/pricing", children: null },
] as const;

// ── SUB-TYPES ─────────────────────────────────────────────────────────────────
type NavChild = { label: string; href: string; tag: string | null };
type NavItem  = { label: string; href: string; children: NavChild[] | null };

// ── ANIMATION VARIANTS ────────────────────────────────────────────────────────
const dropdownVariants = {
  hidden:  { opacity: 0, y: -8,  scale: 0.97 },
  visible: { opacity: 1, y: 0,   scale: 1,
    transition: { duration: 0.22, ease: [0.19, 1, 0.22, 1] } },
  exit:    { opacity: 0, y: -6,  scale: 0.98,
    transition: { duration: 0.16, ease: "easeIn" } },
};

const mobileMenuVariants = {
  hidden:  { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: "0%",
    transition: { duration: 0.38, ease: [0.19, 1, 0.22, 1] } },
  exit:    { opacity: 0, x: "100%",
    transition: { duration: 0.28, ease: "easeIn" } },
};

const mobileLinkVariants = {
  hidden:  { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.19, 1, 0.22, 1] },
  }),
};

// ── LOGO SVG ──────────────────────────────────────────────────────────────────
// Faithful recreation of the AK badge logo: black shield · red mountain peak · gold trim
function AKLogo({ scrolled, className = "" }: { scrolled: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 52"
      className={className}
      aria-label="Adventures Kashmir logo"
      role="img"
    >
      {/* Shield / badge background */}
      <path
        d="M8 6 C8 3.8 9.8 2 12 2 L108 2 C110.2 2 112 3.8 112 6 L112 34 C112 42 84 50 60 50 C36 50 8 42 8 34 Z"
        fill={scrolled ? "#1A1412" : "rgba(26,20,18,0.92)"}
        stroke="#D4AF37"
        strokeWidth="1.5"
      />
      {/* Inner gold rule */}
      <path
        d="M14 8 C14 6.3 15.3 5 17 5 L103 5 C104.7 5 106 6.3 106 8 L106 33 C106 40 82 47 60 47 C38 47 14 40 14 33 Z"
        fill="none"
        stroke="rgba(212,175,55,0.35)"
        strokeWidth="0.6"
      />
      {/* Mountain peak — Red "A" form */}
      <polygon
        points="32,32 47,10 55,20 47,20 47,32"
        fill="#CC1100"
      />
      {/* Snow cap on peak */}
      <polygon
        points="47,10 43,18 47,16 51,18"
        fill="white"
        opacity="0.9"
      />
      {/* "K" letterform */}
      <text
        x="56"
        y="34"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="900"
        fontSize="28"
        fill="#1A1412"
        letterSpacing="-1"
      >K</text>
      {/* ADVENTURES text */}
      <text
        x="60"
        y="30"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="700"
        fontSize="7.5"
        fill="white"
        textAnchor="middle"
        letterSpacing="2.5"
      >ADVENTURES</text>
      {/* KASHMIR text */}
      <text
        x="60"
        y="40"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="800"
        fontSize="8.5"
        fill="#CC1100"
        textAnchor="middle"
        letterSpacing="2"
      >KASHMIR</text>
      {/* Tagline rule */}
      <line x1="28" y1="44" x2="52" y2="44" stroke="rgba(212,175,55,0.5)" strokeWidth="0.5"/>
      <line x1="68" y1="44" x2="92" y2="44" stroke="rgba(212,175,55,0.5)" strokeWidth="0.5"/>
    </svg>
  );
}

// ── DESKTOP DROPDOWN ─────────────────────────────────────────────────────────
function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-label font-sans uppercase tracking-[0.18em]
          text-white/70 hover:text-white transition-colors duration-300 py-2 px-1
          group focus-visible:outline-none focus-visible:text-white"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          size={10}
          strokeWidth={1.5}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 min-w-[260px]"
          >
            {/* Gold top line */}
            <div className="h-px bg-ak-gold/60 mb-0 rounded-full mx-6" />
            <div className="bg-ak-espresso border border-ak-gold/15 rounded-2xl shadow-luxury-lg overflow-hidden">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-5 py-3.5 group/item
                    hover:bg-white/5 transition-colors duration-200 border-b border-white/5 last:border-0"
                >
                  <span className="text-body-sm text-white/75 group-hover/item:text-white transition-colors duration-200 font-sans">
                    {child.label}
                  </span>
                  {child.tag && (
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-wider
                      bg-ak-gold/15 text-ak-gold border border-ak-gold/30 rounded px-2 py-0.5 ml-3">
                      {child.tag}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── MAIN NAVBAR ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [scrollY,     setScrollY]     = useState(0);
  const { scrollY: scrollMotion } = useScroll();

  // Track scroll for background transition
  useEffect(() => {
    const unsub = scrollMotion.on("change", (v) => {
      setScrollY(v);
      setScrolled(v > 60);
    });
    return () => unsub();
  }, [scrollMotion]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Nav background opacity driven by scroll
  const navBg = scrolled
    ? "bg-ak-espresso shadow-luxury border-b border-white/5"
    : "bg-transparent";

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${navBg}`}
        style={{ height: "var(--nav-h)" }}
        role="banner"
      >
        <div className="max-w-content mx-auto h-full flex items-center justify-between px-6 md:px-10">

          {/* ── Logo ── */}
          <Link href="/" aria-label="Adventures Kashmir — Home" className="flex-shrink-0">
            <AKLogo scrolled={scrolled} className="h-10 md:h-12 w-auto" />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" role="navigation" aria-label="Primary navigation">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.href} item={item as NavItem} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-label font-sans uppercase tracking-[0.18em]
                    text-white/70 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919797877243"
              className="flex items-center gap-1.5 text-white/55 hover:text-white
                transition-colors duration-300 text-[0.75rem] font-sans tracking-wide"
              aria-label="Call Adventures Kashmir"
            >
              <Phone size={12} strokeWidth={1.5} />
              +91 97978 77243
            </a>
            <div className="w-px h-4 bg-white/20" />
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5
                border border-ak-gold/70 text-ak-gold text-label uppercase tracking-[0.2em]
                font-sans hover:bg-ak-gold hover:text-ak-espresso
                transition-all duration-400 ease-out-expo rounded-sm group overflow-hidden"
            >
              {/* Gold shimmer on hover */}
              <span className="absolute inset-0 bg-ak-gold translate-x-[-101%]
                group-hover:translate-x-0 transition-transform duration-400 ease-out-expo" />
              <span className="relative z-10">Book Now</span>
            </Link>
          </div>

          {/* ── Mobile Burger ── */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Open navigation menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* ── Gold progress line at top (subtle scroll indicator) ── */}
        {scrolled && (
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-ak-gold/40"
            style={{
              width: useTransform(scrollMotion, [0, 5000], ["0%", "100%"]),
            }}
          />
        )}
      </motion.header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[200] bg-ak-espresso/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 z-[201] w-full max-w-xs bg-ak-espresso
                lg:hidden flex flex-col overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                <AKLogo scrolled className="h-9 w-auto" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/60 hover:text-white transition-colors p-1"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Gold rule */}
              <div className="h-px bg-ak-gold/30 mx-6" />

              {/* Links */}
              <nav className="flex-1 px-6 py-6 space-y-1" role="navigation">
                {NAV_LINKS.map((item, i) => (
                  <motion.div key={item.href} custom={i} variants={mobileLinkVariants} initial="hidden" animate="visible">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3.5 border-b border-white/6
                        text-white/75 hover:text-white transition-colors duration-200 group"
                    >
                      <span className="font-sans text-body-sm tracking-wide">{item.label}</span>
                      {item.children && (
                        <ChevronDown size={12} strokeWidth={1.5} className="text-white/30 group-hover:text-ak-gold transition-colors" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom contact block */}
              <div className="px-6 pb-8 pt-4 space-y-3 border-t border-white/8">
                <a
                  href="https://wa.me/919797877243"
                  className="flex items-center justify-center gap-2 w-full py-3.5
                    bg-ak-gold text-ak-espresso text-label uppercase tracking-[0.18em]
                    font-semibold rounded-sm hover:bg-ak-gold-light transition-colors duration-300"
                >
                  Book Now — Free Quote
                </a>
                <a
                  href="tel:+919797877243"
                  className="flex items-center justify-center gap-2 w-full py-3
                    border border-white/15 text-white/60 text-label uppercase tracking-wide
                    rounded-sm hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  <Phone size={12} strokeWidth={1.5} />
                  +91 97978 77243
                </a>
                <div className="flex items-start gap-2 pt-1">
                  <MapPin size={12} strokeWidth={1.5} className="text-ak-gold mt-0.5 flex-shrink-0" />
                  <p className="text-white/35 text-[0.7rem] font-sans leading-relaxed">
                    Main Market, Tangmarg<br />Gulmarg, J&K 193402
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
