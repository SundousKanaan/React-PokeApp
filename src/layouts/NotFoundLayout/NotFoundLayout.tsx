import React, { useEffect, useState } from "react";
import SidebarButton from "~src/components/Buttons/SidebarButton";
import usePokemon from "~src/hooks/usePokemon";
import {
  getPokemonDreamWorldById,
  getPokemonArtworkById,
} from "~src/utils/get-pokemon-image";
import $ from "./NotFoundLayout.module.scss";

const NotFoundLayout: React.FC = () => {
  const [pokeId, setPokeId] = useState<number>(143);
  const pokemon = usePokemon(pokeId);
  const pokemonName = pokemon?.pokemon?.name;
  const [pokemonImg, setPokemonImg] = useState<string>(
    getPokemonDreamWorldById(pokeId)
  );

  const idChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    if (inputValue === 0 || inputValue > 1000) {
      setPokeId(143);
      setPokemonImg(getPokemonDreamWorldById(143));
    } else {
      setPokeId(inputValue);
    }
  };

  useEffect(() => {
    const dreamWorldImg = pokemon.pokemon?.other.dreamWorld;
    if (!dreamWorldImg) {
      setPokemonImg(getPokemonArtworkById(pokeId));
    } else {
      setPokemonImg(getPokemonDreamWorldById(pokeId));
    }
  }, [pokemon]);

  const containerStyle = {
    backgroundImage: `url(${pokemonImg})`,
  };

  return (
    <div className={$.container} style={containerStyle}>
      <div className={$.errorNumberContainer}>
        <h1 className={$.errorNumber}>404</h1>
        <span className={$.errorImgContainer}>
          <img
            className={$.errorImg}
            src={pokemonImg}
            alt={`${pokemonName} image`}
          />
        </span>
      </div>
      <p className={$.errorNote}>
        <span className={$.oops}>Ooops! </span>
        Awild <span className={$.pokemonName}>{`${pokemonName}`}</span> has
        blocked your path!
      </p>

      <span className={$.linkContainer}>
        <SidebarButton
          name="Home page"
          icon="pokeball"
          locationPath="/"
          isActive={true}
        />
      </span>

      <label htmlFor="pokeId" className={$.label}>
        <span>Try searching for another pokemon id</span>
        <input
          className={$.input}
          type="number"
          id="pokeId"
          placeholder="143"
          onChange={idChange}
        />
      </label>
    </div>
  );
};

export default NotFoundLayout;
