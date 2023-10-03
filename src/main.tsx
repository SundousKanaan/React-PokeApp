import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { BattleProvider } from "./Contexts/battleContext";
import { DarkModeProvider } from "./Contexts/darkModeContext";
import { FavoritesProvider } from "./Contexts/favoritesContext";
import { SearchBarProvider } from "./Contexts/searchBarContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchBarProvider>
        <BattleProvider>
          <DarkModeProvider>
            <FavoritesProvider>
              <App />
            </FavoritesProvider>
          </DarkModeProvider>
        </BattleProvider>
      </SearchBarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
