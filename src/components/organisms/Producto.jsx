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
      
      alert(`${titulo} se ha añadido al carrito. Cantidad total: ${carritoActual[indiceExistente].cantidad} 🛒`);
    } else {
      const productoConCantidad = { 
        ...nuevoProductoBase, 
        cantidad: 1 
      };
      carritoActual.push(productoConCantidad);
      
      alert(`${titulo} se ha añadido al carrito 🛒`);
    }

    localStorage.setItem('carrito', JSON.stringify(carritoActual));
  };

  return (
    <div className="producto-card">
      {imagen && (
        <img src={imagen} alt={titulo} />
      )}
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <h3>{precio}</h3>
      <button onClick={agregarAlCarrito}>Añadir al carrito</button>
    </div>
  );
}