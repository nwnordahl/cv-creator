import { Component } from "react";
import uniqid from "uniqid";
import Preview from "./components/Preview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInformation: {
        name: "",
        title: "",
        email: "",
        phoneNumber: "",
        address: "",
        birthDate: "",
        aboutMe: "",
      },

      experience: {
        position: "",
        company: "",
        place: "",
        from: "",
        to: "",
        id: uniqid(),
      },
      experiences: [],

      education: {
        school: "",
        place: "",
        subject: "",
        from: "",
        to: "",
        id: uniqid(),
      },
      educations: [],
    };
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

  handleChangeBirthDate(e) {
    this.setState({
      ...this.state,
      personalInformation: {
        ...this.state.personalInformation,
        birthDate: e.target.value,
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

  render() {
    const { experience } = this.state;
    const { name, title, email, phoneNumber, address, birthDate, aboutMe } =
      this.state.personalInformation;
    return (
      <>
        <h1 className="logo">Forhåndsvisning</h1>

        <div className="flex-container">
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

              {/* Fødselsdato */}
              <input
                value={birthDate}
                placeholder="Fødelsdato"
                type="text"
                onChange={(e) => this.handleChangeBirthDate(e)}
              />

              {/* Om meg */}
              <input
                value={aboutMe}
                placeholder="Om meg"
                type="text"
                onChange={(e) => this.handleChangeAboutMe(e)}
              />
            </div>

            <h2>Erfaring</h2>
            <form onSubmit={(e) => this.handleSubmitExperience(e)}>
              <input
                value={experience.position}
                placeholder="Stilling"
                type="text"
                onChange={(e) => this.handleExperienceChangePosition(e)}
              />
              <button type="submit">Legg til</button>
              <button>Fjern</button>
            </form>

            <h2>Utdannelse</h2>
            <form>
              <button type="submit">Legg til</button>
              <button>Fjern</button>
            </form>

            <h2>Kunnskap</h2>
            <form>
              <button type="submit">Legg til</button>
              <button>Fjern</button>
            </form>
          </div>

          <Preview information={this.state} />
        </div>
      </>
    );
  }
}

export default App;
