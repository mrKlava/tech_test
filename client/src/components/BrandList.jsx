import { BrandListItem } from "./"

/* Renders list of provided Brands, can set up custom title */

function BrandList({ list, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        { list.map((brand, i) => <BrandListItem key={i} brand={brand} />) }
      </ul>
    </div>
  )
}

export default BrandList