import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import menu from '../Assets/menu.png'
import cancelled from '../Assets/cancelled.png'

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
        <ul className="nav-menu-items" onClick={showNavbar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
          <li>
            <Link to="/send">Send Money</Link>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar