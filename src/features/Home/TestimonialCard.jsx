import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { content, brand, designation } = testimonial;
  return (
    <div className="h-screen container mx-auto flex items-center justify-center">
      <div className="max-w-3xl px-4 md:px-0">
        <p className="text-lg md:text-4xl leading-relaxed md:leading-relaxed">
          &ldquo;{content}&ldquo;
        </p>
        <p className="py-4 font-bold text-2xl">{brand}</p>
        <p className="font-bold text-xl">{designation}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
