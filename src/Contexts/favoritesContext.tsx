import React, { createContext, useContext, ReactNode } from "react";
import useFavorites from "~src/hooks/useFavorites";

type FavoritesContextType = {
  favoritedState: string[];
  toggleFavorite: (pokemonName: string) => void;
};

type UserProviderProps = {
  children: ReactNode;
};

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null
);

export const FavoritesProvider: React.FC<UserProviderProps> = ({
  children,
}) => {
  const { favoritedState, toggleFavorite } = useFavorites();

  return (
    <FavoritesContext.Provider value={{ favoritedState, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavoritesContext must be used within a FavoritesProvider"
    );
  }
  return context;
};
