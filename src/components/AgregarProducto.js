import React, { useState } from 'react';
import { useInventario } from '../context/InventarioContext';

function AgregarProducto() {
    const { agregarProducto } = useInventario();
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [tipo, setTipo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !marca || !tipo) return;

        const nuevoItem = {
            id: Date.now(),
            nombre,
            marca,
            tipo
        };

        agregarProducto(nuevoItem);
        setNombre('');
        setMarca('');
        setTipo('');
        alert('¡Artículo agregado exitosamente al inventario!');
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Registrar Nuevo Artículo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Nombre del Producto:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Arroz Grado 1"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Marca:</label>
                    <input
                        type="text"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Tucapel"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Tipo de Producto:</label>
                    <input
                        type="text"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Abarrotes"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                    Guardar en Inventario
                </button>
            </form>
        </div>
    );
}

export default AgregarProducto;