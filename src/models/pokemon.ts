export type PokemonAbility = {
  ability: {
    name: string;
  };
  slot: number;
  isHidden: boolean;
};

export type PokemonSprites = {
  backDefault: string;
  backFemale?: string;
  backShiny?: string;
  backShinyFemale?: string;
  frontDefault: string;
  frontFemale?: string;
  frontShiny?: string;
  frontShinyFemale?: string;
  officialArtworkFrontDefault?: string;
};

export type PokemonState = {
  baseStat: number;
  statName: string;
};

export type Pokemon = {
  name: string;
  species: {
    url: string;
  };
  abilities: PokemonAbility[];
  id: number;
  isDefault: boolean;
  order: number;
  sprites: PokemonSprites;
  types: string[];
  weight: number;
  height: number;
  base: number;
  stats: PokemonState[];
};

export type PokemonSpecies = {
  name?: string;
  evolution_chain: {
    url: string;
  };
};

export type PokemonEvolution = {
  id: number;
  name: string;
  url: string;
  sprite: string;
  sprite_Back: string;
  species: PokemonSpecies;
  is_baby: boolean;
};

export type PokemonEvolutionChain = {
  id: number;
  chain: PokemonEvolution[];
};
