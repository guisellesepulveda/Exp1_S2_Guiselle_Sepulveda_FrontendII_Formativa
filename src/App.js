import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { InventarioProvider } from './context/InventarioContext';
import Home from './components/Home';
import QuienesSomos from './components/QuienesSomos';
import Contacto from './components/Contacto';
import AgregarProducto from './components/AgregarProducto';
import ListaInventario from './components/ListaInventario';
import NotFound from './components/NotFound'; // Importamos la ruta comodín

const linkMenu = 'text-white font-bold no-underline';

function App() {
  return (
    <InventarioProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans">

          {/* Cabecera */}
          <header className="bg-blue-700 text-white p-5 text-center">
            <h1 className="m-0 text-2xl">Supermercado - Gestión de Inventario</h1>
          </header>

          {/* Contenido Dinámico con Rutas */}
          <main className="flex-1 px-5 py-8 bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/agregar-producto" element={<AgregarProducto />} />
              <Route path="/inventario" element={<ListaInventario />} />
              {/* Ruta comodín para direcciones inválidas (Página 404) */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Menú de Navegación Inferior */}
          <nav className="bg-gray-800 p-4 flex justify-center gap-6 flex-wrap">
            <Link to="/" className={linkMenu}>Inicio</Link>
            <Link to="/quienes-somos" className={linkMenu}>Quiénes Somos</Link>
            <Link to="/contacto" className={linkMenu}>Contáctanos</Link>
            <Link to="/agregar-producto" className={linkMenu}>Ingresar Artículo</Link>
            <Link to="/inventario" className={linkMenu}>Ver Inventario</Link>
          </nav>

        </div>
      </Router>
    </InventarioProvider>
  );
}

export default App;
