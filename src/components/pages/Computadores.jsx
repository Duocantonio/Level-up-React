import React from 'react'
import Logo from '../../assets/Logos/Logo.png'; 
import Navegador from '../organisms/Navegador';
import Producto from '../organisms/Producto';
import PC_Gamer_1 from '../../assets/Logos/PC_Gamer_1.jpg';
import PC_Gamer_2 from '../../assets/Logos/PC_Gamer_2.webp';
import Laptop_Gamer from '../../assets/Logos/Laptop_Gamer.webp';
import PC_Streaming from '../../assets/Logos/PC_Streaming.webp';

export default function Computadores() {
  return (
    <>
        <Navegador />
        <h1>Computadores</h1>
        <Producto
            imagen={PC_Gamer_1}
            titulo="Computador Gamer Basico"
            descripcion="Un computador ideal para iniciarte en el mundo del gaming, con componentes de calidad y precio accesible."
            precio="$599.990"
            />

        <Producto
            imagen={PC_Gamer_2}
            titulo="Computador Gamer Avanzado"
            descripcion="Un computador potente para juegos AAA, con una tarjeta gráfica de alta gama y un procesador rápido."
            precio="$1.299.990"
            />
        <Producto
            imagen={Laptop_Gamer}
            titulo="Laptop Gamer"
            descripcion="Una laptop diseñada para gamers, con una pantalla de alta frecuencia de actualización y un diseño portátil."
            precio="$999.990"
            />
        <Producto
            imagen={PC_Streaming}
            titulo="Computador para Streaming"
            descripcion="Un computador optimizado para streaming, con capacidad para manejar múltiples tareas simultáneamente."
            precio="$1.499.990"
            />
    </>
  )
}
