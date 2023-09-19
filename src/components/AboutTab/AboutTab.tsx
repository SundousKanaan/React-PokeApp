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
      <li key={pokemon?.name}>
        <p>Name</p>
        <p>{pokemon?.name}</p>
      </li>
      <li key="id">
        <p>ID</p>
        <p>{id}</p>
      </li>
      <li key="base">
        <p>Base</p>
        <p className={$.uppercase}>{`${pokemon?.base} xp`}</p>
      </li>
      <li key="Weight">
        <p>Weight</p>
        <p className={$.lowercase}>
          {pokemon?.weight ? convertWeightToKilograms(pokemon.weight) : ""}
        </p>
      </li>
      <li key="Height">
        <p>Height</p>
        <p className={$.lowercase}>
          {pokemon?.height ? convertHeightToMeters(pokemon.height) : ""}
        </p>
      </li>

      <li key="Types">
        <p>Types</p>
        <p>{pokemon?.types.join(" | ")}</p>
      </li>

      <li key="Abilities">
        <p>Abilities</p>
        <p>{abilitiesList}</p>
      </li>
    </ul>
  );
};

export default AboutTab;
