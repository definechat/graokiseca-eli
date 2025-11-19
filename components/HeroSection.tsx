import React from 'react';
import { WhatsappIcon, CheckIcon } from './Icons';

type HeroSectionProps = {
    whatsappLink: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ whatsappLink }) => {
    return (
        <section className="bg-gray-50 pt-6 pb-12 px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                    SUPLEMENTO NATURAL
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                    O Segredo para Emagrecer Rápido, <span className="text-emerald-600">Sem Passar Fome.</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                    Descubra o 'grão milagroso' que está revolucionando a perda de peso. Mais potente que cápsulas e injeções famosas, porém 100% natural e seguro.
                </p>

                {/* CTA Button moved above image for First Fold visibility */}
                <div className="w-full flex justify-center mb-10">
                    <a
                        href={whatsappLink}
                        className="animate-pulse-scale inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 border border-transparent text-lg sm:text-xl font-bold rounded-full text-white bg-emerald-500 hover:bg-emerald-600 shadow-lg w-full sm:w-auto"
                    >
                        <WhatsappIcon className="w-8 h-8 mr-3" />
                        ENTRE NO GRUPO VIP
                    </a>
                </div>

                <a href={whatsappLink} className="block mb-10 transform hover:scale-105 transition-transform duration-300">
                    <img 
                        src="https://i.imgur.com/2qqdnb2.jpeg" 
                        alt="Resultado do Suplemento" 
                        className="rounded-xl shadow-2xl max-w-full h-auto w-[350px] sm:w-[450px] border-4 border-white"
                    />
                </a>

                <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <ul className="space-y-4 text-left">
                        <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 font-medium">Acelera o metabolismo 24/7</span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 font-medium">Inibe o apetite por doces e massas</span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 font-medium">Queima gordura localizada (barriga, braços, coxas)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;