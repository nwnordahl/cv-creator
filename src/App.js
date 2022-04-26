import { Component } from "react";
import Preview from "./components/Preview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      title: "",
      aboutMe: "",
      address: "",
    };
  }

  // Handle changes in input fields
  handleChangeName(e) {
    this.setState({ ...this.state, name: e.target.value });
  }

  handleChangeEmail(e) {
    this.setState({ ...this.state, email: e.target.value });
  }

  handleChangePhoneNumber(e) {
    this.setState({ ...this.state, phoneNumber: e.target.value });
  }

  handleChangeTitle(e) {
    this.setState({ ...this.state, title: e.target.value });
  }

  handleChangeAboutMe(e) {
    this.setState({ ...this.state, aboutMe: e.target.value });
  }

  handleChangeAddress(e) {
    this.setState({ ...this.state, address: e.target.value });
  }

  // Submit
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ name: "", email: "", phoneNumber: "" });
  }

  render() {
    const { name, email, phoneNumber, title, aboutMe, address } = this.state;
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

              {/* Adresse */}
              <input
                value={address}
                placeholder="Adresse"
                type="text"
                onChange={(e) => this.handleChangeAddress(e)}
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

              {/* Om meg */}
              <input
                value={aboutMe}
                placeholder="Om meg"
                type="text"
                onChange={(e) => this.handleChangeAboutMe(e)}
              />
            </div>

            <h2>Erfaring</h2>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <button type="submit">Legg til</button>
              <button>Fjern</button>
            </form>

            <h2>Utdannelse</h2>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <button type="submit">Legg til</button>
              <button>Fjern</button>
            </form>

            <h2>Kunnskap</h2>
            <form onSubmit={(e) => this.handleSubmit(e)}>
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
