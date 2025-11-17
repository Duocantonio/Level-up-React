import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import UsuarioService from "../services/UsuarioService";

const UsuarioForm = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [email, setEmail] = useState("");
    const [clave1, setClave1] = useState("");
    const [clave2, setClave2] = useState("");
    const [direccion, setDireccion] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            UsuarioService.getUsuarioById(id).then((response) => {
                setNombre(response.data.nombre);
                setEdad(response.data.edad);
                setEmail(response.data.email);
                setClave1(response.data.clave1);
                setClave2(response.data.clave2);
                setDireccion(response.data.direccion);
            });
        }    
    }, [id]);

    const saveOrUpdateUsuario = (e) => {
        e.preventDefault();
        const usuario = { nombre, edad, email, clave1, clave2, direccion };

        if (id) {
            UsuarioService.updateUsuario(id, usuario).then(() => {
                navigate('/');
            });
        } else {
            UsuarioService.createUsuario(usuario).then(() => {
                navigate('/');
            });
        }
    };

    return (
        <div>
            <h2>{id ? 'Edit Usuario' : 'Add Usuario'}</h2>
            <form onSubmit={saveOrUpdateUsuario}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Edad:</label>
                    <input
                        type="number"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>  
                <div>
                    <label>Clave1:</label>
                    <input
                        type="password"
                        value={clave1}
                        onChange={(e) => setClave1(e.target.value)}
                        required
                    />
                </div>  
                <div>
                    <label>Clave2:</label>
                    <input
                        type="password"
                        value={clave2}
                        onChange={(e) => setClave2(e.target.value)}
                        required
                    />
                </div>  
                <div>
                    <label>Direccion:</label>
                    <input
                        type="text"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                    />
                </div>  
                <button type="submit">{id ? 'Update' : 'Save'}</button>
            </form>
        </div>
    );
}
export default UsuarioForm;