import React from "react";
import usePokemonNames from "../../../hooks/use-pokemon-names";
import usePokemon from "../../../hooks/use-pokemon";

import $ from "./app.module.scss";

function App() {
  //Example usage of the two hooks
  const { names } = usePokemonNames();
  const { pokemon: ditto } = usePokemon("ditto");

  return (
    <main className={$.app}>
      <h1>Dit is een test</h1>
    </main>
  );
}

export default App;
