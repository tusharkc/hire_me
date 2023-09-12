"use client";
import { gsap } from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const Layout = ({ children }) => {
  const [count, setCount] = useState(0);

  const counterRef = useRef(null);
  useEffect(() => {
    const randomDelay = Math.floor(Math.random() * 200) + 50;

    const timeoutId = setTimeout(() => {
      const randomNumber = count + Math.floor(Math.random() * 10) + 1;
      setCount(randomNumber > 100 ? 100 : randomNumber);
    }, randomDelay);

    return () => clearTimeout(timeoutId);
  }, [count]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(counterRef.current, 0.25, {
        delay: 3.5,
        opacity: 0,
      });
    });
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".bar", 1.5, {
        delay: 3.5,
        height: 0,
        zIndex: -1000,
        stagger: {
          amount: 0.5,
        },

        ease: "power4.inOut",
      });
    });
  }, []);

  return (
    <>
      <h1
        ref={counterRef}
        className="counter fixed w-full h-full flex justify-end items-end z-[10000] text-[#bcbcc4] px-[0.2em] py-[0.4em] text-[20vw] pointer-events-none"
      >
        {count}
      </h1>
      <div className="overlay w-[100vw] h-screen fixed z-[500] flex items-center justify-center pointer-events-none">
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
      </div>
      {count === 100 && children}
    </>
  );
};

export default Layout;
