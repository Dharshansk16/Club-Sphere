import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import React from "react";

function ProtectedRoute({ children }) {
  const { isAuthorized } = useAuth();

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }
  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
