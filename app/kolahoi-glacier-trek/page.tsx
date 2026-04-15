import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout
      title="Kolahoi Glacier Trek"
      subtitle="Kashmir's Largest Glacier · Lidder Valley"
      description="Trek to the source of the Lidder River — the magnificent Kolahoi Glacier, Kashmir's largest and most accessible glacier at 4,200m. The route passes through the breathtaking Lidder Valley, dense alpine forests, and high-altitude meadows grazed by Gujjar shepherds. A raw, remote, and deeply rewarding 5-day expedition for experienced trekkers."
      image="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=90"
      badge="Advanced Trek"
      stats={[{label:"Duration",value:"5 Days"},{label:"Max Altitude",value:"4,200m"},{label:"Group Size",value:"4–8"},{label:"Difficulty",value:"Advanced"},{label:"From",value:"₹12,999 / person"}]}
    >
      <div className="font-sans text-ak-espresso/80">
        <h2 className="font-serif text-ak-espresso text-2xl mb-3">Highlights</h2>
        <ul className="space-y-2 text-sm">{["Kolahoi peak (5,425m) base views","Lidder River source","Authentic Gujjar shepherd camps","Alpine meadows of Satlanjan","Remote wilderness camping"].map(i=><li key={i} className="flex gap-2"><span className="text-ak-gold">→</span>{i}</li>)}</ul>
      </div>
    </PageLayout>
  );
}
