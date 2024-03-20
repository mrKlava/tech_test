/* Returns li for Brand List 
  !!! uses dangerouslySetInnerHTML - need to handle string manually or use parser lib
*/

function BrandListItem({brand}) {
  const description = <span dangerouslySetInnerHTML={{__html: brand.description}} />

  return (
    <li>
      <h4>Brand: {brand.name}</h4>
      <p><strong className="head">Description</strong>: {description}</p>
    </li>
  )
}

export default BrandListItem