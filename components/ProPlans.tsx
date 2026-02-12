import React from 'react';

const ProPlans = () => {
  const plans = [
    {
      title: "The Shred Engine",
      focus: "Fat Loss",
      price: "$49",
      desc: "High intensity hybrid training designed to incinerate fat while preserving muscle."
    },
    {
      title: "Hypertrophy Master",
      focus: "Bulking",
      price: "$69",
      desc: "Scientific volume-based growth blueprint for maximum aesthetic results."
    },
    {
      title: "Elite Strength",
      focus: "Power",
      price: "$89",
      desc: "RPE-based peaking program to maximize your squat, bench, and deadlift."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-sm block mb-4">Membership</span>
        <h2 className="text-4xl md:text-5xl font-black font-display text-white italic uppercase">Select Your Blueprint</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <div key={i} className="flex flex-col p-8 bg-gray-900 border border-white/10 rounded-lg relative overflow-hidden group hover:border-brand-primary transition-colors">
            {i === 1 && <div className="absolute top-0 right-0 bg-brand-primary text-white text-[10px] font-black px-4 py-1 uppercase tracking-widest -rotate-0 rounded-bl-lg">Most Popular</div>}
            
            <span className="text-brand-primary text-xs font-black uppercase tracking-widest mb-2">{p.focus}</span>
            <h4 className="text-2xl font-black font-display text-white italic uppercase mb-4">{p.title}</h4>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-black text-white italic">{p.price}</span>
              <span className="text-gray-500 ml-2 font-bold uppercase text-xs tracking-widest">/ Month</span>
            </div>
            <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
              {p.desc}
            </p>
            <button className="w-full py-4 bg-white/5 hover:bg-brand-primary text-white font-black uppercase tracking-widest text-sm border border-white/10 group-hover:border-brand-primary transition-all rounded-sm">
              Select Blueprint
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProPlans;