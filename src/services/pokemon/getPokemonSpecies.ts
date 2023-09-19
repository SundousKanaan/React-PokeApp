import { PokemonSpeciesDTO } from "~src/services/pokemon/dto-types";
import { transformPokemonSpecies } from "~src/services/pokemon/transformer";
import api from "./api";

export async function getPokemonEvolutionChain(id: number) {
  const EvolutionChainUrl = await api.get<PokemonSpeciesDTO>(
    `/pokemon-species/${id}/`,
    {
      params: { url: id },
    }
  );
  return transformPokemonSpecies(EvolutionChainUrl.data);
}

export default getPokemonEvolutionChain;
