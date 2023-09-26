import { PokemonListDTO } from "~src/services/pokemon/dto-types";
import { transformPokemonNames } from "~src/services/pokemon/transformer";
import api from "./api";

export async function getPokemonList(): Promise<string[]> {
  const response = await api.get<PokemonListDTO>("/pokemon", {
    params: {
      limit: 1010,
      offset: 0,
    },
  });

  return transformPokemonNames(response.data);
}

export default getPokemonList;
