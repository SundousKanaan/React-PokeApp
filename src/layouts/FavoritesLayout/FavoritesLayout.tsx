import React, { useState } from "react";
import DetailsView from "~src/components/DetailsView/DetailsView";
import Header from "~src/components/Header/Header";
import ItemsList from "~src/components/ItemsList/ItemsList";
import { useFavoritesContext } from "~src/Contexts/favoritesContext";
import $ from "./FavoritesLayout.module.scss";

const FavoritesLayout: React.FunctionComponent = () => {
  const { favoritedState } = useFavoritesContext();
  const [selectedPokemonName, setSelectedPokemonName] = useState<
    string | undefined
  >(undefined);

  const toggleDetailsView = (name: string) => {
    setSelectedPokemonName(name);
  };

  return (
    <section className={$.componentsContainer}>
      <Header />
      <div className={$.listContainer}>
        <ItemsList
          list={favoritedState}
          title="Favorites"
          toggleDetailsView={toggleDetailsView}
        />
      </div>
      {selectedPokemonName && (
        <DetailsView
          showState
          toggleDetailsView={() => setSelectedPokemonName(undefined)}
          setSelectedPokemonName={selectedPokemonName}
        />
      )}
    </section>
  );
};

export default FavoritesLayout;
