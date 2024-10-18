import paths from "~src/constants/paths";
import BattleLayout from "~src/layouts/BattleLayout/BattleLayout";
import FavoritesLayout from "~src/layouts/FavoritesLayout/FavoritesLayout";
import HomeLayout from "~src/layouts/HomeLayout/HomeLayout";
import NotFoundLayout from "./layouts/NotFoundLayout/NotFoundLayout";

type Route = {
  path: string;
  view: React.FC;
  exact?: boolean;
};

const routes: Route[] = [
  {
    path: paths.home,
    view: HomeLayout,
  },
  {
    path: paths.favorites,
    view: FavoritesLayout,
  },
  {
    path: paths.battle,
    view: BattleLayout,
  },
  {
    path: "*",
    view: NotFoundLayout,
  },
];

export default routes;
