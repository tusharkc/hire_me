/* eslint-disable @next/next/no-img-element */
import { homePageBannerTitleData } from "@/data/homePageBannerTitleData";
import Typical from "react-typical";

const HomePageBanner = () => {
  return (
    <div className="relative mx-auto h-screen">
      <img
        alt=""
        src="assets/homePage/scrollDown.png"
        className="absolute right-4 bottom-24 w-12 md:w-24"
      />
      <video autoPlay muted loop className="-z-10 h-full w-full object-cover">
        <source src={"/assets/homePage/home_banner_bg.mp4"} type="video/mp4" />
      </video>

      <div className="container mx-auto flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 ">
        <h1 className="z-50 text-xl md:text-6xl leading-normal md:leading-normal font-black tracking-widest md:tracking-widest p-4 md:p-0">
          Hi I&apos;m Tushar Karamchandani, and I&apos;m{" "}
          <br className="hidden md:block" />
          <Typical
            className="z-40"
            steps={homePageBannerTitleData}
            loop={Infinity}
            wrapper="span"
          />
        </h1>
      </div>
    </div>
  );
};

export default HomePageBanner;
