import "./toast.css";
import { useEffect, useState } from "react";
import EventBus from "../pubsub/eventBus";
import { createPortal } from "react-dom";

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

const Test = ({ toast }) => {
  const defaultTheme = "default";
  const [progressWidth, setProgressWidth] = useState(100);

  useEffect(() => {
    setProgressWidth(0);
  }, []);

  console.log("progressWidth", progressWidth);

  return (
    <div className={`toast ${toast.theme ? toast.theme : defaultTheme}`}>
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
