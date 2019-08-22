import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
  render () {
     return(
       <nav>
         <h5>ReactJS Practise</h5>
         <ul class='nav-links'>
          <Link to='/' class='link'>
           <li><h6>Home</h6></li>
          </Link>
          <Link to='/About'  class='link'>
           <li><h6>About</h6></li>
          </Link>
          <Link to='/Shop'  class='link'>
           <li><h6>Shop</h6></li>
          </Link>
         </ul>
       </nav>
     )
  }
}

export default Nav;
