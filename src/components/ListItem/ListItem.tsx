import { Pokemon } from "~src/models";

interface Props {
  pokemonKeys?: string[] | undefined;

}

const ListItem = ({ pokemonKeys }: Props) => {
  return (
    <li>
      <p>name</p>
      <p>999</p>
    </li>
  );
};
export default ListItem;
