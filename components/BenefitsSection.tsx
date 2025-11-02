import React from 'react';
import { DietIcon, MoonIcon, RocketIcon, LeafIcon } from './Icons';

type BenefitCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
        <div className="bg-emerald-100 text-emerald-600 rounded-full p-4 inline-block mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const BenefitsSection: React.FC = () => {
    const benefits = [
        {
            icon: <DietIcon className="w-8 h-8" />,
            title: "Sem Dietas Restritivas",
            description: "Conquiste o corpo dos seus sonhos com a liberdade de comer o que você mais gosta, sem culpa."
        },
        {
            icon: <MoonIcon className="w-8 h-8" />,
            title: "Sem Exercícios Exaustivos",
            description: "Nossa fórmula potente atua na queima de gordura até mesmo enquanto você descansa."
        },
        {
            icon: <RocketIcon className="w-8 h-8" />,
            title: "Resultados Rápidos e Visíveis",
            description: "Sinta a diferença na balança e no espelho já na primeira semana de uso contínuo."
        },
        {
            icon: <LeafIcon className="w-8 h-8" />,
            title: "100% Natural e Seguro",
            description: "Produto com fórmula natural, aprovado pela ANVISA e sem relatos de efeitos colaterais."
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Por Que Nosso Método é <span className="text-emerald-600">Infalível?</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
