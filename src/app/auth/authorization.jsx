"use client";
import { createContext, useContext, useState } from "react";
import { account } from "../appwrite";
import { ID } from "../appwrite";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const login = async (email, password) => {
    // Implement login logic using Appwrite SDK
    const loggedIn = await account.createEmailSession(email, password);
    setLoggedInUser(loggedIn);
  };

  const register = async (email, password) => {
    // Implement registration logic using Appwrite SDK
    await account.create(ID.unique(), email, password);
    await login(email, password);
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setLoggedInUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <UserContext.Provider value={{ loggedInUser, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
