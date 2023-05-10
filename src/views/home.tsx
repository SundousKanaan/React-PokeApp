import { PokemonList } from "@app/components/molecules/pokemonList/PokemonList";
import $ from "./home.module.scss";

export const Home = () => {
  return (
    <section className={$.content}>
      <h1>Pokemons</h1>

      <PokemonList />
    </section>
  );
};
