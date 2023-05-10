import usePokemonNames from "@app/hooks/use-pokemon-names";
import { Loader } from "../../atoms/loader/Loader";
import { Pokemon } from "../pokemon/Pokemon";
import $ from "./PokemonList.module.scss";

export const PokemonList = () => {
  const { names, loading } = usePokemonNames();

  if (loading) {
    return <Loader />;
  }

  if (!names || names.length === 0) {
    // TODO: make a better empty state
    return <div>empty state</div>;
  }

  return (
    <ul className={$.list}>
      {names.map((name) => (
        <Pokemon key={name} name={name} />
      ))}
    </ul>
  );
};
