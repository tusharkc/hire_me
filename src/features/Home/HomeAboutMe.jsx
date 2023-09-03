import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import tusharKcImage from "public/assets/homePage/tushar_kc_img.png";

const HomeAboutMe = () => {
  return (
    <div className="container mx-auto">
      <div className="p-6 md:p-0">
        <SectionHeading>So let me tell you a little about me.</SectionHeading>
      </div>

      <div className="grid grid-cols-12 items-start min-h-screen">
        <div className="col-span-12 md:col-span-6 justify-end p-6 md:p-0">
          <p className="tracking-widest leading-7">
            Hello, I&lsquo;m Tushar Karamchandani, a 21-year-old self-taught
            software engineer with four years of hands-on experience. No degree,
            no worries! I&lsquo;ve been navigating the coding world with
            finesse.
          </p>
          <p className="tracking-widest leading-7 my-8">
            Frontend, backend, and even blockchain - I&lsquo;ve explored a
            multitude of technologies. React, Node.js, Solidity - they&lsquo;re
            all in my repertoire. Mobile app development? React Native is my
            playground.
          </p>
          <p className="tracking-widest leading-7">
            I&lsquo;m all about tech and making things work. Let&lsquo;s delve
            into the digital realm and create something amazing together!
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 order-1">
          <Image
            className="max-w-[100vw] md:max-w-xl object-cover rounded-xl float-right p-6 md:p-0"
            src={tusharKcImage}
            alt="tusharKcImg"
            width={1500}
            height={1800}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutMe;
