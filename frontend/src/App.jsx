import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Event from "./pages/Events";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs/:slug" element={<Profile />} />
        <Route path="/events" element={<Event />} />
        <Route path="/clubs/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
