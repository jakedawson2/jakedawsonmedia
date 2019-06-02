import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"



const Header = () => (
  <div>
  <header>
    <Link to="/" class="logo">Jake Dawson</Link>
  
    <nav>
      <ul>
        <li> <Link to = "/about">About</Link></li>
        <li> <Link to = "/about">Contact</Link></li>
        <li> <Link to = "/about">Contact</Link></li>
      </ul> 
    </nav>
  </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
