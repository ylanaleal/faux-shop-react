// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';
import { login as apiLogin } from '../services/apiService';

const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialState);

  const login = async (email, password) => {
    try {
      const response = await apiLogin({ email, password });

      // A API do ReqRes retorna apenas o token, então simulamos os dados do usuário
      const userData = {
        email,
        name: email.split('@')[0], // Extrai o nome do email
        avatar: `https://i.pravatar.cc/150?u=${email}`, // Avatar aleatório
      };

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', response.token);
      setAuthState({ user: userData, token: response.token });

      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setAuthState({ user: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
