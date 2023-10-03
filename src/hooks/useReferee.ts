import usePokemonData from "~src/hooks/usePokemonData";

const useReferee = (pokemon1Name: string, pokemon2Name: string | null) => {
  const pokemon1Data = usePokemonData(pokemon1Name);
  const pokemon2Data = pokemon2Name ? usePokemonData(pokemon2Name) : null; 

  const calculateWinner = (): string => {
    if (pokemon1Data.pokemonData && pokemon2Data?.pokemonData) {
      const baseStat1 = pokemon1Data.pokemonData?.stats[0]?.baseStat;
      const baseStat2 = pokemon2Data.pokemonData?.stats[0]?.baseStat;

      if (baseStat1 !== undefined && baseStat2 !== undefined) {
        if (baseStat1 > baseStat2) {
          return pokemon1Data.pokemonData?.name;
        }
        if (baseStat1 < baseStat2) {
          return pokemon2Data.pokemonData?.name;
        }
        if (baseStat1 === baseStat2) {
          return "Draw";
        }
      }
    }

    return "NoBattle";
  };

  const winner = calculateWinner();
  return winner;
};

export default useReferee;
