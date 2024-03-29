import React from 'react'
import './Navbar.css'
import {NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">{/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
       
        <li className="nav-item">
          <NavLink className="nav-link " to="/products" tabIndex={-1} aria-disabled="true">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/cart" tabIndex={-1} aria-disabled="true">Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin"tabIndex={-1} aria-disabled="true">Signin</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link " to="/register" tabIndex={-1} aria-disabled="true">Sign Up</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

   </>
  )
}
