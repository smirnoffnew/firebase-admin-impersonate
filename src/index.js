import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { StateProvider } from "./store/context/StateProvider";
import reducer, { initialState } from "./store/reducer/reducer";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
