import { useContext } from "react"
import { ResultContext } from "../resultContext"
import BrandList from "./BrandList"

/* Renders list of result brands */

function Result() {
  const { result } = useContext(ResultContext)
  return (
    <div>
      <h1>Result</h1>
      <BrandList list={result}/>
    </div>
  )
}

export default Result