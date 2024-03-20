import { useEffect, useState } from "react"
import { httpRequest } from "./axios"
import { BrandList, Result, Search } from "./components"


/* Will get all Brands and list them in Brand List */

function App() {
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
    <div className="App">
      <Search />
      <Result />
      <BrandList list={brands} title="Brand list"/>
    </div>
  );
}

export default App;
