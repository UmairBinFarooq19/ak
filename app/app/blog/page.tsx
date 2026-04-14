import PageLayout from "@/components/PageLayout";
import Link from "next/link";
const posts = [
  { title: "Best Time to Trek Kashmir Great Lakes", date: "March 2024", tag: "Trekking", excerpt: "The optimal window is July to September — here's a month-by-month breakdown of conditions, crowds, and what to expect." },
  { title: "Gulmarg Ski Season 2024–25: Complete Guide", date: "November 2024", tag: "Skiing", excerpt: "Everything you need to know about the Gulmarg ski season — snowfall forecasts, gondola hours, and which runs to prioritise." },
  { title: "What to Pack for a Kashmir Trek", date: "June 2024", tag: "Gear", excerpt: "Our definitive gear list for Himalayan trekking, refined over hundreds of expeditions. What's essential, what's unnecessary." },
  { title: "Kashmir Honeymoon: The Complete Romantic Guide", date: "January 2024", tag: "Travel", excerpt: "Houseboats, shikara rides, Mughal Gardens at dusk — crafting the perfect Kashmir honeymoon." },
  { title: "Gulmarg Gondola: Everything You Need to Know", date: "October 2024", tag: "Gulmarg", excerpt: "Gondola phases, ticket pricing, best times to visit, and how to avoid queues at Asia's highest cable car." },
  { title: "Kashmir Weather: Month by Month Guide", date: "April 2024", tag: "Travel Tips", excerpt: "From frozen winters to spring blossoms — when to visit Kashmir for trekking, skiing, or sightseeing." },
];
export default function Page() {
  return (
    <PageLayout title="Adventures Kashmir Blog" subtitle="Guides, Tips & Inspiration from the Himalayas" description="Practical guides, insider tips, and stories from six years of leading adventures in Kashmir's mountains, valleys, and ski slopes." image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=90" badge="Blog">
      <div className="grid sm:grid-cols-2 gap-5 mt-4">
        {posts.map(p=>(
          <div key={p.title} className="bg-white rounded-2xl p-5 border border-ak-mist hover:shadow-luxury transition-shadow">
            <span className="text-xs font-semibold bg-ak-gold/15 text-ak-gold border border-ak-gold/30 px-2 py-0.5 rounded">{p.tag}</span>
            <h3 className="font-serif text-ak-espresso text-base mt-2 mb-1">{p.title}</h3>
            <p className="text-ak-stone text-xs font-sans mb-2">{p.date}</p>
            <p className="text-ak-espresso/70 text-sm font-sans">{p.excerpt}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
