import usePokemon from "~src/hooks/usePokemon";

import $ from "./PokemonCard.module.scss";

interface Props {
  name: string;
}

const PokemonCard = ({ name }: Props) => {
  // Use the name that is passed in the props to get the full pokemon from the usePokemon hook.
  const { pokemon } = usePokemon(name);

  return (
    <section className={$.container}>
      <img
        className={$.img}
        alt={pokemon?.name}
        src={pokemon?.sprites.frontDefault}
      />
      <h2 className={$.title}>{pokemon?.name}</h2>
    </section>
  );
};

export default PokemonCard;
