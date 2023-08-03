import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PrivateRoute({ allowedRoles }) {
  // Comprobar en el contexto si existe usuario

  const location = useLocation();
  const { user } = useAuthContext();

  return allowedRoles?.includes(user?.userRole) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
