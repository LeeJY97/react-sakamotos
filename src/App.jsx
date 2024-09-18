import React from "react";
import Toast from "./toast/Toast";
import { showToast } from "./toast/showToast";

function App() {
  return (
    <div className="App">
      <h1>React Event Bus Toast Example</h1>
      <button
        onClick={() =>
          showToast({ message: "default!", time: 6000, showProgress: true })
        }
      >
        default
      </button>
      <button
        onClick={() =>
          showToast({
            message: "warning!",
            time: 5000,
            theme: "warning",
            showProgress: true,
            // bg: true,
          })
        }
      >
        warning
      </button>
      <button
        onClick={() =>
          showToast({
            message: "error!",
            time: 5000,
            theme: "error",
            showProgress: true,
          })
        }
      >
        error
      </button>
      <button
        onClick={() =>
          showToast({
            message: "success!",
            time: 5000,
            theme: "success",
            showProgress: true,
          })
        }
      >
        success
      </button>
      <button
        onClick={() =>
          showToast({
            message: "feed!",
            time: 5000,
            theme: "feed",
            showProgress: true,
          })
        }
      >
        feed
      </button>
    </div>
  );
}

export default App;
