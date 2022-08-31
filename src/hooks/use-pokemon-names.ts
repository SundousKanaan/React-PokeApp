import { useEffect, useState } from "react";
import { getListPokemon } from "@app/core/domains/pokemon";

export default function usePokemonNames() {
    const [names, setNames] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const list = await getListPokemon();
            setNames(list);
            setLoading(false);
        })();
    }, []);

    return { names, loading };
}
