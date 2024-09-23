import { Toast as IToast } from "types/Toast";
import errorIcon from "../icons/error.png";
import feedIcon from "../icons/error.png";
import successIcon from "../icons/error.png";
import warningIcon from "../icons/error.png";
import defaultIcon from "../icons/error.png";

const iconResult = (icon: string) => {
  switch (icon) {
    case "error":
      return errorIcon;
    case "feed":
      return feedIcon;
    case "success":
      return successIcon;
    case "warning":
      return warningIcon;
    default:
      return defaultIcon;
  }
};

const createStyleFunctions = (toast: IToast) => {
  const getToastClass = () => {
    return toast.bg ? `${toast.theme}-bg` : toast.theme;
  };

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
    return { ...custom.icon };
  };

  return {
    getToastClass,
    getBoxStyle,
    getFontStyle,
    getProgressStyle,
    getIconUrl,
    getIconStyle,
  };
};

export default createStyleFunctions;
