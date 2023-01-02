import {
  Ability,
  Sprites,
  Pokemon,
  PokemonDefinitionReponse,
  PokemonResponse,
  SpritesResponse,
  AbilityResponse,
} from "@app/core/domains/pokemon/models";

function transformType(response: { type: { name: string } }) {
  return response?.type?.name;
}

function transformAbility(response: AbilityResponse) {
  return {
    name: response.name,
    isHidden: response.is_hidden,
    slot: response.slot,
  } as Ability;
}

function transformSprites(response: SpritesResponse) {
  const sprites: Sprites = {
    backDefault: response.back_default,
    backShiny: response.back_shiny ?? undefined,
    backFemale: response.back_female ?? undefined,
    backShinyFemale: response.back_shiny_female ?? undefined,
    frontDefault: response.front_default,
    frontShiny: response.front_shiny ?? undefined,
    frontFemale: response.front_female ?? undefined,
    frontShinyFemale: response.front_shiny_female ?? undefined,
  };
  return sprites;
}

export function transformPokemon(response: PokemonResponse): Pokemon {
  const pokemon: Pokemon = {
    name: response.name,
    abilities: response.abilities?.map(transformAbility) ?? [],
    sprites: transformSprites(response.sprites),
    isDefault: response.is_default,
    order: response.order,
    id: response.id,
    types: response.types?.map(transformType) ?? [],
    weight: response.weight,
  };
  return pokemon;
}

export function transformPokemonNames(
  pokemons: PokemonDefinitionReponse[]
): string[] {
  return pokemons.map((pokemon) => pokemon.name);
}
