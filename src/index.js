import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

export const testFunction = () => ('done');

const rootElement = document.getElementById("app");
ReactDOM.render(
  <StrictMode>
    <>Hello</>
  </StrictMode>,
  rootElement
);

