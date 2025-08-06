import React from "react";
import {createRoot} from "react-dom/client";
//import App from "./Components/App";
//import "../scss/layout/_main.scss";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<p>initial</p>);