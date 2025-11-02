import React from 'react';
import { WhatsappIcon, CheckIcon } from './Icons';

const WHATSAPP_LINK = "whatsapp://send?phone=5517981597877&text=Ol%C3%A1,%20quero%20entrar%20no%20grupo!";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
                <p className="text-sm font-semibold text-emerald-600 uppercase tracking-widest mb-4">
                    suplemento natural
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                    Suplemento Alimentar Poderoso:
                    <br /> O Segredo para Emagrecer Rápido, <span className="text-emerald-600">Sem Passar Fome.</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                    Descubra o 'grão milagroso' que está revolucionando a perda de peso. Mais potente que Ozempic e Mounjaro, porém 100% natural e seguro.
                </p>
                <div className="mt-10">
                    <a
                        href={WHATSAPP_LINK}
                        className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-xl font-bold rounded-lg text-white bg-emerald-500 hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        <WhatsappIcon className="w-7 h-7 mr-3" />
                        ENTRE NO GRUPO VIP
                    </a>
                    <p className="mt-4 text-red-600 font-bold">
                        Vagas limitadas. Garanta a sua agora!
                    </p>
                </div>

                <div className="mt-12 max-w-lg mx-auto">
                    <ul className="space-y-4 text-left">
                        <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">Acelera o metabolismo 24/7</span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">Inibe o apetite por doces e massas</span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">Queima gordura localizada (barriga, braços, coxas)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
