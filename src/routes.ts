import paths from "~src/constants/paths";
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
];

export default routes;
