import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <ServicesGrid />
      <ProjectsShowcase />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

// DONE