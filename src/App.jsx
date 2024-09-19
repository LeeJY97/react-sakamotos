import { showToast } from "./toast/showToast";

function App() {
  return (
    <div className="App">
      <h1>React Event Bus Toast Example</h1>

      <div></div>

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
                      confirm: (condition) => {
                        console.log("condition", condition);
                        // 결과를 보여주는 toast 띄워보기?
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
            <dl>
              <dt>CUSTOM</dt>
              <dd className="dd-custom">
                <button
                  onClick={() =>
                    showToast({
                      message: "background + font (size, color)",
                      position: "top-center",
                      time: 100000,
                      custom: {
                        box: {
                          background: "#333",
                        },
                        font: {
                          color: "white",
                          fontSize: "26px",
                        },
                        icon: {
                          iconUrl:
                            "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e664022de826f725e10df604bf1b9725cfd",
                          width: "44px",
                          height: "44px",
                        },
                      },
                    })
                  }
                >
                  background + font (size, color)
                </button>
                <button
                  onClick={() =>
                    showToast({
                      message: "icon",
                      position: "top-center",
                      time: 100000,
                      custom: {
                        icon: {
                          iconUrl:
                            "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e664022de826f725e10df604bf1b9725cfd",
                          width: "44px",
                          height: "44px",
                        },
                      },
                    })
                  }
                >
                  icon (url, size)
                </button>
                <button
                  onClick={() =>
                    showToast({
                      position: "top-center",
                      message: "custom progress bg",
                      showProgress: true,
                      time: 100000,
                      custom: {
                        progress: {
                          background: "#b35fc4",
                        },
                      },
                    })
                  }
                >
                  progress color
                </button>
                <button
                  onClick={() =>
                    showToast({
                      position: "top-center",
                      message: "custom progress height",
                      showProgress: true,
                      time: 100000,
                      custom: {
                        progress: {
                          height: "10px",
                        },
                      },
                    })
                  }
                >
                  progress height
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
