import React from "react";
import { PokemonState } from "~src/models";
import $ from "./StateTab.module.scss";

interface Props {
  pokemonStats?: PokemonState[];
}

const StateTab = ({ pokemonStats }: Props) => {
  const convertBaseToProcent = (baseStat: number) => {
    const percentage = `${Math.min((baseStat / 100) * 100, 100)}%`;
    return percentage;
  };

  return (
    <ul className={$.stateList}>
      {pokemonStats?.map((stat, index) => (
        <li key={index} className={$.stateListItem}>
          <p className={[$.stat, $.statName].join(" ")}>{stat.statName}</p>
          <p className={[$.stat, $.baseStat].join(" ")}>{stat.baseStat}</p>
          <span
            className={$.statBar}
            style={{ width: convertBaseToProcent(stat.baseStat) }}
          ></span>
        </li>
      ))}
    </ul>
  );
};

export default StateTab;
