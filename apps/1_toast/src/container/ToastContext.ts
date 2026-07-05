import { createContext } from "react";
import type { ToastData } from "./types";

export const ToastContext = createContext<{
  toasts: ToastData[];
  addToast: (toastData: Pick<ToastData, "text" | "type">) => void;
  removeToast: (data: Pick<ToastData, "id">) => void;
}>({ toasts: [], addToast: () => {}, removeToast: () => {} });
