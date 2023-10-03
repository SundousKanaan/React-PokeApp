import usePokemonEvolutions from "~src/hooks/usePokemonEvolution";
import $ from "./EvolutionTab.module.scss";

interface Props {
  pokeID: number;
}

const idGenerator = (id: number) => {
  const pokedex: string = id.toString().padStart(3, "0");
  return pokedex;
};

const EvolutionTab = ({ pokeID }: Props) => {
  const Evolutions = usePokemonEvolutions(pokeID);
  const EvolutionsChain = Evolutions?.pokemonEvolutionChain;
  

  return (
    <ul className={$.evolutionsList}>
      {EvolutionsChain?.chain.map((evolution, index) => (
        <li
          key={index}
          className={$.evolutionsItem}
          style={{ animationDelay: `${index * 0.25}s` }}
        >
          <div className={$.nameContainer}>
            <h2 className={$.name}>{evolution.name}</h2>
            <p className={$.id}>{idGenerator(evolution.id)}</p>
          </div>
          <div className={$.imagesContainer}>
            <img
              className={[$.evolutionImg, $.frontImg].join(" ")}
              src={`${evolution.frontDefault}`}
              alt={`${evolution.name} front_default `}
            />
            <img
              className={[$.evolutionImg, $.backImg].join(" ")}
              src={`${evolution.frontShiny}`}
              alt={`${evolution.name} back_default `}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EvolutionTab;
