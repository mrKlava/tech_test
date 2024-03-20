import { createContext, useState } from "react";

/* Context for storing search results 

results[{name: str, description: str}]
setResult([{name: str, description: str}])   

Need to wrap context around components where it will be used
*/


export const ResultContext = createContext()

export const ResultContextProvider = ({children}) => {
  const [result, setResult] = useState([])

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