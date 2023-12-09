import Button from "../Components/Button/Button";
import QuizContext from "../QuizContext";
import React, {useContext, useState, useEffect} from "react"
import { Link } from "react-router-dom"

type QuestionsData = {
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export default function Quiz() {
  const {categoryID}= useContext(QuizContext)
  const {questionCount,setQuestionCount} = useContext(QuizContext)
  const [questions, setQuestions] = useState<QuestionsData[]>([]);
  const [isStarted, setIsStarted] = useState(false)
  useEffect(() => {
  if (questions?.length == 0 && isStarted){
  fetch(`https://opentdb.com/api.php?amount=${questionCount}&category=${categoryID}&type=multiple`)
    .then((response) => response.json())
    .then((data) => setQuestions(data.results.map((questionData:QuestionsData) => ({
      question: questionData.question,
      correct_answer: questionData.correct_answer,
      incorrect_answers: questionData.incorrect_answers
    }))));
  }}, [questions])

  if (!isStarted){
    return (
      <>
      <div>
        <h1>Wybierz ilość pytań</h1>
      </div>
      <div>
        <Button onClick={() => {
          setQuestionCount(10)
        } } questionCount={10} disabled={questionCount !== 10}>10</Button>
      </div>
      <div>  
        <Button onClick={() => {
          setQuestionCount(15)
        } } questionCount={15} disabled={questionCount !== 15}>15</Button>
      </div>
      <div>  
        <Button onClick={() => {
          setQuestionCount(25)
        } } questionCount={25} disabled={questionCount !== 25}>25</Button>
    </div>
    <div className="start">
        
          <Button key={"start"} onClick={() => 
          setIsStarted(true)} disabled={questionCount === undefined? true : false}>
          start
          </Button> 
        </div>
    </>
    );
  }
  

  
}
// https://opentdb.com/api.php?amount=10&category=11




