import React from "react";
import Toggle from "../hooks/toggle";

export const alertContext = React.createContext();

export const AlertProvider = ({ children }) => {
  const [isAlert, toggleAlert] = Toggle(false);

  return (
    <alertContext.Provider value={{ isAlert, toggleAlert }}>
      {children}
    </alertContext.Provider>
  );
};
