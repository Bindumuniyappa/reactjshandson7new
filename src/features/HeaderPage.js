import React from 'react'
import {Link} from 'react-router-dom'
import RoutingPage from '../component/RoutingPage'

const HeaderPage= () => {
  return (
    <div className='bodyBackground'>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/student">Students</Link>
          </li>
          <li>
            <Link to="/contactPage">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <RoutingPage/>
    </div>
    
  )
}

export default HeaderPage