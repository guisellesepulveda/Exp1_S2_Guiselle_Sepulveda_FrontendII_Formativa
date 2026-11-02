import React, { createContext, useContext, useState } from 'react';

const InventarioContext = createContext(null);

export function InventarioProvider({ children }) {
    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Leche Entera 1L', marca: 'Colún', tipo: 'Lácteos' },
        { id: 2, nombre: 'Fideos Tallarín N°75', marca: 'Lucchetti', tipo: 'Abarrotes' }
    ]);

    const agregarProducto = (nuevoProd) => {
        setProductos((prev) => [...prev, nuevoProd]);
    };

    return (
        <InventarioContext.Provider value={{ productos, agregarProducto }}>
            {children}
        </InventarioContext.Provider>
    );
}

export function useInventario() {
    const contexto = useContext(InventarioContext);
    if (!contexto) {
        throw new Error('useInventario debe usarse dentro de un InventarioProvider');
    }
    return contexto;
}
