import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout title="Gulmarg Ski Packages" subtitle="All-Inclusive Himalayan Ski Holidays" description="Our curated ski packages take care of everything — boutique hotel accommodation, gondola passes, daily ski instruction or guided freeride, breakfast and après-ski dinners, and Srinagar airport transfers. Simply arrive and ski one of the world's greatest mountains." image="https://images.unsplash.com/photo-1548133650-7e2c9ad41f74?w=1600&q=90" badge="Ski Packages"
      stats={[{label:"Duration",value:"3–7 Days"},{label:"Gondola",value:"Included"},{label:"Accommodation",value:"Boutique Hotel"},{label:"Meals",value:"Breakfast + Dinner"},{label:"From",value:"₹18,999 / person"}]}>
      <div className="space-y-3 font-sans text-sm text-ak-espresso/80">
        <h2 className="font-serif text-ak-espresso text-2xl mb-2">Package Includes</h2>
        {["3/5/7 night boutique hotel in Gulmarg","Daily Gondola Phase 1 & 2 passes","Ski or snowboard equipment rental","Certified instructor (group or private)","Daily breakfast and dinner","Srinagar airport transfers","Welcome bonfire & traditional Kashmiri dinner"].map(i=><p key={i} className="flex gap-2"><span className="text-ak-gold">✓</span>{i}</p>)}
      </div>
    </PageLayout>
  );
}
