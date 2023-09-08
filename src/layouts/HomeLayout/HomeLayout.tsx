import * as React from "react";
import Header from "~src/components/Header/Header";
import PokemonCard from "~src/components/PokemonCard/PokemonCard";
import usePokemonList from "~src/hooks/usePokemonList";
import $ from "./HomeLayout.module.scss";

const HomeLayout: React.FunctionComponent = () => {
  const { list } = usePokemonList();

  return (
    <section className={$.componentsContainer}>
      <div className={$.header}>
        <Header />
      </div>

      <div className={$.listContainer}>
        <h1>All Pokemon's</h1>
        <ul className={$.list}>
          {/* Create a list by mapping over all the pokemon names and rendering the Pokemon Component */}
          {list.map((name) => (
            <li key={name} className={$.listItem}>
              <PokemonCard name={name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeLayout;
