
import React from 'react';

const programs = [
  {
    title: "Strength & Conditioning",
    desc: "Powerlifting, bodybuilding, and functional strength training for all levels.",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Elite Personal Training",
    desc: "1-on-1 sessions tailored to your genetics, schedule, and personal goals.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "High Intensity HIIT",
    desc: "Torch calories and build cardiovascular endurance in our signature 45min classes.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Mind & Mobility",
    desc: "Yoga and flexibility workshops to ensure your body recovers as hard as it trains.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400"
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-brand-primary font-bold uppercase tracking-widest mb-4">Our Programs</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">BUILT FOR PERFORMANCE</h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Whether you're stepping into a gym for the first time or training for a competition, we have a specialized program for you.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((prog, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-xl bg-brand-secondary h-[450px]">
            <img
              src={prog.img}
              alt={prog.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 p-8 w-full">
              <h4 className="text-2xl font-display font-bold text-white mb-3">{prog.title}</h4>
              <p className="text-gray-300 text-sm mb-6 transition-opacity group-hover:opacity-100 opacity-80 leading-relaxed">
                {prog.desc}
              </p>
              <button className="bg-white/10 hover:bg-brand-primary backdrop-blur-md text-white border border-white/20 py-2 px-6 rounded-full text-sm font-bold transition-all">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
