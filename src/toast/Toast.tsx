import "./toast.css";
import { useEffect, useState } from "react";
import EventBus from "../pubsub/EventBus";
import { createPortal } from "react-dom";
import { SET_POSITION } from "./util/position";
import createStyleFunctions from "./util/styles";
import { Toast as IToast, ToastProps } from "types/Toast";

const ToastPortal = () => {
  interface Position {
    position: string    
  }
  interface Pos {
    // [key: string]: Position[];    
    [key: string]: IToast[];    
  }

  const [toasts, setToasts] = useState<Pos>(
    SET_POSITION.reduce((acc, pos) => {
      acc[pos.position] = [];
      return acc;
    }, {} as Pos) // 초기값 {}에 대해 Pos 타입을 명시 
  );

  useEffect(() => {
    const handleToastEvent = (toast: IToast) => {
      const newToast: IToast = {
        id: Date.now().toString(),
        ...toast,
        position: toast.position ? toast.position : "top-right",
      };
      
      const toastPosition: string = toast.position ? toast.position : "top-right";

      setToasts((prevToasts) => {
        const updatedToasts = { ...prevToasts };
        
        updatedToasts[toastPosition] = [
          ...updatedToasts[toastPosition],
          newToast,
        ];
        return updatedToasts;
      });

      if (toast.time) {
        setTimeout(() => {
          setToasts((prevToasts) => {
            const updatedToasts = { ...prevToasts };
            
            updatedToasts[toastPosition] = updatedToasts[
              toastPosition
            ].filter((t) => t.id !== newToast.id);
            return updatedToasts;
          });
        }, toast.time);
      }
    };

    const unsubscribe = EventBus.subscribe("SHOW_TOAST", handleToastEvent);

    return () => unsubscribe();
  }, []);

  const handleToastRemove = (toast: IToast) => {
    setToasts((prevToasts) => {
      const updatedToasts = { ...prevToasts };
      const toastPosition: string = toast.position ? toast.position : "top-right";
      updatedToasts[toastPosition] = updatedToasts[toastPosition].filter(
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
            {positionToasts.map((toast: IToast) => (
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

const Toast = ({ toast, onRemove }: ToastProps) => {
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

  const handleClose = (condition: boolean) => {
    typeof toast.confirm === "function" && toast.confirm(condition);
    onRemove();
  };

  return (
    <div
      className={`toast ${toastClass ? `${toastClass}` : ""} ${
        !!toast.confirm ? "toast-confirm" : ""
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
            transition: `width ${toast.time ? toast.time / 1000 : 0}s ease`,
            width: `${progressWidth}%`,
            ...progressStyle,
          }}
        ></div>
      )}
      {!!toast.confirm && (
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
