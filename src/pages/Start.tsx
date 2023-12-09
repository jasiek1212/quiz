import React, { useContext, useState } from "react"
import Button from "../Components/Button/Button"
import "./Start.css"
import QuizContext from "../QuizContext"
import { Link } from "react-router-dom";



const categoryNames = ['Genral knowledge', 'Music','Games']



export default function Start() {
  const {categoryID,setCategoryID} = useContext(QuizContext)
  return (
    <>
      <div className="quiz">
    
        <h1>Quiz</h1>
      
      </div>
      <div className="category">
        Wybierz kategorie
      </div>
      <div className="buttons flex flex-col content-center">
          <>
          {categoryNames.map((category, index) => 
            <div>
            <Button key={`${category}_${index}`} onClick={() => {
                setCategoryID(index)
              } } categoryID={index} disabled={categoryID !== index}>{category}</Button>
            </div>
          )}
        </>
      </div> 
      <div className="start">
      
        <Button key={"start"} onClick={() => null} disabled={categoryID === undefined? true : false}>
        {categoryID!==undefined? <Link to="/quiz">start</Link> : "start"}
        </Button> 
      </div>
    </>
  ) 
}
