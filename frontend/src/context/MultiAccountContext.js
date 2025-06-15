import React, { createContext, useContext, useState, useEffect } from "react";

const MultiAccountContext = createContext();

export const useMultiAccount = () => useContext(MultiAccountContext);

export const MultiAccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [role, setRole] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const restaurantList = JSON.parse(
      localStorage.getItem("restaurantList") || "[]"
    );
    const restaurantId = localStorage.getItem("restaurantId");
    const role = localStorage.getItem("role");
    setAccounts(restaurantList);
    setCurrentAccount(restaurantId);
    setRole(role);
  }, []);

  // Update localStorage when context changes
  useEffect(() => {
    localStorage.setItem("restaurantList", JSON.stringify(accounts));
    if (currentAccount) localStorage.setItem("restaurantId", currentAccount);
    if (role) localStorage.setItem("role", role);
  }, [accounts, currentAccount, role]);

  // Switch account and update context (call getToken, etc.)
  const switchAccount = async ({ restaurantId, token, role }) => {
    setCurrentAccount(restaurantId);
    setRole(role);
    if (token) localStorage.setItem("accessToken", token);
    // Optionally: fetch new data, update UI, etc.
  };

  // Update accounts list (e.g. after adding a restaurant)
  const updateAccounts = (newList) => setAccounts(newList);

  return (
    <MultiAccountContext.Provider
      value={{
        accounts,
        currentAccount,
        role,
        switchAccount,
        updateAccounts,
      }}
    >
      {children}
    </MultiAccountContext.Provider>
  );
};
