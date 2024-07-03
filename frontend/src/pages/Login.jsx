import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const { setLoginData } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL;
    api
      .post(`${apiUrl}/token/`, { username, password })
      .then((res) => {
        console.log("Login successful:");
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        const userData = res.data;
        setLoginData(userData);
        navigate("/");
      })
      .catch((err) => {
        console.error("Login error:", err);
        setErrorText("Invalid Username or Password!");
        // Handle login error (display error message, clear form fields, etc.)
      });
  };

  return (
    <>
      <div className="bg-gray-800 text-white py-2">
        <marquee direction="left">
          Kindly refresh the page after logging in to ensure all features are
          fully loaded.
        </marquee>
      </div>
      <LoginForm
        name={username}
        password={password}
        callHandleChange={handleChange}
        callHandlePasswordChange={handlePasswordChange}
        callHandleSubmit={handleSubmit}
        errorText={errorText}
      />
    </>
  );
};

export default Login;
