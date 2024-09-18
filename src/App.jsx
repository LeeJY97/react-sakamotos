import React from "react";
import Toast from "./toast/Toast";
import { showToast } from "./toast/showToast";

function App() {
  return (
    <div className="App">
      <h1>React Event Bus Toast Example</h1>
      <button
        onClick={() =>
          showToast({
            message: "top-right",
            position: "top-right",
            time: 1000,
            showProgress: true,
            theme: "warning",
          })
        }
      >
        top-right
      </button>
      <button
        onClick={() =>
          showToast({
            message: "top-right",
            position: "top-right",
            time: 3000,
            showProgress: false,
            theme: "error",
          })
        }
      >
        top-right
      </button>
      <button
        onClick={() =>
          showToast({
            message: "top-center",
            position: "top-center",
            time: 1000,
          })
        }
      >
        top-center
      </button>
      <button
        onClick={() =>
          showToast({
            message: "top-left",
            position: "top-left",
            time: 1000,
          })
        }
      >
        top-left
      </button>

      <button
        onClick={() =>
          showToast({
            message: "center-right",
            position: "center-right",
            time: 1000,
          })
        }
      >
        center-right
      </button>
      <button
        onClick={() =>
          showToast({
            message: "center-center",
            position: "center-center",
            time: 10000,
          })
        }
      >
        center-center
      </button>
      <button
        onClick={() =>
          showToast({
            message: "center-left",
            position: "center-left",
            time: 1000,
          })
        }
      >
        center-left
      </button>

      <button
        onClick={() =>
          showToast({
            message: "bottom-right",
            position: "bottom-right",
            time: 1000,
          })
        }
      >
        bottom-right
      </button>
      <button
        onClick={() =>
          showToast({
            message: "bottom-center",
            position: "bottom-center",
            time: 1000,
          })
        }
      >
        bottom-center
      </button>
      <button
        onClick={() =>
          showToast({
            message: "bottom-left",
            position: "bottom-left",
            time: 1000,
          })
        }
      >
        bottom-left
      </button>
    </div>
  );
}

export default App;
