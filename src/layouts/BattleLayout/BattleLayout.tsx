import BattlePair from "~src/components/BattlePair/BattlePair";
import EmptyState from "~src/components/EmptyState/EmptyState";
import Header from "~src/components/Header/Header";
import { useBattleContext } from "~src/Contexts/battleContext";
import $ from "./BattleLayout.module.scss";

const BattleLayout: React.FunctionComponent = () => {
  const { battleState } = useBattleContext();

  return (
    <section className={$.componentsContainer}>
      <Header />
      <div className={$.dataContainer}>
        <h1 className={$.pageTitle}>Battles</h1>

        {battleState.length === 0 ? (
          <EmptyState
            mainTitle="Waiting for rivals..."
            showButton={true}
            buttonText="Choose rivals"
          />
        ) : (
          battleState.map((pair, index) => (
            <BattlePair key={index} pair={pair} pairIndex={index} />
          ))
        )}
      </div>
    </section>
  );
};

export default BattleLayout;
