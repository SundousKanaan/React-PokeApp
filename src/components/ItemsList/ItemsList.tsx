import PokemonCard from "~src/components/PokemonCard/PokemonCard";
import { useFavoritesContext } from "~src/Contexts/favoritesContext";
import { useSearchBarContext } from "~src/Contexts/searchBarContext";
import EmptyState from "../EmptyState/EmptyState";
import $ from "./ItemsList.module.scss";

interface Props {
  list: string[];
  title: string;
  toggleDetailsView: (name: string) => void;
}
const ItemsList = ({ list, title, toggleDetailsView }: Props) => {
  const { favoritedState, toggleFavorite } = useFavoritesContext();
  const { search } = useSearchBarContext();

  return (
    <>
      <h1>{title}</h1>
      <ul className={$.list}>
        {list.length === 0 ? (
          <EmptyState
            description={
              search === "" ? "Choose your first Pokémon." : undefined
            }
            showButton={search === ""}
          />
        ) : (
          list.map((name) => (
            <li key={name} className={$.listItem}>
              <PokemonCard
                name={name}
                onAddToFavorites={() => toggleFavorite(name)}
                isFavorited={favoritedState.includes(name)}
                toggleDetailsView={() => toggleDetailsView(name)}
              />
            </li>
          ))
        )}
      </ul>
    </>
  );
};
export default ItemsList;
