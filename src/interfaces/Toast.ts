export interface Toast {
  id: string;
  bg: boolean;
  theme: string;
  message: string;
  position: string;
  showProgress: boolean;
  time: number;
  confirm: (confirmed: boolean) => void;
  custom: Custom;
}

export interface ToastProps {
  toast: Toast;
  onRemove: () => void;
}

interface Custom {
  box: Box;
  font: Font;
  icon: Icon;
  progress: Progress;
}

interface Box {
  [key: string]: any;
}

interface Font {
  [key: string]: any;
}

interface Icon {
  [key: string]: any;
}

interface Progress {
  [key: string]: any;
}
