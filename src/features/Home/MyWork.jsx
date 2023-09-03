import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import SectionHeading from "./SectionHeading";
gsap.registerPlugin(ScrollTrigger);

const imagesDummyData = [
  "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/910616/pexels-photo-910616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2027697/pexels-photo-2027697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3750893/pexels-photo-3750893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const MyWork = () => {
  const imageContainer = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const images = self.selector("img");
      images.forEach((image) => {
        gsap.to(image, {
          height: "100vh",
          width: "100vw",
          objectFit: "cover",
          scrollTrigger: {
            trigger: image,
            scrub: true,
            end: "opacity: 0",
          },
        });
      });
    }, imageContainer);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="p-6 md:p-0">
        <SectionHeading>Checkout My Work</SectionHeading>
      </div>
      <div ref={imageContainer}>
        {imagesDummyData?.map((imageUrl, index) => (
          <div
            key={index}
            className="mx-auto h-screen relative flex items-start justify-center"
          >
            <Image
              className={`h-12 w-12`}
              src={imageUrl}
              width={1000}
              height={3000}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MyWork;
