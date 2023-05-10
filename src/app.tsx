import { Route, Routes } from "react-router-dom";
import { routes } from "@app/routes";
import $ from "./app.module.scss";
import { Sidebar } from "./components/organisms/sidebar/Sidebar";

const App = () => {
  return (
    <main className={$.app}>
      <div className={$.view}>
        <Sidebar />
        <Routes>
          {routes.map(({ path, view: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </main>
  );
};

export default App;
