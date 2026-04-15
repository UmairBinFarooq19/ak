import PageLayout from "@/components/PageLayout";
import Link from "next/link";
const tours = [
  {title:"Kashmir Classic 4N/5D",slug:"/kashmir-classic-tour",tag:"Popular",price:"₹24,999/couple",desc:"Dal Lake, Mughal Gardens, Pahalgam & Gulmarg in 5 days."},
  {title:"Kashmir Complete 6N/7D",slug:"/kashmir-complete-tour",tag:"Best Value",price:"₹34,999/couple",desc:"The full Kashmir experience — Sonamarg, Yusmarg & beyond."},
  {title:"Kashmir Honeymoon",slug:"/kashmir-honeymoon",tag:"Romantic",price:"₹39,999/couple",desc:"Luxury houseboat, private shikara rides & candlelit dinners."},
  {title:"Gulmarg Gondola Day Tour",slug:"/gulmarg-gondola-tour",tag:"Day Trip",price:"₹6,999/person",desc:"Full-day guided Gulmarg experience with gondola & lunch."},
  {title:"Pahalgam & Sonamarg",slug:"/pahalgam-sonamarg-tour",tag:"Scenic",price:"₹8,999/person",desc:"Two of Kashmir's most breathtaking valley destinations."},
];
export default function Page() {
  return (
    <PageLayout title="Kashmir Tours" subtitle="Curated Journeys Through the Valley of Paradise" description="From intimate honeymoon retreats on Dal Lake to grand week-long explorations of the entire Kashmir Valley — our handcrafted tours combine luxury accommodation, private vehicles, expert local guides, and unforgettable experiences." image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90" badge="Kashmir Tours">
      <div className="space-y-4 mt-6">
        {tours.map(t=>(
          <Link key={t.slug} href={t.slug} className="group flex gap-5 bg-white rounded-2xl p-5 border border-ak-mist hover:shadow-luxury transition-shadow">
            <div className="flex-1">
              <span className="text-xs font-semibold bg-ak-gold/15 text-ak-gold border border-ak-gold/30 px-2 py-0.5 rounded">{t.tag}</span>
              <h3 className="font-serif text-ak-espresso text-lg mt-2 mb-1">{t.title}</h3>
              <p className="text-ak-stone text-sm font-sans">{t.desc}</p>
            </div>
            <p className="font-serif text-ak-espresso flex-shrink-0 text-right">{t.price}</p>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
