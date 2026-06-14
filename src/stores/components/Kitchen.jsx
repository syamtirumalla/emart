import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'
const Kitchen = () => {
  const items = kitchenData.slice(0, 5)
  return (
    <div className="category-section">
      <div className="proTitle">
        <h2>Kitchen</h2>
        <Link to="/kitchen" className="proTitle-link">View all →</Link>
      </div>
      <div className="proSection">
        {items.map((item) => (
          <Link to="/kitchen" key={item.id} className="custom-link">
            <div className="imgBox"><img className="proImage" src={item.image} alt={item.model} /></div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Kitchen
