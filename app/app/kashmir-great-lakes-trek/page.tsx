import PageLayout from "@/components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="Kashmir Great Lakes Trek"
      subtitle="Seven Sacred Alpine Lakes · Sonamarg to Naranag"
      description="India's most spectacular high-altitude journey — seven pristine glacier-fed lakes woven across 70+ km of untouched Himalayan wilderness. Crossing the legendary Gadsar Pass at 4,267m, this flagship expedition rewards trekkers with turquoise Krishnasar, serene Vishansar, remote Gangabal, and four more hidden gems. Our certified guides, luxury camping gear, and curated menus transform this wilderness crossing into an unforgettable luxury expedition."
      image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=90"
      badge="Flagship Expedition"
      stats={[
        { label: "Duration", value: "7–8 Days" },
        { label: "Max Altitude", value: "4,267m" },
        { label: "Group Size", value: "6–12" },
        { label: "Difficulty", value: "Expert" },
        { label: "From", value: "₹14,999 / person" },
      ]}
    >
      <div className="space-y-6 font-sans text-ak-espresso/80">
        <div>
          <h2 className="font-serif text-ak-espresso text-2xl mb-3">Itinerary Overview</h2>
          {[
            ["Day 1", "Srinagar → Sonamarg (2,800m) — acclimatisation, camp setup"],
            ["Day 2", "Sonamarg → Nichnai Pass (3,800m) → Nichnai Camp"],
            ["Day 3", "Nichnai → Vishansar Lake (3,710m) — first lake views"],
            ["Day 4", "Vishansar → Krishnasar → Gadsar Pass (4,267m) → Gadsar Lake"],
            ["Day 5", "Gadsar → Satsar Lakes (7 lakes) → Satsar Camp"],
            ["Day 6", "Satsar → Gangabal Twin Lakes (3,576m)"],
            ["Day 7", "Gangabal → Naranag → Srinagar"],
          ].map(([day, desc]) => (
            <div key={day} className="flex gap-4 py-3 border-b border-ak-mist last:border-0">
              <span className="text-ak-gold font-semibold w-14 flex-shrink-0 text-sm">{day}</span>
              <span className="text-sm">{desc}</span>
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-serif text-ak-espresso text-2xl mb-3">What's Included</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {["Experienced certified mountain guide","Luxury dome tents & sleeping bags","All meals (breakfast, lunch, dinner)","Porter & horse support","First aid & emergency kit","Forest department permits","Srinagar pickup & drop"].map(i => (
              <li key={i} className="flex items-center gap-2"><span className="text-ak-gold">✓</span>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
