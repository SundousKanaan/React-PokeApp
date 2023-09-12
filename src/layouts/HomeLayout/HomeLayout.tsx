import * as React from "react";
import Header from "~src/components/Header/Header";
import ItemsList from "~src/components/ItemsList/ItemsList";
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
        <ItemsList list={list} title="All Pokemon's" />
      </div>
    </section>
  );
};

export default HomeLayout;
