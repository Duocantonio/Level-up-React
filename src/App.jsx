// App.jsx

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Crear_Cuenta from './components/pages/Crear_Cuenta';
import Nosotros from './components/pages/Nosotros';
import Carrito from './components/pages/Carrito';
import Computadores from './components/pages/Computadores'
import Consolas from './components/pages/Consolas';
import Juegos_Mesa from './components/pages/Juegos_Mesa';
import Perifericos from './components/pages/Perifericos';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Crear_Cuenta' element={<Crear_Cuenta />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Computadores' element={<Computadores />} />
        <Route path='/Consolas' element={<Consolas />} />
        <Route path='/Juegos_Mesa' element={<Juegos_Mesa />} />
        <Route path='/Perifericos' element={<Perifericos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;