import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
    <Link to="/">home</Link>
    <Link to="/Login">Login</Link>
    <Link to="/Register">Register</Link>
    </div>
  )
}
export default Navbar