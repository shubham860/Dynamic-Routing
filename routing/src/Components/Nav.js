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
           <li >Home</li>
          </Link>
          <Link to='/About'  class='link'>
           <li>About</li>
          </Link>
          <Link to='/Shop'  class='link'>
           <li>Shop</li>
          </Link>
         </ul>
       </nav>
     )
  }
}

export default Nav;
