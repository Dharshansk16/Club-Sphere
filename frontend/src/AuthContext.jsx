import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import api from "./api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "./constants";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthorized: null,
    user: null,
  });
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    auth().catch(() => setAuthState({ isAuthorized: false, user: null }));
  }, []);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post(`${apiUrl}/token/refresh/`, {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        const accessToken = res.data.access;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        return accessToken;
      } else {
        throw new Error("Failed to refresh token");
      }
    } catch (error) {
      console.log("Error refreshing token:", error);
      throw error;
    }
  };

  const fetchCurrentUser = async (token) => {
    try {
      const response = await api.get("current_user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAuthState({
        isAuthorized: true,
        user: response.data,
      });
    } catch (error) {
      console.log("Error fetching current user:", error);
      throw error;
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      setAuthState({ isAuthorized: false, user: null });
      return;
    }

    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration < now) {
      try {
        const accessToken = await refreshToken();
        await fetchCurrentUser(accessToken);
      } catch (error) {
        console.log("Error in auth:", error);
        setAuthState({ isAuthorized: false, user: null });
      }
    } else {
      await fetchCurrentUser(token);
    }
  };

  const setLoginData = (userData) => {
    setAuthState({
      isAuthorized: true,
      user: userData,
    });
    navigate("/", { replace: true });
  };

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setAuthState({
      isAuthorized: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, setLoginData, logout }}>
      {authState.isAuthorized === null ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
