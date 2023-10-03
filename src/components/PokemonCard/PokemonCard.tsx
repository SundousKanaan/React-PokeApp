import { useState } from "react";
import { InView } from "react-intersection-observer";
import LoadingState from "~src/components/LoadingState/LoadingState";
import MorePopup from "~src/components/MorePopup/MorePopup";
import usePokemon from "~src/hooks/usePokemon";
import $ from "./PokemonCard.module.scss";

interface Props {
  name: string;
  onAddToFavorites: () => void;
  isFavorited: boolean;
  toggleDetailsView: () => void;
  isBattle?: boolean;
  onAddToBattle?: () => void;
}

const PokemonCard = ({
  name,
  onAddToFavorites,
  isFavorited = false,
  toggleDetailsView,
  isBattle = false,
  onAddToBattle,
}: Props) => {
  const { pokemon, loading } = usePokemon(name);
  const pokeID: number = pokemon?.id || 0;
  const pokedex: string = pokeID.toString().padStart(3, "0");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleTogglePopover = () => {
    if (popoverOpen) {
      setPopoverOpen(false);
    } else {
      setPopoverOpen(true);
    }
  };

  const handleFavorites = () => {
    if (onAddToFavorites) {
      onAddToFavorites();
      handleTogglePopover();
    }
  };

  const handleDetails = () => {
    toggleDetailsView();
    handleTogglePopover();
  };

  const handleBattle = () => {
    if (onAddToBattle) {
      onAddToBattle();
      handleTogglePopover();
    }
  };

  const handleIntersection = (inView: boolean) => {
    if (!inView && popoverOpen) {
      setPopoverOpen(false);
    }
  };

  return (
    <InView onChange={handleIntersection}>
      {({ ref }) => (
        <section className={$.container} ref={ref}>
          {loading ? (
            <LoadingState />
          ) : (
            <>
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
                  onClose={handleTogglePopover}
                  onAddToFavorites={handleFavorites}
                  isFavorited={isFavorited}
                  toggleDetailsView={handleDetails}
                  onAddToBattle={handleBattle}
                  isBattle={isBattle}
                >
                  <button
                    className={$.popupButton}
                    onClick={handleTogglePopover}
                  >
                    <img src="/icons/morePopup.svg" alt="more popup" />
                  </button>
                </MorePopup>
              </div>
            </>
          )}
        </section>
      )}
    </InView>
  );
};

export default PokemonCard;
