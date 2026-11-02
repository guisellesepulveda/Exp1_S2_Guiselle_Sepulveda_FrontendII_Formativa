import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="text-center p-12">
            <h2 className="text-red-500 text-3xl mb-2">Página no encontrada (404)</h2>
            <p className="text-gray-600 mb-5">Lo sentimos, la dirección que buscas no existe en el sistema del supermercado.</p>
            <Link to="/" className="bg-blue-600 text-white px-5 py-2.5 no-underline rounded font-bold">
                Volver al Inicio
            </Link>
        </div>
    );
}

export default NotFound;
