import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'
const Watch = () => {
  const items = watchData.slice(0, 5)
  return (
    <div className="category-section">
      <div className="proTitle">
        <h2>Watches</h2>
        <Link to="/watch" className="proTitle-link">View all →</Link>
      </div>
      <div className="proSection">
        {items.map((item) => (
          <Link to="/watch" key={item.id} className="custom-link">
            <div className="imgBox"><img className="proImage" src={item.image} alt={item.model} /></div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Watch
