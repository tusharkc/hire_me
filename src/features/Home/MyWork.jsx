/* eslint-disable @next/next/no-img-element */
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomCursor } from "@/components";
gsap.registerPlugin(ScrollTrigger);

const imagesDummyData = [
  {
    title: "Title 1",
    imageSrc:
      "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Hello2",
    imageSrc:
      "https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Title 3",
    imageSrc:
      "https://images.pexels.com/photos/910616/pexels-photo-910616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Hello4",
    imageSrc:
      "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Hello5",
    imageSrc:
      "https://images.pexels.com/photos/2027697/pexels-photo-2027697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Hello6",
    imageSrc:
      "https://images.pexels.com/photos/3750893/pexels-photo-3750893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Hello7",
    imageSrc:
      "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Hello8",
    imageSrc:
      "https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const MyWork = () => {
  const refs = imagesDummyData.map(() => React.createRef()); // Create a ref for each image

  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  useEffect(() => {
    refs.forEach((ref, index) => {
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 250px", // when the top of the trigger hits the top of the viewport
          onEnter: () => handleEnter(index), // call handleEnter function
          scrub: true,
          onEnterBack: () => handleEnter(index),
        },
      });
    });
  }, [refs]);

  const handleEnter = (index) => {
    setCurrentActiveIndex(index);
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
        <div className="sticky top-[10%] md:top-[50%] left-[5%] md:left-[10%] w-[50%] bg-white">
          <h1 className="text-black text-6xl font-black tracking-wide">
            {imagesDummyData[currentActiveIndex].title}
          </h1>

          <button className="bg-[#e8e8e8] p-4 my-5 rounded-lg text-black drop-shadow-2xl border border-black text-lg">
            View Case Study
          </button>
        </div>

        {imagesDummyData?.map((item, index) => (
          <img
            ref={refs[index]}
            key={index}
            className={`h-[30vh] md:h-[55vh] w-[90vw] object-cover sticky top-[30%] md:left-[70%] md:-translate-x-[30%] mb-[14%] drop-shadow-md rounded-xl mx-auto md:mx-0 md:w-[50vw]`}
            src={item.imageSrc}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default MyWork;
