import React, { createContext, useState } from 'react';
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false);


  const logout = () => {
    setToken(false);
  };

  const login = (tokenValue) => {
    setToken(tokenValue);
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
