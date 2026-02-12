import React from 'react';

const h = React.createElement;

const Hero = () => {
  return h('div', { className: "relative h-screen flex items-center overflow-hidden bg-gray-950" },
    h('div', { className: "absolute inset-0 bg-black/50 z-10" }),
    h('div', { 
      className: "absolute inset-0 bg-cover bg-center scale-105 animate-pulse-slow transition-opacity duration-1000",
      style: { 
        backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2400&auto=format&fit=crop')",
        backgroundPosition: 'center 30%'
      }
    }),
    h('div', { className: "relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" },
      h('div', { className: "max-w-3xl" },
        h('h1', { className: "text-6xl md:text-8xl font-black font-display text-white leading-[0.9] mb-6 italic tracking-tighter uppercase" },
          "REDEFINE", h('br'),
          h('span', { className: "text-brand-primary" }, "YOUR"), " LIMITS"
        ),
        h('p', { className: "text-xl text-gray-200 mb-10 max-w-lg leading-relaxed font-semibold drop-shadow-md" },
          "World-class equipment. Elite coaching. A community of high-performers. Forge your ultimate self at Obsession GYM."
        ),
        h('div', { className: "flex flex-col sm:flex-row gap-4" },
          h('a', { href: "#contact", className: "px-10 py-4 bg-brand-primary hover:bg-red-700 text-white text-lg font-black uppercase tracking-widest transition-all text-center rounded-sm shadow-2xl shadow-brand-primary/20" }, "Start Free Trial"),
          h('a', { href: "#plans", className: "px-10 py-4 bg-white/10 hover:bg-white/20 text-white text-lg font-black uppercase tracking-widest transition-all text-center backdrop-blur-md border border-white/20 rounded-sm" }, "Our Plans")
        )
      )
    ),
    h('div', { className: "absolute left-8 bottom-0 h-32 w-px bg-brand-primary z-20 hidden lg:block shadow-[0_0_15px_rgba(239,68,68,0.5)]" })
  );
};

export default Hero;