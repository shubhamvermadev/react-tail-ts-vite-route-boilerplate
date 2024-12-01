import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  return (
    <div>
      <ul>
        <li><Link className='text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out' to="/auth/login">Login</Link></li>
        <li><Link className='text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out' to="/auth/signup">Signup</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default PublicRoute