import GeneralInformation from "./GeneralInformation";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import ReactToPrint from "react-to-print";

export default function Form({ information }) {
  const {
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
  } = information;

  return (
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
  );
}
