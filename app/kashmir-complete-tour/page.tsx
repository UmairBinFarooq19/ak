import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout title="Kashmir Complete 6N/7D" subtitle="The Full Valley Experience" description="Seven days to experience the full breadth of Kashmir — from the iconic Dal Lake to the lesser-visited Yusmarg meadows, the turquoise Naranag ruins, and the glacial grandeur of Sonamarg. This is Kashmir for those who want to understand the valley deeply, not just see its highlights." image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90" badge="Best Value"
      stats={[{label:"Duration",value:"6 Nights / 7 Days"},{label:"Destinations",value:"5 Locations"},{label:"Accommodation",value:"Handpicked Hotels"},{label:"Transport",value:"Private AC Vehicle"},{label:"From",value:"₹34,999 / couple"}]}>
      <div className="space-y-3 font-sans text-sm text-ak-espresso/80">
        {[["Day 1","Srinagar arrival · houseboat check-in · Dal Lake shikara"],["Day 2","Mughal Gardens · Shankaracharya Temple · Old City bazaars"],["Day 3","Sonamarg · Thajiwas Glacier · Sindh River"],["Day 4","Pahalgam · Betaab Valley · Chandanwari"],["Day 5","Gulmarg · Gondola · Khilanmarg meadow"],["Day 6","Yusmarg · Doodh Ganga · Nil Nag Lake"],["Day 7","Naranag ruins · Srinagar market · Departure"]].map(([d,t])=>(
          <div key={d} className="flex gap-4 py-3 border-b border-ak-mist last:border-0">
            <span className="text-ak-gold font-semibold w-14 flex-shrink-0">{d}</span><span>{t}</span>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
