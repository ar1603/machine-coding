import { useContext } from "react";
import { ToastType, type ToastData } from "../types";
import { ToastContext } from "../ToastContext";
import styles from "./toast.module.css";

const getColor = (type: ToastType) => {
  switch (type) {
    case ToastType.Info:
      return "blue";
    case ToastType.Success:
      return "green";
    case ToastType.Warn:
      return "yellow";
    case ToastType.Error:
      return "red";
    default:
      return "blue";
  }
};

const getTextColor = (type: ToastType) => {
  switch (type) {
    case ToastType.Warn:
      return "black";
    default:
      return "white";
  }
};

const Toast = ({ text, type, id }: ToastData) => {
  const { removeToast } = useContext(ToastContext);

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent event bubbling
    e.preventDefault(); // Prevent default action
    console.log("Close button clicked for toast:", id);
    removeToast({ id: id });
  };

  return (
    <div
      className={styles.toast}
      style={{
        width: 300,
        padding: 10,
        margin: 2,
        borderRadius: 10,
        backgroundColor: getColor(type),
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          color: getTextColor(type),
          flexGrow: 1,
        }}
      >
        {text}
      </div>
      <button
        onClick={handleCloseClick}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          lineHeight: 1,
          zIndex: 10,
        }}
        aria-label="Close toast"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
