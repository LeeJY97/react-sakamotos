import { showToast } from "./toast/showToast";
import imgTime from "/src/assets/img/ex-time.png";
import imgStyle from "/src/assets/img/ex-style.png";
import imgProgressbar from "/src/assets/img/ex-progressbar.png";
import imgPosition from "./assets/img/ex-position.png";
import imgMessage from "./assets/img/ex-message.png";
import imgCustomStyle from "./assets/img/ex-custom-style.png";
import imgConfirm from "./assets/img/ex-confirm.png";

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
                      confirm: (condition: boolean) => {
                        if (condition) {
                          showToast({
                            message: "좋습니다!",
                            position: "",
                            showProgress: true,
                            time: 10000,
                            theme: "success",
                          });
                        } else {
                          showToast({
                            message: "이런...",
                            position: "",
                            showProgress: true,
                            time: 10000,
                            theme: "error",
                          });
                        }
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

      <div id="read-me">
        <dl>
          <dt>
            <span>options (목차)</span>
          </dt>
          <dd>
            <ol className="link-area">
              <strong>React Custom Toast</strong>
              <li>
                <a href="#message">1. message</a>
              </li>
              <li>
                <a href="#time">2. time</a>
              </li>
              <li>
                <a href="#position">3. position</a>
              </li>
              <li>
                <a href="#progressBar">4. progressBar</a>
              </li>
              <li>
                <a href="#style">5. style</a>
              </li>
              <li>
                <a href="#confirm">6. confirm</a>
              </li>
              <li>
                <a href="#custom-style">7. custom style</a>
              </li>
            </ol>
          </dd>
        </dl>
        <dl id="message">
          <dt>
            <span>message</span>
          </dt>
          <dd>
            <p className="desc">토스트에 출력될 메시지를 작성할 수 있습니다.</p>
            <img src={imgMessage} alt="" />
          </dd>
        </dl>
        <dl id="time">
          <dt>
            <span>time</span>
          </dt>
          <dd>
            <p className="desc">
              토스트가 보여질 시간(ms)을 정할 수 있습니다. 지정하지 않을 경우
              토스트를 클릭해야 사라집니다.
            </p>
            <img src={imgTime} alt="" />
          </dd>
        </dl>
        <dl id="position">
          <dt>
            <span>position</span>
          </dt>
          <dd>
            <p className="desc">
              <em>position</em> 속성을 지정해줄 수 있습니다. <em>상하-좌우</em>{" "}
              순서로 지정해 줄 수 있습니다.
            </p>
            <ul className="dot-list">
              <strong>top</strong>
              <li>left</li>
              <li>center</li>
              <li>right</li>
            </ul>
            <ul className="dot-list">
              <strong>center</strong>
              <li>left</li>
              <li>center</li>
              <li>right</li>
            </ul>
            <ul className="dot-list">
              <strong>bottom</strong>
              <li>left</li>
              <li>center</li>
              <li>right</li>
            </ul>
            <img src={imgPosition} alt="" />
          </dd>
        </dl>
        <dl id="progressBar">
          <dt>
            <span>progressBar</span>
          </dt>
          <dd>
            <p className="desc">
              프로그래스 바는 토스트 알림이 남은 시간에 따라 표시 됩니다.
              기본값은 <em>false</em>입니다.
            </p>
            <img src={imgProgressbar} alt="" />
          </dd>
        </dl>
        <dl id="style">
          <dt>
            <span>style</span>
          </dt>
          <dd>
            <ul className="dot-list">
              <strong>theme</strong>
              <li>테마를 지정할 수 있습니다.</li>
              <li>기본 테마는 default입니다.</li>
              <li>텍스트와, 아이콘 등이 테마에 따라 변경됩니다.</li>
              <li>
                <em>default</em>, <em>success</em>, <em>feed</em>,{" "}
                <em>warning</em>, <em>error</em> 테마가 있습니다.
              </li>
            </ul>
            <ul className="dot-list">
              <strong>bg</strong>
              <li>배경 색을 표시할 수 있습니다.</li>
              <li>기본 값은 false입니다.</li>
              <li>theme 속성의 값에 따라 배경 색이 지정됩니다.</li>
            </ul>
            <img src={imgStyle} alt="" />
          </dd>
        </dl>
        <dl id="confirm">
          <dt>
            <span>confirm</span>
          </dt>
          <dd>
            <p className="desc">
              사용자의 선택을 전달 받을 수 있습니다. <em>confirm</em> 속성을
              지정하면 자동으로 사용자에게 선택 폼이 추가된 토스트 알림이
              나타납니다. 사용자의 선택이 콜백함수에 전달됩니다. (<em>true</em>{" "}
              / <em>false</em>)
            </p>
            <img src={imgConfirm} alt="" />
          </dd>
        </dl>
        <dl id="custom-style">
          <dt>
            <span>custom style</span>
          </dt>
          <dd>
            <p>
              사용자가 스타일을 직접 정의할 수 있습니다. <em>custom</em>{" "}
              객체내에 정의합니다.
            </p>
            <ul className="dot-list">
              <strong>box</strong>
              <li>토스트 박스에 대한 스타일을 정의합니다.</li>
              <li>background, width, height 등을 지정할 수 있습니다.</li>
            </ul>
            <ul className="dot-list">
              <strong>font</strong>
              <li>메시지(텍스트)에 대한 스타일을 정의합니다.</li>
              <li>color, fontSize 등을 지정할 수 있습니다.</li>
            </ul>
            <ul className="dot-list">
              <strong>icon</strong>
              <li>아이콘(이미지)에 대한 스타일을 정의합니다.</li>
              <li>이미지경로, width, height 등을 지정할 수 있습니다.</li>
            </ul>
            <ul className="dot-list">
              <strong>progress</strong>
              <li>프로그래스바에 대한 스타일을 정의합니다.</li>
              <li>background, height 등을 지정할 수 있습니다.</li>
            </ul>
            <img src={imgCustomStyle} alt="" />
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default App;
