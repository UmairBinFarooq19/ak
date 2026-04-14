import PageLayout from "@/components/PageLayout";
import Link from "next/link";
const packages = [
  { title: "Ski School — All Levels", slug: "/gulmarg-ski-school", tag: "Certified", desc: "Professional CASI-certified instruction for beginners to advanced skiers.", price: "₹4,999/day" },
  { title: "Gulmarg Ski Packages", slug: "/gulmarg-skiing", tag: "Popular", desc: "All-inclusive ski packages with accommodation, gondola & guided runs.", price: "₹18,999/3 days" },
  { title: "Private Ski Guiding", slug: "/private-ski-guiding", tag: "Luxury", desc: "Dedicated one-on-one guide for off-piste exploration and heli-ski zones.", price: "₹9,999/day" },
];
export default function Page() {
  return (
    <PageLayout title="Gulmarg Skiing" subtitle="Asia's Premier High-Altitude Ski Destination" description="Gulmarg sits at 2,730m with ski runs extending to 4,200m via the world's highest gondola. Consistent powder, uncrowded slopes, and dramatic Himalayan scenery make it Asia's best-kept ski secret — now discovered by the world's best skiers." image="https://images.unsplash.com/photo-1548133650-7e2c9ad41f74?w=1600&q=90" badge="Skiing">
      <div className="grid sm:grid-cols-1 gap-5 mt-6">
        {packages.map(p => (
          <Link key={p.slug} href={p.slug} className="group flex gap-5 bg-white rounded-2xl p-5 border border-ak-mist hover:shadow-luxury transition-shadow">
            <div className="flex-1">
              <span className="text-xs font-semibold bg-ak-gold/15 text-ak-gold border border-ak-gold/30 px-2 py-0.5 rounded">{p.tag}</span>
              <h3 className="font-serif text-ak-espresso text-lg mt-2 mb-1">{p.title}</h3>
              <p className="text-ak-stone text-sm font-sans">{p.desc}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="font-serif text-ak-espresso">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
