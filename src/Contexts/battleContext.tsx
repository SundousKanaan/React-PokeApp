import React, { createContext, useContext, ReactNode } from "react";
import useBattle from "~src/hooks/useBattle";

type BattleContextType = {
  battleState: { name1: string; name2: string | null }[];
  toggleBattle: (name: string | number) => void;
};

type UserProviderProps = {
  children: ReactNode;
};

export const BattleContext = createContext<BattleContextType | null>(null);

export const BattleProvider: React.FC<UserProviderProps> = ({ children }) => {
  const { battleState, toggleBattle } = useBattle();
  return (
    <BattleContext.Provider value={{ battleState, toggleBattle }}>
      {children}
    </BattleContext.Provider>
  );
};

export const useBattleContext = () => {
  const context = useContext(BattleContext);
  if (!context) {
    throw new Error("useBattleContext must be used within a BattleProvider");
  }
  return context;
};
