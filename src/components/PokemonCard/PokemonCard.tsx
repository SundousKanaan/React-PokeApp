import usePokemon from "~src/hooks/usePokemon";

import $ from "./PokemonCard.module.scss";

interface Props {
  name: string;
}

const PokemonCard = ({ name }: Props) => {
  // Use the name that is passed in the props to get the full pokemon from the usePokemon hook.
  const { pokemon } = usePokemon(name);

  // let pokedex:number = 000;
  const pokeID: number = pokemon?.order || 0;
  const pokedex: string = pokeID.toString().padStart(3, "0");

  return (
    <section className={$.container}>
      <p className={$.pokedex}>{pokedex}</p>

      <img
        className={$.img}
        alt={pokemon?.name}
        src={pokemon?.sprites.frontDefault}
      />

      <div className={$.pokemonNameContainer}>
        <h2 className={$.title}>{pokemon?.name}</h2>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="16"
            viewBox="0 0 3 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 2C3 2.82843 2.32843 3.5 1.5 3.5C0.671573 3.5 0 2.82843 0 2C0 1.17157 0.671573 0.5 1.5 0.5C2.32843 0.5 3 1.17157 3 2ZM3 8C3 8.82843 2.32843 9.5 1.5 9.5C0.671573 9.5 0 8.82843 0 8C0 7.17157 0.671573 6.5 1.5 6.5C2.32843 6.5 3 7.17157 3 8ZM1.5 15.5C2.32843 15.5 3 14.8284 3 14C3 13.1716 2.32843 12.5 1.5 12.5C0.671573 12.5 0 13.1716 0 14C0 14.8284 0.671573 15.5 1.5 15.5Z"
              fill="#0E0940"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PokemonCard;
