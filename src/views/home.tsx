import React from "react";
import Pokemon from "@app/components/molecule/pokemon/pokemon";
import usePokemonNames from "@app/hooks/use-pokemon-names";
import $ from "./home.module.scss";

const Home: React.FunctionComponent = () => {
  // Example usage of the two hooks
  const { names } = usePokemonNames();

  return (
    <section>
      <h1>Pokemons</h1>
      <ul className={$.list}>
        {/* Create a list by mapping over all the pokemon names and rendering the Pokemon Component */}
        {names.map((name) => (
          <Pokemon key={name} name={name} />
        ))}
      </ul>
    </section>
  );
};

export default Home;
