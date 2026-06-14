import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'
const Furniture = () => {
  const items = furnitureData.slice(0, 5)
  return (
    <div className="category-section">
      <div className="proTitle">
        <h2>Furniture</h2>
        <Link to="/furniture" className="proTitle-link">View all →</Link>
      </div>
      <div className="proSection">
        {items.map((item) => (
          <Link to="/furniture" key={item.id} className="custom-link">
            <div className="imgBox"><img className="proImage" src={item.image} alt={item.model} /></div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Furniture
