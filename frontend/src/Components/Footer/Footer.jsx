import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo_big.png'
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>CRAFTELLA</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="social-icons">
      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="icon instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="icon whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a
        href="https://pinterest.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="icon pinterest"
      >
        <i className="fab fa-pinterest"></i>
      </a>
    </div>
      </div>
      <div className="footer-copyright">
        <hr />
      </div>
    </div>
  )
}

export default Footer
