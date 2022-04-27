import { Component } from "react";
import "../styles/preview.css";

class Preview extends Component {
  render() {
    const { name, title, email, phoneNumber, address, birthDate, aboutMe } =
      this.props.information.personalInformation;
    const { experiences, educations, knowledges } = this.props.information;

    return (
      <div className="preview">
        <div className="header">
          <h1>{name}</h1>
          <p>{title}</p>
        </div>

        <hr />

        <div className="about">
          <h2>Om Meg</h2>
          <p>{aboutMe}</p>
        </div>

        <hr />

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

        <hr />

        <div className="experiences">
          <h2>Erfaring</h2>
          {experiences.map((experience) => {
            return (
              <div key={experience.id}>
                <p>
                  {experience.from} - {experience.to}
                </p>
                <h3>{experience.position}</h3>
                <p>
                  {experience.company}, {experience.place}
                </p>
              </div>
            );
          })}
        </div>

        <hr />

        <div className="educations">
          <h2>Utdannelse</h2>
          {educations.map((education) => {
            return (
              <div key={education.id}>
                <p>
                  {education.from} - {education.to}
                </p>
                <h3>
                  {education.school}, {education.place}
                </h3>
                <p>Fag: {education.subject}</p>
              </div>
            );
          })}
        </div>

        <div className="knowledges">
          <h2>Kunnskap</h2>
          {knowledges.map((knowledge) => {
            return (
              <div key={knowledge.id}>
                <p>{knowledge.skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Preview;
