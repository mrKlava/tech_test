import Search from "../classes/Search.js"
import { brands } from "../data.js"


/* GET request: Will return json []: {name, description} off all brands */

export const getAllBrands = (req, res) => {
  res.status(200).json(brands)
}


/* POST request: Will return json []: {name, description} which includes searched substring */

export const getBrand = (req, res) => {
  // retrieve query from request body 
  const target = req.body.q

  // create search instance
  const search = new Search(target)

  // !!! Will return sequenced highlighting which can include 1 word which was not is search query
  const data = search.getResults(brands)

  // send array in json
  res.status(200).json(data)
}