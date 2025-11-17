import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import UsuarioService from "../services/UsuarioService";

const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = () => {
        UsuarioService.getAllUsuarios().then((response) => {
            setUsuarios(response.data);
        }).catch((error) => {
            console.log("Error en la obtencion de usuarios:", error);
        });
    };
    const deleteUsuario = (id) => {
        UsuarioService.deleteUsuario(id).then(() => {
            fetchUsuarios();
        }).catch((error) => {
            console.log("Error al intentar elimirar usuario:", error);
        });
    };

    return (
        <div>
            <h2>UsuarioList</h2>
            <Link to="/add">Add New Usuario</Link>
            <table>
                <thead>
                    <tr>
                        <th>nombre</th>           
                        <th>edad</th>           
                        <th>email</th>           
                        <th>clave1</th>           
                        <th>clave2</th>                              
                        <th>direccion</th>                               
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.edad}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.clave1}</td>
                            <td>{usuario.clave2}</td>
                            <td>{usuario.direccion}</td>
                            <td>
                                <Link to={`/edit/${usuario.id}`}>Edit</Link>
                                <button onClick={() => deleteUsuario(usuario.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};
export default UsuarioList;