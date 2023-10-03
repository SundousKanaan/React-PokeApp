import BattleRival from "~src/components/BattleRival/BattleRival";
import { useBattleContext } from "~src/Contexts/battleContext";
import useReferee from "~src/hooks/useReferee";
import ActionButtons from "../ActionButtons/ActionButtons";
import EmptyState from "../EmptyState/EmptyState";
import $ from "./BattlePair.module.scss";

interface Props {
  pair: {
    name1: string;
    name2: string | null;
  };
  pairIndex: number;
}

const BattlePair = ({ pair, pairIndex }: Props) => {
  const { toggleBattle } = useBattleContext();
  const handleRemovePair = () => {
    toggleBattle(pairIndex);
  };

  const winner = useReferee(pair.name1, pair.name2);

  return (
    <section className={$.battleContainer}>
      <h2
        className={`${$.battleNumber} ${
          pair.name2 !== null ? $.activeBattle : ""
        }`}
      >
        Battle {pairIndex + 1}
      </h2>
      <div className={$.battleRival}>
        <BattleRival name={pair.name1} winner={winner} />
      </div>

      {pair.name2 ? (
        <div className={$.battleRival}>
          <BattleRival name={pair.name2} winner={winner} />
        </div>
      ) : (
        <div className={$.waitRivalContainer}>
          <EmptyState
            mainTitle="Waiting for rival..."
            showButton={true}
            buttonText="Choose a rival"
          />
        </div>
      )}

      <div className={$.closeButton}>
        <ActionButtons icon="close" name="Close" onClick={handleRemovePair} />
      </div>
    </section>
  );
};

export default BattlePair;
