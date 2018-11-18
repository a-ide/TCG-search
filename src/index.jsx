import React from "react";
import { render } from "react-dom";
import Root from "./modules/frontend/Root";
import "./css/style.scss";
import DisplayToggle from "./modules/frontend/DisplayToggle";

render(<Root />, document.getElementById("root"));

DisplayToggle("js-toggle-trigger");
DisplayToggle("js-toggle-search");
