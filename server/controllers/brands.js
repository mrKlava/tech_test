import { brands } from "../data.js"


/* GET request: Will return json []: {name, description} off all brands */

export const getAllBrands = (req, res) => {
  res.status(200).json(brands)
}


/* POST request: Will return json []: {name, description} which includes searched substring */

export const getBrand = (req, res) => {
  // retrieve query from request body 
  const target = req.body.q

  // get array of matching brands
  const data = getResult(brands, target)

  // send array in json
  res.status(200).json(data)
}



/* Helper functions */


/** Creates array of brands which contains searched substring
 * 
 * @param {[]: {name: str, description: str}} brands - array to search
 * @param {str} target - substring to search
 * @returns {[]: {name: str, description: str}} - returns array with matched results
 */
function getResult(brands, target) {
  // array with result
  const out = []

  // loop trough original array and get check the description
  for (let i = 0; i < brands.length; i++) {
    // check description will return updated or original description
    const description = getMatch(brands[i].description, target)
    
    // if updated is longer than original then we have match and we add the brand to array
    if (description.length !== brands[i].description.length) {
      const name = brands[i].name

      out.push({name, description})
    }
  }

  // return new array
  return out
}

/** Searches for matches in description and if there is a match than update description
 * 
 * @param {str} str - description in which we will search match
 * @param {str} target - string for regex base
 * @returns {str} - return new or old description
 */
function getMatch(str, target) {
  // create regex
  const regex = new RegExp(".*" + target + ".*", "gi")

  // split description to word array
  const arr = str.split(" ")
  // create temp array to store checked words
  const out = []

  // loop to all wards and search for a match
  for (let i = 0; i < arr.length; i++) {
    // if word is matching than surround it with strong tag and to out array
    if(regex.test(arr[i])) { 
      const s = `<strong>${arr[i]}</strong>`
      out.push(s)
    } else {
      // add original word
      out.push(arr[i])
    }
  }  

  // concatenate all words with space and return new description
  return out.join(" ")
}