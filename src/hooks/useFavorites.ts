import { useState, useEffect } from "react";

export default function useFavorites() {
  const currentFavorites = JSON.parse(
    localStorage.getItem("favoritePokemons") || "[]"
  ) as string[];
  const [favoritedState, setFavoritedState] = useState(currentFavorites);

  const toggleFavorite = (PokemonName: string) => {
    if (currentFavorites.includes(PokemonName)) {
      const updatedFavorites = currentFavorites.filter(
        (favoritedName: string) => favoritedName !== PokemonName
      );
      localStorage.setItem(
        "favoritePokemons",
        JSON.stringify(updatedFavorites)
      );
      setFavoritedState(updatedFavorites);
    } else {
      const updatedFavorites = [...currentFavorites, PokemonName];
      localStorage.setItem(
        "favoritePokemons",
        JSON.stringify(updatedFavorites)
      );
      setFavoritedState(updatedFavorites);
    }
  };

  useEffect(() => {
    setFavoritedState(currentFavorites);
  }, []);

  return { currentFavorites, toggleFavorite, favoritedState };
}
