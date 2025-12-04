import { createContext, useContext, useState, useEffect } from "react";
import { 
    isAuthenticated, 
    getEmail,
    getRoles,
    logout as logoutService,
    isAdmin as isAdminService
} from "../services/AuthService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [email, setEmail] = useState(getEmail());
    const [roles, setRoles] = useState(getRoles());

    useEffect(() => {
        if (isAuthenticated()) {
            setEmail(getEmail());
            setRoles(getRoles());
        }
    }, []);

    const login = (email, roles) => {
        setEmail(email);
        setRoles(roles);
    };

    const logout = () => {
        logoutService();
        setEmail(null);
        setRoles([]);
    };

    return (
        <AuthContext.Provider value={{
            email,
            roles,
            login,
            logout,
            isAuthenticated: isAuthenticated(),
            isAdmin: isAdminService()
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
