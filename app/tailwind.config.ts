import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── BRAND PALETTE ──────────────────────────────────────────
      // 80% ak-cream  · 15% ak-espresso · 5% ak-gold · 1% ak-crimson
      colors: {
        "ak-cream":    { DEFAULT: "#FAFAF5", 50: "#FFFFFF", 100: "#FAFAF5", 200: "#F0F0E8" },
        "ak-espresso": { DEFAULT: "#1A1412", 800: "#2A2220", 700: "#3A3230" },
        "ak-gold":     { DEFAULT: "#D4AF37", light: "#E8CC6A", dark: "#A88A20" },
        "ak-crimson":  { DEFAULT: "#CC1100", muted: "#A00D00" },
        "ak-stone":    { DEFAULT: "#8C8880", light: "#B8B4AE" },
        "ak-mist":     { DEFAULT: "#E8E6DF" },
      },

      // ── TYPOGRAPHY ─────────────────────────────────────────────
      fontFamily: {
        serif:  ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans:   ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid editorial scale
        "display-2xl": ["clamp(3.5rem, 7vw, 7rem)",   { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        "display-xl":  ["clamp(2.8rem, 5vw, 5rem)",   { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg":  ["clamp(2rem, 3.5vw, 3.25rem)",{ lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-md":  ["clamp(1.5rem, 2.5vw, 2.25rem)",{ lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-lg":     ["1.0625rem",  { lineHeight: "1.75", letterSpacing: "0.005em" }],
        "body-sm":     ["0.875rem",   { lineHeight: "1.65", letterSpacing: "0.01em"  }],
        "label":       ["0.6875rem",  { lineHeight: "1",    letterSpacing: "0.18em"  }],
        "label-sm":    ["0.625rem",   { lineHeight: "1",    letterSpacing: "0.22em"  }],
      },

      // ── SPACING ────────────────────────────────────────────────
      spacing: {
        "18":  "4.5rem",
        "22":  "5.5rem",
        "26":  "6.5rem",
        "30":  "7.5rem",
        "34":  "8.5rem",
        "38":  "9.5rem",
        "42":  "10.5rem",
        "section": "clamp(5rem, 10vw, 9rem)",
      },

      // ── LAYOUT ─────────────────────────────────────────────────
      maxWidth: {
        "reading":  "68ch",
        "content":  "1160px",
        "wide":     "1440px",
      },

      // ── BORDERS ────────────────────────────────────────────────
      borderWidth: { "0.5": "0.5px" },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      // ── SHADOWS ────────────────────────────────────────────────
      boxShadow: {
        "luxury":    "0 4px 40px -8px rgba(26, 20, 18, 0.18)",
        "luxury-lg": "0 20px 80px -16px rgba(26, 20, 18, 0.28)",
        "gold":      "0 0 0 1px rgba(212, 175, 55, 0.4)",
        "gold-lg":   "0 8px 40px -4px rgba(212, 175, 55, 0.22)",
        "inset-top": "inset 0 1px 0 rgba(255,255,255,0.08)",
      },

      // ── TRANSITIONS ────────────────────────────────────────────
      transitionTimingFunction: {
        "luxury":    "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
        "in-expo":   "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo":  "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
        "1200": "1200ms",
      },

      // ── ANIMATIONS ─────────────────────────────────────────────
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "line-grow": {
          "0%":   { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        "scroll-dot": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%":      { transform: "translateY(8px)", opacity: "0.3" },
        },
        "grain": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%":      { transform: "translate(-2%, -3%)" },
          "20%":      { transform: "translate(3%, 2%)" },
          "30%":      { transform: "translate(-1%, 4%)" },
          "40%":      { transform: "translate(2%, -2%)" },
          "50%":      { transform: "translate(-3%, 1%)" },
          "60%":      { transform: "translate(1%, 3%)" },
          "70%":      { transform: "translate(-2%, -1%)" },
          "80%":      { transform: "translate(3%, -3%)" },
          "90%":      { transform: "translate(-1%, 2%)" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.9s cubic-bezier(0.19, 1, 0.22, 1) both",
        "fade-in":    "fade-in 1.2s cubic-bezier(0.19, 1, 0.22, 1) both",
        "line-grow":  "line-grow 0.8s cubic-bezier(0.19, 1, 0.22, 1) both",
        "scroll-dot": "scroll-dot 2s ease-in-out infinite",
        "grain":      "grain 0.8s steps(1) infinite",
      },

      // ── ASPECT RATIOS ──────────────────────────────────────────
      aspectRatio: {
        "editorial":  "4 / 5",
        "landscape":  "16 / 9",
        "portrait":   "3 / 4",
        "cinematic":  "21 / 9",
      },

      // ── Z-INDEX ────────────────────────────────────────────────
      zIndex: {
        "nav":     "100",
        "overlay": "200",
        "modal":   "300",
        "toast":   "400",
      },
    },
  },
  plugins: [],
};

export default config;
