"use client";

import { createContext, useState, useMemo } from "react";

interface ContextProviderProps {
  children: React.ReactNode;
}

export const Context = createContext({
  showMenu: false,
  setShowMenu: (showMenu: boolean) => {},
});

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const contextValue = useMemo(() => ({ showMenu, setShowMenu }), [showMenu]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
