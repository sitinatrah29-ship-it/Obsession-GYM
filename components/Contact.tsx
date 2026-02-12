
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-sm block mb-4">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black font-display text-white italic uppercase mb-8 leading-none">
            Start Your <br /><span className="text-brand-primary">Transformation</span> Today
          </h2>
          <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
            Fill out the form below for a free consultation and a 7-day trial pass. No commitment required.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-lg border border-white/10">
                <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-xs">HQ Location</h4>
                <p className="text-gray-500 text-sm font-bold tracking-wider">123 Muscle Way, Downtown NY</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-brand-secondary p-8 md:p-12 rounded-lg border border-white/5 relative shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-3xl -mr-16 -mt-16" />
          <form className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-all text-sm font-bold" placeholder="E.G. JOHN DOE" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-all text-sm font-bold" placeholder="EMAIL@EXAMPLE.COM" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
              <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-all text-sm font-bold" placeholder="TELL US YOUR GOALS..."></textarea>
            </div>
            <button className="w-full py-4 bg-brand-primary hover:bg-red-700 text-white font-black uppercase tracking-[0.2em] transition-all rounded-sm shadow-lg shadow-brand-primary/20">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
