import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const{count}=useContext(AppContext)
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white">
      <h1 className="text-xl font-bold">My Shop</h1>

      <div>
        Cart : ({count})
      </div>
    </div>
  )
}

export default Navbar
