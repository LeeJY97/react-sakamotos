import "./toast.css";
import { useEffect, useState } from "react";
import EventBus from "../pubsub/eventBus";
import { createPortal } from "react-dom";

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
    <div className={`toast-container ${position}`}>
      {toasts.map((toast, index) => (
        <div key={index} className={`toast`}>
          {toast.message}
        </div>
      ))}
    </div>,
    document.body
  );
};

export default Toast;
