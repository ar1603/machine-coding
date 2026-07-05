import { useContext } from "react";
import { ToastContext } from "./container/ToastContext";
import { ToastType } from "./container";

export const ToastTrigger = () => {
  const { addToast } = useContext(ToastContext);
  return (
    <div>
      <button
        style={{ margin: 10 }}
        onClick={() =>
          addToast({
            text: "Info text",
            type: ToastType.Info,
          })
        }
      >
        Info
      </button>
      <button
        style={{ margin: 10 }}
        onClick={() =>
          addToast({
            text: "Warning text",
            type: ToastType.Warn,
          })
        }
      >
        Warning
      </button>
      <button
        style={{ margin: 10 }}
        onClick={() =>
          addToast({
            text: "Success text",
            type: ToastType.Success,
          })
        }
      >
        Success
      </button>
      <button
        style={{ margin: 10 }}
        onClick={() =>
          addToast({
            text: "Error text",
            type: ToastType.Error,
          })
        }
      >
        Error
      </button>
    </div>
  );
};
