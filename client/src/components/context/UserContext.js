import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({ 
  currentUser: null, 
  setCurrentUser: () => {}, 
  credits: null,
  id: null
});

export const login = async (inputs) => {
  const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
    withCredentials: true,
  });

  return res.data;
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [credits, setCredits] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, credits, id, login }}>
      {children}
    </UserContext.Provider>
  );
};
