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
                      message: `<div style='display:flex; color:red'>
                        <div style=''>11</div>
                        <div style=''>22</div>
                      </div>`,
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
                      time: 1000,
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
                      time: 3000,
                      showProgress: false,
                      theme: "error",
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
                      time: 2000,
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
                      time: 1000,
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
                      time: 10000,
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
                      time: 1000,
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
                      message: "progress",
                      position: "top-center",
                      showProgress: true,
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
