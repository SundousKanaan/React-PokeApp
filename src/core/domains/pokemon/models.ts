export type Ability = {
    name: string;
    slot: number;
    isHidden: boolean;
};

export type Sprites = {
    backDefault: string;
    backFemale?: string;
    backShiny?: string;
    backShinyFemale?: string;
    frontDefault: string;
    frontFemale?: string;
    frontShiny?: string;
    frontShinyFemale?: string;
};

export type AbilityResponse = {
    name: string;
    slot: number;
    is_hidden: boolean;
};

export type SpritesResponse = {
    back_default: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
};

export type PokemonDefinitionReponse = {
    name: string;
    url: string;
};

export type Pokemon = {
    name: string;
    abilities: Ability[];
    id: number;
    isDefault: boolean;
    order: number;
    sprites: Sprites;
    types: string[];
    weight: number;
};

export type PokemonResponse = {
    abilities: AbilityResponse[];
    base_experience: number;
    forms: PokemonDefinitionReponse[];
    height: number;
    id: number;
    is_default: boolean;
    name: string;
    order: number;
    sprites: SpritesResponse;
    weight: number;
    types: {
        slot: number;
        type: PokemonDefinitionReponse;
    }[];
};

export type PokemonListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonDefinitionReponse[];
};
