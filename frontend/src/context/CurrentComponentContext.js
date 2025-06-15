import React, { createContext, useContext, useState } from "react";

// Create a Context
export const CurrentComponentContext = createContext();

// Create a Provider component
export const CurrentComponentProvider = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState(
    "student-registration"
  );

  return (
    <CurrentComponentContext.Provider
      value={{ currentComponent, setCurrentComponent }}
    >
      {children}
    </CurrentComponentContext.Provider>
  );
};

export const useCurrentComponent = () => {
  return useContext(CurrentComponentContext);
};
