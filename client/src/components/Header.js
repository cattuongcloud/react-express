import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul className="nav">
        <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/roster'>Roster</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
