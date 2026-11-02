import React from 'react';

function QuienesSomos() {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-blue-900 text-2xl mb-4">Quiénes Somos</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
                Somos una cadena de supermercados comprometida con la eficiencia logística y la frescura en el abastecimiento. Nuestra plataforma tecnológica centraliza el control de inventarios para garantizar la disponibilidad continua de productos a nuestros clientes.
            </p>
            <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="text-gray-800 text-lg mb-2">Nuestros Valores</h3>
                <ul className="text-gray-600 pl-5 leading-relaxed list-disc">
                    <li><strong>Compromiso:</strong> Precisión absoluta en el registro de stock.</li>
                    <li><strong>Transparencia:</strong> Trazabilidad clara de cada artículo ingresado.</li>
                    <li><strong>Innovación:</strong> Uso de herramientas modernas en el desarrollo web.</li>
                </ul>
            </div>
        </div>
    );
}

export default QuienesSomos;
