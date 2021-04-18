import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import StoreProvider from "./store/StoreProvider";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
