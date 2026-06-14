import React, { useState } from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const AcPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])
  const uniqueBrands = [...new Set(acData.map(item => item.company))]

  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter(item => item !== brand))
    } else {
      setSelectedProduct([...selectedProduct, brand])
    }
  }

  const filteredProduct = selectedProduct.length === 0
    ? acData
    : acData.filter(item => selectedProduct.includes(item.company))

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          <h3>Filter by Brand</h3>
          <div className="pro-input">
            {uniqueBrands.map((brand) => (
              <label key={brand}>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(brand)}
                  onChange={() => companyHandler(brand)}
                />
                {brand}
              </label>
            ))}
          </div>
          {selectedProduct.length > 0 && (
            <button className="clear-filter" onClick={() => setSelectedProduct([])}>
              Clear filters
            </button>
          )}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => (
            <Link to={`/ac/${item.id}`} className="custom-link" key={item.id}>
              <div className="pageImg">
                <img src={item.image} alt={item.model} />
                <div className="pageImg-info">
                  <span className="pageImg-brand">{item.company}</span>
                  <span className="pageImg-model">{item.model}</span>
                  <span className="pageImg-price">${item.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default AcPage
