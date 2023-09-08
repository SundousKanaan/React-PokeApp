import classnames from "classnames";
import * as React from "react";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import $ from "./Header.module.scss";

const Header: React.FunctionComponent = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  function menuOpen() {
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
        <button className={$.menuButton} onClick={menuOpen}>
          <img src="/icons/Menu.svg" alt="menu svg icon" />
        </button>
      </div>

      <SidebarMenu menuState={isOpened} />
      <button
        className={classnames($.closeSidebarButton, {
          [$.menuIsOpened]: isOpened,
        })}
        onClick={menuOpen}
      ></button>
    </>
  );
};

export default Header;
