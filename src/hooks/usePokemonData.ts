import React from "react";
import { Pokemon } from "~src/models";
import { getPokemon } from "~src/services/pokemon/getPokemon";

export default function usePokemonData(name: string | null) {
  const [pokemonData, setPokemonData] = React.useState<Pokemon | null>(null);
  React.useEffect(() => {
    (async () => {
      if (!name) {
        return;
      }
      const response = await getPokemon(name);
      console.log({ response });

      setPokemonData(response);
    })();
  }, [name]);
  return { pokemonData };
}
