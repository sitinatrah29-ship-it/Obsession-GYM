import React from 'react';

const h = React.createElement;

const Navbar = () => {
  return h('nav', { className: "fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10" },
    h('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
      h('div', { className: "flex justify-between items-center h-20" },
        h('div', { className: "flex-shrink-0 flex items-center" },
          h('a', { href: "#", className: "text-2xl font-black tracking-tighter font-display text-white italic" },
            "OBSESSION",
            h('span', { className: "text-brand-primary" }, "GYM")
          )
        ),
        h('div', { className: "hidden md:flex space-x-8 items-center" },
          h('a', { href: "#about", className: "text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-brand-primary transition-colors" }, "About"),
          h('a', { href: "#services", className: "text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-brand-primary transition-colors" }, "Services"),
          h('a', { href: "#plans", className: "text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-brand-primary transition-colors" }, "Plans"),
          h('a', { href: "#contact", className: "bg-brand-primary hover:bg-red-700 text-white px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-all" }, "Join Now")
        )
      )
    )
  );
};

export default Navbar;