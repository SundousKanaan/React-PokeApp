import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

type Props = {
  children: ReactNode;
};

const DarkModeContext = createContext<DarkModeContextType | null>(null);

function DarkModeProvider({ children }: Props) {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const newMode = localStorage.getItem("Mode") === "dark";
    setDarkMode(newMode);
    document.body.classList.toggle("darkMode", newMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = isDarkMode ? "light" : "dark";
    localStorage.setItem("Mode", newMode);
    document.body.classList.toggle("darkMode", !isDarkMode);
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </>
  );
}

const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error(
      "useDarkModeContext must be used within a DarkModeProvider"
    );
  }
  return context;
};

export { DarkModeContext, DarkModeProvider, useDarkModeContext };