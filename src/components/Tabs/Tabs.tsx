import classnames from "classnames";
import React, { useState } from "react";
import "react-tabs/style/react-tabs.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Pokemon } from "~src/models";
import AboutTab from "../AboutTab/AboutTab";
import StateTab from "../StateTab/StateTab";
import EvolutionTab from "../EvolutionTab/EvolutionTab";
import $ from "./Tabs.module.scss";

interface Props {
  pokemonData?: Pokemon[] | undefined;
}

const MyTabs = ({ pokemonData }: Props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const data = pokemonData?.[0];


  const handleTabSelect = (index: number) => {
    setSelectedTabIndex(index);
  };

  return (
    <Tabs
      className={$.tabs}
      selectedIndex={selectedTabIndex}
      onSelect={handleTabSelect}
    >
      <TabList className={$.tabList}>
        <Tab
          className={classnames($.tabTitle, {
            [$.selectedTab]: selectedTabIndex === 0,
          })}
        >
          About
        </Tab>
        <Tab
          className={classnames($.tabTitle, {
            [$.selectedTab]: selectedTabIndex === 1,
          })}
        >
          State
        </Tab>
        <Tab
          className={classnames($.tabTitle, {
            [$.selectedTab]: selectedTabIndex === 2,
          })}
        >
          Evolution
        </Tab>
      </TabList>

      <TabPanel>
        <AboutTab pokemonData={data ? [data] : []} />
      </TabPanel>

      <TabPanel>
        <StateTab pokemonStats={data ? data.stats : []} />
      </TabPanel>

      <TabPanel className={$.evolutionPanel}>
        <EvolutionTab pokeID={data?.id || 0} />
      </TabPanel>
    </Tabs>
  );
};

export default MyTabs;
