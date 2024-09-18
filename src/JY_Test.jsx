import React from "react";
import { showToast } from "./toast/showToast";

const JY_Test = () => {
  const toastConfirm = (confirm) => {
    console.log("toastConfirm", confirm);
  };
  return (
    <div>
      <button
        onClick={() =>
          showToast({
            message: "top-right",
            position: "top-right",
            time: 50000,
            showProgress: true,
            bg: true,
            theme: "warning",
            confirm: (confirm) => {
              console.log("confirm", confirm);
            },
          })
        }
      >
        top-right-confirm
      </button>
      <button
        onClick={() =>
          showToast({
            message: "top-right",
            position: "top-right",
            time: 50000,
            showProgress: true,
            bg: true,
            theme: "warning",
            confirm: toastConfirm,
          })
        }
      >
        top-right-confirm
      </button>
    </div>
  );
};

export default JY_Test;
