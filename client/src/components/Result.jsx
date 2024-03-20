import { useContext } from "react"
import { ResultContext } from "../resultContext"

function Result() {
  const { result } = useContext(ResultContext)
  return (
    <div>
      <h1>Result</h1>
      {
        result.map((brand, i) => {
          return (<li key={i}>
            <h5>Brand: {brand.name}</h5>
            <p><strong>Description</strong>: {brand.description}</p>
          </li>)
        })
      }
    </div>
  )
}

export default Result