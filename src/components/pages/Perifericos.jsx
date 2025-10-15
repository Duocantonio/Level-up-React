import React from "react";
import Logo from "../../assets/Logos/Logo.png";
import Navegador from "../organisms/Navegador";
import Producto from "../organisms/Producto";   
import Raton_logi from '../../assets/Logos/Raton_logi.webp';
import Teclado_kurama from '../../assets/Logos/Teclado_kurama.jpg';
import Razer_Kraken from '../../assets/Logos/Razer_Kraken.jpeg';
import LG_4K_180hz from '../../assets/Logos/LG_4K_180hz.jpg';
import Webcam__HD from '../../assets/Logos/Webcam_HD.webp';
import Alfombrilla_Razer_XXL from '../../assets/Logos/Alfombrilla_Razer_XXL.webp';
import Mando_Xbox_Series_X from '../../assets/Logos/Mando_Xbox_Series_X.png';

export default function Perifericos() {
    return(
        <>
            <Navegador />
            <h1>Periféricos</h1>
            <Producto   
                imagen={Raton_logi}
                titulo="Ratón Gamer Logitech G502"
                descripcion="Un ratón ergonómico con alta precisión y múltiples botones programables para una experiencia de juego personalizada."
                precio="$59.990"
            />
            <Producto
                imagen={Teclado_kurama} 
                titulo="Teclado Mecánico Kurama"
                descripcion="Un teclado mecánico con retroiluminación RGB, teclas duraderas y respuesta táctil para mejorar tu rendimiento en juegos."
                precio="$79.990"    
            />
            <Producto
                imagen={Razer_Kraken}
                titulo="Auriculares Razer Kraken"
                descripcion="Auriculares con sonido envolvente, micrófono ajustable y comodidad para largas sesiones de juego."
                precio="$89.990"    
            />
            <Producto
                imagen={LG_4K_180hz}
                titulo="Monitor LG 4K 180Hz"
                descripcion="Un monitor de alta resolución con una frecuencia de actualización de 180Hz para una experiencia visual fluida y nítida."
                precio="$399.990"
            />
            <Producto
                imagen={Webcam__HD}
                titulo="Webcam HD"
                descripcion="Una webcam de alta definición ideal para streaming y videollamadas con calidad clara y nítida."
                precio="$49.990"
            />  
            <Producto
                imagen={Alfombrilla_Razer_XXL}
                titulo="Alfombrilla Razer XXL"
                descripcion="Una alfombrilla de gran tamaño con superficie suave y base antideslizante para mejorar la precisión del ratón."
                precio="$29.990"
            />
            <Producto
                imagen={Mando_Xbox_Series_X}
                titulo="Mando Xbox Series X"
                descripcion="Un mando ergonómico con conectividad inalámbrica y compatibilidad con múltiples dispositivos para una experiencia de juego versátil."
                precio="$59.990"
            />
        
        
        
        </>
    )

}
