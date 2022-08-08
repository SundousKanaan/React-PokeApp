import { useEffect, useState } from "react";
import { getListPokemon } from "../services/api";
import { PokemonDefinitionReponse } from "../services/api";

function transformPokemonNames(pokemon: PokemonDefinitionReponse[]) {
  return pokemon.map((mon) => mon.name);
}

export default function usePokemonNames() {
  const [names, setNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const list = await getListPokemon();
      setNames(transformPokemonNames(list));
      setLoading(false);
    })();
  }, []);

  return { names, loading };
}
