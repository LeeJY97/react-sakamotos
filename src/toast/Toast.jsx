import "./toast.css";
import { useEffect, useState } from "react";
import EventBus from "../pubsub/eventBus";
import { createPortal } from "react-dom";

const Toast = ({
  message = "토스트 맛있겟다",
  time = 100000,
  position = "top-right",
}) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToastEvent = (toast) => {
      setToasts((prevToasts) => [...prevToasts, { id: Date.now(), ...toast }]);

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(1));
      }, toast.time);
    };

    const unsubscribe = EventBus.subscribe("SHOW_TOAST", handleToastEvent);

    return () => unsubscribe();
  }, []);
  // const toastRoot = document.getElementById("toast-root");
  // 여기에 position을 넣어야 하나 ?

  console.log("toasts", toasts);
  return createPortal(
    <div className={`toast-container`}>
      {toasts.map((toast, index) => (
        <div key={index} className={`toast ${toast.position}`}>
          {toast.message}
        </div>
      ))}
    </div>,
    document.body
  );
};

export default Toast;
