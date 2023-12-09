import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Start from "./pages/Start";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import QuizContext from "./QuizContext";import { useState } from "react";
"./QuizContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/results",
    element: <Results />,
  },
]);

function App() {

  const [categoryID,setCategoryID] = useState<number|undefined>()
  return (
    <QuizContext.Provider value={{categoryID, setCategoryID}}>

        <RouterProvider router={router} />

    </QuizContext.Provider>


  )
}

export default App;
