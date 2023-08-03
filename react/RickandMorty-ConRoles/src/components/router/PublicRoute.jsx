import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PublicRoute() {
  // Comprobar en el contexto si existe usuario
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to="/characters" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
