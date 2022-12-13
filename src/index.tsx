import reportWebVitals from "./reportWebVitals";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QuizGameProvider } from "./context/QuizGameContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QuizGameProvider>
      <App />
    </QuizGameProvider>
  </React.StrictMode>
);

reportWebVitals();
