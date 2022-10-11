import uniqid from "uniqid";

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
    <form className="knowledge" onSubmit={(e) => handleSubmitKnowledge(e)}>
      <h2>Skills</h2>
      <input
        value={knowledge.skill}
        placeholder="Skill"
        type="text"
        onChange={(e) => handleKnowledgeChangeSkill(e)}
      />
      <button type="submit">Add skill</button>
    </form>
  );
}
