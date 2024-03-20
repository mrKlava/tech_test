import {httpRequest} from "../axios.js"


/* Makes call to flask application to get all brands */

export const getAllBrands = async (req, res) => {
  try {
    const resp = await httpRequest.get('/brands')

    res.status(200).json(resp.data)
  } catch (err) {
    res.status(500)
  }
}


/* Makes call to flask application to get all brands which matches the search query */

export const getBrand = async (req, res) => {
  try {
    const resp = await httpRequest.post('/brands/search', req.body)

    res.status(200).json(resp.data)
  } catch (err) {
    res.status(500)
  }
}