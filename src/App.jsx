// App.jsx

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importa todas tus páginas
import Home from './components/pages/Home';
import Inicio_Sesion from './components/pages/Inicio_Sesion';
import Nosotros from './components/pages/Nosotros';
import Carrito from './components/pages/Carrito';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Inicio_Sesion' element={<Inicio_Sesion />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Carrito' element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;