// child/src/single-spa-app.tsx
// IMPORTANT: Import CSS first, before anything else
import "./index.css";

import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import App from "./App";

// Function to dynamically inject CSS stylesheet
function injectStylesheet() {
  // Only inject if not already injected
  if (document.getElementById("child-mfe-styles")) {
    return;
  }

  const link = document.createElement("link");
  link.id = "child-mfe-styles";
  link.rel = "stylesheet";
  // Use relative path that works both locally and on parent
  // @vite-ignore - CSS file is generated at build time
  link.href = new URL("./child-mfe.css", import.meta.url).href;

  document.head.appendChild(link);
}

// Inject styles when module loads
injectStylesheet();

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
