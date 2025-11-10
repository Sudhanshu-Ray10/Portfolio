import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TransitionProvider } from "./context/TransitionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TransitionProvider>
      <App />
    </TransitionProvider>
  </React.StrictMode>
);
