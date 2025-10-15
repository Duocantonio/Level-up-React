// FunCarrito.jsx

import React, { useState, useEffect } from 'react';

const getCarritoFromStorage = () => {
  const guardado = localStorage.getItem('carrito');
  if (!guardado) return [];
  try {
    return JSON.parse(guardado).map(p => ({ ...p, precio: Number(p.precio) }));
  } catch {
    return [];
  }
};

export default function FunCarrito() {
  const [productos, setProductos] = useState(getCarritoFromStorage);

  const esDuoc = true;

  useEffect(() => {
    const handleStorageChange = () => {
      console.log('Storage event detected! Updating cart.');
      setProductos(getCarritoFromStorage());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(productos));
  }, [productos]);

  const eliminarDelCarrito = (indexAEliminar) => {
    const nuevosProductos = productos.filter((_, index) => index !== indexAEliminar);
    setProductos(nuevosProductos);
  };

  const precioTotal = productos.reduce((sum, item) => sum + item.precio, 0);
  const descuento = esDuoc ? precioTotal * 0.2 : 0;
  const precioConDescuento = precioTotal - descuento;

  return (
    <div className="carrito-container">
      <h1>Carrito de Compras</h1>
      <div id="carritoProductos">
        {productos.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          productos.map((producto, index) => (
            <div key={index} className="carrito-item">
              <img src={producto.imagen} alt={producto.nombre} width="60" />
              <span>{producto.nombre}</span> - <span>${producto.precio.toFixed(2)}</span>
              <button onClick={() => eliminarDelCarrito(index)} className="boton-eliminar">
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>

      {productos.length > 0 && (
        <div className="carrito-total">
          <hr />
          <div><strong>Total: ${precioTotal.toFixed(2)}</strong></div>
          {esDuoc && (
            <>
              <div>Descuento DUOC (20%): -${descuento.toFixed(2)}</div>
              <div><strong>Total con descuento: ${precioConDescuento.toFixed(2)}</strong></div>
            </>
          )}
        </div>
      )}
    </div>
  );
}