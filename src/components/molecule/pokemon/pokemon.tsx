import React from "react";
import usePokemon from "@app/hooks/use-pokemon";

import $ from "./pokemon.module.scss";

interface Props {
    name: string;
}

const Pokemon: React.FunctionComponent<Props> = ({ name }) => {
    // Use the name that is passec in the props to get the full pokemon from the usePokemon hook
    const { pokemon } = usePokemon(name);

    return (
        <li className={$.pokemon}>
            <img
                className={$.img}
                alt={pokemon?.name}
                src={pokemon?.sprites.frontDefault}
            />
            <h2 className={$.title}>{pokemon?.name}</h2>
        </li>
    );
};

export default Pokemon;
