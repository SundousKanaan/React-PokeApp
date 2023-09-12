import React from "react";
import Header from "~src/components/Header/Header";
import ItemsList from "~src/components/ItemsList/ItemsList";
import { useFavoritesContext } from "~src/Contexts/favoritesContext";
import $ from "./FavoritesLayout.module.scss";

const FavoritesLayout: React.FunctionComponent = () => {
  const { favoritedState } = useFavoritesContext();
  return (
    <section className={$.componentsContainer}>
      <Header />
      <div className={$.listContainer}>
        <ItemsList list={favoritedState} title="Favorites" />
      </div>
    </section>
  );
};

export default FavoritesLayout;
