import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 
    flex justify-between items-center px-10 shadow-lg">

      {/* Logo */}
      <div className="text-white text-2xl font-bold tracking-wide">
        ⚡ ReactApp
      </div>

      {/* Menu */}
      <div className="flex gap-8 text-white font-medium">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition duration-300 
            ${isActive 
              ? "bg-white text-indigo-600 shadow-md" 
              : "hover:bg-white/20"}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/assignment"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition duration-300 
            ${isActive 
              ? "bg-white text-indigo-600 shadow-md" 
              : "hover:bg-white/20"}`
          }
        >
          React Assignment
        </NavLink>

      </div>
    </div>
  )
}

export default Navbar