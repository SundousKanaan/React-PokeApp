import React from "react";
import usePokemon from "@app/hooks/use-pokemon";

import $ from "./app.module.scss";

interface Props {
    name: string;
}

const Pokemon: React.FunctionComponent<Props> = ({ name }) => {
    // Use the name that is passec in the props to get the full pokemon from the usePokemon hook
    const { pokemon } = usePokemon(name);

    return <li>{pokemon?.name}</li>;
};

export default Pokemon;
