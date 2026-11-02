import React from 'react';
import { useInventario } from '../context/InventarioContext';

function ListaInventario() {
    const { productos } = useInventario();
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Inventario Actual del Supermercado</h2>
            {productos.length === 0 ? (
                <p className="text-center text-gray-500">No hay artículos registrados en el inventario todavía.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Marca</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((prod, index) => (
                                <tr key={prod.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="border border-gray-300 px-4 py-2">{prod.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{prod.nombre}</td>
                                    <td className="border border-gray-300 px-4 py-2">{prod.marca}</td>
                                    <td className="border border-gray-300 px-4 py-2">{prod.tipo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ListaInventario;