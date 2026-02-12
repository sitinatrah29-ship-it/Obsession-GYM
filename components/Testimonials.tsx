
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
        <h2 className="text-brand-primary font-bold uppercase tracking-widest mb-4">Success Stories</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">WHAT OUR ELITES SAY</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-brand-secondary p-8 rounded-2xl border border-gray-800 flex flex-col h-full">
            <div className="flex gap-1 text-brand-primary mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 italic mb-8 flex-grow">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all" />
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
