import uniqid from "uniqid";
import styles from "./Experience.module.css";

export default function Experience({
  experience,
  setExperience,
  experiences,
  setExperiences,
}) {
  function handleExperienceChangePosition(e) {
    setExperience({
      ...experience,
      position: e.target.value,
    });
  }

  function handleExperienceChangeCompany(e) {
    setExperience({
      ...experience,
      company: e.target.value,
    });
  }

  function handleExperienceChangePlace(e) {
    setExperience({
      ...experience,
      place: e.target.value,
    });
  }

  function handleExperienceChangeFrom(e) {
    setExperience({
      ...experience,
      from: e.target.value,
    });
  }

  function handleExperienceChangeTo(e) {
    setExperience({
      ...experience,
      to: e.target.value,
    });
  }

  // Submit
  function handleSubmitExperience(e) {
    e.preventDefault();
    setExperiences(experiences.concat(experience));
    setExperience({
      position: "",
      company: "",
      place: "",
      from: "",
      to: "",
      id: uniqid(),
    });
  }

  return (
    <form
      className={styles.experience}
      onSubmit={(e) => handleSubmitExperience(e)}
    >
      <h2 className={styles.h2}>Work Experience</h2>
      <input
        className={styles.input}
        value={experience.position}
        placeholder="Position"
        type="text"
        onChange={(e) => handleExperienceChangePosition(e)}
      />

      <input
        className={styles.input}
        value={experience.company}
        placeholder="Company"
        type="text"
        onChange={(e) => handleExperienceChangeCompany(e)}
      />

      <input
        className={styles.input}
        value={experience.place}
        placeholder="Place"
        type="text"
        onChange={(e) => handleExperienceChangePlace(e)}
      />

      <input
        className={styles.input}
        value={experience.from}
        placeholder="From"
        type="text"
        onChange={(e) => handleExperienceChangeFrom(e)}
      />

      <input
        className={styles.input}
        value={experience.to}
        placeholder="To"
        type="text"
        onChange={(e) => handleExperienceChangeTo(e)}
      />

      <button className={styles.button} type="submit">
        Add work experience
      </button>
    </form>
  );
}
