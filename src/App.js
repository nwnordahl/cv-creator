import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      title: "",
      aboutMe: "",
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

  // Submit
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ name: "", email: "", phoneNumber: "" });
  }

  render() {
    const { name, email, phoneNumber, title, aboutMe } = this.state;
    return (
      <>
        <h1>CV Creator</h1>

        <h2>Generell informasjon</h2>
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

        {/* Om meg */}
        <input
          value={aboutMe}
          placeholder="Om meg"
          type="text"
          onChange={(e) => this.handleChangeAboutMe(e)}
        />

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
      </>
    );
  }
}

export default App;
