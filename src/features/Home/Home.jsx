"use client";
import { ContactForm } from "@/components";
import Experience from "./Experience";
import HomeAboutMe from "./HomeAboutMe";
import HomePageBanner from "./HomePageBanner";
import MyWork from "./MyWork";
import SayHi from "./SayHi";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <HomePageBanner />
      <MyWork />
      <Testimonial />
      <Experience />
      <HomeAboutMe />
      <SayHi />
      <ContactForm />
    </>
  );
};

export default Home;
