import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout
      title="Gulmarg–Khilanmarg Trek"
      subtitle="Day Hike Above the Meadow of Flowers"
      description="A perfect introduction to Himalayan trekking — Khilanmarg sits at 3,050m above Gulmarg and offers jaw-dropping panoramic views of Nanga Parbat (8,126m), the Gulmarg bowl, and endless snowfields. This half-day guided hike is ideal for families, beginners, and those acclimatising for longer expeditions. Spring sees the meadow carpeted in wildflowers; winter offers pristine snowfields."
      image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90"
      badge="Day Hike"
      stats={[{label:"Duration",value:"4–5 Hours"},{label:"Altitude",value:"3,050m"},{label:"Group Size",value:"2–15"},{label:"Difficulty",value:"Easy"},{label:"From",value:"₹2,999 / person"}]}
    >
      <div className="font-sans text-ak-espresso/80">
        <h2 className="font-serif text-ak-espresso text-2xl mb-3">What to Expect</h2>
        <p className="text-sm leading-relaxed">Starting from Gulmarg (2,730m), the trail winds through fir forests before opening onto vast alpine meadows. Your guide will share the ecology, history, and folklore of this legendary valley. Clear days offer views of six Himalayan peaks above 7,000m.</p>
      </div>
    </PageLayout>
  );
}
