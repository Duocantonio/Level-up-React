import React from 'react';


export default function Producto({ imagen, titulo, descripcion, precio }) {
  const agregarAlCarrito = () => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoProductoBase = {
      titulo: titulo, 
      descripcion: descripcion,
      precio: precio, 
      imagen: imagen,
    };
    const indiceExistente = carritoActual.findIndex(item => item.titulo === titulo);
    if (indiceExistente !== -1) {
      carritoActual[indiceExistente].cantidad = (carritoActual[indiceExistente].cantidad || 1) + 1;
    } else {
      const productoConCantidad = { 
        ...nuevoProductoBase, 
        cantidad: 1 
      };
      carritoActual.push(productoConCantidad);
    } 

    localStorage.setItem('carrito', JSON.stringify(carritoActual));
  }; 

  return (
    <button onClick={agregarAlCarrito}>Añadir al carrito</button>
  );

}