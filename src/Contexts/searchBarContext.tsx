import React, { createContext, useState, ReactNode, useContext } from "react";

type SearchBarContextType = {
  search: string;
  setSearch: (search: string) => void;
};

type Props = {
  children: ReactNode;
};

const SearchBarContext = createContext<SearchBarContextType | null>(null);

function SearchBarProvider({ children }: Props) {
  const [search, setSearch] = useState("");
  return (
    <SearchBarContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchBarContext.Provider>
  );
}

const useSearchBarContext = () => {
  const context = useContext(SearchBarContext);
  if (!context) {
    throw new Error(
      "useSearchBarContext must be used within a SearchBarProvider"
    );
  }
  return context;
};

export { SearchBarContext, SearchBarProvider, useSearchBarContext };