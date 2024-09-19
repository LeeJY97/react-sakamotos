const iconResult = (icon) => {
  switch (icon) {
    case "error":
      return `/src/toast/icons/error.png`;
    case "feed":
      return `/src/toast/icons/feed.png`;
    case "success":
      return `/src/toast/icons/success.png`;
    case "warning":
      return `/src/toast/icons/warning.png`;
    default:
      return "/src/toast/icons/sparta.jpeg";
  }
}

const createStyleFunctions = (toast) => {
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
  }
}

export default createStyleFunctions;