import { useEffect, useState } from "react"
import { httpRequest } from "./axios"
import { BrandList, Result, Search } from "./components"


/* Will get all Brands and list them in Brand List */

function App() {
  const [brands, setBrands] = useState([])
  const [pyBrands, setPyBrands] = useState([])

  // gets all brands for node and python
  const getBrands = async () => {
    try {
      const resp = await httpRequest.get('/brands')
      const pyResp = await httpRequest.get('/py/brands')

      setBrands(resp.data)
      setPyBrands(pyResp.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBrands()
  }, [])

  return (
    <div className="App">
      <Search />
      <Result />
      <BrandList list={brands} title="Brand list (Client => Node => Client)"/>
      <BrandList list={pyBrands} title="Brand list (Client => Node => Python => Node => Client)"/>
    </div>
  );
}

export default App