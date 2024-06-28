import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL;
    api
      .post(`${apiUrl}/token/`, { username, password })
      .then((res) => {
        console.log("Login successful:");
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      })
      .catch((err) => {
        console.error("Login error:", err);
        // Handle login error (display error message, clear form fields, etc.)
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
