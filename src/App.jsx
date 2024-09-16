import React from "react";
import Toast from "./toast/Toast";
import { showToast } from "./toast/showToast";

function App() {
  return (
    <div className="App">
      <h1>React Event Bus Toast Example</h1>
      <button onClick={() => showToast({ message: "오", time: 7000 })}>
        오
      </button>
      <button
        onClick={() =>
          showToast({
            message: "구매완료",
            time: 3000,
            position: "bottom-right",
            theme: "warning",
            showProgress: true,
          })
        }
      >
        구매완료
      </button>
    </div>
  );
}

export default App;
