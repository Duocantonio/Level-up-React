// App.jsx

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Inicio_Sesion from './components/pages/Inicio_Sesion';
import Nosotros from './components/pages/Nosotros';
import Carrito from './components/pages/Carrito';
<<<<<<< HEAD
import Computadores from './components/pages/Computadores'
import Consolas from './components/pages/Consolas';
import Juegos_Mesa from './components/pages/Juegos_Mesa';
import Perifericos from './components/pages/Perifericos';

=======
import Crear_Cuenta from './components/pages/Crear_Cuenta'
>>>>>>> origin/Antonio


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Inicio_Sesion' element={<Inicio_Sesion />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Carrito' element={<Carrito />} />
<<<<<<< HEAD
        <Route path='/Computadores' element={<Computadores />} />
        <Route path='/Consolas' element={<Consolas />} />
        <Route path='/Juegos_Mesa' element={<Juegos_Mesa />} />
        <Route path='/Perifericos' element={<Perifericos />} />
=======
        <Route path='/Crear_Cuenta' element={<Crear_Cuenta />} />


>>>>>>> origin/Antonio
      </Routes>
    </BrowserRouter>
  );
}

export default App;