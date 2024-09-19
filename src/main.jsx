import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ToastPortal from "./toast/Toast.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <ToastPortal />
      <App />
    </>
  </StrictMode>
);
