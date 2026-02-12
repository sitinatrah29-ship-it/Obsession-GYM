import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-brand-primary/20 rounded-lg blur-2xl group-hover:bg-brand-primary/30 transition-all duration-500" />
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop" 
            alt="Elite Gym Training Area" 
            className="relative rounded-lg shadow-2xl transition-all duration-700 w-full aspect-video object-cover"
            loading="lazy"
          />
        </div>
        
        <div>
          <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-sm block mb-4">The Facility</span>
          <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-8 italic uppercase leading-tight">
            A Powerhouse <br />For High Performers
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            At Obsession GYM, we don't just provide space—we provide an environment designed for breakthrough. Every rack, every platform, and every machine is selected for those who take their physical potential seriously.
          </p>
          <ul className="space-y-4">
            {[
              '24/7 Access for Elite Members',
              'Olympic Weightlifting Platforms',
              'Scientific Recovery Station',
              'Performance-Oriented Coaching'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-brand-primary/20 flex items-center justify-center rounded-full mr-4">
                  <div className="w-2 h-2 bg-brand-primary rounded-full" />
                </span>
                <span className="font-semibold uppercase tracking-wider text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;