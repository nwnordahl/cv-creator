import React, { Component } from "react";
import uniqid from "uniqid";
import ReactToPrint from "react-to-print";
import Preview from "./components/Preview";
import exampleCV from "./exampleCV";

class App extends Component {
  constructor() {
    super();

    if (window.location.href.split("?")[1] === "preview=example") {
      this.state = exampleCV;
    } else {
      this.state = {
        personalInformation: {
          name: "",
          title: "",
          email: "",
          phoneNumber: "",
          address: "",
          aboutMe: "",
          image: "",
        },

        experiences: [],
        experience: {
          position: "",
          company: "",
          place: "",
          from: "",
          to: "",
          id: uniqid(),
        },

        educations: [],
        education: {
          school: "",
          place: "",
          subject: "",
          from: "",
          to: "",
          id: uniqid(),
        },

        knowledges: [],
        knowledge: {
          skill: "",
          id: uniqid(),
        },
      };
    }
  }

  // Handle changes in input fields
  handleChangeName(e) {
    this.setState({
      ...this.state,
      personalInformation: {
        ...this.state.personalInformation,
        name: e.target.value,
      },
    });
  }

  handleChangeTitle(e) {
    this.setState({
      ...this.state,
      personalInformation: {
        ...this.state.personalInformation,
        title: e.target.value,
      },
    });
  }

  handleChangeEmail(e) {
    this.setState({
      ...this.state,
      personalInformation: {
        ...this.state.personalInformation,
        email: e.target.value,
      },
    });
  }

  handleChangePhoneNumber(e) {
    this.setState({
      ...this.state,
      personalInformation: {
        ...this.state.personalInformation,
        phoneNumber: e.target.value,
      },
    });
  }

  handleChangeAddress(e) {
    this.setState({
      ...this.state,
      personalInformation: {
        ...this.state.personalInformation,
        address: e.target.value,
      },
    });
  }

  handleChangeAboutMe(e) {
    this.setState({
      ...this.state,
      personalInformation: {
        ...this.state.personalInformation,
        aboutMe: e.target.value,
      },
    });
  }

  handleChangeImage(e) {
    console.log(e);
    this.setState({
      ...this.state,
      personalInformation: {
        ...this.state.personalInformation,
        image: URL.createObjectURL(e.target.files[0]),
      },
    });
  }

  // Handle changes in experience input fields
  handleExperienceChangePosition(e) {
    this.setState({
      ...this.state,
      experience: {
        ...this.state.experience,
        position: e.target.value,
      },
    });
  }

  handleExperienceChangeCompany(e) {
    this.setState({
      ...this.state,
      experience: {
        ...this.state.experience,
        company: e.target.value,
      },
    });
  }

  handleExperienceChangePlace(e) {
    this.setState({
      ...this.state,
      experience: {
        ...this.state.experience,
        place: e.target.value,
      },
    });
  }

  handleExperienceChangeFrom(e) {
    this.setState({
      ...this.state,
      experience: {
        ...this.state.experience,
        from: e.target.value,
      },
    });
  }

  handleExperienceChangeTo(e) {
    this.setState({
      ...this.state,
      experience: {
        ...this.state.experience,
        to: e.target.value,
      },
    });
  }

  // Handle changes in education input fields
  handleEducationChangeSchool(e) {
    this.setState({
      ...this.state,
      education: {
        ...this.state.education,
        school: e.target.value,
      },
    });
  }

  handleEducationChangePlace(e) {
    this.setState({
      ...this.state,
      education: {
        ...this.state.education,
        place: e.target.value,
      },
    });
  }

  handleEducationChangeSubject(e) {
    this.setState({
      ...this.state,
      education: {
        ...this.state.education,
        subject: e.target.value,
      },
    });
  }

  handleEducationChangeFrom(e) {
    this.setState({
      ...this.state,
      education: {
        ...this.state.education,
        from: e.target.value,
      },
    });
  }

  handleEducationChangeTo(e) {
    this.setState({
      ...this.state,
      education: {
        ...this.state.education,
        to: e.target.value,
      },
    });
  }

  // Handle changes in knowledge input field
  handleKnowledgeChangeSkill(e) {
    this.setState({
      ...this.state,
      knowledge: {
        ...this.state.knowledge,
        skill: e.target.value,
      },
    });
  }

