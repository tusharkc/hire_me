"use client";

import { useEffect, useState } from "react";

const Loading = () => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Simulate minimum loading time to ensure animation completes
    const timer = setTimeout(() => {
      setIsFinished(true);
    }, 2000); // 2 seconds minimum loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ${
        isFinished ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative">
        <div className="w-16 h-16 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-r-2 border-l-2 border-white rounded-full animate-ping opacity-30"></div>
        <div className="mt-6 text-white text-center">
          <span className="inline-block animate-pulse">Loading</span>
          <span className="inline-block animate-pulse delay-100">.</span>
          <span className="inline-block animate-pulse delay-200">.</span>
          <span className="inline-block animate-pulse delay-300">.</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
