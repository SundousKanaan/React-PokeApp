import React from "react";
import Pokemon from "@app/components/molecule/pokemon/pokemon";
import usePokemonNames from "@app/hooks/use-pokemon-names";
import $ from "./app.module.scss";

const App: React.FunctionComponent = () => {
    // Example usage of the two hooks
    const { names } = usePokemonNames();

    return (
        /**
         * By creating a classname with $ it can be defined in app.module.scss
         * It will be suffixed with a hash in the build (like .app__HK5) to prevent
         * that other components with the same classname can effect the styling as well
         */
        <main className={$.app}>
            <div className={$.view}>
                <section className={$.sidebar}>
                    <h2>Sidebar</h2>
                </section>
                {/* Create a list by mapping over all the pokemon names and rendering the Pokemon Component */}
                <section>
                    <h1>Pokemons</h1>
                    <ul className={$.list}>
                        {names.map((name) => (
                            <Pokemon key={name} name={name} />
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default App;
