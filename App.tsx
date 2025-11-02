import React from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
