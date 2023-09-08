import paths from "~src/constants/paths";
import FavoritesLayout from "~src/layouts/FavoritesLayout/FavoritesLayout";
import HomeLayout from "~src/layouts/HomeLayout/HomeLayout";

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
    path: "/favorites",
    view: FavoritesLayout,
  },
];

export default routes;
