import { createContext, useState } from "react";

export const ResultContext = createContext()

export const ResultContextProvider = ({children}) => {
  const [result, setResult] = useState([])


  const updateResult = (data) => setResult(data)

  return (
    <ResultContext.Provider value={
      {
        result
        , setResult
      }
    }>
      {children}
    </ResultContext.Provider>
  )
}