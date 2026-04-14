import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout title="Kashmir Honeymoon Package" subtitle="Romance in the Valley of Paradise" description="Kashmir has enchanted lovers for centuries — Mughal emperors built pleasure gardens here for their queens. Our honeymoon package layers luxury houseboat stays, private shikara rides at dawn, candlelit dinners on the lake, couple spa treatments, and intimate viewpoints away from the crowds into an utterly romantic week." image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=90" badge="Romantic" ctaLabel="Plan Your Honeymoon"
      stats={[{label:"Duration",value:"5–7 Nights"},{label:"Accommodation",value:"Luxury Houseboat + Hotels"},{label:"Includes",value:"Candlelit Dinners"},{label:"Transport",value:"Private Vehicle"},{label:"From",value:"₹39,999 / couple"}]}>
      <div className="space-y-4 font-sans text-sm text-ak-espresso/80">
        <h2 className="font-serif text-ak-espresso text-2xl">Romantic Highlights</h2>
        {["Private shikara sunrise ride on Dal Lake","Luxury heritage houseboat with lake views","Candlelit dinner on a private shikara","Couple's Ayurvedic spa treatment","Horse ride through Betaab Valley","Private Mughal Garden visit at sunset","Personalized welcome decoration"].map(i=><p key={i} className="flex gap-2"><span className="text-ak-gold">♥</span>{i}</p>)}
      </div>
    </PageLayout>
  );
}
