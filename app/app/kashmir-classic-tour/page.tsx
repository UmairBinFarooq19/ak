import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout title="Kashmir Classic 4N/5D" subtitle="The Essential Kashmir Experience" description="Five days, four nights — Kashmir's greatest hits curated into a seamless luxury itinerary. Dal Lake houseboat stay, Mughal Gardens, Pahalgam's Betaab Valley, and the snow-capped meadows of Gulmarg. Private vehicles, handpicked guesthouses, and a dedicated local guide throughout." image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90" badge="Most Popular"
      stats={[{label:"Duration",value:"4 Nights / 5 Days"},{label:"Cities",value:"Srinagar, Pahalgam, Gulmarg"},{label:"Accommodation",value:"3★ to 5★ Hotels"},{label:"Transport",value:"Private AC Vehicle"},{label:"From",value:"₹24,999 / couple"}]}>
      <div className="space-y-3 font-sans text-sm text-ak-espresso/80">
        {[["Day 1","Arrive Srinagar · Shikara ride · Dal Lake houseboat"],["Day 2","Mughal Gardens (Shalimar, Nishat, Chashme Shahi) · Old City"],["Day 3","Pahalgam · Betaab Valley · Aru Valley · Baisaran Meadow"],["Day 4","Gulmarg · Gondola Phase 1 & 2 · Khilanmarg"],["Day 5","Srinagar local market · Departure"]].map(([d,t])=>(
          <div key={d} className="flex gap-4 py-3 border-b border-ak-mist last:border-0">
            <span className="text-ak-gold font-semibold w-14 flex-shrink-0">{d}</span><span>{t}</span>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
