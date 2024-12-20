import classnames from "classnames";
import * as React from "react";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import $ from "./Header.module.scss";

const Header: React.FunctionComponent = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  function openMenu() {
    setIsOpened(!isOpened);
  }

  return (
    <div className={$.headerComponent}>
      <div className={$.pokemonlogoContainer}>
        <div className={$.logoContainer}>
          <img
            className={$.logo}
            src="images/pokemon-logo.svg"
            alt="Pokemon logo image"
          />
        </div>
        <button className={$.menuButton} onClick={openMenu}>
          <img src="/icons/menu.svg" alt="menu svg icon" />
        </button>
      </div>

      <div className={$.sidebarContainer}>
        <SidebarMenu menuState={isOpened} />
      </div>
      <button
        className={classnames($.closeSidebarButton, {
          [$.menuIsOpened]: isOpened,
        })}
        onClick={openMenu}
      ></button>
    </div>
  );
};

export default Header;
