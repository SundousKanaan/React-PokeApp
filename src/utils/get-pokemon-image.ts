const spriteUri =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const spriteBackUri =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/";
const dreamWorldUri =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
const officialArtworkUri =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const officialArtworkChinyUri =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/";
const frontChinyUri =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";
export const getPokemonSpriteById = (id: number): string =>
  `${spriteUri}${id}.png`;
export const getPokemonBackSpriteById = (id: number): string =>
  `${spriteBackUri}${id}.png`;
export const getPokemonDreamWorldById = (id: number): string =>
  `${dreamWorldUri}${id}.svg`;
export const getPokemonArtworkById = (id: number): string =>
  `${officialArtworkUri}${id}.png`;
export const getPokemonArtworkShinyById = (id: number): string =>
  `${officialArtworkChinyUri}${id}.png`;
export const getPokemonFrontShinyById = (id: number): string =>
  `${frontChinyUri}${id}.png`;
