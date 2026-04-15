import PageLayout from "@/components/PageLayout";
export default function Page() {
  return (
    <PageLayout title="Contact Us" subtitle="Get Your Free Custom Quote" description="Whether you're planning a trek, a ski holiday, or a Kashmir tour — our team responds within 2 hours, 7 days a week. WhatsApp is the fastest way to reach us." image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90" badge="Contact">
      <div className="space-y-6 font-sans text-sm text-ak-espresso/80">
        <div className="grid sm:grid-cols-2 gap-4">
          {[["WhatsApp (Fastest)","wa.me/919797877243","+91 97978 77243","Click to chat on WhatsApp"],["Phone","tel:+919797877243","+91 97978 77243","Available 8AM–8PM IST"],["Email","mailto:info@adventureskashmir.com","info@adventureskashmir.com","Response within 2 hours"],["Address",null,"Main Market, Tangmarg\nGulmarg, J&K 193402","Visit our office in Gulmarg"]].map(([label,href,val,sub])=>(
            <div key={label} className="bg-white rounded-xl p-5 border border-ak-mist">
              <p className="font-semibold text-ak-espresso mb-1">{label}</p>
              {href ? <a href={href} className="text-ak-gold hover:underline">{val}</a> : <p className="whitespace-pre-line">{val}</p>}
              <p className="text-xs text-ak-stone mt-1">{sub}</p>
            </div>
          ))}
        </div>
        <div className="bg-ak-gold/10 border border-ak-gold/30 rounded-xl p-5">
          <p className="font-serif text-ak-espresso text-lg mb-1">Office Hours</p>
          <p>Monday – Sunday: 8:00 AM – 8:00 PM IST</p>
          <p className="text-ak-stone mt-1">We're in the mountains — sometimes signal is limited, but we always call back.</p>
        </div>
      </div>
    </PageLayout>
  );
}
