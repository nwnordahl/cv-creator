import { Component } from "react";
import "../styles/preview.css";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, title, email, address, phoneNumber, aboutMe } =
      this.props.information;
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

          <h3>Adresse</h3>
          <p>{address}</p>

          <h3>Telefonnummer</h3>
          <p>{phoneNumber}</p>

          <h3>Email</h3>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Preview;
