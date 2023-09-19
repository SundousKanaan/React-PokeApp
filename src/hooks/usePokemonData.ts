import React from "react";
import { Pokemon } from "~src/models";
import { getPokemon } from "~src/services/pokemon/getPokemon";

export default function usePokemonData(name: string) {
  const [pokemonData, setPokemonData] = React.useState<Pokemon | null>(null);
  React.useEffect(() => {
    (async () => {
      const response = await getPokemon(name);
      setPokemonData(response);
    })();
  }, [name]);
  return { pokemonData };
}
