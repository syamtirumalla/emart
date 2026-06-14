import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'
const Men = () => {
  const items = menData.slice(0, 5)
  return (
    <div className="category-section">
      <div className="proTitle">
        <h2>Men's Fashion</h2>
        <Link to="/men" className="proTitle-link">View all →</Link>
      </div>
      <div className="proSection">
        {items.map((item) => (
          <Link to="/men" key={item.id} className="custom-link">
            <div className="imgBox"><img className="proImage" src={item.image} alt={item.model} /></div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Men
