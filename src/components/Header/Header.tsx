import classnames from "classnames";
import * as React from "react";
import ModeButton from "../ModeButton/ModeButton";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import $ from "./Header.module.scss";

const Header: React.FunctionComponent = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  function openMenu() {
    setIsOpened(!isOpened);
  }

  return (
    <>
      <div className={$.pokemonlogoContainer}>
        <img
          className={$.logo}
          src="images/pokemon-logo.svg"
          alt="Pokemon logo image"
        />
        <button className={$.menuButton} onClick={openMenu}>
          <img src="/icons/Menu.svg" alt="menu svg icon" />
        </button>

      </div>

      <SidebarMenu menuState={isOpened} />
      <button
        className={classnames($.closeSidebarButton, {
          [$.menuIsOpened]: isOpened,
        })}
        onClick={openMenu}
      ></button>
    </>
  );
};

export default Header;
