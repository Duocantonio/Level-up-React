import React from "react";
import Logo from "../../assets/Logos/Logo.png";
import Navegador from "../organisms/Navegador";
import Producto from "../organisms/Producto";   
import Xbox_Series_X from '../../assets/Logos/Xbox_Series_X.png';
import PS5 from '../../assets/Logos/PS5.png';
import Nintendo_Switch from '../../assets/Logos/Nintendo_Switch.jpg';
import Steam_Deck from '../../assets/Logos/Steam_Deck.jpg';

export default function Consolas() {
    return (
        <>
            <Navegador />
            <h1>Consolas</h1>
            <Producto
                imagen={Xbox_Series_X}
                titulo="Xbox Series X"
                descripcion="La consola más potente de Xbox hasta la fecha, con un rendimiento excepcional y una experiencia de juego inmersiva."
                precio="$499.990"
            />
            <Producto
                imagen={PS5}
                titulo="PlayStation 5" 
                descripcion="La consola de última generación de Sony, con un rendimiento impresionante y una biblioteca de juegos exclusiva."
                precio="$499.990" 
            />
            <Producto
                imagen={Nintendo_Switch}
                titulo="Nintendo Switch"
                descripcion="La consola híbrida de Nintendo que te permite jugar en casa o en cualquier lugar."
                precio="$299.990"
            />
            <Producto
                imagen={Steam_Deck}
                titulo="Steam Deck"
                descripcion="La consola portátil de Valve diseñada para jugar tus juegos de Steam en cualquier lugar."
                precio="$399.990"
            />



        </>
    )
}