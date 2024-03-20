import { brands } from "../data.js"


export const getBrand = (req, res) => {
  const target = req.body.q

  const data = getResult(brands, target)

  res.status(200).json(data)
}



export const getAllBrands = (req, res) => {
  res.status(200).json(brands)
}





/* Helper functions */

function getResult(brands, target) {
  const out = []

  for (let i = 0; i < brands.length; i++) {
    const name = brands[i].name
    const description = getMatch(brands[i].description, target)

    if (description.length !== brands[i].description.length) {
      out.push({name, description})
    }
  }

  return out
}

function getMatch(str, target) {
  const regex = new RegExp(".*" + target + ".*", "gi")

  const arr = str.split(" ")
  const out = []

  for (let i = 0; i < arr.length; i++) {
    if(regex.test(arr[i])) { 
      const s = `<strong>${arr[i]}</strong>`
      out.push(s)
    } else {
      out.push(arr[i])
    }
  }  

  return out.join(" ")
}