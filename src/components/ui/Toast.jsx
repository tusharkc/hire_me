"use client";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

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

  // Icon components for success and error states
  const SuccessIcon = () => <CheckIcon />;

  const ErrorIcon = () => <CloseIcon />;

  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-50"
        >
          <div
            className={`flex items-center gap-3 py-3 px-4 rounded-lg shadow-lg border ${
              isError
                ? "bg-black text-white border-red-600"
                : "bg-black text-white border-green-600"
            }`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                isError ? "bg-red-600" : "bg-green-600"
              }`}
            >
              {isError ? <ErrorIcon /> : <SuccessIcon />}
            </div>
            <span className="text-sm font-medium">{message}</span>
            <button
              onClick={() => setShowToast(false)}
              className="ml-2 text-white opacity-70 hover:opacity-100 focus:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
