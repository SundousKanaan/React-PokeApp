const getPokemonIdByUrl = (url: string): number => {
  const pattern = /\/(\d+)\//;
  return parseInt(url.match(pattern)?.[1] ?? "0", 10);
};

export default getPokemonIdByUrl;