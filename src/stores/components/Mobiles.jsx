import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'

const Mobiles = () => {
  const items = mobileData.slice(0, 5)
  return (
    <div className="category-section">
      <div className="proTitle">
        <h2>Mobiles</h2>
        <Link to="/mobiles" className="proTitle-link">View all →</Link>
      </div>
      <div className="proSection">
        {items.map((item) => (
          <Link to="/mobiles" key={item.id} className="custom-link">
            <div className="imgBox">
              <img className="proImage" src={item.image} alt={item.model} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Mobiles
