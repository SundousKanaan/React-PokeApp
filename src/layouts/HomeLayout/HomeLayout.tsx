import * as React from "react";
import PokemonCard from "~src/components/PokemonCard/PokemonCard";
import usePokemonList from "~src/hooks/usePokemonList";
import $ from "./HomeLayout.module.scss";

const HomeLayout: React.FunctionComponent = () => {
  // Example usage of the hook.
  const { list } = usePokemonList();

  return (
    <section>
      <h1>Pokemons</h1>
      <ul className={$.list}>
        {/* Create a list by mapping over all the pokemon names and rendering the Pokemon Component */}
        {list.map((name) => (
          <li key={name} className={$.listItem}>
            <PokemonCard name={name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeLayout;
