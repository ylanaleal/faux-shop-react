// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialState);

  const login = async (email, password) => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();

      // Atualiza o estado com o usuário e o token
      const user = { email }; // Simula um objeto de usuário com o email
      setAuthState({ user, token: data.token });

      // Salva no localStorage para persistência
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', data.token);

      return true; // Retorna true se o login for bem-sucedido
    } catch (error) {
      console.error('Login error:', error);
      return false; // Retorna false em caso de erro
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
