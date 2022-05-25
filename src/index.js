import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SpeechProvider appId="3238c15d-689c-4fa8-835f-7b83e13716fc" language="en-US">
    <Provider>
      <App />
    </Provider>

  </SpeechProvider>

);
