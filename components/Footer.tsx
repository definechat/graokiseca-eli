import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center text-sm">
                <p>&copy; {currentYear} Todos os direitos reservados. Suplemento Natural.</p>
                <p className="mt-4 max-w-3xl mx-auto">
                    <strong>Disclaimer:</strong> Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar de pessoa para pessoa e não são garantidos. Consulte sempre um profissional de saúde antes de iniciar qualquer suplementação. As imagens são meramente ilustrativas.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
