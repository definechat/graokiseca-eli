import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FinalCtaSection from './components/CtaSection';
import Footer from './components/Footer';

const WHATSAPP_DIRECT_LINK = "whatsapp://chat?code=F5AO9r1uqT2Kcz7xB7Q1pT";

function App() {
  return (
    <div className="bg-white font-sans text-gray-800 pt-16">
      <Header whatsappLink={WHATSAPP_DIRECT_LINK} />
      <HeroSection whatsappLink={WHATSAPP_DIRECT_LINK} />
      <FinalCtaSection whatsappLink={WHATSAPP_DIRECT_LINK} />
      <Footer />
    </div>
  );
}

export default App;