"use client";
import Link from "next/link";
import Navbar from "./Navbar";
 
interface Stat { label: string; value: string; }
interface PageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  stats?: Stat[];
  children?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}
 
export default function PageLayout({
  title, subtitle, description, image, badge, stats, children, ctaLabel = "Book Now — Free Quote", ctaHref = "https://wa.me/919797877243"
}: PageLayoutProps) {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ak-espresso via-ak-espresso/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 pb-16 w-full">
          {badge && (
            <span className="inline-block text-label uppercase tracking-[0.2em] text-ak-gold border border-ak-gold/40 px-3 py-1 mb-4 text-xs">
              {badge}
            </span>
          )}
          <h1 className="font-serif text-display-xl text-white mb-3">{title}</h1>
          <p className="font-sans text-body-lg text-white/70 max-w-xl">{subtitle}</p>
        </div>
      </section>
 
      {/* Stats bar */}
      {stats && stats.length > 0 && (
        <div className="bg-ak-espresso border-b border-white/10">
          <div className="max-w-content mx-auto px-6 md:px-10 py-5 flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-label uppercase tracking-widest text-ak-stone text-xs mb-0.5">{s.label}</p>
                <p className="font-serif text-white text-lg">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
 
      {/* Main content */}
      <main className="bg-ak-cream-100 min-h-screen">
        <div className="max-w-content mx-auto px-6 md:px-10 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="font-sans text-body-lg text-ak-espresso/80 leading-relaxed mb-8">{description}</p>
              {children}
            </div>
            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white border border-ak-mist rounded-2xl p-6 shadow-luxury">
                <p className="font-serif text-ak-espresso text-xl mb-1">Ready to explore?</p>
                <p className="text-ak-stone text-sm font-sans mb-5">Get a free personalised quote from our Kashmir experts.</p>
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-ak-gold text-ak-espresso font-sans font-semibold text-label uppercase tracking-[0.18em] py-3.5 rounded-sm hover:bg-ak-gold-light transition-colors duration-300 mb-3"
                >
                  {ctaLabel}
                </a>
                <a
                  href="tel:+919797877243"
                  className="block w-full text-center border border-ak-espresso/20 text-ak-espresso font-sans text-label uppercase tracking-wide py-3 rounded-sm hover:border-ak-espresso/50 transition-colors duration-300"
                >
                  +91 97978 77243
                </a>
                <div className="mt-5 pt-5 border-t border-ak-mist">
                  <p className="text-xs text-ak-stone font-sans text-center">⭐ 4.9 · 287+ verified reviews · Est. 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
 
      {/* Footer */}
      <footer className="bg-ak-espresso border-t border-white/10 py-10">
        <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif text-white text-lg">Adventures Kashmir</p>
          <p className="text-ak-stone text-sm font-sans">Main Market, Tangmarg, Gulmarg, J&K 193402</p>
          <p className="text-ak-stone text-sm font-sans">© {new Date().getFullYear()} Adventures Kashmir</p>
        </div>
      </footer>
    </>
  );
}
 
