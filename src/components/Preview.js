import { Component } from "react";
import "../styles/preview.css";

class Preview extends Component {
  render() {
    const { name, title, email, phoneNumber, address, birthDate, aboutMe } =
      this.props.information.personalInformation;
    return (
      <div className="preview">
        <div className="header">
          <h1>{name}</h1>
          <p>{title}</p>
        </div>

        <div className="about">
          <h2>Om Meg</h2>
          <p>{aboutMe}</p>
        </div>

        <div className="personal-details">
          <h2>Personlige Detaljer</h2>

          <h3>E-post</h3>
          <p>{email}</p>

          <h3>Telefon</h3>
          <p>{phoneNumber}</p>

          <h3>Adresse</h3>
          <p>{address}</p>

          <h3>Fødselsdato</h3>
          <p>{birthDate}</p>
        </div>
      </div>
    );
  }
}

export default Preview;
