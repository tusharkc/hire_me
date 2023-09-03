import { testimonialData } from "@/data/testimonialData";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import SectionHeading from "./SectionHeading";

const Testimonial = () => {
  return (
    <section className="container mx-auto">
      <div className="p-6 md:p-0">
        <SectionHeading>Checkout what people say about me!</SectionHeading>
      </div>

      {testimonialData?.map((testimonial, index) => (
        <TestimonialCard testimonial={testimonial} key={index} />
      ))}
    </section>
  );
};

export default Testimonial;
