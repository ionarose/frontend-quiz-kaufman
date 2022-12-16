import "./index.css";
import Header from "../Header";
import Form from "../Form";
import QuizBody from "../QuizBody";
import { useEffect, useState } from "react";
const url = "https://quiz-kaufman-backend.onrender.com"
function App() {
  const [allQuestions, setAllQuestions] = useState([]);

  async function deleteQuestion(id) {
    const response = await fetch(`${url}/api/questions/${id}`, { method: "DELETE" });
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    async function getEverything() {
      const response = await fetch(`${url}/api/questions`);
      const data = await response.json();
      setAllQuestions(data.payload);
    }
    getEverything();
  }, []);

  return (
    <div className="app">
      <Header title="Quiz-Kaufman" />
      <Form />
      <QuizBody deleteQuestion={deleteQuestion} allQuestions={allQuestions} />
    </div>
  );
}

export default App;
