/* eslint-disable @next/next/no-img-element */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import portfolioData from "../../data/portfolioData.json";
import SectionHeading from "./SectionHeading";
gsap.registerPlugin(ScrollTrigger);

const MyWork = () => {
  const refs = portfolioData.map(() => React.createRef()); // Create a ref for each image
  const router = useRouter();
  const [currentActiveIndex, setCurrentActiveIndex] = useState(1);
  useEffect(() => {
    refs.forEach((ref, index) => {
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 250px", // when the top of the trigger hits the top of the viewport
          onEnter: () => handleEnter(index), // call handleEnter function
          scrub: true,
          onEnterBack: () => {
            handleEnter(index);
          },
        },
      });
    });
  }, []);

  const handleEnter = (index) => {
    setCurrentActiveIndex(
      index + 1 <= portfolioData?.length ? index + 1 : portfolioData?.length
    );
  };

  return (
    <div className="">
      <div className="p-6 md:p-0 container mx-auto">
        <SectionHeading>Checkout My Work</SectionHeading>
      </div>

      <div className={`h-[${850}vh] w-screen relative bg-white pb-[10px]`}>
        <img
          className="z-10 sticky inset-0 h-screen w-screen object-cover brightness-75 blur-md mix-blend-luminosity pointer-events-none"
          alt=""
          src="/assets/homePage/shadowPng.png"
        />
        <div className="sticky top-[10%] md:top-[50%] left-[5%] md:left-[10%] w-[100%] md:w-[50%] bg-white px-6 md:px-0">
          <h1 className="text-black text-4xl font-black tracking-wide">
            {portfolioData[currentActiveIndex - 1]?.projectName}
          </h1>

          <button
            className="bg-[#e8e8e8] p-4 my-5 rounded-lg text-black drop-shadow-2xl border border-black text-lg"
            onClick={(ev) => {
              ev.preventDefault();
              router.push(`/portfolio/${currentActiveIndex}`);
            }}
          >
            View Detail
          </button>
        </div>

        {portfolioData?.map((item, index) => (
          <Image
            key={index}
            ref={refs[index]}
            width={0}
            className={`h-[30vh] md:h-[55vh] w-[90vw] object-cover sticky top-[30%] md:left-[70%] md:-translate-x-[30%] mb-[14%] drop-shadow-md rounded-xl mx-auto md:mx-0 md:w-[50vw]`}
            height={0}
            sizes="100vw"
            src={item.projectImg}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default MyWork;
