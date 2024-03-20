import { useContext, useState } from "react"
import { httpRequest } from "../axios"
import { ResultContext } from "../resultContext"

function Search() {
  const { setResult } = useContext(ResultContext)
  const [ input, setInput ] = useState({q: ""})

  const handleChange = (e) => setInput({q: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const resp = await httpRequest.post("brands", input)

      console.log(resp)
      setResult(resp.data)
    } catch (err) {
      console.log(err)
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