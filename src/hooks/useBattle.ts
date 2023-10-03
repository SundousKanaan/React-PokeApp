import { useState } from "react";

export default function useBattle() {
  const currentBattle = JSON.parse(
    localStorage.getItem("battlePokemons") || "[]"
  ) as string[];

  const createPairs = (names: string[]) => {
    const pairs = [];
    for (let i = 0; i < names.length; i += 2) {
      const pair = { name1: names[i], name2: names[i + 1] || null };
      pairs.push(pair);
    }
    return pairs;
  };

  const [battleState, setBattleState] = useState(createPairs(currentBattle));
  const amountBattlePokemons = currentBattle.length;

  const toggleBattle = (data: string | number) => {
    if (typeof data === "number") {
      const updatedPairs = [...battleState];
      updatedPairs.splice(data, 1);
      const updatedBattle = updatedPairs.reduce(
        (acc, pair) => acc.concat(pair.name1, pair.name2 || []),
        [] as string[]
      );
      localStorage.setItem("battlePokemons", JSON.stringify(updatedBattle));
      setBattleState(updatedPairs);
    } else {
      const updatedBattle = [...currentBattle, data];
      localStorage.setItem("battlePokemons", JSON.stringify(updatedBattle));
      setBattleState(createPairs(updatedBattle));
    }
  };

  return {
    currentBattle,
    toggleBattle,
    battleState,
    amountBattlePokemons,
  };
}
