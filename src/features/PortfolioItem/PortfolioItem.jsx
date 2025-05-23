"use client";
import { ContactForm } from "@/components";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import portfolioData from "../../data/portfolioData.json";
import SectionHeading from "../Home/SectionHeading";
import PortfolioContent from "./PortfolioContent";
import PortfolioImage from "./PortfolioImage";
import "./styles/portfolioItemPageStyles.css";

const PortfolioItem = () => {
  const { id } = useParams();

  const router = useRouter();

  const foundItem = portfolioData?.find((x) => x?.id === parseInt(id));

  return (
    <>
      <PortfolioImage data={foundItem} />
      <PortfolioContent data={foundItem} />

      <div className="p-6 md:p-0 container mx-auto">
        <SectionHeading>Checkout My Other Work</SectionHeading>
        {portfolioData
          ?.filter((x) => x?.id !== parseInt(id))
          ?.map((portfolioItem, index) => (
            <React.Fragment key={portfolioItem?.id}>
              <div className="grid grid-cols-12 py-8 md:gap-9">
                <div className="col-span-12 md:col-span-4">
                  <h2 className="text-4xl"># {index + 1}</h2>
                  <div className="flex items-center md:items-start justify-between flex-row md:flex-col">
                    <h1 className="text-2xl md:text-6xl py-6">
                      {portfolioItem?.projectName}
                    </h1>

                    <button
                      className="bg-[#e8e8e8] p-2 md:p-4 rounded-lg text-black drop-shadow-2xl border border-black text-lg"
                      onClick={(ev) => {
                        ev.preventDefault();

                        router.push(`/portfolio/${portfolioItem?.id}`);
                      }}
                    >
                      View Detail
                    </button>
                  </div>
                </div>
                <Image
                  alt=""
                  src={portfolioItem?.projectImg}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full object-contain col-span-12 md:col-span-8 border border-white rounded-lg"
                />
              </div>
            </React.Fragment>
          ))}
      </div>
      <div className="p-6 md:p-0 container mx-auto">
        <SectionHeading>Contact me for your project</SectionHeading>
      </div>

      <ContactForm />
    </>
  );
};

export default PortfolioItem;
