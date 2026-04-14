import PageLayout from "@/components/PageLayout";
const sections = [
  { category: "Trekking", items: [["Kashmir Great Lakes Trek (7–8 days)","₹14,999 / person"],["Tarsar Marsar Trek (6 days)","₹11,999 / person"],["Kolahoi Glacier Trek (5 days)","₹12,999 / person"],["Gulmarg Day Trek","₹2,999 / person"]] },
  { category: "Skiing", items: [["Ski School — Group Lesson","₹4,999 / day"],["Ski School — Private Lesson","₹9,999 / day"],["Gulmarg Ski Package (3 days)","₹18,999 / person"],["Private Ski Guide","₹9,999 / day"]] },
  { category: "Kashmir Tours", items: [["Classic 4N/5D","₹24,999 / couple"],["Complete 6N/7D","₹34,999 / couple"],["Honeymoon Package","₹39,999 / couple"],["Gulmarg Day Tour","₹6,999 / person"],["Pahalgam & Sonamarg","₹8,999 / person"]] },
];
export default function Page() {
  return (
    <PageLayout title="Pricing" subtitle="Transparent Pricing — No Hidden Costs" description="All our prices are fully inclusive with no surprise add-ons. What you see is what you pay. Groups of 6+ receive automatic discounts. Contact us for custom quotes on private or bespoke itineraries." image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=90" badge="Pricing">
      <div className="space-y-8 mt-4">
        {sections.map(s=>(
          <div key={s.category}>
            <h2 className="font-serif text-ak-espresso text-xl mb-3 pb-2 border-b border-ak-gold/30">{s.category}</h2>
            <div className="space-y-0">
              {s.items.map(([name,price])=>(
                <div key={name} className="flex justify-between items-center py-3 border-b border-ak-mist last:border-0">
                  <span className="font-sans text-sm text-ak-espresso/80">{name}</span>
                  <span className="font-serif text-ak-espresso font-semibold">{price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="bg-ak-gold/10 border border-ak-gold/30 rounded-xl p-4 text-sm font-sans text-ak-espresso/80">
          <p className="font-semibold text-ak-espresso mb-1">Group Discounts</p>
          <p>6–8 people: 10% off · 9–12 people: 15% off · 12+ people: Custom pricing</p>
        </div>
      </div>
    </PageLayout>
  );
}
