import React from "react";
import Toast from "./toast/Toast";
import { showToast } from "./toast/showToast";

function App() {
  return (
    <div className="App">
      <h1>React Event Bus Toast Example</h1>

      <div>
        
      </div>
      
      <div className="exampleWrap">

        <div className="exampleBox exampleBox01">
          <h2>POSITION</h2>
          <div className="example">
            <dl>
              <dt>TOP</dt>
              <dd>     
                <button
                  onClick={() =>
                    showToast({
                      message: "top-left",
                      position: "top-left",
                    })
                  }
                >
                  left
                </button>         
                <button
                  onClick={() =>
                    showToast({
                      message: "top-center",
                      position: "top-center",
                    })
                  }
                >
                  center
                </button>
                <button
                  onClick={() =>
                    showToast({
                      message: "top-right",
                      position: "top-right",
                    })
                  }
                >
                  right
                </button>
              </dd>
            </dl>

            <dl>
              <dt>CENTER</dt>
              <dd>
                <button
                  onClick={() =>
                    showToast({
                      message: "center-left",
                      position: "center-left",
                    })
                  }
                >
                  left
                </button>
                <button
                  onClick={() =>
                    showToast({
                      message: "center-center",
                      position: "center-center",
                    })
                  }
                >
                  center
                </button>
                <button
                  onClick={() =>
                    showToast({
                      message: "center-right",
                      position: "center-right",
                    })
                  }
                >
                  right
                </button>
              </dd>
            </dl>

            <dl>
              <dt>BOTTOM</dt>
              <dd>           
                <button
                  onClick={() =>
                    showToast({
                      message: "bottom-left",
                      position: "bottom-left",
                    })
                  }
                >
                  left
                </button>
                <button
                  onClick={() =>
                    showToast({
                      message: "bottom-center",
                      position: "bottom-center",
                    })
                  }
                >
                  center
                </button>
                <button
                  onClick={() =>
                    showToast({
                      message: "bottom-right",
                      position: "bottom-right",
                    })
                  }
                >
                  right
                </button>
              </dd>
            </dl>
          </div>
        </div>
        <div className="exampleBox exampleBox02">
        <h2>OPTION</h2>
          <div className="example">            
            <dl>
              <dt>CONFIRM</dt>
              <dd>
                <button
                  onClick={() =>
                    showToast({
                      message: "confirm",
                      position: "top-center",
                      showProgress: true,
                      confirm: (confirm) => {
                        // console.log("confirm", confirm);
                      },
                    })
                  }
                >
                  confirm
                </button>
              </dd>
            </dl>
            <dl>
              <dt>PROGRESS</dt>
              <dd>
                <button
                  onClick={() =>
                    showToast({
                      message: "progress",
                      position: "top-center",
                      showProgress: true,
                      time: 10000,
                    })
                  }
                >
                  progress
                </button>
              </dd>
            </dl>
            <dl>
              <dt>TIME</dt>
              <dd>
                <button
                  onClick={() =>
                    showToast({
                      message: "TIME 3000s",
                      position: "top-center",
                      time: 3000,
                    })
                  }
                >
                  time
                </button>
              </dd>
            </dl>
          </div>          
        </div>
        <div className="exampleBox exampleBox03">
        <h2>TYPE</h2>
          <div className="example">            
            <dl>
              <dt>SUCCESS</dt>
              <dd>
                <button
                  onClick={() =>
                    showToast({
                      message: "SUCCESS !",
                      position: "top-right",
                      showProgress: true,
                      theme: "success",
                      time: 2000,
                      bg: true,
                    })
                  }
                >
                  SUCCESS !
                </button>
              </dd>
            </dl>
            <dl>
              <dt>WARNING</dt>
              <dd>
                <button
                  onClick={() =>
                    showToast({
                      message: "WARNING !",
                      position: "top-right",
                      showProgress: true,
                      theme: "warning",
                      time: 5000,
                      bg: true,
                    })
                  }
                >
                  WARNING !
                </button>
              </dd>
            </dl>
            <dl>
              <dt>ERROR</dt>
              <dd>
                <button
                  onClick={() =>
                    showToast({
                      message: "ERROR !",
                      position: "top-right",
                      showProgress: true,
                      theme: "error",
                      time: 5000,
                      bg: true,
                    })
                  }
                >
                  ERROR !
                </button>
              </dd>
            </dl>
            <dl>
              <dt>FEED</dt>
              <dd>
                <button
                  onClick={() =>
                    showToast({
                      message: "FEED !",
                      position: "top-right",
                      showProgress: true,
                      theme: "feed",
                      time: 5000,
                      bg: true,
                    })
                  }
                >
                  FEED !
                </button>
              </dd>
            </dl>
          </div>          
        </div>        
      </div>
    </div>
  );
}

export default App;
