import React from "react";
import { showToast } from "./toast/showToast";

const JY_Test = () => {
  const toastConfirm = (confirm) => {
    // console.log("toastConfirm", confirm);
  };
  return (
    <div>
      <button
        onClick={() =>
          showToast({
            message: "top-right",
            position: "top-right",
            time: 5000,
            showProgress: true,
            bg: true,
            theme: "warning",
            confirm: (confirm) => {
              // console.log("confirm", confirm);
            },
            custom: {
              box: {
                background: "#333",
                // width: "100px",
                // height: "100px",
              },
              contents: {
                color: "red",
                fontSize: "40px",
                imgUrl:
                  "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e664022de826f725e10df604bf1b9725cfd",
              },
              progress: {
                background: "#b35fc4",
                height: "10px",
                width: "10%",
              },
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
