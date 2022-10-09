import React, { useState } from "react";
import uniqid from "uniqid";
import ReactToPrint from "react-to-print";
import Preview from "./components/Preview";

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

  // Handle changes in input fields
  function handleChangeName(e) {
    setPersonalInformation({
      ...personalInformation,
      name: e.target.value,
    });
  }

  function handleChangeTitle(e) {
    setPersonalInformation({
      ...personalInformation,
      title: e.target.value,
    });
  }

  function handleChangeEmail(e) {
    setPersonalInformation({
      ...personalInformation,
      email: e.target.value,
    });
  }

  function handleChangePhoneNumber(e) {
    setPersonalInformation({
      ...personalInformation,
      phoneNumber: e.target.value,
    });
  }

  function handleChangeAddress(e) {
    setPersonalInformation({
      ...personalInformation,
      address: e.target.value,
    });
  }

  function handleChangeAboutMe(e) {
    setPersonalInformation({
      ...personalInformation,
      aboutMe: e.target.value,
    });
  }

  function handleChangeImage(e) {
    setPersonalInformation({
      ...personalInformation,
      image: URL.createObjectURL(e.target.files[0]),
    });
  }

  // Handle changes in experience input fields
  function handleExperienceChangePosition(e) {
    setExperience({
      ...experience,
      position: e.target.value,
    });
  }

  function handleExperienceChangeCompany(e) {
    setExperience({
      ...experience,
      company: e.target.value,
    });
  }

  function handleExperienceChangePlace(e) {
    setExperience({
      ...experience,
      place: e.target.value,
    });
  }

  function handleExperienceChangeFrom(e) {
    setExperience({
      ...experience,
      from: e.target.value,
    });
  }

  function handleExperienceChangeTo(e) {
    setExperience({
      ...experience,
      to: e.target.value,
    });
  }

  // Handle changes in education input fields
  function handleEducationChangeSchool(e) {
    setEducation({
      ...education,
      school: e.target.value,
    });
  }

  function handleEducationChangePlace(e) {
    setEducation({
      ...education,
      place: e.target.value,
    });
  }

  function handleEducationChangeSubject(e) {
    setEducation({
      ...education,
      subject: e.target.value,
    });
  }

  function handleEducationChangeFrom(e) {
    setEducation({
      ...education,
      from: e.target.value,
    });
  }

  function handleEducationChangeTo(e) {
    setEducation({
      ...education,
      to: e.target.value,
    });
  }

  // Handle changes in knowledge input field
  function handleKnowledgeChangeSkill(e) {
    setKnowledge({
      ...knowledge,
      skill: e.target.value,
    });
  }

  // Submit
  function handleSubmitExperience(e) {
    e.preventDefault();
    setExperiences(experiences.concat(experience));
    setExperience({
      position: "",
      company: "",
      place: "",
      from: "",
      to: "",
      id: uniqid(),
    });
  }

  function handleSubmitEducation(e) {
    e.preventDefault();
    setEducations(educations.concat(education));
    setEducation({
      school: "",
      place: "",
      subject: "",
      from: "",
      to: "",
      id: uniqid(),
    });
  }

  function handleSubmitKnowledge(e) {
    e.preventDefault();
    setKnowledges(knowledges.concat(knowledge));
    setKnowledge({
      skill: "",
      id: uniqid(),
    });
  }

  const { name, title, email, phoneNumber, address, aboutMe } =
    personalInformation;
  return (
    <>
      <div className="flex-container-column">
        <h1 className="logo">Forhåndsvisning</h1>
        <div className="flex-container-row">
          <Preview
            personalInformation={personalInformation}
            information={information}
          />

          <div className="form">
            <div className="personal-information">
              <h2>Generell Informasjon</h2>
              {/* Fullt navn */}
              <input
                value={name}
                placeholder="Fullt navn"
                type="text"
                onChange={(e) => handleChangeName(e)}
              />

              {/* Tittel */}
              <input
                value={title}
                placeholder="Tittel"
                type="text"
                onChange={(e) => handleChangeTitle(e)}
              />

              {/* E-post */}
              <input
                value={email}
                placeholder="E-post"
                type="email"
                onChange={(e) => handleChangeEmail(e)}
              />

              {/* Telefonnummer */}
              <input
                value={phoneNumber}
                placeholder="Telefonnummer"
                type="text"
                onChange={(e) => handleChangePhoneNumber(e)}
              />

              {/* Adresse */}
              <input
                value={address}
                placeholder="Adresse"
                type="text"
                onChange={(e) => handleChangeAddress(e)}
              />

              {/* Om meg */}
              <input
                value={aboutMe}
                placeholder="Om meg"
                type="text"
                onChange={(e) => handleChangeAboutMe(e)}
              />

              <label htmlFor="image-upload" className="button">
                Legg til bilde
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image"
                onChange={(e) => handleChangeImage(e)}
              />
            </div>

            <form
              className="knowledge"
              onSubmit={(e) => handleSubmitKnowledge(e)}
            >
              <h2>Ferdigheter</h2>
              <input
                value={knowledge.skill}
                placeholder="Ferdighet"
                type="text"
                onChange={(e) => handleKnowledgeChangeSkill(e)}
              />
              <button type="submit">Legg til ferdighet</button>
            </form>

            <form
              className="experience"
              onSubmit={(e) => handleSubmitExperience(e)}
            >
              <h2>Jobberfaring</h2>
              <input
                value={experience.position}
                placeholder="Stilling"
                type="text"
                onChange={(e) => handleExperienceChangePosition(e)}
              />

              <input
                value={experience.company}
                placeholder="Selskap"
                type="text"
                onChange={(e) => handleExperienceChangeCompany(e)}
              />

              <input
                value={experience.place}
                placeholder="Sted"
                type="text"
                onChange={(e) => handleExperienceChangePlace(e)}
              />

              <input
                value={experience.from}
                placeholder="Fra"
                type="text"
                onChange={(e) => handleExperienceChangeFrom(e)}
              />

              <input
                value={experience.to}
                placeholder="Til"
                type="text"
                onChange={(e) => handleExperienceChangeTo(e)}
              />

              <button type="submit">Legg til jobberfaring</button>
            </form>

            <form
              className="education"
              onSubmit={(e) => handleSubmitEducation(e)}
            >
              <h2>Utdannelse</h2>
              <input
                value={education.subject}
                placeholder="Fag"
                type="text"
                onChange={(e) => handleEducationChangeSubject(e)}
              />

              <input
                value={education.school}
                placeholder="Skole"
                type="text"
                onChange={(e) => handleEducationChangeSchool(e)}
              />

              <input
                value={education.place}
                placeholder="Sted"
                type="text"
                onChange={(e) => handleEducationChangePlace(e)}
              />

              <input
                value={education.from}
                placeholder="Fra"
                type="text"
                onChange={(e) => handleEducationChangeFrom(e)}
              />

              <input
                value={education.to}
                placeholder="Til"
                type="text"
                onChange={(e) => handleEducationChangeTo(e)}
              />

              <button type="submit">Legg til utdannelse</button>
            </form>

            <ReactToPrint
              trigger={() => {
                return (
                  <a href="#" className="button">
                    Lagre CV som PDF / Skriv ut CV
                  </a>
                );
              }}
              content={() => this.componentRef}
            />
          </div>
        </div>
      </div>
    </>
  );
}
