
import React from 'react';
export default function Producto({ imagen, titulo, descripcion, precio }) {
  return (
    <article className="producto">
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <h3>{precio}</h3>
      <button>Añadir al carrito</button>
    </article>
  );
}