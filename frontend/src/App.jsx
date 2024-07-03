import "./index.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Event from "./pages/Events";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Update from "./pages/Update";
import AddEvent from "./components/AddEvent";
import { useAuth } from "./AuthContext";
import UpdateEvent from "./components/UpdateEvent";

function App() {
  function Logout() {
    const { logout } = useAuth();
    logout();
    return <Navigate to="/" replace />;
  }

  return (
    <Router>
      <AuthProvider>
        {/* Wrap your app with AuthProvider */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Home />} />
          <Route path="/clubs/:slug" element={<Profile />} />
          <Route path="/events" element={<Event />} />
          <Route
            path="/clubs/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clubs/update/:slug"
            element={
              <ProtectedRoute>
                <Update />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events/add/"
            element={
              <ProtectedRoute>
                <AddEvent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events/update/:id"
            element={
              <ProtectedRoute>
                <UpdateEvent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
