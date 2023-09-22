import * as React from "react";
import { Pokemon } from "~src/models";
import { getPokemon } from "~src/services/pokemon";

export default function usePokemon(name: string | number) {
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const response = await getPokemon(name?.toString() || "");
      setPokemon(response);
      setLoading(false);
    })();
  }, [name]);
  return { pokemon, loading };
}
