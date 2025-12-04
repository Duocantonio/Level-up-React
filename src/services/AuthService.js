import axios from 'axios';

const AUTH_URL = 'http://localhost:9090/auth';

export async function login(email, clave1) {
    try {
        const response = await axios.post(`${AUTH_URL}/login`, {
            email,
            clave1
        });

        const { token, usuario, roles } = response.data;

        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        localStorage.setItem('roles', JSON.stringify(roles));

        return response.data;

    } catch (error) {
        console.error('Login falló', error.response?.data || error.message);
        throw error;
    }
}

export async function register(nombre, edad, email, clave1, direccion, rol = 'USER') {
    try {
        const response = await axios.post(`${AUTH_URL}/register`, {
            nombre,
            edad,
            email,
            clave1,
            direccion,
            rol
        });
        return response.data;
    } catch (error) {
        console.error('Registro falló', error.response?.data || error.message);
        throw error;
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('roles');
}

export function isAuthenticated() {
    return !!localStorage.getItem('token');
}

export function getEmail() {
    const user = localStorage.getItem('usuario');
    if (!user) return null;

    try {
        return JSON.parse(user).email;
    } catch {
        return null;
    }
}

export function getRoles() {
    const roles = localStorage.getItem('roles');
    if (!roles) return [];

    try {
        return JSON.parse(roles);
    } catch {
        return [];
    }
}

export function isAdmin() {
    const roles = getRoles();
    return Array.isArray(roles) && roles.includes('ROLE_ADMIN');
}