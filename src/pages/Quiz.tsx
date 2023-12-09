import Button from "../Components/Button/Button";
import QuizContext from "../QuizContext";
import React, {useContext, useState, useEffect} from "react"
import { Link } from "react-router-dom"

export default function Quiz() {
  const {categoryID}= useContext(QuizContext)
  const {questionCount,setQuestionCount} = useContext(QuizContext)

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
      
        <Button key={"start"} onClick={() => null} disabled={questionCount === undefined? true : false}>
        {questionCount!==undefined? <Link to="/quiz">start</Link> : "start"}
        </Button> 
      </div>
  </>
  );
}
// https://opentdb.com/api.php?amount=10&category=11




