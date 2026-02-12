
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import ProPlans from './components/ProPlans.tsx';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-24 bg-brand-secondary/50 scroll-mt-20">
          <About />
        </section>
        
        <section id="services" className="py-24 scroll-mt-20">
          <Services />
        </section>

        <section id="plans" className="py-24 bg-gradient-to-b from-brand-secondary to-black scroll-mt-20">
          <ProPlans />
        </section>
        
        <section id="testimonials" className="py-24 bg-brand-secondary/30 scroll-mt-20">
          <Testimonials />
        </section>
        
        <section id="contact" className="py-24 scroll-mt-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
