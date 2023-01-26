import React from 'react'
import "../style.css"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className = "header">
        <div className='redir'>
            <Link to="/login">
                <h1 className='title'>Login</h1>
            </Link>
            <Link to="/register">
                <h1 className='title'>Register</h1>
            </Link>
            <Link to="/">
                <h1 className='title'>Home</h1>
            </Link>
        </div>
    </div>
  )
}

export default Header