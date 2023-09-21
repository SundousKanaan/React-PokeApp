import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { DarkModeProvider } from "./Contexts/darkModeContext";
import { FavoritesProvider } from "./Contexts/favoritesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
