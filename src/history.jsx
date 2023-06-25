import '../src/styles/global.css';
import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.css"; // Setting the global styles.
import { History } from "./views/history";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <History />
  </React.StrictMode>
);
