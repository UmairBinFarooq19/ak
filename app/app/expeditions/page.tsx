import PageLayout from "@/components/PageLayout";
import Link from "next/link";

const treks = [
  { title: "Kashmir Great Lakes Trek", slug: "/kashmir-great-lakes-trek", tag: "Flagship", duration: "7–8 Days", altitude: "4,267m", price: "₹14,999", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80", desc: "Seven pristine glacier-fed lakes across 70km of Himalayan wilderness." },
  { title: "Tarsar Marsar Trek", slug: "/tarsar-marsar-trek", tag: "Popular", duration: "6 Days", altitude: "3,800m", price: "₹11,999", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Twin alpine lakes surrounded by meadows and snow-capped peaks." },
  { title: "Gulmarg–Khilanmarg Trek", slug: "/gulmarg-khilanmarg-trek", tag: "Easy", duration: "1 Day", altitude: "3,050m", price: "₹2,999", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "A gentle day hike above Gulmarg with panoramic Himalayan views." },
  { title: "Kolahoi Glacier Trek", slug: "/kolahoi-glacier-trek", tag: "Advanced", duration: "5 Days", altitude: "4,200m", price: "₹12,999", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80", desc: "Trek to Kashmir's largest glacier through Lidder Valley wilderness." },
];

export default function ExpeditionsPage() {
  return (
    <PageLayout
      title="Himalayan Expeditions"
      subtitle="Curated treks through Kashmir's most spectacular landscapes"
      description="From gentle day hikes above Gulmarg to multi-day glacier expeditions, our certified mountain guides lead every journey with safety, expertise, and deep local knowledge."
      image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=90"
      badge="Expeditions"
    >
      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        {treks.map((t) => (
          <Link key={t.slug} href={t.slug} className="group block bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-shadow duration-300 border border-ak-mist">
            <div className="relative h-48 overflow-hidden">
              <img src={t.image} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 bg-ak-gold text-ak-espresso text-xs font-semibold px-2 py-0.5 rounded">{t.tag}</span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-ak-espresso text-lg mb-1">{t.title}</h3>
              <p className="text-ak-stone text-sm font-sans mb-3">{t.desc}</p>
              <div className="flex justify-between items-center text-xs font-sans text-ak-stone">
                <span>{t.duration} · {t.altitude}</span>
                <span className="text-ak-espresso font-semibold">From {t.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
