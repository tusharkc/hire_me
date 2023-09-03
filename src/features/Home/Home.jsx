import React from "react";
import HomePageBanner from "./HomePageBanner";
import MyWork from "./MyWork";
import Testimonial from "./Testimonial";
import Experience from "./Experience";
import HomeAboutMe from "./HomeAboutMe";
import SayHi from "./SayHi";
import ContactForm from "./ContactForm";

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
