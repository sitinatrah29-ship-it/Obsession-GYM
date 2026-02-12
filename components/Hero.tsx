
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-none tracking-tighter mb-6">
            REDEFINE <span className="text-brand-primary">YOUR</span> LIMITS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-medium max-w-lg leading-relaxed">
            Join Obsession GYM, where high-performance equipment meets expert guidance to forge the best version of you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-10 py-5 bg-brand-primary hover:bg-red-700 text-white text-lg font-bold uppercase rounded-sm transition-all text-center"
            >
              Start Free Trial
            </a>
            <a
              href="#services"
              className="px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-black text-lg font-bold uppercase rounded-sm transition-all text-center"
            >
              Explore Programs
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 border-t border-gray-700/50 pt-8">
            <div>
              <p className="text-3xl font-display font-bold text-white">500+</p>
              <p className="text-gray-400 text-sm uppercase font-semibold">Members</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white">20+</p>
              <p className="text-gray-400 text-sm uppercase font-semibold">Elite Coaches</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white">24/7</p>
              <p className="text-gray-400 text-sm uppercase font-semibold">Access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
