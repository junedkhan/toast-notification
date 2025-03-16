export enum toastType {
  success = "success",
  error = "error",
  info = "info",
  warning = "warning",
}

export interface toast {
  id: number;
  message: string;
  type: toastType;
}
