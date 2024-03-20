import { createContext, useState } from "react";

/* Context for storing search results 

* uses just node.js
results[{name: str, description: str}]
setResult([{name: str, description: str}])   

* makes call to node.js it will make call python flask server and send back the result to node.js and back to client
pyResults[{name: str, description: str}]
setPyResult([{name: str, description: str}])   

Need to wrap context around components where it will be used
*/


export const ResultContext = createContext()

export const ResultContextProvider = ({children}) => {
  const [result, setResult] = useState([])
  const [pyResult, setPyResult] = useState([])


  return (
    <ResultContext.Provider value={
      {
        result
        , pyResult
        , setResult
        , setPyResult
      }
    }>
      {children}
    </ResultContext.Provider>
  )
}