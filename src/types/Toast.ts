export type Toast = {
  id?: string; // ? => optional 한 값을 사용할떄 (넘겨받거나, 안받을수있는 것들)
  bg?: boolean;
  theme?: string;
  message?: string;
  position?: string;
  showProgress?: boolean;
  time?: number;
  confirm?: (confirmed: boolean) => void;
  custom?: Custom;
};

// props 타입은 따로 파일로 분리하지않고 컴포넌트 파일자체에서 정의함 (거기서만 쓰니까)
export interface ToastProps {
  toast: Toast;
  onRemove: () => void;
}

interface Custom {
  box?: Temp;
  font?: Temp;
  icon?: Temp;
  progress?: Temp;
}

interface Temp {
  [key: string]: string; // 여러개 일때도 이거 쓰면 다 잡을수있음
}
