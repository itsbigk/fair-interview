import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/nav.scss'

const linkStyle = {
  color: '#FF5A00',
  fontFamily: 'helvetica',
  fontWeight: 'bold',
  textDecoration: 'none'
}

const Nav = () => (
  <div className='nav'>
    <div className='nav-inner'>
      <Link to='/' style={linkStyle}>fair</Link>
    </div>
  </div>
)

export default Nav
