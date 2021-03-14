import "@capacitor/core";
import "focus-visible";

import React from "react";

import App from "@/App";

import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
