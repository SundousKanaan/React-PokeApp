import classnames from "classnames";
import React from "react";
import { useLocation } from "react-router-dom";
import $ from "~src/components/SidebarMenu/SidebarMenu.module.scss";
import SidebarButton from "../Buttons/SidebarButton";
import SearchBar from "../SearchBar/SearchBar";

interface Props {
  menuState: boolean;
}

const SidebarMenu: React.FC<Props> = ({ menuState }) => {
  const location = useLocation();

  return (
    <>
      <section className={classnames($.sidebar, { [$.isOpened]: menuState })}>
        <div className={$.TopContainer}>
          <div className={$.pokemonlogoContainer}>
            <img src="images/pokemon-logo.svg" alt="Pokemon logo image" />
          </div>
          <SearchBar />
        </div>

        <div className={$.buttonsContainer}>
          <SidebarButton
            name="Pokémon"
            icon="pokeball"
            locationPath="/"
            isActive={location.pathname === "/"}
          />
          <SidebarButton
            name="Favorites"
            icon="unfavorited"
            locationPath="/favorites"
            isActive={location.pathname === "/favorites"}
          />
        </div>

        <footer className={$.rightsContainer}>
          <p>Copyright © 2022 Triple. All rights reserved.</p>
          <p>Pokémon and Pokémon character names are trademarks of Nintendo.</p>
        </footer>
      </section>
    </>
  );
};

export default SidebarMenu;
