const Test = ({ toast }) => {
  const defaultTheme = "default";

  return (
    <div className={`toast ${toast.theme ? toast.theme : defaultTheme}`}>
      {toast.message}
      {toast.showProgress && (
        <div
          className="toast-progress-bar"
          style={{
            transition: `width ${toast.time / 1000}s`,
            width: `${100}%`,
          }}
        ></div>
      )}
    </div>
  );
};

export default Test;
