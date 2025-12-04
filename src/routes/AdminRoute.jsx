import { Navigate } from "react-router-dom";
import { isAdmin } from "../services/AuthService";

export const AdminRoute = ({ children }) => {
    if (!isAdmin()) {
        return <Navigate to="/no-autorizado" replace />;
    }
    return children;
};