import "./toast.css";
import { useEffect, useState } from "react";
import EventBus from "../pubsub/eventBus";
import { createPortal } from "react-dom";
import { SET_POSITION } from "./util/position";
import { iconResult } from "./util/iconResult";
import createStyleFunctions from "./util/styles";

const ToastPortal = () => {
  const [toasts, setToasts] = useState(
    SET_POSITION.reduce((acc, pos) => {
      acc[pos.position] = [];
      return acc;
    }, {})
  );

  useEffect(() => {
    const handleToastEvent = (toast) => {
      const newToast = { id: Date.now(), ...toast };

      setToasts((prevToasts) => {
        const updatedToasts = { ...prevToasts };
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
            updatedToasts[toast.position] = updatedToasts[
              toast.position
            ].filter((t) => t.id !== newToast.id);
            return updatedToasts;
          });
        }, toast.time);
      }
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
            ))}
          </div>
        ) : null;
      })}
    </div>,
    document.body
  );
};

const Toast = ({ toast, onRemove }) => {
  const [progressWidth, setProgressWidth] = useState(100);

  useEffect(() => {
    setProgressWidth(0);
  }, []);

  const {
    getToastClass,
    getBoxStyle,
    getFontStyle,
    getProgressStyle,
    getIconUrl,
    getIconStyle,
  } = createStyleFunctions(toast);

  const toastClass = getToastClass();
  const boxStyle = getBoxStyle();
  const fontStyle = getFontStyle();
  const progressStyle = getProgressStyle();
  const iconUrl = getIconUrl();
  const iconStyle = getIconStyle();

  const handleClose = (condition) => {
    typeof toast.confirm === "function" && toast.confirm(condition);
    onRemove();
  };

  return (
    <div
      className={`toast ${toastClass ? `${toastClass}` : ""} ${
        toast.confirm ? "toast-confirm" : ""
      }`}
      style={{ ...boxStyle }}
    >
      <button
        type="button"
        className="toast-btn-close"
        onClick={() => handleClose(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 50 50"
          width="15px"
          height="15px"
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
      </button>
      <div>
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
              handleClose(true);
            }}
          >
            <span>예</span>
          </button>
          <button
            className="btn-no"
            onClick={() => {
              handleClose(false);
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
