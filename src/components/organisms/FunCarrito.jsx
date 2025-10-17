// FunCarritoSimple.jsx
import React, { useState, useEffect } from 'react';

export default function FunCarritoSimple() {
  const [productos, setProductos] = useState(() => {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  const esDuoc = true;

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(productos));
    
    const sincronizarCarrito = () => {
        const guardado = localStorage.getItem('carrito');
        setProductos(guardado ? JSON.parse(guardado) : []);
    };
    window.addEventListener('storage', sincronizarCarrito);

    return () => {
        window.removeEventListener('storage', sincronizarCarrito);
    };
  }, [productos]);

  const eliminarDelCarrito = (indexAEliminar) => {
    const nuevosProductos = productos.filter((_, index) => index !== indexAEliminar);
    setProductos(nuevosProductos);
  };

  const precioTotal = productos.reduce((total, producto) => total + (Number(producto.precio) || 0), 0);
  const descuento = esDuoc ? precioTotal * 0.20 : 0;
  const precioFinal = precioTotal - descuento;

  return (
    <div className="carrito-container">
      <h1>Carrito de Compras</h1>

      {productos.length === 0 && <p>El carrito está vacío.</p>}

      {productos.map((producto, index) => (
        <div key={index} className="carrito-item">
          
          {producto.imagen && (
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              width="60"
              style={{ marginRight: '15px', borderRadius: '4px' }}
            />
          )}
          
          <div className="info-producto">
            <span>{producto.nombre}</span> - <span>${(Number(producto.precio) || 0).toFixed(2)}</span>
          </div>

          <button onClick={() => eliminarDelCarrito(index)} className="boton-eliminar">
            Eliminar
          </button>
        </div>
      ))}
      
      {productos.length > 0 && (
        <div className="carrito-total">
          <hr />
          <div><strong>Total: ${precioTotal.toFixed(2)}</strong></div>
          {esDuoc && (
            <>
              <div>Descuento DUOC (20%): -${descuento.toFixed(2)}</div>
              <div><strong>Total con descuento: ${precioFinal.toFixed(2)}</strong></div>
            </>
          )}
        </div>
      )}
    </div>
  );
}