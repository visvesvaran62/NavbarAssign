import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Product = () => {
     const{addToCart}=useContext(AppContext)
  return (
   
  <>
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold">Product 1</h2>

      <button
        onClick={addToCart}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Add to Cart
      </button>
    </div>

  </>
  )
}

export default Product
