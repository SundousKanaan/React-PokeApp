import React, { useState } from "react";
import DetailsView from "~src/components/DetailsView/DetailsView";
import Header from "~src/components/Header/Header";
import ItemsList from "~src/components/ItemsList/ItemsList";
import { useSearchBarContext } from "~src/Contexts/searchBarContext";
import usePokemonList from "~src/hooks/usePokemonList";
import $ from "./HomeLayout.module.scss";

const HomeLayout: React.FunctionComponent = () => {
  const { list } = usePokemonList();

  const { search } = useSearchBarContext();
  const [selectedPokemonName, setSelectedPokemonName] = useState<
    string | undefined
  >(undefined);
  const filteredList = React.useMemo(() => {
    if (!search) return list;
    return list.filter((pokemonName) =>
      pokemonName.toLowerCase().includes(search.toLowerCase())
    );
  }, [list, search]);

  const toggleDetailsView = (name: string) => {
    setSelectedPokemonName(name);
  };

  return (
    <section className={$.componentsContainer}>
      <div className={$.header}>
        <Header />
      </div>
      <div className={$.listContainer}>
        <ItemsList
          list={filteredList}
          title="All Pokemon's"
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

export default HomeLayout;
