import { Component } from "react";
import "../styles/preview.css";
import Profilbilde from "../img/Profilbilde.jpeg";

class Preview extends Component {
  render() {
    const { name, title, email, phoneNumber, address, aboutMe } =
      this.props.information.personalInformation;
    const { experiences, educations, knowledges } = this.props.information;

    return (
      <div className="preview">
        <div className="header">
          <h1>{name}</h1>
          <p>{title}</p>
        </div>

        <div className="main-content">
          <div className="contact">
            <h2>Kontakt</h2>
            <hr />

            <img src={Profilbilde} alt="Profilbilde" />

            <h3>E-post</h3>
            <p>{email}</p>

            <h3>Telefon</h3>
            <p>{phoneNumber}</p>

            <h3>Adresse</h3>
            <p>{address}</p>
          </div>

          <div className="resume">
            <div className="about">
              <h2>Om meg</h2>
              <hr />

              <p>{aboutMe}</p>
            </div>

            <div className="experiences">
              <h2>Jobberfaring</h2>
              <hr />

              <div className="resume-list">
                {experiences.map((experience) => {
                  return (
                    <div className="resume-list-item" key={experience.id}>
                      <p className="duration">
                        {experience.from} - {experience.to}
                      </p>
                      <div>
                        <h3>{experience.position}</h3>
                        <p>
                          {experience.company}, {experience.place}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="educations">
              <h2>Utdannelse</h2>
              <hr />

              <div className="resume-list">
                {educations.map((education) => {
                  return (
                    <div className="resume-list-item" key={education.id}>
                      <p className="duration">
                        {education.from} - {education.to}
                      </p>
                      <div>
                        <h3>
                          {education.school}, {education.place}
                        </h3>
                        <p>Fag: {education.subject}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="knowledges">
              <h2>Ferdigheter</h2>
              <hr />
              <div className="knowledges-tag-container">
                {knowledges.map((knowledge) => {
                  return (
                    <div className="knowledges-tag" key={knowledge.id}>
                      <p>{knowledge.skill}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
