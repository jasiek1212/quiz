import { createContext } from 'react';

const QuizContext = createContext<{
    categoryID:number|undefined
    setCategoryID:(id: number)=>void
}>({categoryID:undefined,setCategoryID:()=>{}});
export default QuizContext