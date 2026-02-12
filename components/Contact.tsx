
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-black rounded-3xl overflow-hidden border border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-16">
            <h2 className="text-brand-primary font-bold uppercase tracking-widest mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">START YOUR <br />JOURNEY TODAY</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-brand-secondary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-brand-secondary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Interested In</label>
                <select className="w-full bg-brand-secondary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary">
                  <option>Free Trial Pass</option>
                  <option>Personal Training</option>
                  <option>Group Classes</option>
                  <option>Membership Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Your Message</label>
                <textarea
                  className="w-full bg-brand-secondary border border-gray-700 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-primary h-32"
                  placeholder="How can we help you crush your goals?"
                ></textarea>
              </div>
              <button className="w-full bg-brand-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg uppercase tracking-widest transition-all">
                Submit Request
              </button>
            </form>
          </div>
          
          <div className="relative h-64 lg:h-auto min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000"
              alt="Gym Interior"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply"></div>
            <div className="absolute bottom-12 left-8 right-8 bg-black/80 backdrop-blur-md p-8 rounded-xl border border-white/10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-brand-primary mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">Location</h4>
                    <p className="text-gray-400">123 Muscle Way, Fitness District<br />Downtown, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-brand-primary mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">Contact</h4>
                    <p className="text-gray-400">+1 (555) 000-IRON<br />hello@obsession.gym</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-brand-primary mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">Hours</h4>
                    <p className="text-gray-400">Weekdays: 05:00 - 23:00<br />Weekends: 07:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
