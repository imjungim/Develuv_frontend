import React from "react";
import ReactDOM from "react-dom/client";
import "react-router-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Modules/index";
import ScrollToTop from "./Components/ScrollTOtop";

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </HashRouter>
);
