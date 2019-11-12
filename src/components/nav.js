import React from 'react'

import { NavLink } from 'react-router-dom'



const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-light" href="#">Reginald Johnson Jr</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact={true} className="nav-link text-light" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact={true} className="nav-link text-light" to="/resume">Resume</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact={true} className="nav-link text-light" to="/project">Projects</NavLink>
          </li>

          <li className="nav-item">
            <NavLink exact={true} className="nav-link text-light" to="/contact">Contact</NavLink>
          </li>


        </ul>
      </div>
    </nav>
  )
}

export default Nav;