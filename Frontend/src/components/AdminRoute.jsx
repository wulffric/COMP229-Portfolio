import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/signin" replace />;

  if (user.role !== "admin") return <Navigate to="/not-authorized" replace />;

  return children;
};

export default AdminRoute;
