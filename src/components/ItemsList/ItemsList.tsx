import PokemonCard from "~src/components/PokemonCard/PokemonCard";
import { useFavoritesContext } from "~src/Contexts/favoritesContext";
import $ from "./ItemsList.module.scss";

interface Props {
  list: string[];
  title: string;
}
const ItemsList = ({ list, title }: Props) => {
  const { favoritedState, toggleFavorite } = useFavoritesContext();

  return (
    <>
      <h1>{title}</h1>
      <ul className={$.list}>
        {list.map((name) => (
          <li key={name} className={$.listItem}>
            <PokemonCard
              name={name}
              onAddToFavorites={() => toggleFavorite(name)}
              isFavorited={favoritedState.includes(name)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ItemsList;
