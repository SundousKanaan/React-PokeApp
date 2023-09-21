import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "~src/routes";
import $ from "./app.module.scss";

const App: React.FunctionComponent = () => {
  return (
    <div className={$.view}>

      <main className={$.main}>
        <Routes>
          {routes.map(({ path, view: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
    </div>
  );
};

export default App;
