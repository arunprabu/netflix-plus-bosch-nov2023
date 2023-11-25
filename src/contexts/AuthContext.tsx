// 1. create the context 
// 2. create the context provider
// 3. use the context provider in app comp 
// 4. use the context in the needed comp 
import { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextProps {
  isAuthenticated: boolean; // needed for the entire app - particularly in ProtectedRoutes comp
  saveAuthToken: (token: string) => void; // needed for LoginPage comp
  logout: () => void; // needed for header comp
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // checking for auth token in localstorage -- and returning boolean
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // check for authToken in localStorage
    // if found return true;
    // else return false
    const authToken = localStorage.getItem("authToken");
    return !!authToken; // return true of false
  });

  // save the token
  const saveAuthToken = (token: string) => {
    // storing the auth token in local storage
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  // logout
  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    // The following data will be shared across multiple components
    <AuthContext.Provider value={{ isAuthenticated, saveAuthToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// I want to create a custom hook -- it must have 'use' prefix. 
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider component's descendents"
    );
  }
  return context;
};
