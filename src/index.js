import "./index.css";

import App from "./App";
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// StrictMode adds some additional checking and warnings
