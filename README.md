# Supermercado - Gestión de Inventario (Frontend)

Aplicación web en React con Tailwind CSS para gestionar el inventario de un supermercado.

## Páginas

- Inicio
- Quiénes Somos
- Contáctanos
- Ingresar Artículo: formulario con nombre, marca y tipo de producto
- Ver Inventario: tabla con todos los artículos registrados

## Estado global

La lista de artículos vive en un Context de React (`src/context/InventarioContext.js`). `AgregarProducto` y `ListaInventario` lo consumen con el hook `useInventario()`.

## Cómo ejecutarlo

```
npm install
npm start
```

Se abre en http://localhost:3000.

## Tests

```
npm test
```
