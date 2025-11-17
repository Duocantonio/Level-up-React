import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import UsuarioList from './components/UsuarioList';
import UsuarioForm from './components/UsuarioForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<UsuarioList/>}></Route>
          <Route path='/add' element={<UsuarioForm/>}></Route>
          <Route path='/edit/:id' element={<UsuarioForm/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;