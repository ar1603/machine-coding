export enum ToastType {
  Info = "Info",
  Success = "success",
  Warn = "warn",
  Error = "error",
}

export type ToastData = { id: string; text: string; type: ToastType };
