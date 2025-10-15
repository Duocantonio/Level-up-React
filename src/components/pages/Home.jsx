import React from 'react';

import Xbox_Series_X from '../../assets/Logos/Xbox_Series_X.png';
import Nvidia5090 from '../../assets/Logos/Nvidia5090.png'; 
import PS5 from '../../assets/Logos/PS5.png';

import Navegador from '../organisms/Navegador';
import Producto from '../organisms/Producto';

export default function Home({ agregarAlCarrito }) {
  return (
    <>
      <Navegador />
      <h1>Bienvenido a Level-Up Store</h1>
      <main>
        <section id="productosdestacados">
          <Producto
            imagen={Xbox_Series_X}
            titulo="Xbox Series X"
            descripcion="La consola más potente de Xbox hasta la fecha, con un rendimiento excepcional."
            precio="$499.99"
            agregarAlCarrito={agregarAlCarrito} 
          />

          <Producto
            imagen={Nvidia5090} 
            titulo="Nvidia RTX 5090"
            descripcion="La tarjeta gráfica más potente de Nvidia, diseñada para gamers y creadores."
            precio="$1,499.99"
            agregarAlCarrito={agregarAlCarrito} 
          />

          <Producto
            imagen={PS5} // Usamos la variable importada
            titulo="PlayStation 5"
            descripcion="La consola de última generación de Sony, con un rendimiento impresionante."
            precio="$499.99"
            agregarAlCarrito={agregarAlCarrito} 
          />
        </section>

        <section id="reviewofproduct"></section>
      </main>
    </>
  );
}