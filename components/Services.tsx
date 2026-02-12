import React from 'react';

const h = React.createElement;

const Services = () => {
  const services = [
    {
      title: "Strength Training",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=600",
      desc: "Comprehensive powerbuilding and hypertrophy programs."
    },
    {
      title: "Personal Coaching",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
      desc: "1-on-1 mentorship with certified performance specialists."
    },
    {
      title: "HIIT Sessions",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600",
      desc: "Metabolic conditioning to push your cardiac output."
    },
    {
      title: "Recovery Lab",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
      desc: "Cryotherapy and physiotherapy for elite longevity."
    }
  ];

  return h('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
    h('div', { className: "text-center mb-16" },
      h('span', { className: "text-brand-primary font-bold uppercase tracking-[0.3em] text-sm block mb-4" }, "Our Arsenal"),
      h('h2', { className: "text-4xl md:text-5xl font-black font-display text-white italic uppercase" }, "Performance Pillars")
    ),
    h('div', { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6" },
      services.map((s, i) => 
        h('div', { key: i, className: "group relative overflow-hidden rounded-lg bg-gray-900 border border-white/5 h-96 transition-all hover:-translate-y-2 shadow-xl" },
          h('div', { className: "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" }),
          h('img', { 
            src: s.img, 
            alt: s.title, 
            className: "absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700",
            loading: "lazy"
          }),
          h('div', { className: "absolute bottom-0 left-0 right-0 p-6 z-20" },
            h('h4', { className: "text-xl font-black font-display text-white mb-2 italic uppercase tracking-tighter" }, s.title),
            h('p', { className: "text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 font-medium" }, s.desc)
          )
        )
      )
    )
  );
};

export default Services;