import React from 'react';
import { StarIcon } from './Icons';

type TestimonialCardProps = {
    image: string;
    quote: string;
    name: string;
    result: string;
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex justify-center mb-4">
        {Array.from({ length: rating }).map((_, index) => (
            <StarIcon key={index} className="w-5 h-5 text-yellow-400" />
        ))}
    </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, quote, name, result }) => (
    <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
        <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
        <StarRating rating={5} />
        <blockquote className="text-gray-600 italic mb-4">"{quote}"</blockquote>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="mt-2 text-lg font-bold text-emerald-600">{result}</p>
    </div>
);

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            image: "https://picsum.photos/id/1027/200/200",
            quote: "Nunca imaginei que seria tão fácil! Me sinto outra pessoa, com muito mais energia e autoestima.",
            name: "Maria S., 42 anos",
            result: "Perdeu 12kg!"
        },
        {
            image: "https://picsum.photos/id/1011/200/200",
            quote: "Finalmente um produto que cumpre o que promete. Sem sofrimento e com resultados reais.",
            name: "Joana P., 35 anos",
            result: "Perdeu 9kg!"
        },
        {
            image: "https://picsum.photos/id/1012/200/200",
            quote: "O melhor investimento que fiz na minha saúde. Recomendo para todas as minhas amigas!",
            name: "Carla M., 29 anos",
            result: "Perdeu 15kg!"
        }
    ];

    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Veja Quem Já <span className="text-emerald-600">Transformou o Corpo</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
