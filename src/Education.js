import uniqid from "uniqid";

export default function Education({
  education,
  setEducation,
  educations,
  setEducations,
}) {
  function handleEducationChangeSchool(e) {
    setEducation({
      ...education,
      school: e.target.value,
    });
  }

  function handleEducationChangePlace(e) {
    setEducation({
      ...education,
      place: e.target.value,
    });
  }

  function handleEducationChangeSubject(e) {
    setEducation({
      ...education,
      subject: e.target.value,
    });
  }

  function handleEducationChangeFrom(e) {
    setEducation({
      ...education,
      from: e.target.value,
    });
  }

  function handleEducationChangeTo(e) {
    setEducation({
      ...education,
      to: e.target.value,
    });
  }

  // Submit
  function handleSubmitEducation(e) {
    e.preventDefault();
    setEducations(educations.concat(education));
    setEducation({
      school: "",
      place: "",
      subject: "",
      from: "",
      to: "",
      id: uniqid(),
    });
  }

  return (
    <form className="education" onSubmit={(e) => handleSubmitEducation(e)}>
      <h2>Education</h2>
      <input
        value={education.subject}
        placeholder="Subject"
        type="text"
        onChange={(e) => handleEducationChangeSubject(e)}
      />

      <input
        value={education.school}
        placeholder="School"
        type="text"
        onChange={(e) => handleEducationChangeSchool(e)}
      />

      <input
        value={education.place}
        placeholder="Place"
        type="text"
        onChange={(e) => handleEducationChangePlace(e)}
      />

      <input
        value={education.from}
        placeholder="From"
        type="text"
        onChange={(e) => handleEducationChangeFrom(e)}
      />

      <input
        value={education.to}
        placeholder="To"
        type="text"
        onChange={(e) => handleEducationChangeTo(e)}
      />

      <button type="submit">Add education</button>
    </form>
  );
}
