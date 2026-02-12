import React from 'react';

const h = React.createElement;

const Footer = () => {
  const socials = ['INSTAGRAM', 'TWITTER', 'YOUTUBE'];
  const links = [
    { href: "#about", label: "Our Facility" },
    { href: "#services", label: "Our Arsenal" },
    { href: "#plans", label: "Training Blueprints" }
  ];

  return h('footer', { className: "bg-black border-t border-white/5 py-16" },
    h('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
      h('div', { className: "grid md:grid-cols-4 gap-12 mb-12" },
        h('div', { className: "col-span-2" },
          h('a', { href: "#", className: "text-2xl font-black tracking-tighter font-display text-white italic mb-6 block" },
            "OBSESSION", h('span', { className: "text-brand-primary" }, "GYM")
          ),
          h('p', { className: "text-gray-500 max-w-sm text-sm leading-relaxed mb-6 uppercase font-bold tracking-widest" },
            "Join the collective of high-performers. Redefine what is possible through absolute mental and physical fortitude."
          ),
          h('div', { className: "flex space-x-4" },
            socials.map(social => h('a', { key: social, href: "#", className: "text-[10px] font-black tracking-widest text-gray-500 hover:text-white transition-colors" }, social))
          )
        ),
        h('div', null,
          h('h5', { className: "text-white font-black uppercase tracking-widest text-xs mb-6 italic" }, "Quick Links"),
          h('ul', { className: "space-y-4" },
            links.map(link => h('li', { key: link.label }, 
              h('a', { href: link.href, className: "text-gray-500 hover:text-brand-primary text-[10px] font-black uppercase tracking-widest transition-colors" }, link.label)
            ))
          )
        ),
        h('div', null,
          h('h5', { className: "text-white font-black uppercase tracking-widest text-xs mb-6 italic" }, "Newsletter"),
          h('div', { className: "flex flex-col space-y-3" },
            h('input', { type: "email", placeholder: "YOUR EMAIL", className: "bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-[10px] font-black text-white focus:outline-none focus:border-brand-primary" }),
            h('button', { className: "bg-brand-primary text-white text-[10px] font-black px-4 py-2 uppercase tracking-widest rounded-sm" }, "Subscribe")
          )
        )
      ),
      h('div', { className: "pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4" },
        h('p', { className: "text-gray-600 text-[10px] font-black tracking-[0.2em] uppercase" },
          `© ${new Date().getFullYear()} OBSESSION GYM. ALL RIGHTS RESERVED.`
        ),
        h('p', { className: "text-gray-600 text-[10px] font-black tracking-[0.2em] uppercase" }, "DESIGNED FOR PERFORMANCE")
      )
    )
  );
};

export default Footer;