import { useState } from "react";
import "./index.css";
export default function QuestionCard({
  questionNumber,
  question,
  answer,
  deleteQuestion,
  questionId,
  text_link,
  video_link,
  interactive_link,
  
}) {
  const [isActive, setIsActive] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [buttonText, setButtonText] = useState("Reveal Answer");
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  function handleChangeFormEdit(event) {
    const Question = event.target.form.Questions.value;
    const Answers = event.target.form.Answer.value;
    console.log("this is question form e target value " + Question);
    console.log("this is answer form e target value " + Answers);

    setEditFormData({ question: Question, answer: Answers });
  }

  async function editQuestion(id, event) {
 await fetch(`https://quiz-kaufman-backend.onrender.com/api/questions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json; charset=UTF-8"},
      body: JSON.stringify(editFormData),
    }
    );
  }

  //reveal answer button
  const handleClick = (event) => {
    setIsActive((current) => !current);
    if (buttonText === "Reveal Answer") {
      setButtonText("Hide Answer");
    }
    if (buttonText === "Hide Answer") {
      setButtonText("Reveal Answer");
    }
  };

  //handle click function to hide the deleted question via css (won't disappear until next fetch otherwise)
  const handleClickDelete = (event) => {
    setIsDeleted((current) => !current);
  };

  //handle click function to show / hide the edit question form 
  const editButtonHandleClick = (event) => {
    setEditFormVisibility((current) => !current)}

  return (
    <div id="question-card" className={isDeleted ? "hidden" : "visible"}>
      <div id="question-header">
        <h4>Question {questionNumber}</h4>
        <div id="crud-btn-container">
          <button onClick={editButtonHandleClick}>Edit</button>
          <button
            className="delete-btn"
            onClick={() => {
              deleteQuestion(questionId);
              handleClickDelete();
            }}
            text="Delete"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="question-text">{question}</p>
      <p id={"answer-text"} className={isActive ? "visible" : "hidden"}>
        {answer}
      </p>

      <h4 className={isActive ? "visible" : "hidden"}>Resource Links:</h4>

      <div className="resource-button-container">
        <a className={isActive ? "visible" : "hidden"} href={text_link}>
          <button className="resource-button">Article</button>
        </a>
        <a className={isActive ? "visible" : "hidden"} href={video_link}>
          <button className="resource-button">Video</button>
        </a>
        <a className={isActive ? "visible" : "hidden"} href={interactive_link}>
          <button className="resource-button">Practice!</button>
        </a>
      </div>
      <button id="reveal-btn" onClick={handleClick}>
        {buttonText}
      </button>

      <div className={editFormVisibility ? "form-popup" : "hidden"} id="myForm">
        <form onChange={handleChangeFormEdit} className="form-container">
          <h3>Edit Question</h3>

          <label>
            <b>Question</b>
          </label>
          <input
            type="text"
            placeholder="Enter Question"
            name="Questions"
            required
          />

          <label>
            <b>Answer</b>
          </label>
          <input placeholder="Enter Answer" name="Answer" required />

          <button
            type="submit"
            onClick={() => {
              editQuestion( questionId );
            }}
            className="btn"
          >
            Submit
          </button>
          <button type="button" className="close-button" onClick={editButtonHandleClick}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
