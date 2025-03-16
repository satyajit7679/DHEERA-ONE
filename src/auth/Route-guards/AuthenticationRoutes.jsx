import { Outlet, Navigate } from "react-router-dom";

function AuthenticationRoutes() {
  const status = localStorage.getItem("status");

  return status === "authenticated" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default AuthenticationRoutes;
