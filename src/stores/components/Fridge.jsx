import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'
const Fridge = () => {
  const items = fridgeData.slice(0, 5)
  return (
    <div className="category-section">
      <div className="proTitle">
        <h2>Refrigerators</h2>
        <Link to="/fridge" className="proTitle-link">View all →</Link>
      </div>
      <div className="proSection">
        {items.map((item) => (
          <Link to="/fridge" key={item.id} className="custom-link">
            <div className="imgBox"><img className="proImage" src={item.image} alt={item.model} /></div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Fridge
