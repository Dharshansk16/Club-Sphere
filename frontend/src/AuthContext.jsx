import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import api from "./api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "./constants";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthorized: null,
    user: null,
  });

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
        await fetchCurrentUser(accessToken);
      } else {
        setAuthState({ isAuthorized: false, user: null });
      }
    } catch (error) {
      console.log(error);
      setAuthState({ isAuthorized: false, user: null });
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
      console.log(error);
      setAuthState({
        isAuthorized: false,
        user: null,
      });
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
      await refreshToken();
    } else {
      await fetchCurrentUser(token);
    }
  };

  const setLoginData = (userData) => {
    setAuthState({
      isAuthorized: true,
      user: userData,
    });
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
