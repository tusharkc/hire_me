import React from "react";
import Image from "next/image";

const PortfolioItemLeft = ({ data }) => {
  return (
    <Image
      width={0}
      height={0}
      sizes="100vw"
      className="md:h-screen w-full max-w-[100vw] object-contain bg-gradient-to-r from-slate-500 to-slate-800 md:p-6"
      style={{
        viewTransitionName: `portfolioImage-${0}`,
      }}
      src={data?.projectImg}
      alt=""
    />
  );
};

export default PortfolioItemLeft;
