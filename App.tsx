import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import ProPlans from './components/ProPlans.tsx';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const h = React.createElement;

const App = () => {
  return h('div', { className: "min-h-screen flex flex-col font-sans" },
    h(Navbar, null),
    h('main', { className: "flex-grow" },
      h('section', { id: "home" }, h(Hero, null)),
      h('section', { id: "about", className: "py-24 bg-brand-secondary/50 scroll-mt-20" }, h(About, null)),
      h('section', { id: "services", className: "py-24 scroll-mt-20" }, h(Services, null)),
      h('section', { id: "plans", className: "py-24 bg-gradient-to-b from-brand-secondary to-black scroll-mt-20" }, h(ProPlans, null)),
      h('section', { id: "testimonials", className: "py-24 bg-brand-secondary/30 scroll-mt-20" }, h(Testimonials, null)),
      h('section', { id: "contact", className: "py-24 scroll-mt-20" }, h(Contact, null))
    ),
    h(Footer, null)
  );
};

export default App;