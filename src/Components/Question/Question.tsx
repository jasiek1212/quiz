

interface QuestionPageProps {
    question: string
    correct_answer: string
    incorrect_answers: string[]
    question_no: number
}

const QuestionPage = ({question,correct_answer,incorrect_answers,question_no}:QuestionPageProps) => {
    return (
      <>
        <div>Pytanie {question_no}</div>
        <div>{question}</div>
        <div className="buttons flex flex-col content-center">
          <>
          {incorrect_answers.map((category) => 
            <div>
            <Button key={`${category.name}_${category.id}`} onClick={() => {
                setCategoryID(category.id)
              } } categoryID={category.id} disabled={categoryID !== category.id}>{category.name}</Button>
            </div>
          )}
        </>
      </div> 
      
      
      
      
      </>
    )
  }
  export default QuestionPage;