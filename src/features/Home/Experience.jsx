import React from "react";
import experienceDataJson from "../../data/experienceData.json";
import ExperienceListItem from "./ExperienceListItem";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <div>
      <div className="container mx-auto p-6 md:p-0">
        <SectionHeading>My Experience</SectionHeading>
      </div>

      <ul>
        {experienceDataJson?.map((experience) => (
          <ExperienceListItem experience={experience} key={experience?.id} />
        ))}
      </ul>
    </div>
  );
};

export default Experience;
