export type AbilityDTO = {
  ability: {
    name: string;
  };
  slot: number;
  is_hidden: boolean;
};

export type SpritesDTO = {
  back_default: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  other?: {
    dream_world: {
      front_default: string;
    };
    ["official-artwork"]: {
      front_default: string;
    };
  };
};

export type PokemonDefinitionDTO = {
  name: string;
  url: string;
};

export type PokemonStatsDTO = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonDTO = {
  species: {
    url: string;
  };
  abilities: AbilityDTO[];
  base_experience: number;
  forms: PokemonDefinitionDTO[];
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  sprites: SpritesDTO;
  other: {
    dream_world: {
      front_default: string;
    };
    official_artwork: {
      front_default: string;
    };
  };
  weight: number;
  types: {
    slot: number;
    type: PokemonDefinitionDTO;
  }[];
  stats: PokemonStatsDTO[];
};

export type PokemonListDTO = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonDefinitionDTO[];
};

export type PokemonSpeciesDTO = {
  name: string;
  url: string;
  evolution_chain: {
    name: string;
    url: string;
  };
};

export type PokemonEvolutionDTO = {
  sprites: SpritesDTO;
  evolves_to: PokemonEvolutionDTO[];
  species: PokemonSpeciesDTO;
  is_baby: boolean;
};

export type PokemonEvolutionChainDTO = {
  id: number;
  chain: PokemonEvolutionDTO;
};
