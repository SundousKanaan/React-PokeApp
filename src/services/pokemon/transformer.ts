import {
  PokemonAbility,
  PokemonSprites,
  Pokemon,
  PokemonSpecies,
  PokemonEvolutionChain,
  PokemonEvolution,
} from "~src/models";
import {
  PokemonListDTO,
  PokemonDTO,
  SpritesDTO,
  AbilityDTO,
  PokemonSpeciesDTO,
  PokemonEvolutionChainDTO,
  PokemonEvolutionDTO,
} from "~src/services/pokemon/dto-types";
import getPokemonIdByUrl from "~src/utils/get-pokemon-id";
import { getPokemonBackSpriteById, getPokemonSpriteById } from "~src/utils/get-pokemon-image";

function transformType(response: { type: { name: string } }) {
  return response?.type?.name;
}

function transformAbility(response: AbilityDTO): PokemonAbility {
  return {
    ability: response.ability,
    isHidden: response.is_hidden,
    slot: response.slot,
  };
}

function transformSprites(response: SpritesDTO): PokemonSprites {
  return {
    backDefault: response.back_default,
    backShiny: response.back_shiny ?? undefined,
    backFemale: response.back_female ?? undefined,
    backShinyFemale: response.back_shiny_female ?? undefined,
    frontDefault: response.front_default,
    frontShiny: response.front_shiny ?? undefined,
    frontFemale: response.front_female ?? undefined,
    frontShinyFemale: response.front_shiny_female ?? undefined,
  };
}

export function transformPokemon(response: PokemonDTO): Pokemon {
  const pokemon: Pokemon = {
    name: response.name,
    species: response.species,
    abilities: response.abilities?.map(transformAbility) ?? [],
    sprites: transformSprites(response.sprites),
    isDefault: response.is_default,
    order: response.order,
    id: response.id,
    types: response.types?.map(transformType) ?? [],
    weight: response.weight,
    height: response.height,
    base: response.base_experience,
    stats:
      response.stats?.map((stat) => ({
        baseStat: stat.base_stat,
        statName: stat.stat.name,
      })) ?? [],
  };

  return pokemon;
}

export function transformPokemonNames(pokemons: PokemonListDTO): string[] {
  return pokemons.results.map((pokemon) => pokemon.name);
}

export function transformPokemonSpecies(
  response: PokemonSpeciesDTO
): PokemonSpecies {
  const evolutionChain: PokemonSpecies = {
    evolution_chain: response.evolution_chain,
  };
  return evolutionChain;
}

const getPokemonEvolutions = (
  evolution: PokemonEvolutionDTO
): PokemonEvolution[] => {
  return [
    {
      id: getPokemonIdByUrl(evolution.species.url),
      name: evolution.species.name,
      url: evolution.species.url,
      sprite: getPokemonSpriteById(getPokemonIdByUrl(evolution.species.url)),
      sprite_Back: getPokemonBackSpriteById(getPokemonIdByUrl(evolution.species.url)),
      is_baby: evolution.is_baby,
      species: evolution.species,
    },
    ...evolution.evolves_to.flatMap((evolution_to) => {
      return getPokemonEvolutions(evolution_to);
    }),
  ];
};

const transformPokemonEvolutionChain = (
  response: PokemonEvolutionChainDTO
): PokemonEvolutionChain => {
  if (typeof response.chain !== "object" || response.chain === null) {
    throw new Error("response.chain is not an object");
  }

  const flattenedEvolutions = getPokemonEvolutions(response.chain);

  const result: PokemonEvolutionChain = {
    id: response.id,
    chain: flattenedEvolutions,
  };
  return result;
};

export default transformPokemonEvolutionChain;
