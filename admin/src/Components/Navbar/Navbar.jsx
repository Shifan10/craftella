import React from 'react'
import './Navbar.css'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-text'>
        <span className='shopper-title'>CRAFTELLA</span>
        <span className='admin-subtitle'>Admin Panel</span>
      </div>
      <img src={navprofileIcon} className='nav-profile' alt="Profile" />
    </div>
  )
}

export default Navbar
