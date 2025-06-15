import React, { createContext, useState, useContext } from "react";

const AccAuthContext = createContext();

export const AccAuthProvider = ({ children }) => {
  const [userAuthStatus, setUserAuthStatus] = useState({});

  return (
    <AccAuthContext.Provider value={{ userAuthStatus, setUserAuthStatus }}>
      {children}
    </AccAuthContext.Provider>
  );
};

export const useAccAuth = () => useContext(AccAuthContext);
