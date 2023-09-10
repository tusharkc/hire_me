"use client";
import React from "react";
import PortfolioItemLeft from "./PortfolioItemLeft";
import PortfolioItemRight from "./PortfolioItemRight";
import portfolioData from "../../data/portfolioData.json";
import { useParams } from "next/navigation";
import "./styles/portfolioItemPageStyles.css";
const PortfolioItem = () => {
  const { id } = useParams();

  const foundItem = portfolioData?.find((x) => x?.id === parseInt(id));

  return (
    <div className="grid grid-cols-12 gap-8 w-[screen] h-[100vh]">
      <div className="col-span-12 md:col-span-8">
        <div className="md:sticky md:top-0">
          <PortfolioItemLeft data={foundItem} />
        </div>
      </div>
      <div className="col-span-12 md:col-span-4">
        <PortfolioItemRight data={foundItem} />
      </div>
    </div>
  );
};

export default PortfolioItem;
