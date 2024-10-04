import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      const tokenValue = response.data.token;
      setToken(tokenValue);
      localStorage.setItem('token', tokenValue);
      await fetchUserProfile(tokenValue);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
      });
      const tokenValue = response.data.token;
      setToken(tokenValue);
      localStorage.setItem('token', tokenValue);
      await fetchUserProfile(tokenValue);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const fetchUserProfile = async (tokenValue) => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${tokenValue}`,
        },
      });
      setUser(response.data); 
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token'); 
  };
  useEffect(() => {
    if (token) {
      fetchUserProfile(token);
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
