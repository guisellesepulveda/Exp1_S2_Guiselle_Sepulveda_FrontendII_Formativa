import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-blue-900 text-3xl mb-4">Sistema Integral de Gestión de Inventario</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
                Plataforma oficial para el control de stock, ingreso de nuevos artículos y supervisión de productos en nuestras salas de supermercado.
            </p>

            {/* Accesos rápidos solicitados */}
            <div className="flex justify-center gap-5 mb-10">
                <Link to="/inventario" className="bg-blue-700 text-white px-6 py-3 no-underline rounded-lg font-bold">
                    📦 Ver Inventario Actual
                </Link>
                <Link to="/agregar-producto" className="bg-emerald-700 text-white px-6 py-3 no-underline rounded-lg font-bold">
                    ➕ Ingresar Nuevo Artículo
                </Link>
            </div>

            {/* Indicadores de stock representativos */}
            <div className="grid grid-cols-2 gap-5 text-left">
                <div className="bg-white p-5 rounded-lg shadow">
                    <h3 className="text-gray-800 text-lg mb-2">Control de Lácteos</h3>
                    <p className="text-gray-500 text-sm">Monitoreo de productos perecibles y fechas críticas de rotación en góndola.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow">
                    <h3 className="text-gray-800 text-lg mb-2">Abarrotes y Bodega</h3>
                    <p className="text-gray-500 text-sm">Gestión masiva de categorías, marcas y stock disponible para reposición.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
