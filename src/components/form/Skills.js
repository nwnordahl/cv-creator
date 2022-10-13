import uniqid from "uniqid";
import styles from "./Skills.module.css";

export default function Skills({
  knowledge,
  setKnowledge,
  knowledges,
  setKnowledges,
}) {
  function handleKnowledgeChangeSkill(e) {
    setKnowledge({
      ...knowledge,
      skill: e.target.value,
    });
  }

  // Submit
  function handleSubmitKnowledge(e) {
    e.preventDefault();
    setKnowledges(knowledges.concat(knowledge));
    setKnowledge({
      skill: "",
      id: uniqid(),
    });
  }

  return (
    <form className={styles.skills} onSubmit={(e) => handleSubmitKnowledge(e)}>
      <h2 className={styles.h2}>Skills</h2>
      <input
        className={styles.input}
        value={knowledge.skill}
        placeholder="Skill"
        type="text"
        onChange={(e) => handleKnowledgeChangeSkill(e)}
      />
      <button className={styles.button} type="submit">
        Add skill
      </button>
    </form>
  );
}
