
import React from 'react';

const plans = [
  {
    title: "Hypertrophy Master",
    level: "Intermediate",
    focus: "Muscle Growth",
    description: "Our signature 12-week volume-based program designed to pack on high-quality muscle through progressive overload.",
    icon: "💪"
  },
  {
    title: "The Shred Engine",
    level: "All Levels",
    focus: "Fat Loss",
    description: "A high-intensity hybrid approach combining strength training with metabolic conditioning to reveal defined aesthetics.",
    icon: "🔥"
  },
  {
    title: "Elite Strength",
    level: "Advanced",
    focus: "Powerlifting",
    description: "Focus on the Big Three. This plan uses RPE-based training to maximize your squat, bench, and deadlift numbers safely.",
    icon: "🏋️‍♂️"
  }
];

const ProPlans: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-brand-primary font-bold uppercase tracking-widest mb-4">Elite Strategy</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">CURATED TRAINING BLUEPRINTS</h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          No guesswork. Just results. Choose from our battle-tested programs built by professional athletes and coaches.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-brand-secondary/50 border border-gray-800 rounded-2xl p-8 hover:border-brand-primary transition-all group flex flex-col">
            <div className="text-4xl mb-6">{plan.icon}</div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-black uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                {plan.level}
              </span>
              <span className="text-[10px] font-bold text-gray-500 uppercase">{plan.focus}</span>
            </div>
            <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">{plan.title}</h4>
            <p className="text-gray-400 mb-8 leading-relaxed flex-grow">{plan.description}</p>
            <button className="w-full py-4 border border-brand-primary text-brand-primary group-hover:bg-brand-primary group-hover:text-white font-bold uppercase tracking-widest transition-all text-sm rounded-sm">
              Get This Plan
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-brand-primary/10 border border-brand-primary/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h4 className="text-2xl font-display font-bold text-white mb-2 uppercase italic tracking-tighter">Need something custom?</h4>
          <p className="text-gray-400">Our elite trainers can build a 100% personalized plan based on your unique body type and goals.</p>
        </div>
        <a href="#contact" className="bg-brand-primary text-white px-10 py-4 font-black uppercase tracking-tighter hover:bg-red-700 transition-colors whitespace-nowrap">
          Talk to a Coach
        </a>
      </div>
    </div>
  );
};

export default ProPlans;
