import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" onClick={() => setMenu("shop")} className="nav-logo">
          <img src="\src\Components\Assets\logo.png" alt="logo" />
          <span>CRAFTELLA</span>
        </Link>
      </div>

      <img
        onClick={dropdown_toggle}
        className="nav-dropdown"
        src={nav_dropdown}
        alt="dropdown"
      />

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">SHOP</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">PAINTINGS</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">HOME & LIVING</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">STATIONARY</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? (
          <button onClick={() => {
            localStorage.removeItem('auth-token');
            window.location.replace("/");
          }}>Logout</button>
        ) : (
          <Link to="/login"><button>Login</button></Link>
        )}

        <Link to="/cart" className="cart-icon">
          <img src={cart_icon} alt="cart" />
          <span className="nav-cart-count">{getTotalCartItems()}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
