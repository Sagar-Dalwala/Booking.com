import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  // Retrieve user data from localStorage (token and user role)
  const storedUser = JSON.parse(localStorage.getItem("user"));
  
  const [authUser, setAuthUser] = useState(storedUser || null);

  // Store the user data in localStorage whenever it changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("user", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [authUser]);

  // Function to log out user
  const logout = () => {
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContext, AuthContextProvider, useAuthContext };
