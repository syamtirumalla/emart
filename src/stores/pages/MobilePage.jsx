import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])
  const uniqueBrands = [...new Set(mobileData.map(item => item.company))]

  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter(item => item !== brand))
    } else {
      setSelectedProduct([...selectedProduct, brand])
    }
  }

  const filteredProduct = selectedProduct.length === 0
    ? mobileData
    : mobileData.filter(item => selectedProduct.includes(item.company))

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
            <Link to={`/mobiles/${item.id}`} className="custom-link" key={item.id}>
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

export default MobilePage
