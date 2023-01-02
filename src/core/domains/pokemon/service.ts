import { Pokemon } from "@app/core/domains/pokemon/models";
import {
  transformPokemon,
  transformPokemonNames,
} from "@app/core/domains/pokemon/transformer";
import api from "@app/services/api";

export async function getPokemon(name: string): Promise<Pokemon> {
  const response = await api.get("pokemon/{name}", { params: { name } });
  return transformPokemon(response);
}

export async function getListPokemon(): Promise<string[]> {
  const { results } = await api.get("pokemon", {
    params: {
      limit: 20,
      offset: 0,
    },
  });

  return transformPokemonNames(results);
}