  // Submit
  handleSubmitExperience(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        position: "",
        company: "",
        place: "",
        from: "",
        to: "",
        id: uniqid(),
      },
    });
    console.log(this.state);
  }

  handleSubmitEducation(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      educations: this.state.educations.concat(this.state.education),
      education: {
        school: "",
        place: "",
        subject: "",
        from: "",
        to: "",
        id: uniqid(),
      },
    });
  }

  handleSubmitKnowledge(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      knowledges: this.state.knowledges.concat(this.state.knowledge),
      knowledge: {
        skill: "",
        id: uniqid(),
      },
    });
  }

  render() {
    const { experience, education, knowledge } = this.state;
    const { name, title, email, phoneNumber, address, aboutMe } =
      this.state.personalInformation;
    return (
      <>
        <div className="flex-container-column">
          <h1 className="logo">Forh??ndsvisning</h1>
          <div className="flex-container-row">
            <Preview
              information={this.state}
              ref={(el) => (this.componentRef = el)}
            />

            <div className="form">
              <div className="personal-information">
                <h2>Generell Informasjon</h2>
                {/* Fullt navn */}
                <input
                  value={name}
                  placeholder="Fullt navn"
                  type="text"
                  onChange={(e) => this.handleChangeName(e)}
                />

                {/* Tittel */}
                <input
                  value={title}
                  placeholder="Tittel"
                  type="text"
                  onChange={(e) => this.handleChangeTitle(e)}
                />

                {/* E-post */}
                <input
                  value={email}
                  placeholder="E-post"
                  type="email"
                  onChange={(e) => this.handleChangeEmail(e)}
                />

                {/* Telefonnummer */}
                <input
                  value={phoneNumber}
                  placeholder="Telefonnummer"
                  type="text"
                  onChange={(e) => this.handleChangePhoneNumber(e)}
                />

                {/* Adresse */}
                <input
                  value={address}
                  placeholder="Adresse"
                  type="text"
                  onChange={(e) => this.handleChangeAddress(e)}
                />

                {/* Om meg */}
                <input
                  value={aboutMe}
                  placeholder="Om meg"
                  type="text"
                  onChange={(e) => this.handleChangeAboutMe(e)}
                />

                <label htmlFor="image-upload" className="button">
                  Legg til bilde
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image"
                  onChange={(e) => this.handleChangeImage(e)}
                />
              </div>

              <form
                className="knowledge"
                onSubmit={(e) => this.handleSubmitKnowledge(e)}
              >
                <h2>Ferdigheter</h2>
                <input
                  value={knowledge.skill}
                  placeholder="Ferdighet"
                  type="text"
                  onChange={(e) => this.handleKnowledgeChangeSkill(e)}
                />
                <button type="submit">Legg til ferdighet</button>
              </form>

              <form
                className="experience"
                onSubmit={(e) => this.handleSubmitExperience(e)}
              >
                <h2>Jobberfaring</h2>
                <input
                  value={experience.position}
                  placeholder="Stilling"
                  type="text"
                  onChange={(e) => this.handleExperienceChangePosition(e)}
                />

                <input
                  value={experience.company}
                  placeholder="Selskap"
                  type="text"
                  onChange={(e) => this.handleExperienceChangeCompany(e)}
                />

                <input
                  value={experience.place}
                  placeholder="Sted"
                  type="text"
                  onChange={(e) => this.handleExperienceChangePlace(e)}
                />

                <input
                  value={experience.from}
                  placeholder="Fra"
                  type="text"
                  onChange={(e) => this.handleExperienceChangeFrom(e)}
                />

                <input
                  value={experience.to}
                  placeholder="Til"
                  type="text"
                  onChange={(e) => this.handleExperienceChangeTo(e)}
                />

                <button type="submit">Legg til jobberfaring</button>
              </form>

              <form
                className="education"
                onSubmit={(e) => this.handleSubmitEducation(e)}
              >
                <h2>Utdannelse</h2>
                <input
                  value={education.subject}
                  placeholder="Fag"
                  type="text"
                  onChange={(e) => this.handleEducationChangeSubject(e)}
                />

                <input
                  value={education.school}
                  placeholder="Skole"
                  type="text"
                  onChange={(e) => this.handleEducationChangeSchool(e)}
                />

                <input
                  value={education.place}
                  placeholder="Sted"
                  type="text"
                  onChange={(e) => this.handleEducationChangePlace(e)}
                />

                <input
                  value={education.from}
                  placeholder="Fra"
                  type="text"
                  onChange={(e) => this.handleEducationChangeFrom(e)}
                />

                <input
                  value={education.to}
                  placeholder="Til"
                  type="text"
                  onChange={(e) => this.handleEducationChangeTo(e)}
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
}

export default App;
