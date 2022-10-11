import React, { useState } from "react";
import uniqid from "uniqid";
import Preview from "./components/preview/Preview";
import Form from "./components/form/Form";

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
    personalInformation,
    setPersonalInformation,
    experiences,
    setExperiences,
    experience,
    setExperience,
    educations,
    setEducations,
    education,
    setEducation,
    knowledges,
    setKnowledges,
    knowledge,
    setKnowledge,
  };

  return (
    <div className="flex-container-column">
      <h1 className="logo">Preview</h1>
      <div className="flex-container-row">
        <Preview
          personalInformation={personalInformation}
          information={information}
        />

        <Form information={information} />
      </div>
    </div>
  );
}
