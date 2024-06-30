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

function App() {
  function Logout() {
    localStorage.clear();
    return <Navigate to="/login" replace />;
  }

  return (
    <AuthProvider>
      {/* Wrap your app with AuthProvider */}
      <Router>
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
          <Route path="/events/add/" element={<AddEvent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
