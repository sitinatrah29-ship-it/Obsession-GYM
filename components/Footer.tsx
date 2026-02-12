
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <a href="#" className="text-2xl font-black tracking-tighter font-display text-white italic mb-6 block">
              OBSESSION<span className="text-brand-primary">GYM</span>
            </a>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed mb-6 uppercase font-bold tracking-widest">
              Join the collective of high-performers. Redefine what is possible through absolute mental and physical fortitude.
            </p>
            <div className="flex space-x-4">
              {['INSTAGRAM', 'TWITTER', 'YOUTUBE'].map(social => (
                <a key={social} href="#" className="text-[10px] font-black tracking-widest text-gray-500 hover:text-white transition-colors">{social}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-black uppercase tracking-widest text-xs mb-6 italic">Quick Links</h5>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-500 hover:text-brand-primary text-[10px] font-black uppercase tracking-widest transition-colors">Our Facility</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-brand-primary text-[10px] font-black uppercase tracking-widest transition-colors">Our Arsenal</a></li>
              <li><a href="#plans" className="text-gray-500 hover:text-brand-primary text-[10px] font-black uppercase tracking-widest transition-colors">Training Blueprints</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-black uppercase tracking-widest text-xs mb-6 italic">Newsletter</h5>
            <div className="flex flex-col space-y-3">
              <input type="email" placeholder="YOUR EMAIL" className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-[10px] font-black text-white focus:outline-none focus:border-brand-primary" />
              <button className="bg-brand-primary text-white text-[10px] font-black px-4 py-2 uppercase tracking-widest rounded-sm">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-gray-600 text-[10px] font-black tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} OBSESSION GYM. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-600 text-[10px] font-black tracking-[0.2em] uppercase">
            DESIGNED FOR PERFORMANCE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
