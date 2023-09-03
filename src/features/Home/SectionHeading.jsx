import React from "react";

const SectionHeading = ({ children }) => {
  return (
    <div className="h-screen flex items-center">
      <h1 className="bg-black font-black text-4xl md:text-9xl tracking-widest">
        {children}
      </h1>
    </div>
  );
};

export default SectionHeading;
