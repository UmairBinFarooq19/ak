import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout title="Pahalgam & Sonamarg Tour" subtitle="Kashmir's Two Most Scenic Valleys" description="A two-day journey through Kashmir's most celebrated side valleys — Pahalgam, the Valley of Shepherds, where Bollywood films countless scenes amid its willow-lined Lidder River and towering pines; and Sonamarg, the Meadow of Gold, gateway to glaciers and the legendary Kashmir Great Lakes trek." image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=90" badge="Scenic Valley Tour"
      stats={[{label:"Duration",value:"2 Days"},{label:"Destinations",value:"Pahalgam + Sonamarg"},{label:"Transport",value:"Private Vehicle"},{label:"Accommodation",value:"Optional Overnight"},{label:"From",value:"₹8,999 / person"}]}>
      <div className="font-sans text-sm text-ak-espresso/80 space-y-3">
        {[["Day 1 — Pahalgam","Betaab Valley · Aru Valley · Baisaran meadow by pony · Lidder riverside lunch"],["Day 2 — Sonamarg","Thajiwas Glacier by pony · Sindh River fishing spot · Zero Point (seasonal) · Drive back to Srinagar"]].map(([d,t])=>(
          <div key={d} className="py-3 border-b border-ak-mist last:border-0">
            <p className="text-ak-gold font-semibold mb-1">{d}</p><p>{t}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
