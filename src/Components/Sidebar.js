import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar() {
  return (
        <div className='col-md-2 sidebar menu'>
          <ul>
            <li><i class="fa fa-home"></i> <Link to="/">Home</Link></li>
            <li> <Link to="register">Register</Link>    </li>
            <li><Link to ="/List">List</Link></li>
          </ul>
        </div>
  )
}
