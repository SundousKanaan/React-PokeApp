import usePokemon from "@app/hooks/use-pokemon";

import $ from "./Pokemon.module.scss";

interface Props {
  name: string;
}

export const Pokemon = ({ name }: Props) => {
  const { pokemon } = usePokemon(name);
  const formattedStringId = pokemon && `00${pokemon.id}`.slice(-3);

  return (
    <li className={$.pokemon}>
      <div className={$.img_container}>
        <div className={$.pokemon_number}>{formattedStringId}</div>
        <img
          className={$.img}
          alt={pokemon?.name}
          src={pokemon?.sprites.frontDefault}
        />
      </div>
      <div className={$.footer}>
        <h2 className={$.title}>{pokemon?.name}</h2>
        <button className={$.modal_button}>
          <div />
          <div />
          <div />
        </button>
      </div>
    </li>
  );
};
