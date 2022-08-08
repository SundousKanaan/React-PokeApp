export type PokemonDefinitionReponse = {
  name: string;
  url: string;
};

async function getApiRequest(endpoint: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}`);
  const json = await response.json();
  return json;
}

export async function getListPokemon() {
  const { results } = await getApiRequest("pokemon?limit=100000&offset=0");
  return results as PokemonDefinitionReponse[];
}

export async function getPokemon(name: string) {
  const response = await getApiRequest(`pokemon/${name}`);
  return response;
}
