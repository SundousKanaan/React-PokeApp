import React from "react";
import usePokemon from "../../../hooks/use-pokemon";
import usePokemonNames from "../../../hooks/use-pokemon-names";

import $ from "./app.module.scss";

const App: React.FunctionComponent = () => {
    // Example usage of the two hooks
    const { names } = usePokemonNames();
    const { pokemon: ditto } = usePokemon("ditto");

    return (
        <main className={$.app}>
            <h1>Dit is een test</h1>
            <ul>
                {names.map((name) => (
                    <li>{name}</li>
                ))}
            </ul>
            {/* <p>{ditto}</p> */}
        </main>
    );
};

export default App;
