import React, { useEffect } from "react";

const Toast = ({ message, showToast, setShowToast, isError }) => {
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // 3 seconds

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showToast]);

  const toastClassName = `fixed bottom-5 right-5 py-2 px-4 rounded-md shadow-md ${
    showToast ? "block" : "hidden"
  }`;

  return (
    <div
      className={
        isError
          ? `${toastClassName} bg-red-500 text-white`
          : `${toastClassName} bg-green-700 text-white`
      }
    >
      <span>{message}</span>
    </div>
  );
};

export default Toast;
