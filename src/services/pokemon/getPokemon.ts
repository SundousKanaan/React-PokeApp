import { Pokemon } from "~src/models";
import { PokemonDTO } from "~src/services/pokemon/dto-types";
import { transformPokemon } from "~src/services/pokemon/transformer";
import api from "./api";

export async function getPokemon(name: string): Promise<Pokemon> {
  const response = await api.get<PokemonDTO>(`/pokemon/${name}`, {
    params: { name },
  });
  return transformPokemon(response.data);
}

export default getPokemon;
