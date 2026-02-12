
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="text-2xl font-display font-bold text-white tracking-tighter mb-6 block">
              OBSESSION<span className="text-brand-primary">GYM</span>
            </a>
            <p className="text-gray-500 mb-6 max-w-xs">
              Building stronger bodies and minds through elite training and community since 2015.
            </p>
            <div className="flex gap-4">
              {['instagram', 'twitter', 'facebook', 'youtube'].map((platform) => (
                <a key={platform} href={`#${platform}`} className="text-gray-400 hover:text-brand-primary transition-colors">
                  <span className="sr-only">{platform}</span>
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Programs</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Strength Training</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">HIIT Sessions</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Weight Loss</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Personal Training</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-brand-primary transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">Join Now</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Get fitness tips and gym updates straight to your inbox.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-900 border border-gray-800 rounded-l-lg px-4 py-2 text-white w-full focus:outline-none"
              />
              <button className="bg-brand-primary hover:bg-red-700 text-white px-4 py-2 rounded-r-lg font-bold">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-800 text-center text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Obsession GYM Fitness Center. All Rights Reserved. Built with Gemini AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
