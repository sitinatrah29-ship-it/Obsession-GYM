import React from 'react';

// Using any for the h alias to prevent strict typing issues with SVG elements and standard DOM attributes like className in manual createElement calls
const h: any = React.createElement;

const Contact = () => {
  return h('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
    h('div', { className: "grid lg:grid-cols-2 gap-16" },
      h('div', null,
        h('span', { className: "text-brand-primary font-bold uppercase tracking-[0.3em] text-sm block mb-4" }, "Ready?"),
        h('h2', { className: "text-4xl md:text-5xl font-black font-display text-white italic uppercase mb-8 leading-none" },
          "Start Your ", h('br'), h('span', { className: "text-brand-primary" }, "Transformation"), " Today"
        ),
        h('p', { className: "text-gray-400 mb-8 max-w-md leading-relaxed" },
          "Fill out the form below for a free consultation and a 7-day trial pass. No commitment required."
        ),
        h('div', { className: "space-y-6" },
          h('div', { className: "flex items-center space-x-4" },
            h('div', { className: "w-12 h-12 bg-white/5 flex items-center justify-center rounded-lg border border-white/10" },
              // Fix: The 'h' alias as 'any' allows passing SVG-specific props like 'viewBox' and 'fill' alongside 'className'
              h('svg', { className: "w-6 h-6 text-brand-primary", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                h('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
                h('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
              )
            ),
            h('div', null,
              h('h4', { className: "text-white font-black uppercase tracking-widest text-xs" }, "HQ Location"),
              h('p', { className: "text-gray-500 text-sm font-bold tracking-wider" }, "123 Muscle Way, Downtown NY")
            )
          )
        )
      ),
      h('div', { className: "bg-brand-secondary p-8 md:p-12 rounded-lg border border-white/5 relative shadow-2xl overflow-hidden" },
        h('div', { className: "absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-3xl -mr-16 -mt-16" }),
        h('form', { className: "space-y-6 relative z-10", onSubmit: (e: any) => e.preventDefault() },
          h('div', { className: "grid md:grid-cols-2 gap-6" },
            h('div', { className: "space-y-2" },
              h('label', { className: "text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1" }, "Full Name"),
              h('input', { type: "text", className: "w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-all text-sm font-bold", placeholder: "E.G. JOHN DOE" })
            ),
            h('div', { className: "space-y-2" },
              h('label', { className: "text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1" }, "Email Address"),
              h('input', { type: "email", className: "w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-all text-sm font-bold", placeholder: "EMAIL@EXAMPLE.COM" })
            )
          ),
          h('div', { className: "space-y-2" },
            h('label', { className: "text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1" }, "Message"),
            h('textarea', { rows: 4, className: "w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-all text-sm font-bold", placeholder: "TELL US YOUR GOALS..." })
          ),
          h('button', { type: "submit", className: "w-full py-4 bg-brand-primary hover:bg-red-700 text-white font-black uppercase tracking-[0.2em] transition-all rounded-sm shadow-lg shadow-brand-primary/20" }, "Submit Request")
        )
      )
    )
  );
};

export default Contact;