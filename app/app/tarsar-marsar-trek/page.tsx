import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout
      title="Tarsar Marsar Trek"
      subtitle="Twin Alpine Lakes · Aru Valley to Lidder"
      description="One of Kashmir's most beautiful hidden gems — the Tarsar and Marsar twin lakes shimmer in glacially carved bowls surrounded by wildflower meadows and granite ridges. A moderate 6-day journey through Aru Valley, this trek offers stunning photography, wildlife spotting, and serene camping beside some of the most pristine water bodies in the Himalayas."
      image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=90"
      badge="Popular Trek"
      stats={[{ label:"Duration",value:"6 Days"},{label:"Max Altitude",value:"3,800m"},{label:"Group Size",value:"4–10"},{label:"Difficulty",value:"Moderate"},{label:"From",value:"₹11,999 / person"}]}
    >
      <div className="space-y-6 font-sans text-ak-espresso/80">
        <h2 className="font-serif text-ak-espresso text-2xl mb-3">Itinerary Overview</h2>
        {[["Day 1","Srinagar → Pahalgam → Aru (2,400m)"],["Day 2","Aru → Lidderwat (3,100m) through pine forests"],["Day 3","Lidderwat → Tarsar Lake (3,720m)"],["Day 4","Tarsar → Marsar Lake (3,800m) — full day exploration"],["Day 5","Marsar → Shekwas → Aru Valley"],["Day 6","Aru → Pahalgam → Srinagar"]].map(([day,desc]) => (
          <div key={day} className="flex gap-4 py-3 border-b border-ak-mist last:border-0">
            <span className="text-ak-gold font-semibold w-14 flex-shrink-0 text-sm">{day}</span>
            <span className="text-sm">{desc}</span>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
