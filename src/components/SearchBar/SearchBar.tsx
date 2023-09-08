import React from "react";
import $ from "./SearchBar.module.scss";


const SearchBar = () => {
  return (
    <label className={$.label}>
      <img src="/icons/Search.svg" alt="Search svg icon" className={$.icon}/>
      <input
        type="search"
        id="SearchBar"
        placeholder="Search"
        className={$.input}
      />
    </label>
  );
};

export default SearchBar;
