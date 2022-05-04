import { Component } from "react";
import "../styles/preview.css";

class Preview extends Component {
  render() {
    const { name, title, email, phoneNumber, address, aboutMe, image } =
      this.props.information.personalInformation;
    const {
      experiences,
      experience,
      educations,
      education,
      knowledges,
      knowledge,
    } = this.props.information;

    return (
      <div className="preview">
        {(name || title) && (
          <div className="header">
            <h1>{name}</h1>
            <p>{title}</p>
          </div>
        )}

        <div className="main-content">
          {(email || phoneNumber || address || image) && (
            <div className="contact">
              {(email || phoneNumber || address) && (
                <>
                  <h2>Kontakt</h2>
                  <hr />
                </>
              )}

              {image && <img src={image} alt="Profilbilde" />}

              {email && (
                <>
                  <h3>E-post</h3>
                  <p>{email}</p>
                </>
              )}

              {phoneNumber && (
                <>
                  <h3>Telefon</h3>
                  <p>{phoneNumber}</p>
                </>
              )}

              {address && (
                <>
                  <h3>Adresse</h3>
                  <p>{address}</p>
                </>
              )}
            </div>
          )}

          <div className="resume">
            {aboutMe && (
              <div className="about">
                <h2>Om meg</h2>
                <hr />

                <p>{aboutMe}</p>
              </div>
            )}

            {(experiences.length > 0 ||
              experience.from ||
              experience.to ||
              experience.position ||
              experience.company ||
              experience.place) && (
              <div className="experiences">
                <h2>Jobberfaring</h2>
                <hr />

                <div className="resume-list">
                  {experiences.map((experience) => {
                    return (
                      <div className="resume-list-item" key={experience.id}>
                        <p className="duration">
                          {experience.from} {experience.from && <span>-</span>}{" "}
                          {experience.to}
                        </p>
                        <div>
                          <h3>{experience.position}</h3>
                          <p>
                            {experience.company}
                            {experience.company && experience.place && (
                              <span>,</span>
                            )}{" "}
                            {experience.place}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  {(experience.from ||
                    experience.to ||
                    experience.position ||
                    experience.company ||
                    experience.place) && (
                    <div className="resume-list-item" key={experience.id}>
                      <p className="duration">
                        {experience.from} {experience.from && <span>-</span>}{" "}
                        {experience.to}
                      </p>
                      <div>
                        <h3>{experience.position}</h3>
                        <p>
                          {experience.company}
                          {experience.company && experience.place && (
                            <span>,</span>
                          )}{" "}
                          {experience.place}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {(educations.length > 0 ||
              education.from ||
              education.to ||
              education.school ||
              education.place ||
              education.subject) && (
              <div className="educations">
                <h2>Utdannelse</h2>
                <hr />

                <div className="resume-list">
                  {educations.map((education) => {
                    return (
                      <div className="resume-list-item" key={education.id}>
                        <p className="duration">
                          {education.from} {education.from && <span>-</span>}{" "}
                          {education.to}
                        </p>
                        <div>
                          <h3>
                            {education.school}
                            {education.school && education.place && (
                              <span>,</span>
                            )}{" "}
                            {education.place}
                          </h3>
                          <p>
                            {education.subject && <span>Fag: </span>}{" "}
                            {education.subject}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  {(education.from ||
                    education.to ||
                    education.school ||
                    education.place ||
                    education.subject) && (
                    <div className="resume-list-item" key={education.id}>
                      <p className="duration">
                        {education.from} {education.from && <span>-</span>}{" "}
                        {education.to}
                      </p>
                      <div>
                        <h3>
                          {education.school}
                          {education.school && education.place && (
                            <span>,</span>
                          )}{" "}
                          {education.place}
                        </h3>
                        <p>
                          {education.subject && <span>Fag: </span>}{" "}
                          {education.subject}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {(knowledges.length > 0 || knowledge.skill) && (
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
                  {knowledge.skill && (
                    <div className="knowledges-tag" key={knowledge.id}>
                      <p>{knowledge.skill}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
