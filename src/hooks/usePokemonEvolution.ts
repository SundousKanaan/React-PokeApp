import * as React from "react";
import { PokemonEvolutionChain } from "~src/models";
import api from "~src/services/pokemon/api";
import { PokemonEvolutionChainDTO } from "~src/services/pokemon/dto-types";
import getPokemonSpecies from "~src/services/pokemon/getPokemonSpecies";
import transformPokemonEvolutionChain from "~src/services/pokemon/transformer";

export default function usePokemonEvolutions(id: number) {
  const [pokemonEvolutionChain, setPokemonEvolutionChain] =
    React.useState<PokemonEvolutionChain | null>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const evolutionChainUrl = await getPokemonSpecies(id);
        const { url } = evolutionChainUrl.evolution_chain;
        const response = await api.get<PokemonEvolutionChainDTO>(url);
        const transformedResponse = transformPokemonEvolutionChain(
          response.data
        );
        setPokemonEvolutionChain(transformedResponse);
      } catch (error) {
        console.error("error", error);
      }
    })();
  }, [id]);
  return { pokemonEvolutionChain };
}
