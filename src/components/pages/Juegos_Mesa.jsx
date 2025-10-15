import React from "react";
import Logo from "../../assets/Logos/Logo.png";
import Navegador from "../organisms/Navegador";
import Producto from "../organisms/Producto";   
import Catan from '../../assets/Logos/Catan.jpg';
import Monopoly from '../../assets/Logos/Monopoly.jpg';
import Risk from '../../assets/Logos/Risk.webp';
import Carcassonne from '../../assets/Logos/Carcassonne.webp';
import Dixit from '../../assets/Logos/Dixit.jpg';

export default function Juegos_Mesa() {
    return (
        <>
            <Navegador />
            <h1>Juegos de Mesa</h1>
            <Producto
                imagen={Catan}
                titulo="Catan"
                descripcion="Un juego de estrategia y comercio donde los jugadores compiten por colonizar una isla, construir caminos y comerciar recursos"
                precio="$39.990"
            />
            <Producto
                imagen={Monopoly}
                titulo="Monopoly"   
                descripcion="El clásico juego de bienes raíces donde los jugadores compran, venden y negocian propiedades para convertirse en el jugador más rico."
                precio="$29.990" 
            />
            <Producto
                imagen={Dixit}
                titulo="Dixit"
                descripcion="Un juego de cartas ilustradas donde los jugadores usan su imaginación para contar historias y adivinar las cartas de los demás."
                precio="$24.990"
            />
            <Producto
                imagen={Risk}
                titulo="Risk"
                descripcion="Un juego de estrategia militar donde los jugadores luchan por el control del mundo mediante la conquista de territorios y la gestión de ejércitos."
                precio="$34.990"
            />
            <Producto
                imagen={Carcassonne}
                titulo="Carcassonne"
                descripcion="Un juego de colocación de losetas donde los jugadores construyen un paisaje medieval con ciudades, caminos y campos, y compiten por el control de estas áreas."
                precio="$29.990"
            />


        </>
    )

}