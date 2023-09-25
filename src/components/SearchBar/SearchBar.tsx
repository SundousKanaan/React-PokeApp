import { useSearchBarContext } from "~src/Contexts/searchBarContext";
import $ from "./SearchBar.module.scss";

const SearchBar = () => {
  const { setSearch } = useSearchBarContext();

  const handleSearchChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setSearch(value);
  };

  return (
    <label htmlFor="SearchBar" className={$.label}>
      <img src="/icons/Search.svg" alt="Search svg icon" className={$.icon} />
      <input
        type="search"
        id="SearchBar"
        placeholder="Search"
        className={$.input}
        onChange={handleSearchChange}
      />
    </label>
  );
};

export default SearchBar;
