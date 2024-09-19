export const iconResult = (icon) => {
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