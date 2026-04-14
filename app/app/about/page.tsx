import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout title="About Adventures Kashmir" subtitle="Gulmarg's Most Trusted Luxury Travel Company" description="Founded in 2018 by lifelong Gulmarg resident Farooq Ahmad, Adventures Kashmir was born from a simple belief: Kashmir deserves to be experienced deeply, not rushed through. With 4.9★ on TripAdvisor from 287+ verified reviews, we are Gulmarg's most awarded travel company." image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90" badge="Est. 2018">
      <div className="space-y-8 font-sans text-ak-espresso/80">
        <div>
          <h2 className="font-serif text-ak-espresso text-2xl mb-3">Our Story</h2>
          <p className="text-sm leading-relaxed">Growing up in the shadow of Apharwat Peak, our founder watched generations of visitors arrive in Kashmir and leave having only scratched the surface. The real Kashmir — the high-altitude lakes, the off-piste powder, the Gujjar shepherd trails, the authentic wazwan feasts — was hidden from most tourists. Adventures Kashmir was founded to change that.</p>
        </div>
        <div>
          <h2 className="font-serif text-ak-espresso text-2xl mb-3">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[["4.9★ Rated","287+ verified TripAdvisor reviews from guests worldwide"],["CASI Certified","Our ski instructors hold international certification"],["Local Experts","Every guide was born and raised in Kashmir"],["Safety First","Certified wilderness first aid on every expedition"],["Sustainable","Low-impact practices protecting Kashmir's fragile ecosystem"],["Est. 2018","6+ years of unbroken guest satisfaction"]].map(([t,d])=>(
              <div key={t} className="bg-white p-4 rounded-xl border border-ak-mist">
                <p className="font-semibold text-ak-espresso mb-1">{t}</p>
                <p className="text-xs text-ak-stone">{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-serif text-ak-espresso text-2xl mb-3">Contact Us</h2>
          <div className="space-y-2 text-sm">
            <p>📍 Main Market, Tangmarg, Gulmarg, J&K 193402, India</p>
            <p>📞 <a href="tel:+919797877243" className="text-ak-gold hover:underline">+91 97978 77243</a></p>
            <p>✉️ <a href="mailto:info@adventureskashmir.com" className="text-ak-gold hover:underline">info@adventureskashmir.com</a></p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
