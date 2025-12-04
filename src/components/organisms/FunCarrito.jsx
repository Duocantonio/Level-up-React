import React, { useState, useEffect } from 'react';
import '../Style/FunCarrito.css';



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
    const item = productos[indexAEliminar];
    
    if (item.cantidad > 1) {
        const nuevosProductos = [...productos];
        nuevosProductos[indexAEliminar].cantidad -= 1;
        setProductos(nuevosProductos);
    } else {
        const nuevosProductos = productos.filter((_, index) => index !== indexAEliminar);
        setProductos(nuevosProductos);
    }
  };

  const precioTotal = productos.reduce((total, producto) => {
   const precioTexto = String(producto.precio); 

const precioNumerico = Number(
  precioTexto
    .replace('$', '')
    .replace(/\./g, '')
    .replace(/,/g, '') 
) || 0;
    
    const subtotal = precioNumerico * (producto.cantidad || 1); 
    
    return total + subtotal;
  }, 0);

const precioTotalFormato = precioTotal.toLocaleString('es-CL', { minimumFractionDigits: 0 });

  const descuento = esDuoc ? precioTotal * 0.20 : 0;
  const precioFinal = precioTotal - descuento;
  
const descuentoFormato = descuento.toLocaleString('es-CL', { minimumFractionDigits: 0 });
const precioFinalFormato = precioFinal.toLocaleString('es-CL', { minimumFractionDigits: 0 });

  return (
    <div className="carrito-container">
      <h1>Carrito de Compras</h1>

      {productos.length === 0 && <p>El carrito está vacío.</p>}

      {productos.map((producto, index) => (
        <div key={index} className="carrito-item">
          
          {producto.imagen && (
            <img 
              src={producto.imagen} 
              alt={producto.titulo} 
              width="60"
              style={{ marginRight: '15px', borderRadius: '4px' }}
            />
          )}
          
          <div className="info-producto">
            <span>{producto.titulo} (x{producto.cantidad || 1})</span> 
            <span style={{marginLeft: '10px'}}>- {producto.precio} c/u</span> 
          </div>

          <button onClick={() => eliminarDelCarrito(index)} className="boton-eliminar">
            Eliminar
          </button>
        </div>
      ))}
      
      {productos.length > 0 && (
        <div className="carrito-total">
          <hr />
          <div><strong>Total: ${precioTotalFormato}</strong></div>
          {esDuoc && (
            <>
              <div>Descuento DUOC (20%): -${descuentoFormato}</div>
              <div><strong>Total con descuento: ${precioFinalFormato}</strong></div>
            </>
          )}
        </div>
      )}
    </div>
  );
}