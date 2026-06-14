import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
const AC = () => {
  const items = acData.slice(0, 5)
  return (
    <div className="category-section">
      <div className="proTitle">
        <h2>Air Conditioners</h2>
        <Link to="/ac" className="proTitle-link">View all →</Link>
      </div>
      <div className="proSection">
        {items.map((item) => (
          <Link to="/ac" key={item.id} className="custom-link">
            <div className="imgBox"><img className="proImage" src={item.image} alt={item.model} /></div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default AC
