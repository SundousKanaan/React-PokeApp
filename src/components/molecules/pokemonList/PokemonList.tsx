import usePokemonNames from "@app/hooks/use-pokemon-names";
import { Loader } from "../../atoms/loader/Loader";
import { Pokemon } from "../pokemon/Pokemon";
import $ from "./PokemonList.module.scss";

export const PokemonList = () => {
  const { names, loading } = usePokemonNames();

  return (
    <ul className={$.list}>
      {loading ? (
        <Loader />
      ) : names && names.length > 0 ? (
        names.map((name) => <Pokemon key={name} name={name} />)
      ) : (
        // TODO: make a better empty state
        <div>empty state</div>
      )}
    </ul>
  );
};
