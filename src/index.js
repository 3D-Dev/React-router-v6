import React from "react";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import store from "./components/StoreComponent";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
