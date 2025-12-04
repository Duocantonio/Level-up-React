import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Home from './components/pages/Home';
import Crear_Cuenta from './components/pages/Crear_Cuenta';
import Nosotros from './components/pages/Nosotros';
import Carrito from './components/pages/Carrito';
import Computadores from './components/pages/Computadores';
import Consolas from './components/pages/Consolas';
import Juegos_Mesa from './components/pages/Juegos_Mesa';
import Perifericos from './components/pages/Perifericos';
import Login from './components/pages/Login';
import EditarDatos from './components/pages/EditarDatos';
import ProductosAdmin from "./components/pages/ProductosAdmin";
import { AdminRoute } from "./routes/AdminRoute";

function App() {
  return (
    <AuthProvider>
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
          <Route path='/Login' element={<Login />} />
          <Route path='/EditarDatos' element={<EditarDatos />} />

          {}
          <Route
            path="/admin/productos"
            element={
              <AdminRoute>
                <ProductosAdmin />
              </AdminRoute>
            }
          />
          <Route path="/ProductosAdmin" element={<Navigate to="/admin/productos" replace />} />

          <Route path="/no-autorizado" element={<h2>No tienes permisos para entrar aquí</h2>} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
