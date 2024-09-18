import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ToastPortal from "./toast/Toast.jsx";
import JY_Test from "./JY_Test.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <ToastPortal />
    <JY_Test></JY_Test>
    {/* <App /> */}
  </>
  // </StrictMode>
);
