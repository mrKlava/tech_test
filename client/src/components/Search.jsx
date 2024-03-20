import { useContext, useState } from "react"
import { httpRequest } from "../axios"
import { ResultContext } from "../resultContext"


/* Interface for search
  uses context to store and update results
*/

function Search() {
  const { setResult, setPyResult } = useContext(ResultContext)
  const [ input, setInput ] = useState({q: ""})

  const handleChange = (e) => setInput({q: e.target.value})

  // if input is not empty fetch for search results
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (input.q.length) {
      try {
        const resp = await httpRequest.post("brands", input)
        const pyResp = await httpRequest.post("brands", input)
  
        setResult(resp.data)
        setPyResult(pyResp.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
  
  return (
    <div>
      <h1>Search</h1>
      <form>
        <input 
          name="search" 
          type="text" 
          onChange={handleChange}
          value={input.q} 
        />
        <input type="submit" value="submit" onClick={handleSubmit}/>
      </form>
    </div>
  )
}


export default Search