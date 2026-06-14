import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'
const Woman = () => {
  const items = womanData.slice(0, 5)
  return (
    <div className="category-section">
      <div className="proTitle">
        <h2>Women's Fashion</h2>
        <Link to="/woman" className="proTitle-link">View all →</Link>
      </div>
      <div className="proSection">
        {items.map((item) => (
          <Link to="/woman" key={item.id} className="custom-link">
            <div className="imgBox"><img className="proImage" src={item.image} alt={item.model} /></div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Woman
