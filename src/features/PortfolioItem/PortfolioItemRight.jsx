import React from "react";

const PortfolioItemRight = ({ data }) => {
  return (
    <div className="px-6 md:px-0 container mx-auto max-w-2xl">
      <h1
        style={{ viewTransitionName: `projectTitle-${data?.id}` }}
        className="text-white text-5xl md:text-7xl font-black tracking-wide py-4 m-0"
      >
        {data?.projectName}
      </h1>

      <div
        className="project_details md:pr-6"
        dangerouslySetInnerHTML={{ __html: data?.detail }}
      />
    </div>
  );
};

export default PortfolioItemRight;
