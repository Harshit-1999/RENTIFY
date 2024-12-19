// UserContext.js
import React, { createContext, useState, useContext } from "react";

// Create context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access context
export const useUser = () => useContext(UserContext);
