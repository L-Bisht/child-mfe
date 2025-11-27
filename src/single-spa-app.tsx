// child/src/single-spa-app.tsx
import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import App from "./App";
import "./index.css";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  // ✅ THIS tells single-spa where to render
  domElementGetter: () => {
    const el = document.getElementById("single-spa-container");
    if (!el) {
      throw new Error("single-spa-container not found in DOM");
    }
    return el;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
