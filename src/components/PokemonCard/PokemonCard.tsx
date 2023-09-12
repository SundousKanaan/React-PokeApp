import React, { useState } from "react";
import MorePopup from "~src/components/MorePopup/MorePopup";
import usePokemon from "~src/hooks/usePokemon";
import $ from "./PokemonCard.module.scss";

interface Props {
  name: string;
  onAddToFavorites: () => void;
  isFavorited: boolean;
}

const PokemonCard = ({
  name,
  onAddToFavorites,
  isFavorited = false,
}: Props) => {
  const { pokemon } = usePokemon(name);
  const pokeID: number = pokemon?.order || 0;
  const pokedex: string = pokeID.toString().padStart(3, "0");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handlePopoverOpen = () => {
    setPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  const handleAddToFavorites = () => {
    if (onAddToFavorites) {
      onAddToFavorites();
    }
  };

  return (
    <section className={$.container}>
      <p className={$.pokedex}>{pokedex}</p>

      <img
        className={$.img}
        alt={pokemon?.name}
        src={pokemon?.sprites.frontDefault}
      />

      <div className={$.pokemonNameContainer}>
        <h2 className={$.title}>{pokemon?.name}</h2>
        <MorePopup
          isOpen={popoverOpen}
          onClose={handlePopoverClose}
          onAddToFavorites={handleAddToFavorites}
          isFavorited={isFavorited}
        >
          <button className={$.popupButton} onClick={handlePopoverOpen}>
            <img src="/icons/morePopup.svg" alt="more popup" />
          </button>
        </MorePopup>
      </div>
    </section>
  );
};

export default PokemonCard;
