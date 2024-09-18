import "./toast.css";
import { useEffect, useState } from "react";
import EventBus from "../pubsub/eventBus";
import { createPortal } from "react-dom";
import { SET_POSITION } from "./util/position";
import { iconResult } from "./util/iconResult";

// 기존 토스트 라이브러리가 제공하는 기능은 무조건 있어야함
// +@ (1차)
// 이미지나 css를 커스텀할 수 있는 기능 (width, height 포함)
// setTimeOut빼고 예, 아니오 선택 << 약간의 모달 기능도 추가할 수 있는
// 클릭하면 사라짐
// hover하면 대기 (setTimeOut 클린업)

// (2차)
// css animation ex) 번개 콰광
// progressbar
// 로딩 (promise Pending, reject, resolve)

// ToastPortal
const ToastPortal = () => {
  // const [toasts, setToasts] = useState([]);
  const [toasts, setToasts] = useState(
    SET_POSITION.reduce((acc, pos) => {
      // {POSITION: []}
      acc[pos.position] = [];
      return acc;
    }, {})
  );

  useEffect(() => {
    const handleToastEvent = (toast) => {
      const id = Date.now();
      const newToast = { id: Date.now(), ...toast };

      // setToasts((prevToasts) => [...prevToasts, { id, ...toast }]);
      setToasts((prevToasts) => {
        const updatedToasts = { ...prevToasts };
        // 특정 포지션 배열에 토스트 추가해줌
        updatedToasts[toast.position] = [
          ...updatedToasts[toast.position],
          newToast,
        ];
        return updatedToasts;
      });

      if (toast.time) {
        setTimeout(() => {
          setToasts((prevToasts) => {
            const updatedToasts = { ...prevToasts };
            // 특정 포지션에서 같은 id값을 가진 toast 제거해줌
            updatedToasts[toast.position] = updatedToasts[
              toast.position
            ].filter((t) => t.id !== newToast.id);
            return updatedToasts;
          });
        }, toast.time);
      }

      // setTimeout(() => {
      //   setToasts((prevToasts) => {
      //     return prevToasts.filter((t) => t.id !== id);
      //   });
    };

    const unsubscribe = EventBus.subscribe("SHOW_TOAST", handleToastEvent);

    return () => unsubscribe();
  }, []);

  const handleToastRemove = (toast) => {
    setToasts((prevToasts) => {
      const updatedToasts = { ...prevToasts };
      updatedToasts[toast.position] = updatedToasts[toast.position].filter(
        (t) => t.id !== toast.id
      );
      return updatedToasts;
    });
  };

  return createPortal(
    <div className="toast-wrap">
      {/* 각 위치에 대한 key를 가져와서 순회함 */}
      {Object.keys(toasts).map((positionKey) => {
        const positionToasts = toasts[positionKey];
        return positionToasts.length > 0 ? (
          <div className={`toast-container ${positionKey}`} key={positionKey}>
            {positionToasts.map((toast) => (
              <Toast
                key={toast.id}
                toast={toast}
                onRemove={() => handleToastRemove(toast)}
              />
              // <div className="toast" key={toast.id}>
              //   {toast.message}
              // </div>
            ))}
          </div>
        ) : null;
      })}
    </div>,
    document.body
  );
};

// Toast
const Toast = ({ toast, onRemove }) => {
  const [progressWidth, setProgressWidth] = useState(100);

  useEffect(() => {
    setProgressWidth(0);
  }, []);
  
  const getToastClass = () => {
    return toast.bg ? `${toast.theme}-bg` : toast.theme;
  };

  const toastClass = getToastClass();

  const getBoxStyle = () => {
    const { custom } = toast;
    if (!custom || !custom.box) return {};
    return { ...custom.box };
  };

  const getFontStyle = () => {
    const { custom } = toast;
    if (!custom || !custom.font) return {};
    return { ...custom.font };
  };

  const getProgressStyle = () => {
    const { custom } = toast;
    if (!custom || !custom.progress) return {};
    const { progress = {} } = custom;
    delete progress.width;
    return { ...progress };
  };

  const getIconUrl = () => {
    const { custom } = toast;
    const iconUrl = custom?.icon?.iconUrl;
    return iconUrl || iconResult(toast.theme);
  };

  const getIconStyle = () => {
    const { custom } = toast;
    if (!custom || !custom.icon) return {};
    // delete custom.icon.iconUrl;
    return { ...custom.icon };
  };

  const boxStyle = getBoxStyle();
  const fontStyle = getFontStyle();
  const progressStyle = getProgressStyle();
  const iconUrl = getIconUrl();
  console.log("🚀 ~ Toast ~ iconUrl:", iconUrl);
  const iconStyle = getIconStyle();

  return (
    <div
      className={`toast ${toastClass ? `${toastClass}` : ""} ${toast.confirm ? "toast-confirm" : ""}`}
      style={{ ...boxStyle }}
    >
      <button type="button" className="toast-btn-close" onClick={onRemove}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 50 50" width="15px" height="15px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
      </button>
      <div>
        {/* <img className="icon" src={iconResult(toast.theme)}/> */}
        <img className="icon" src={iconUrl} style={{ ...iconStyle }} />
      </div>
      <div className="toast-confirm-message">
        <span style={{ ...fontStyle }}>{toast.message}</span>
      </div>
      {toast.showProgress && (
        <div
          className="toast-progress-bar"
          style={{
            transition: `width ${toast.time / 1000}s ease`,
            width: `${progressWidth}%`,
            ...progressStyle,
          }}
        ></div>
      )}
      {toast.confirm && (
        <div className="toast-btn-area">
          <button
            className="btn-yes"
            onClick={() => {
              toast.confirm(true);
            }}
          >
            <span>예</span>
          </button>
          <button
            className="btn-no"
            onClick={() => {
              toast.confirm(false);
            }}
          >
            <span>아니오</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ToastPortal;
