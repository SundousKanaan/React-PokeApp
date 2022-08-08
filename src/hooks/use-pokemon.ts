import { useEffect, useState } from "react";
import { Ability, Sprites } from "../components/types/pokemon";
import { getPokemon } from "../services/api";

type Pokemon = {
  name: string;
  abilities: Ability[];
  id: number;
  isDefault: boolean;
  order: number;
  sprites: Sprites;
  types: string[];
  weight: number;
};

function transformType(response: { type: { name: string } }) {
  return response?.type?.name;
}

function transformPokemon(name: string, response: any) {
  const pokemon: Pokemon = {
    name,
    abilities: response.abilities.map(transformAbility),
    sprites: transformSprites(response.sprites),
    isDefault: response.is_default,
    order: response.order,
    id: response.id,
    types: response.types.map(transformType),
    weight: response.weight,
  };
  return pokemon;
}

function transformAbility(response: any) {
  return {
    name: response.name,
    isHidden: response.is_hidden,
    slot: response.slot,
  } as Ability;
}

function transformSprites(response: any) {
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

export default function usePokemon(name: string) {
  const [pokemon, setPokemon] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getPokemon(name);
      setPokemon(transformPokemon(name, response));
      setLoading(false);
    })();
  }, [name]);

  return { pokemon, loading };
}
