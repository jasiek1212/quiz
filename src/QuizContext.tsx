import { createContext } from 'react';

const QuizContext = createContext<{
    categoryID:number|undefined
    setCategoryID:(id: number)=>void
    questionCount:number|undefined
    setQuestionCount:(questionNumber: number)=>void
}>({categoryID:undefined,setCategoryID:()=>{},questionCount:undefined,setQuestionCount:()=>{}});
export default QuizContext