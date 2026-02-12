
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import AIWorkoutPlanner from './components/AIWorkoutPlanner';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 bg-brand-secondary/50">
          <About />
        </section>
        
        <section id="services" className="py-20">
          <Services />
        </section>

        <section id="ai-planner" className="py-20 bg-gradient-to-b from-brand-secondary to-black">
          <AIWorkoutPlanner />
        </section>
        
        <section id="testimonials" className="py-20 bg-brand-secondary/30">
          <Testimonials />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
