import { Pokemon, PokemonAbility } from "~src/models";
import $ from "./AboutTab.module.scss";

interface Props {
  pokemonData?: Pokemon[] | undefined;
  PokemonAbility?: PokemonAbility[] | undefined;
}

const convertHeightToMeters = (height: number) => {
  return `${height / 10} m`;
};

const convertWeightToKilograms = (weight: number) => {
  return `${weight / 100} kg`;
};

const AboutTab = ({ pokemonData }: Props) => {
  const pokemon = pokemonData?.[0];
  const pokeID = pokemon?.id || 0;
  const id = pokeID.toString().padStart(3, "0");
  const abilitiesList = pokemon?.abilities
    .map((ability) => ability.ability.name)
    .join(" | ");

  return (
    <ul className={$.aboutList}>
      <li className={$.listItemContainer}>
        <p className={$.title}>Name</p>
        <p className={$.info}>{pokemon?.name}</p>
      </li>
      <li className={$.listItemContainer}>
        <p className={$.title}>ID</p>
        <p className={$.info}>{id}</p>
      </li>
      <li className={$.listItemContainer}>
        <p className={$.title}>Base</p>
        <p
          className={[$.uppercase, $.info].join(" ")}
        >{`${pokemon?.base} xp`}</p>
      </li>
      <li className={$.listItemContainer}>
        <p className={$.title}>Weight</p>
        <p className={[$.lowercase, $.info].join(" ")}>
          {pokemon?.weight ? convertWeightToKilograms(pokemon.weight) : ""}
        </p>
      </li>
      <li className={$.listItemContainer}>
        <p className={$.title}>Height</p>
        <p className={[$.lowercase, $.info].join(" ")}>
          {pokemon?.height ? convertHeightToMeters(pokemon.height) : ""}
        </p>
      </li>

      <li className={$.listItemContainer}>
        <p className={$.title}>Types</p>
        <p className={$.info}>{pokemon?.types.join(" | ")}</p>
      </li>

      <li className={$.listItemContainer}>
        <p className={$.title}>Abilities</p>
        <p className={$.info}>{abilitiesList}</p>
      </li>
    </ul>
  );
};

export default AboutTab;
