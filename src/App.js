import React, { useState } from "react";
import uniqid from "uniqid";
import ReactToPrint from "react-to-print";
import Preview from "./components/Preview";

import GeneralInformation from "./GeneralInformation";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

export default function App() {
  const [personalInformation, setPersonalInformation] = useState({
    name: "",
    title: "",
    email: "",
    phoneNumber: "",
    address: "",
    aboutMe: "",
    image: "",
  });

  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState({
    position: "",
    company: "",
    place: "",
    from: "",
    to: "",
    id: uniqid(),
  });

  const [educations, setEducations] = useState([]);
  const [education, setEducation] = useState({
    school: "",
    place: "",
    subject: "",
    from: "",
    to: "",
    id: uniqid(),
  });

  const [knowledges, setKnowledges] = useState([]);
  const [knowledge, setKnowledge] = useState({
    skill: "",
    id: uniqid(),
  });

  const information = {
    experiences,
    experience,
    educations,
    education,
    knowledges,
    knowledge,
  };

  return (
    <div className="flex-container-column">
      <h1 className="logo">Preview</h1>
      <div className="flex-container-row">
        <Preview
          personalInformation={personalInformation}
          information={information}
        />

        <div className="form">
          <GeneralInformation
            personalInformation={personalInformation}
            setPersonalInformation={setPersonalInformation}
          />

          <Skills
            knowledge={knowledge}
            setKnowledge={setKnowledge}
            knowledges={knowledges}
            setKnowledges={setKnowledges}
          />

          <Experience
            experience={experience}
            setExperience={setExperience}
            experiences={experiences}
            setExperiences={setExperiences}
          />

          <Education
            education={education}
            setEducation={setEducation}
            educations={educations}
            setEducations={setEducations}
          />

          <ReactToPrint
            trigger={() => {
              return (
                <a href="#" className="button">
                  Save CV as PDF / Print CV
                </a>
              );
            }}
            content={() => this.componentRef}
          />
        </div>
      </div>
    </div>
  );
}
