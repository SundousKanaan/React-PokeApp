import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "~src/routes";
import $ from "./app.module.scss";

const App: React.FunctionComponent = () => {
  return (
    /**
     * By creating a classname with $ it can be defined in app.module.scss
     * It will be suffixed with a hash in the build (like .app__HK5) to prevent
     * that other components with the same classname can effect the styling as well
     */
    <div className={$.view}>
      
      <main className={$.main}>
        {/* Create a list by mapping over all the pokemon names and rendering the Pokemon Component */}
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
