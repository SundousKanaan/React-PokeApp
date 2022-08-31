import React from "react";
import Pokemon from "@app/components/molecule/pokemon/pokemon";
import usePokemonNames from "@app/hooks/use-pokemon-names";
import $ from "./app.module.scss";

const App: React.FunctionComponent = () => {
    // Example usage of the two hooks
    const { names } = usePokemonNames();

    return (
        /** By creating a classname with $ it can be defined in app.module.scss
         *   It will be suffixed in the build (like .app_HKD5) to prevent other components with the same classname
         *   from styling this class as well
         */
        <main className={$.app}>
            <h1>Pokemons</h1>
            {/* Create a list by mapping over all the pokemon names and rendering the Pokemon Component */}
            <ul>
                {names.map((name) => (
                    <Pokemon key={name} name={name} />
                ))}
            </ul>
        </main>
    );
};

export default App;
