import { useContext } from "react"
import { ResultContext } from "../resultContext"
import BrandList from "./BrandList"

/* Renders list of result brands */

function Result() {
  const { result, pyResult } = useContext(ResultContext)
  return (
    <div>
      <h1>Node Result</h1>
      <BrandList list={result}/>
      
      <h1>Python Result</h1>
      <BrandList list={pyResult}/>
    </div>
  )
}

export default Result