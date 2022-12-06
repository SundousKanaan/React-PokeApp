import { paths } from "@app/core/constants/paths";
import HomeView from "@app/views/home";

type iRoute = {
    path: string;
    view: React.FC;
    exact?: boolean;
};

export const routes: iRoute[] = [
    {
        path: paths.home,
        view: HomeView,
    },
];
