import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import api from "./api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "./constants";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthorized: null,
    username: null,
  });
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    auth().catch(() => setAuthState({ isAuthorized: false, username: null }));
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
        const decoded = jwtDecode(accessToken);
        setAuthState({ isAuthorized: true, username: decoded.username });
      } else {
        setAuthState({ isAuthorized: false, username: null });
      }
    } catch (error) {
      console.log(error);
      setAuthState({ isAuthorized: false, username: null });
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      setAuthState({ isAuthorized: false, username: null });
      return;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;
    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      setAuthState({ isAuthorized: true, username: decoded.username });
    }
  };

  return (
    <AuthContext.Provider value={authState}>
      {authState.isAuthorized === null ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
