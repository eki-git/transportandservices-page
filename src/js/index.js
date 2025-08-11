import React from "react";
import {createRoot} from "react-dom/client";
import App from "./Components/App";
import "../scss/layout/_main.scss";
import "../scss/general/_common.scss";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);