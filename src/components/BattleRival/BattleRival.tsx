import classnames from "classnames";
import usePokemon from "~src/hooks/usePokemon";
import StateTab from "../StateTab/StateTab";
import $ from "./BattleRival.module.scss";

interface Props {
  name: string | null;
  winner: string | undefined;
}

const BattleRival = ({ name, winner }: Props) => {
  const { pokemon } = usePokemon(name);
  const pokeID: number = pokemon?.id || 0;
  const pokedex: string = pokeID.toString().padStart(3, "0");

  return (
    <div
      className={classnames($.rivalContainer, {
        [$.draw]: winner === "Draw",
        [$.noBattle]: winner === "NoBattle",
        [$.winner]: winner === name,
        [$.loser]: winner !== name,
      })}
    >
      <h3 className={$.pokemonName}>{pokemon?.name}</h3>
      <p className={$.id}>{pokedex}</p>
      <div className={$.imgContainer}>
        <img
          className={$.img}
          src={pokemon?.other.officialArtwork}
          alt={`${pokemon?.name} official artwork image`}
        />
      </div>
      <ul className={$.typesList}>
        {pokemon?.types.map((type, index) => (
          <li key={index} className={`${type} ${$.typeItem}`}>
            {type}
          </li>
        ))}
      </ul>
      <ul className={$.statesList}>
        <StateTab pokemonStats={pokemon?.stats} />
      </ul>
    </div>
  );
};

export default BattleRival;
