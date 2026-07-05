import { useState } from "react";
import { ToastContext } from "./ToastContext";
import { Toast } from "./toast";
import type { ToastData } from "./types";

const ToastContainer = ({ children }: { children: any }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  console.log("Toast", toasts);

  const removeToast = ({ id }: Pick<ToastData, "id">) => {
    setToasts((prev) => {
      const pending = prev.filter((it) => it.id != id);
      return pending;
    });
  };

  const addToast = (data: Pick<ToastData, "text" | "type">) => {
    const id = new Date().getUTCMilliseconds().toString();
    setToasts((prev) => [...prev, { id, ...data }]);
    setTimeout(() => {
      removeToast({ id });
    }, 3000);
  };
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div
        style={{
          zIndex: -10,
          width: "100%",
          height: "100%",
          justifyItems: "flex-end",
        }}
      >
        {toasts.map(({ text, type, id }) => (
          <Toast key={id} text={text} type={type} id={id} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastContainer;
