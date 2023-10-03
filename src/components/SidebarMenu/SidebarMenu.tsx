import classnames from "classnames";
import React from "react";
import { useLocation } from "react-router-dom";
import $ from "~src/components/SidebarMenu/SidebarMenu.module.scss";
import { useBattleContext } from "~src/Contexts/battleContext";
import { useDarkModeContext } from "~src/Contexts/darkModeContext";
import SidebarButton from "../Buttons/SidebarButton";
import ModeButton from "../ModeButton/ModeButton";
import SearchBar from "../SearchBar/SearchBar";

interface Props {
  menuState: boolean;
}

const SidebarMenu: React.FC<Props> = ({ menuState }) => {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();
  const { battleState } = useBattleContext();

  const amountBattlePokemons = battleState.filter(
    (pairs: { name1: string; name2: string | null }) => pairs.name2 !== null
  ).length;

  return (
    <>
      <section className={classnames($.sidebar, { [$.isOpened]: menuState })}>
        <div className={$.TopContainer}>
          <div className={$.pokemonlogoContainer}>
            <img
              className={$.pokemonLogo}
              src="images/pokemon-logo.svg"
              alt="Pokemon logo image"
            />
          </div>
          <SearchBar />
        </div>

        <div className={$.buttonsContainer}>
          <SidebarButton
            name="Pokémon"
            icon={location.pathname === "/" ? "active-pokeball" : "pokeball"}
            locationPath="/"
            isActive={location.pathname === "/"}
          />
          <SidebarButton
            name="Favorites"
            icon={
              location.pathname === "/favorites" ? "favorited" : "unfavorited"
            }
            locationPath="/favorites"
            isActive={location.pathname === "/favorites"}
          />
          <SidebarButton
            name={
              amountBattlePokemons === 0
                ? "No battles started"
                : `(${amountBattlePokemons}) Battle`
            }
            icon={location.pathname === "/battle" ? "active-battle" : "battle"}
            locationPath="/battle"
            isActive={location.pathname === "/battle"}
          />
        </div>

        <footer className={$.rightsContainer}>
          <div className={$.modeButtonContainer}>
            <ModeButton onModeChange={toggleDarkMode} modeState={isDarkMode} />
          </div>
          <p className={$.rights}>
            Copyright © 2022 Triple. All rights reserved.
          </p>
          <p className={$.rights}>
            Pokémon and Pokémon character names are trademarks of Nintendo.
          </p>
        </footer>
      </section>
    </>
  );
};

export default SidebarMenu;
