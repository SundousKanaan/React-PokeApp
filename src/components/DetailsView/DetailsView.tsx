import React from "react";
import MyTabs from "~src/components/Tabs/Tabs";
import usePokemonData from "~src/hooks/usePokemonData";
import {
  getPokemonArtworkById,
  getPokemonArtworkShinyById,
} from "~src/utils/get-pokemon-image";
import $ from "./DetailsView.module.scss";

interface Props {
  showState: boolean;
  toggleDetailsView: () => void;
  setSelectedPokemonName: string |null;
}

const DetailsView = ({
  showState,
  toggleDetailsView,
  setSelectedPokemonName,
}: Props) => {
  const handelDialogState = () => {
    if (showState) {
      toggleDetailsView();
    }
  };

  const { pokemonData } = usePokemonData(setSelectedPokemonName);
  const pokeID: number = pokemonData?.id || 0;
  const pokedex: string = pokeID.toString().padStart(3, "0");
  const ref = React.useRef<HTMLDialogElement | null>(null);

  React.useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (showState) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [showState]);

  return (
    <dialog className={$.dialog} ref={ref}>
      <div className={$.pokemonContainer}>
        <div className={$.pokemonDataContainer}>
          <h2 className={$.pokemonName}>{pokemonData?.name}</h2>
          <p className={$.pokedexNumber}>{pokedex}</p>
          <ul className={$.typesList}>
            {pokemonData?.types.map((type) => (
              <li key={type} className={`${$.pokemonType} ${type}`}>
                {type}
              </li>
            ))}
          </ul>
        </div>
        <div className={$.pokemonImgContainer}>
          <img
            className={[$.pokemonImg, $.firstPokemonImg].join(" ")}
            src={getPokemonArtworkById(pokeID)}
            alt={`${pokemonData?.name} front default image`}
          />
          <img
            className={[$.pokemonImg, $.secondPokemonImg].join(" ")}
            src={getPokemonArtworkShinyById(pokeID)}
            alt={`${pokemonData?.name} front shiny default image`}
          />
        </div>
      </div>
      <div className={$.tabsContainer}>
        <MyTabs pokemonData={pokemonData ? [pokemonData] : []} />
      </div>
      <button className={$.closeDialog} onClick={handelDialogState}>
        <img
          className={$.closeIcon}
          src="/icons/close.svg"
          alt="X close svg icon"
        />
      </button>
    </dialog>
  );
};

export default DetailsView;
