
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000"
            alt="Gym Atmosphere"
            className="rounded-lg shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-primary -z-0 hidden md:block"></div>
          <div className="absolute -top-6 -left-6 border-4 border-brand-accent w-48 h-48 -z-0 hidden md:block"></div>
        </div>
        
        <div>
          <h2 className="text-brand-primary font-bold uppercase tracking-widest mb-4">Who We Are</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            NOT JUST A GYM, <br />BUT A POWERHOUSE.
          </h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            At Obsession GYM, we believe fitness is more than just lifting weights. It's about mental fortitude, consistency, and a supportive community. Founded by world-class athletes, our facility provides the tools you need to break through plateaus.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              "State-of-the-art Hammer Strength equipment",
              "Biometric-driven personal training sessions",
              "Recovery lounge with infrared saunas",
              "Dynamic community and group events"
            ].map((point, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-200">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold">{point}</span>
              </li>
            ))}
          </ul>
          
          <a
            href="#ai-planner"
            className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-primary transition-colors font-bold uppercase tracking-wider"
          >
            See how we use AI for your results
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
