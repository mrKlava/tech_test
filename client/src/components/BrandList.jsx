import { useEffect, useState } from "react"
import { httpRequest } from "../axios"

function BrandList() {
  const [brands, setBrands] = useState([])

  const getBrands = async () => {
    try {
      const resp = await httpRequest.get('/brands')

      setBrands(resp.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBrands()
  }, [])

  return (
    <div>
      <h1>All brands</h1>
    <ul>
      { 
        brands.map((brand, i) => {
          return (<li key={i}>
            <h5>Brand: {brand.name}</h5>
            <p><strong>Description</strong>: {brand.description}</p>
          </li>)
        })
      }
    </ul>
      </div>
  )
}

export default BrandList