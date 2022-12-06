import "./index.css";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  function handleChangeForm(event) {
    const Question = event.target.form.Questions.value;
    const Answers = event.target.form.Answer.value;
    const Topics = event.target.form.topic.value;

    if (Question.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

    setFormData({ question: Question, answer: Answers, topic_id: Topics });
  }

  async function addNewQuestion() {
    await fetch(`https://quiz-kaufman-backend.onrender.com/api/questions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  }

  return (
    <div id="form-container">
      <h3>Add Questions</h3>
      <form onChange={handleChangeForm} className="form">
        <div className="input-field-container">
          <div className="input-field">
            <label>Question:</label>
            <textarea name="Questions"></textarea>
          </div>
          <div className="input-field">
            <label>Answer:</label>
            <textarea name="Answer"></textarea>
          </div>
          <div className="input-field">
            Topics:{" "}
            <select className="dropdown" name="topic" id="topic">
              <option value="1">React</option>
              <option value="2">HTML/CSS</option>
              <option value="3">JavaScript</option>
              <option value="4">SQL</option>
            </select>
          </div>
        </div>

        <div className="button-container">
          <button disabled={isDisabled} onClick={addNewQuestion}>
            Add New Question
          </button>
        </div>
      </form>
    </div>
  );
}
