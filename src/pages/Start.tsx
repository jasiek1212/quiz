import React, { useContext, useState, useEffect } from "react"
import Button from "../Components/Button/Button"
import "./Start.css"
import QuizContext from "../QuizContext"
import { Link } from "react-router-dom";



const categoriesUrl = "https://opentdb.com/api_category.php"
type CategoryData = {
  id: number
  name: string
}



export default function Start() {
  const {categoryID,setCategoryID} = useContext(QuizContext)
  const [categoryNames, setData] = useState<CategoryData[]>([]);
  useEffect(() => {
  if (categoryNames?.length == 0){
  fetch("https://opentdb.com/api_category.php")
    .then((response) => response.json())
    .then((data) => setData(data.trivia_categories.map((category:CategoryData) => ({
      name: category.name,
      id: category.id
    }))));
  }}, [categoryNames])

  if (categoryNames.length === 0){
    return <div>Loading...</div> 
  }
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
          {categoryNames.map((category) => 
            <div>
            <Button key={`${category.name}_${category.id}`} onClick={() => {
                setCategoryID(category.id)
              } } categoryID={category.id} disabled={categoryID !== category.id}>{category.name}</Button>
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
