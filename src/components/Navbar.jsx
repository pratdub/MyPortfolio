import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex space-x-4 font-bold justify-center backdrop-blur-lg bg-opacity-30 bg-red-600">

        <NavLink to="/" className={({isActive})=>`${isActive ? "text-white" : "text-black"}`}>Home</NavLink>

        <NavLink to="/about" className={({isActive})=>`${isActive ? "text-white" : "text-black"}`}>About</NavLink>

        <NavLink to="/projects" className={({isActive})=>`${isActive ? "text-white" : "text-black"}`}>Projects</NavLink>

        <NavLink to="/contact" className={({isActive})=>`${isActive ? "text-white" : "text-black"}`}>Contact</NavLink>

    </div>
  )
}

export default Navbar