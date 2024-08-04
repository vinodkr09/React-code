import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav >
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="active" className="nav-link"> Home </NavLink>
            </li>
            <li>
                <NavLink exact to="/page" activeClassName="active" className="nav-link"> page </NavLink>
            </li>
            <li>
                <NavLink exact to="/contact" activeClassName="active" className="nav-link"> Contact </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation