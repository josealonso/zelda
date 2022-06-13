import React from 'react'
import './navbar.scss'
import {Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar' id="navbar">
      <Link to="/">
        <h1 className='logo'>Our3.xyz</h1>
      </Link>
    </div>
  )
}

export default Navbar