// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import "./styles/index.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

