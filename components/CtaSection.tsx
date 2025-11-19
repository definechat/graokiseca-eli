import React from 'react';
import { WhatsappIcon } from './Icons';

type CtaSectionProps = {
    whatsappLink: string;
};

const FinalCtaSection: React.FC<CtaSectionProps> = ({ whatsappLink }) => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                    Sua Vaga no Grupo VIP Está Expirando!
                </h2>
                
                <p className="text-xl sm:text-2xl font-bold text-red-600 animate-pulse mb-8">
                    Restam Apenas 17 Vagas...
                </p>

                <div className="w-full flex flex-col items-center">
                    <a
                        href={whatsappLink}
                        className="animate-pulse-scale inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 border border-transparent text-lg sm:text-xl font-bold rounded-full text-white bg-emerald-500 hover:bg-emerald-600 shadow-lg w-full sm:w-auto"
                    >
                        <WhatsappIcon className="w-8 h-8 mr-3" />
                        ENTRE NO GRUPO VIP
                    </a>
                    <p className="mt-4 text-gray-500 font-medium text-lg">
                        A partir de R$ 197,00
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FinalCtaSection;