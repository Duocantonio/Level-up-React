import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from '../../assets/Logos/Logo.png'; 
import '../Style/Navegador.css';

export default function Navegador() {
    const [puntos, setPuntos] = useState(120);

    return (
        <header id="Navegador">
            <nav>
                <div className="izquierda">
                    <HashLink to="/" smooth>
                        <img src={Logo} alt="Logo Level-Up Gamer" className="logo-img" />
                    </HashLink>
                </div>

                <h1 className="logo-text">Level-Up Store !!</h1>

                <div className="derecha">
                    <HashLink to="/Nosotros" smooth>Nosotros</HashLink>
                    <HashLink to="/Carrito" smooth>Carrito</HashLink>
                    <HashLink to="/Crear_Cuenta" smooth>Crear Cuenta</HashLink>
                    <HashLink to="/Login" smooth>Login</HashLink>
                    <HashLink to="/EditarDatos" smooth>EditarDatos</HashLink>
                    <p>
                        <span className="levelup-label">Tus puntos son de </span>
                        <span id="puntos" className="levelup-points">{puntos} Level-Up</span>
                    </p>
                </div>
            </nav>

            <aside id="sidebar" className="sidebar">
                <h2>Categorías</h2>
                <ul>
                    <li><HashLink to="/Consolas" smooth>Consolas</HashLink></li>
                    <li><HashLink to="/Juegos_Mesa" smooth>Juegos de Mesa</HashLink></li>
                    <li><HashLink to="/Perifericos" smooth>Periféricos</HashLink></li>
                    <li><HashLink to="/Computadores" smooth>Computadores</HashLink></li>

                </ul>
            </aside>
        </header>
    );
}