import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, condition }) => {
  if (!condition) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;