import * as React from "react";
import Header from "~src/components/Header/Header";
import $ from "./FavoritesLayout.module.scss";

const FavoritesLayout: React.FunctionComponent = () => {
  return (
    <section className={$.componentsContainer}>
      <Header />

      <div className={$.listContainer}>
        <h1>Favorites</h1>
      </div>
    </section>
  );
};

export default FavoritesLayout;
