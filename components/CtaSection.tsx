import React from 'react';

const WHATSAPP_LINK = "whatsapp://send?phone=5517981597877&text=Ol%C3%A1,%20quero%20entrar%20no%20grupo!";

const CtaSection: React.FC = () => {
    return (
        <section className="bg-emerald-600 text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                    Sua Vaga no Grupo VIP Está Expirando!
                </h2>
                <p className="mt-4 text-lg text-emerald-100">
                    Clique no botão abaixo e garanta seu acesso ao grupo exclusivo. Lá você receberá o link de compra com desconto especial e frete grátis.
                </p>
                <p className="mt-6 text-2xl font-bold text-yellow-300 animate-pulse">
                    Restam Apenas 17 Vagas Com o Valor Promocional!
                </p>
                <div className="mt-10">
                     <a
                        href={WHATSAPP_LINK}
                        className="inline-block px-12 py-5 border border-transparent text-xl font-bold rounded-lg text-emerald-600 bg-white hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        SIM, QUERO GARANTIR MINHA VAGA!
                    </a>
                    <p className="mt-4 text-emerald-200">
                        A partir de R$197 com frete grátis!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
