import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout title="Private Ski Guiding" subtitle="Exclusive Off-Piste Himalayan Exploration" description="For advanced skiers who want to explore Gulmarg beyond the groomed runs — our elite private guides unlock the legendary off-piste terrain of Gulmarg's surrounding bowls, couloirs, and heli-ski zones. Deep powder, zero crowds, and the guidance of someone who has skied these mountains their entire life." image="https://images.unsplash.com/photo-1548133650-7e2c9ad41f74?w=1600&q=90" badge="Luxury Guiding"
      stats={[{label:"Guide Ratio",value:"1:1 Exclusive"},{label:"Terrain",value:"Off-Piste & Backcountry"},{label:"Level Required",value:"Advanced"},{label:"Season",value:"Dec – March"},{label:"From",value:"₹9,999 / day"}]}>
      <div className="font-sans text-sm text-ak-espresso/80 space-y-3">
        <h2 className="font-serif text-ak-espresso text-2xl mb-2">What's Included</h2>
        {["Dedicated certified mountain guide","Avalanche safety equipment (beacon, probe, shovel)","Off-piste route planning based on snow conditions","Gondola Phase 1 & 2 passes","Backcountry terrain access","Optional heli-ski add-on (seasonal, extra cost)"].map(i=><p key={i} className="flex gap-2"><span className="text-ak-gold">✓</span>{i}</p>)}
      </div>
    </PageLayout>
  );
}
