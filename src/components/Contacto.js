import React from 'react';

function Contacto() {
    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-blue-900 text-2xl mb-4">Centro de Soporte y Contacto</h2>
            <p className="text-gray-600 mb-5">
                ¿Tienes dudas o incidencias con el registro de inventario? Comunícate con el equipo de administración del supermercado.
            </p>

            <div className="bg-white p-6 rounded-lg shadow mb-5">
                <p className="my-2 text-gray-700"><strong>Correo de Soporte:</strong> inventario@supermercado.cl</p>
                <p className="my-2 text-gray-700"><strong>Teléfono de Mesa de Ayuda:</strong> +56 2 2345 6789</p>
                <p className="my-2 text-gray-700"><strong>Horario de Atención:</strong> Lunes a Viernes, 08:30 - 18:00 hrs.</p>
            </div>
        </div>
    );
}

export default Contacto;
