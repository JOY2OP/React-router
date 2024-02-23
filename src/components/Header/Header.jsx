import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <Link to='/' >HOME</Link>      {/*Link and Navlink from React-router*/}
        <ul>
          <li>
           <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/user'>User</NavLink>
          </li>
          <li>
            <NavLink to='/github'>Github</NavLink>
          </li>
        </ul>
        
      </nav>
    </div>
  )
}

export default Header