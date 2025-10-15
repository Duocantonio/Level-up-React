// Producto.jsx
import React from 'react';

export default function Producto({ imagen, titulo, descripcion, precio }) {
  const agregarAlCarrito = () => {
    const nuevoProducto = {
      nombre: titulo,
      descripcion,
      precio: parseFloat(precio.replace('$', '')),
      imagen,
    };

    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoActual.push(nuevoProducto);
    localStorage.setItem('carrito', JSON.stringify(carritoActual));

    alert(`${titulo} se ha añadido al carrito 🛒`);
  };

  return (
    <article className="producto">
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <h3>{precio}</h3>
      <button onClick={agregarAlCarrito}>Añadir al carrito</button>
    </article>
  );
}
