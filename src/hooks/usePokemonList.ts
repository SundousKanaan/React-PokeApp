import { useEffect, useState } from "react";
import { getPokemonList } from "~src/services/pokemon";

export default function usePokemonList() {
  const [list, setList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const newList = await getPokemonList();
      setList(newList);
      setLoading(false);
    })();
  }, []);

  return { list, loading };
}
