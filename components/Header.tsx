import React from 'react';
import { WhatsappIcon } from './Icons';

type HeaderProps = {
  whatsappLink: string;
};

const Header: React.FC<HeaderProps> = ({ whatsappLink }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-3 px-4 flex justify-center items-center">
      <a 
        href={whatsappLink} 
        className="flex items-center space-x-2 animate-pulse-scale text-emerald-600 font-bold text-lg hover:text-emerald-700 transition-colors"
      >
        <span>Emagreça urgente Grupo</span>
        <WhatsappIcon className="w-6 h-6" />
      </a>
    </header>
  );
};

export default Header;