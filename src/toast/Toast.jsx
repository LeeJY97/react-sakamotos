import "./toast.css";
import { useEffect, useState } from "react";
import EventBus from "../pubsub/eventBus";
import { createPortal } from "react-dom";
import errorIcon from "./icons/error.png";

// ToastPortal
const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToastEvent = (toast) => {
      const id = Date.now();

      setToasts((prevToasts) => [...prevToasts, { id, ...toast }]);

      setTimeout(() => {
        setToasts((prevToasts) => {
          return prevToasts.filter((t) => t.id !== id);
        });
      }, toast.time);
    };

    const unsubscribe = EventBus.subscribe("SHOW_TOAST", handleToastEvent);

    return () => unsubscribe();
  }, []);

  return createPortal(
    <div className={`toast-container`}>
      {toasts.map((toast) => (
        <Test key={toast.id} toast={toast} />
      ))}
    </div>,
    document.body
  );
};

// Toast
const Test = ({ toast }) => {
  const [progressWidth, setProgressWidth] = useState(100);

  useEffect(() => {
    setProgressWidth(0);
  }, []);

  const getToastClass = () => {
    return toast.bg ? `${toast.theme}-bg` : toast.theme;

    // if (toast.theme === "warning") {
    //   // return toast.bg ? "warning warning-bg" : "warning";
    //   return toast.bg ? "warning warning-bg" : "warning";
    // } else if (toast.theme === "error") {
    //   return "error";
    // } else if (toast.theme === "success") {
    //   return "success";
    // } else if (toast.theme === "feed") {
    //   return "feed";
    // } else {
    //   return "default";
    // }
  };

  const toastClass = getToastClass();

  console.log("progressWidth", progressWidth);

  return (
    // <div className={`toast ${toast.theme ? toast.theme : defaultTheme}`}>
    <div className={`toast ${toastClass}`}>
      <div>
        <img className="icon" src={errorIcon}></img>
      </div>
      {toast.message}
      {toast.showProgress && (
        <div
          className="toast-progress-bar"
          style={{
            transition: `width ${toast.time / 1000}s ease`,
            width: `${progressWidth}%`,
          }}
        ></div>
      )}
    </div>
  );
};

export default Toast;
