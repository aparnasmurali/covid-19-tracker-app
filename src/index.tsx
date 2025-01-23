import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client (React 18+)
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// Create a root and render the app inside it
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
