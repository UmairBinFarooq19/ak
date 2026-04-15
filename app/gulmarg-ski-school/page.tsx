import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout title="Gulmarg Ski School" subtitle="Certified Instruction for All Levels" description="Our CASI-certified instructors teach skiing and snowboarding at every level — from absolute beginners taking their first turns to advanced skiers mastering Gulmarg's legendary off-piste terrain. Small class sizes (max 4 students per instructor), modern equipment rental, and patient teaching ensure rapid progress in a safe, enjoyable environment." image="https://images.unsplash.com/photo-1548133650-7e2c9ad41f74?w=1600&q=90" badge="Certified Ski School"
      stats={[{label:"Instructors",value:"CASI Certified"},{label:"Class Size",value:"Max 4 Students"},{label:"Levels",value:"Beginner to Expert"},{label:"Season",value:"Dec – March"},{label:"From",value:"₹4,999 / day"}]}>
      <div className="space-y-4 font-sans text-ak-espresso/80 text-sm">
        <h2 className="font-serif text-ak-espresso text-2xl">Lesson Programmes</h2>
        {[["Beginner (Level 1–2)","Learn to stop, turn, and ride the chairlift. Full equipment included.","₹4,999/day"],["Intermediate (Level 3–4)","Parallel turns, blue runs, introduction to off-piste powder.","₹5,999/day"],["Advanced (Level 5–6)","Black runs, moguls, backcountry intro with avalanche awareness.","₹7,999/day"],["Private Lessons","One-on-one instruction at any level, any time.","₹9,999/day"]].map(([l,d,p])=>(
          <div key={l} className="flex justify-between items-start py-3 border-b border-ak-mist last:border-0 gap-4">
            <div><p className="font-semibold text-ak-espresso">{l}</p><p>{d}</p></div>
            <p className="font-serif text-ak-espresso flex-shrink-0">{p}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
