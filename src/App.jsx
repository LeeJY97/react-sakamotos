import React from "react";
import Toast from "./toast/Toast";
import { showToast } from "./toast/showToast";

function App() {
  return (
    <div className="App">
      <h1>React Event Bus Toast Example</h1>
      <button onClick={() => showToast({ message: "오", time: 1000 })}>
        Show Toast
      </button>
      <button
        onClick={() =>
          showToast({
            message: "구매완료",
            time: 1000,
            position: "bottom-right",
          })
        }
      >
        222
      </button>
    </div>
  );
}

export default App;
