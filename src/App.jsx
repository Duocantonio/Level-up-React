// App.jsx

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Inicio_Sesion from './components/pages/Inicio_Sesion';
import Nosotros from './components/pages/Nosotros';
import Carrito from './components/pages/Carrito';
import Crear_Cuenta from './components/pages/Crear_Cuenta'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Inicio_Sesion' element={<Inicio_Sesion />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Crear_Cuenta' element={<Crear_Cuenta />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;