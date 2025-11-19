import axios from 'axios';

const BASE_URL ='http://localhost:9090/api/usuarios';

class UsuarioService {
    getAllUsuarios(){
        return axios.get(BASE_URL);
    }

    getUsuarioById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }

    createUsuario(usuario){
        return axios.post(BASE_URL, usuario)
    }

    updateUsuario(id, usuario){
        return axios.put(`${BASE_URL}/${id}`, usuario);
    }

    deleteUsuario(id){
        return axios.delete(`${BASE_URL}/${id}`);
    }

}
export default new UsuarioService();