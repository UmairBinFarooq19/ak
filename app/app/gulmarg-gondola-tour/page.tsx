import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout title="Gulmarg Gondola Day Tour" subtitle="Asia's Highest Cable Car Experience" description="A full-day guided excursion to Gulmarg — the Meadow of Flowers — culminating in a ride on the Gulmarg Gondola, the world's second-highest and Asia's largest cable car system. Phase 2 takes you to 4,200m with 360° views of Nanga Parbat, K2, and the entire Kashmir Valley spread below you." image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90" badge="Day Tour"
      stats={[{label:"Duration",value:"Full Day"},{label:"Gondola",value:"Phase 1 & 2 Included"},{label:"Altitude",value:"Up to 4,200m"},{label:"From Srinagar",value:"~2 hours"},{label:"Price",value:"₹6,999 / person"}]}>
      <div className="font-sans text-sm text-ak-espresso/80 space-y-3">
        <h2 className="font-serif text-ak-espresso text-2xl mb-2">Day Schedule</h2>
        {[["8:00 AM","Pickup from Srinagar hotel"],["10:00 AM","Arrive Gulmarg, welcome tea"],["10:30 AM","Gondola Phase 1 (Gulmarg → Kongdori, 3,099m)"],["11:30 AM","Gondola Phase 2 (Kongdori → Apharwat, 4,200m)"],["1:00 PM","Lunch at Kongdori with Himalayan views"],["2:00 PM","Khilanmarg meadow walk (seasonal)"],["4:30 PM","Depart for Srinagar"],["6:30 PM","Drop at hotel"]].map(([t,d])=>(
          <div key={t} className="flex gap-4 py-2 border-b border-ak-mist last:border-0">
            <span className="text-ak-gold font-semibold w-20 flex-shrink-0">{t}</span><span>{d}</span>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
