import { useEffect, useState } from "react";
import { getPokemonList } from "~src/services/pokemon";

export default function usePokemonList() {
  const [list, setList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const list = await getPokemonList();
      setList(list);
      setLoading(false);
    })();
  }, []);

  return { list, loading };
}
