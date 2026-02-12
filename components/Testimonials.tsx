
import React from 'react';

const testimonials = [
  {
    name: "Marcus Thorne",
    role: "Member for 2 Years",
    content: "The culture here is unmatched. I've been to many gyms, but Obsession GYM actually cares about your progression. The equipment is world-class.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Sarah Jenkins",
    role: "HIIT Regular",
    content: "The HIIT classes changed my life. I lost 15lbs in 3 months, but more importantly, I found a community that keeps me accountable.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Chen",
    role: "Powerlifting Athlete",
    content: "They have 8 deadlift platforms. EIGHT. If you're serious about lifting heavy, this is the only place in the city to be.",
    avatar: "https://i.pravatar.cc/150?u=david"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-sm block mb-4">Elite Voices</span>
        <h2 className="text-4xl md:text-5xl font-black font-display text-white italic uppercase">Forged in Metal</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-black/40 p-8 rounded-lg border border-white/5 backdrop-blur-sm italic relative">
            <div className="text-brand-primary text-5xl font-serif absolute top-4 left-4 opacity-20">"</div>
            <p className="text-gray-300 relative z-10 mb-8 leading-relaxed">
              {t.content}
            </p>
            <div className="flex items-center">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border border-brand-primary/40 p-0.5" />
              <div>
                <h5 className="text-white font-black uppercase text-xs tracking-widest leading-none">{t.name}</h5>
                <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
