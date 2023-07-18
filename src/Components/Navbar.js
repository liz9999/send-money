import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import menu from '../Assets/menu.png'
import cancelled from '../Assets/cancelled.png'
import { FaListAlt } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { CiMoneyBill } from 'react-icons/ci'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => {
    if (width < 1712) {
      setNavbar(!navbar)
    }
  }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <a className={navbar ? "menu-bars toggle" : "menu-bars"} href="#">
          <img onClick={showNavbar} src={menu}/>
        </a>
      </div>
      <div className={navbar ? "sidebar-toggle-in" : "sidebar-toggle-out"} onClick={showNavbar}>
        <a className="navbar-close" href="#">
          <img onClick={showNavbar} src={cancelled} />
        </a>
      </div>
      <div className={navbar ? "nav-menu active" : "nav-menu"}>
        <img className="navbar-header" src={logo} />
        <ul className="nav-menu-items" onClick={showNavbar}>
          <li>
            <AiOutlineHome /> 
            <Link to="/">Home</Link>
          </li>
          <li>
            <FaListAlt /> 
            <Link to="/transactions">Transactions</Link>
          </li>
          <li>
            <CiMoneyBill /> 
            <Link to="/send">Send Money</Link>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar