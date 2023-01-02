import { useEffect, useState } from "react";
import { getPokemon, Pokemon } from "@app/core/domains/pokemon";

export default function usePokemon(name: string) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getPokemon(name);
      setPokemon(response);
      setLoading(false);
    })();
  }, [name]);

  return { pokemon, loading };
}
